import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ItemStyles } from "./ItemStyles";


export const Item = ({ numero, status, titulo, descricao }) => {

    // Evita o erro caso o componente seja chamado
    // sem receber uma OS.
    // if (numero) {
    //     return null;
    // }
    console.log(numero);
    

    return (
        <View style={ItemStyles.conteiner}>
            <View >
                <TouchableOpacity style={ItemStyles.card}>
                    <View style={ItemStyles.cardHeader}>
                        <Text style={ItemStyles.numero}>
                            OS - {numero}
                        </Text>
                        <View style={ItemStyles.status}>
                            <Text style={ItemStyles.statusText}>
                                {status}
                            </Text>
                        </View>
                    </View>
                    <Text style={ItemStyles.titulo}>
                        {titulo}
                    </Text>
                    <Text
                        style={ItemStyles.descricao}
                        numberOfLines={3}
                    >
                        {descricao}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};