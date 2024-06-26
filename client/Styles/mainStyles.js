import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeText:  {
        fontSize: 30,
        color: 'black',
        fontWeight: '700',
    },
    innerText: {
        color: '#F4CE14',
        fontStyle: 'italic'
    },
    btnProceed: {
        height: 50,
        width: 270,
        backgroundColor: "#DDDDDD",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        elevation: 3,
    },
    txtProceed: {
        fontSize: 17,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    gifContainer: {
        height: 300,
        aspectRatio: 1,
    },

    
})

export default mainStyles;