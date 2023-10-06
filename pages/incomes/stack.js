import Incomes from "./index";
import IncomesCrud from "./crud";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function IncomesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entradas" component={Incomes} />
      <Stack.Screen name="Entradas - Cadastro" component={IncomesCrud} />
    </Stack.Navigator>
  );
}
