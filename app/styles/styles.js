import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    weatherScreenContainer: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        paddingBottom: 20
    },
    loaderContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#e0e0e0'
    },
    headerViewContainer: {
        backgroundColor: '#b00c32',
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
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: '#c9b7bc',
        borderRadius: 15,
        margin: 10
    },
    dateText: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#570115',
        fontWeight: 'bold'
    },
    weatherContainer: {
        flexDirection: 'column',
    },
    tempText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#800320'
    },
    weatherText: {
        fontSize: 10,
        color: '#800320',
        alignSelf: 'center'
    },
    errorContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#e0e0e0'
    },
    errorMessage: {
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#570115',
        fontWeight: 'bold'
    },
    reloadButton: {
        padding: 20
    },
    reloadButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#800320'
    }
})