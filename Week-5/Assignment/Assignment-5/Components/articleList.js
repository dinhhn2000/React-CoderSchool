import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Article from './article'

export default class articleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: this.props.data,
            isEnded: this.props.isEnded,
            isRefreshing: false,
        }
    }

    render() {
        updateState = () => {
            this.setState({
                articles: this.props.data,
                isEnded: this.props.isEnded,
                isRefreshing: false,
            })
        }

        loadMore = async () => {
            await this.props.updateNews();
            await updateState();
        }

        refreshArticles = async () => {
            await this.props.refreshNews();
            await updateState();
        }

        renderFooterLoading = () => {
            if (!this.state.isEnded)
                return (
                    <ActivityIndicator size='large' color='#0000ff'
                        animating={true} />
                )
            else
                return null
        }
        return (
            <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article data={item} />}
                keyExtractor={item => item.title}
                onRefresh={refreshArticles}
                refreshing={this.state.isRefreshing}
                onEndReached={loadMore}
                onEndReachedThreshold={0.2}
                ListFooterComponent={renderFooterLoading}
            />
        );
    }
}