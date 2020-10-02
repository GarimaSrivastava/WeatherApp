import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    headerViewContainer: {
        backgroundColor: '#567ebf',
        padding: 20,
        margin: 10,
        marginTop: 20,
        borderRadius: 15
    },
    tempHeader: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 50,
        padding: 10,
        paddingBottom: 0,
        color: '#d5dff0'
    },
    cityHeader: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        color: '#d5dff0'
    },
    dateHeader: {
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#d5dff0'
    },
    weatherList: {
       padding: 10
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
    },
    dateText: {
        fontSize: 14,
        alignSelf: 'center'
    },
    tempText: {
        fontSize: 14,
    }
})