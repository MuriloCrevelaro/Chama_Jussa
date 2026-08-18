import { StatusBar } from 'expo-status-bar';
import { Login } from './components/login/Login';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <TaskProvider> */}
          <View>
            <Login />
            <StatusBar style="auto" />
          </View>
        {/* </TaskProvider> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
