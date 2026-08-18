import { Text, TouchableOpacity, View } from "react-native"
import { HeaderStyles } from "./HeaderStyles"

export const Header = () => {
    return (
        <View style={HeaderStyles.container}>
            <View >
                <Text style={HeaderStyles.nome}> Olá, Kelli</Text>
                <Text style={HeaderStyles.OS}> Minhas OS</Text>
            </View>
            <View>
                <TouchableOpacity style={HeaderStyles.button}>
                     Nova OS 
                </TouchableOpacity>
            </View>
        </View>

    )
}