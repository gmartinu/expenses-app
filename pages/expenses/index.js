import React from "react";
import { View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import BoxWithOptions from "../../components/BoxWithButtons";

const AddFab = ({ navigation }) => (
  <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => navigation.navigate("Despesas - Cadastro")}
  />
);

function Expenses({ navigation }) {
  const expensesList = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {expensesList?.map((expense, index) => (
          <BoxWithOptions
            key={expense.id} // Use um identificador exclusivo se possível
            title={expense.descricao}
            value={expense.valor}
            type={expense.tipo}
            onEdit={() =>
              navigation.navigate("Despesas - Cadastro", {
                ...expense,
                index: index,
              })
            }
          />
        ))}
      </ScrollView>
      <AddFab navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16, // Adicione espaço entre as caixas
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Expenses;
