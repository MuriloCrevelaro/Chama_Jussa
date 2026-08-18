import { Image, Text, TextInput, View } from 'react-native';
import { loginStyles } from './Style'

export const Login =() => {
  return (
    <View style={loginStyles.container}>
      <Image source={require('./assets/logo.png')} />
      <View style={loginStyles.container2}>
        <Text>Chama Jussa</Text>
        <Text style={loginStyles.subTytle}>Gerenciamento de Ordens de Serviço</Text>
        <View>
          <Text> E-mail</Text>
          <TextInput
            style={loginStyles.TextInput}
            placeholder='email@email.com'
          />
        </View>
        <View>
          <Text> Senha </Text>
          <TextInput
            style={loginStyles.TextInput}
            placeholder='Digite sua senha'
          />
        </View>
      </View>
    </View>
  );
}
