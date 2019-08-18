import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, StatusBar } from 'react-native';
import ArticleList from './Components/articleList'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoading: true,
      articleList: [],
      page: 1,
      isRefreshed: false,
      isEnded: false,
    }
  }

  async getAndUpdateNews(pageNumber) {
    // The API just only have 2 pages so we don't need to waste time to update
    if (pageNumber > 2) {
      this.setState({
        isEnded: true,
        isRefreshed: true,
      })
      console.log("All out");
      return;
    }

    // API info => should be hidden
    const apiKey = '67fb974cab0e46e8aa6e9561cde98f94';
    const API =
      'https://newsapi.org/v2/top-headlines?country=' + 'us' + `&apiKey=${apiKey}&page=${pageNumber}`;
    console.log(API);

    try {
      let res = await fetch(API);
      let jsonData = await res.json();

      if (jsonData.status === "ok") {
        let updateList = [...this.state.articleList, ...jsonData.articles];
        let newPage = this.state.page + 1;
        this.setState({
          articleList: updateList,
          onLoading: false,
          page: newPage,
          isRefreshed: false,
        })
      }
    }
    catch{
      console.log(error);
    }

  }

  refreshNews = async () => {
    this.setState({
      onLoading: true,
      articleList: [],
      page: 1,
      isRefreshed: false,
      isEnded: false,
    })
    await this.getAndUpdateNews(1);
  }

  async componentDidMount() {
    try {
      await this.getAndUpdateNews(this.state.page);
    }
    catch{
      console.log(error);
    }
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (this.state.onLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color='#0000ff' animating={this.state.onLoading} />
          <Text>Please wait...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ArticleList
          data={this.state.articleList}
          isEnded={this.state.isEnded}
          isRefreshed={this.state.isRefreshed}
          updateNews={() => this.getAndUpdateNews(this.state.page)}
          refreshNews={this.refreshNews} />
        {this.state.isEnded &&
          <Text style={{ color: 'grey', fontStyle: 'italic' }}>
            All out of articles
            </Text>
        }
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});
