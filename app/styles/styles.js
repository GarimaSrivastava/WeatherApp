import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tempHeader: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 40,
        padding: 20,
        paddingBottom: 0
    },
    cityHeader: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 40,
        
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