import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function showStatus(props) {
    return (
        <View style={styles.status}>
            <Text style={styles.resultLabel}>Result</Text>
            <Text style={styles.result}>{props.res}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    status: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultLabel: {
        
    },
    result: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    }
});

export default showStatus;