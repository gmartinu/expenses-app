import React from "react";
import { View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import BoxWithOptions from "../../components/BoxWithButtons";
import { remove } from "../../features/incomes/incomesSlice";

const AddFab = ({ navigation }) => (
  <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => navigation.navigate("Entradas - Cadastro")}
  />
);

function Incomes({ navigation }) {
  const incomesList = useSelector((state) => state.incomes);
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {incomesList?.map((income, index) => (
          <BoxWithOptions
            key={income.id} // Use um identificador exclusivo se possível
            title={income.descricao}
            value={income.valor}
            type={income.tipo}
            onEdit={() =>
              navigation.navigate("Entradas - Cadastro", {
                ...income,
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

export default Incomes;
