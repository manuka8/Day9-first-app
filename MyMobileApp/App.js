import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { Provider as PaperProvider, Text, Divider } from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context'
import Home from './components/Home';

export default function App() {
  return (
    <PaperProvider>
        <SafeAreaView>
            <ScrollView>
                <Home/>
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  body: {
    textAlign: 'center',
  },
});
