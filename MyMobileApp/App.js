import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Text, Divider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineLarge">Headline Large</Text>
        <Divider />
        <Text variant="bodyMedium" style={styles.body}>
          Video provides a powerful way to help you prove your point. 
          To make your document look professionally produced, 
          Word Themes and styles also help keep your document coordinated. 
          Save time in Word with new buttons that show up where you need them. 
          Reading is easier, too, in the new Reading view.
        </Text>
        <StatusBar style="auto" />
      </View>
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
