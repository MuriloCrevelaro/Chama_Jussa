import { StatusBar } from 'expo-status-bar';
import { Login } from './components/login/Login';
import { Text, View } from 'react-native';
import { Lista } from './components/OSlist/List';
import { Styles  } from './Styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.safeArea}>
          <View style={Styles.container}>
            {/* <Login /> */}
            <Lista />
            <StatusBar style="auto" />
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
