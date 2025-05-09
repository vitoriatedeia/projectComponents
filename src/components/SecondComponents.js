import { Text, View } from "react-native";

export const FirstComponent = () => {
  return (
    <View>
      <Text>Meu primeiro componente</Text>
    </View>
  );
};

function SecondComponent() {
  return <Text>Segundo Componente</Text>;
}

const Testing1 = () => {
  return (
    <View>
      <Text>Terceiro Componente</Text>
    </View>
  );
};

export default {
  SecondComponent,
  Testing1,
};
