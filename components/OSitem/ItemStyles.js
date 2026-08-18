import { StyleSheet } from "react-native";

export const ItemStyles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        margin: 12,

        // sombra Android
        elevation: 3,

        // sombra iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },

    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },

    numero: {
        color: "#0066ff",
        fontSize: 16,
        fontWeight: "bold",
    },

    status: {
        backgroundColor: "#dbeafe",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },

    statusText: {
        color: "#1677ff",
        fontSize: 12,
    },

    titulo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 5,
    },

    descricao: {
        fontSize: 13,
        color: "#777",
        lineHeight: 17,
    },
    conteiner: {
        flex:1 ,
        alignItems: "center",
        justifyContent: "space-between"
    }
});