import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function showBtn(props) {
    return (
        <View style={styles.btnWrapper}>
            {
                props.data.map(items => {
                    return (
                        <TouchableOpacity key={items.name} style={styles.optionBtn}
                            onPress={() => props.onPressOptions(items)}>
                            <Text style={{ color: 'white', fontSize: 16 }}>{items.name}</Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    );
}
const styles = StyleSheet.create({
    btnWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    optionBtn: {
        backgroundColor: '#7B353C',
        width: 200,
        height: 40,
        marginBottom: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default showBtn;