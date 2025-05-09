import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";

// IMPORT STYLES
import { styles } from "./src/styles/Styles";

// IMPORT COMPONENT
import { FirstComponent } from "./src/components/SecondComponents";
import Components from "./src/components/SecondComponents";

export default function App() {
  return (
    <FatherComponent>
      <Text>Componente Filho</Text>
      <Button title="Button Componente Filho"></Button>
    </FatherComponent>
  );
}

function FatherComponent({ children }) {
  return (
    <View style={styles.container}>
      <Text>Texto do Componente Pai</Text>
      {children}
    </View>
  );
}
