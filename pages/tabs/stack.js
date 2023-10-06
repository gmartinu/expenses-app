import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import HomeStack from "../home/stack";
import IncomesStack from "../incomes/stack";
import ExpenseStack from "../expenses/stack";
import ConfigStack from "../configuration/stack";

const Tab = createMaterialTopTabNavigator();

function TabsNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        // header: ({navigation}) => <Header navigation={navigation} />,
        tabBarIcon: ({ color, size }) => {
          let icon = "";
          switch (route.name) {
            case "HomeTab":
              icon = "home";
              break;
            case "IncomesStack":
              icon = "cash-plus";
              break;
            case "ExpensesTab":
              icon = "cash-remove";
              break;
            case "ConfigTab":
              icon = "cog";
              break;
          }
          return <Icon name={icon} size={25} />;
        },
        // tabBarActiveTintColor: theme.colors.white,
        // tabBarInactiveTintColor: theme.colors.primary,
        // tabBarActiveBackgroundColor: theme.colors.primary,

        headerTintColor: theme.colors.white,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        swipeEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.tertiary,
          top: 0,
        },
        // tabBarLabelStyle: {
        //   color: tabDefaultColor(route),
        // },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="IncomesStack"
        component={IncomesStack}
        options={{
          title: "Entradas",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ExpensesTab"
        component={ExpenseStack}
        options={{
          title: "Despesas",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ConfigTab"
        component={ConfigStack}
        options={{
          title: "Config",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
