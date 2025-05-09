import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// IMPORT STYLES
import { styles } from "./src/styles/Styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FirstComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const FirstComponent = () => {
  return (
    <View>
      <Text>Meu primeiro componente</Text>
    </View>
  );
};
