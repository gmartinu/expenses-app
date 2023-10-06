import Expenses from "./index";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function ExpensesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Despesas" component={Expenses} />
    </Stack.Navigator>
  );
}
