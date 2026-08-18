import { Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { loginStyles } from './LoginStyle'

export const Login =() => {
  return (
    <View style={loginStyles.container}>
      <Image source={require('../../assets/logo.png')} />
      <View style={loginStyles.container2}>
        <View style={loginStyles.container4}>
          <Text style={loginStyles.title}>Chama Jussa</Text>
          <Text style={loginStyles.subTytle}>Gerenciamento de Ordens de Serviço</Text>
        </View>
        <View style={loginStyles.container3}>
          <Text> E-mail</Text>
          <TextInput
            style={loginStyles.TextInput}
            placeholder='email@email.com'
          />
        </View>
        <View style={loginStyles.container3}>
          <Text> Senha </Text>
          <TextInput
            style={loginStyles.TextInput}
            placeholder='Digite sua senha'
          />
        </View>
        <TouchableOpacity style={loginStyles.button}> Acessar ao sistema </TouchableOpacity>
      </View>
    </View>
  );
}
