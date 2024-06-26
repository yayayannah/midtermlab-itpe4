import { StyleSheet } from "react-native";

const moviesStyles = StyleSheet.create({
    container: {
        flexDirection: '',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 5,
    },
    movieDetails: {
        height: 'auto',
        width: '90%',
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        elevation: 5,
        borderColor: 'gray',
        borderWidth: 1,
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 5,
        color: '#F4CE14',
    },
    movieSubs: {
       fontWeight:  '500',
       marginLeft: 15
    },
    btnProceed: {
        height: 50,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        elevation: 3,
        margin: 3,
    },
    btnAddColor: {
        backgroundColor: '#06D001',
        height: 50,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        elevation: 3,
        margin: 3,
    },
    btnEditColor: {
        backgroundColor: '#1679AB',
        height: 50,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        elevation: 3,
        margin: 3,
    },
    btnDeleteColor: {
        backgroundColor: '#C80036',
        height: 50,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        elevation: 3,
        margin: 3,
    },
    txtProceed: {
        fontSize: 13,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#ffff'
    },
    gifContainer: {
        height: 300,
        aspectRatio: 1,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    btnAdd: {},
    btnEdit: {},
    btnDelete: {},
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    btnCloseModal: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },

})

export default moviesStyles;