import { Dimensions, StyleSheet } from "react-native";
import Fonts from "../../Themes/Fonts";
const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    headerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        padding: 10,
    },
    headerBackgroundImage: {
        position: 'absolute'
    },
    flatListContainer: {
        marginTop: 50,
        paddingHorizontal: 8,
        width: '100%'
    },
    headerBack: {
        width: 25,
        height: 25
    },
    headerSearchIcon: {
        width: 25,
        height: 25
    },
    headerTitle: {
        width: '80%',
        marginStart: 12,
        height: 45,
        textAlignVertical: 'center',
        fontSize: 16,
        color: '#fff',
        fontFamily: Fonts.Bold
    },
    headerSearch: {
        width: '80%',
        marginStart: 12,
        height: 45,
        backgroundColor: '#fff',
        textAlignVertical: 'center',
        color: '#000',
        fontFamily: Fonts.SemiBold
    },
    flatListItem: {
        width: '33.33%',
        marginTop: 15,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        // borderColor: 'red',
        // borderWidth: 1
    },
    flatListItemImage: {
        width: '95%',
        height: width / 2
    },
    flatListTitle: {
        marginTop: 5,
        color: '#fff',
        width: '100%',
        fontFamily: Fonts.Light
    }

});
