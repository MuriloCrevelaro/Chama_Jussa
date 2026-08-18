import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({
    nome: {
        fontSize: '20px'
    },
    OS: {
        fontWeight: "bold",
        fontSize: '24px'

    },
    button: {
        backgroundColor:'#006FFF',
        borderRadius: 5,
        fontWeight: "bold",
        fontFamily:'Montserrat, sans-serif',
        fontSize: '12px',
        color: '#fff',
        padding: 10
    },
    container: {
        width:"92%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        margin: 10
    }
})