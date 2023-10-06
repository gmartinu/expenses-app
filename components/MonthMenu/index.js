import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Button, Menu } from "react-native-paper";

const MonthSelector = ({ label, value, onValueChange }) => {
  const [visible, setVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = [
    { id: 1, name: "Janeiro" },
    { id: 2, name: "Fevereiro" },
    { id: 3, name: "Março" },
    { id: 4, name: "Abril" },
    { id: 5, name: "Maio" },
    { id: 6, name: "Junho" },
    { id: 7, name: "Julho" },
    { id: 8, name: "Agosto" },
    { id: 9, name: "Setembro" },
    { id: 10, name: "Outubro" },
    { id: 11, name: "Novembro" },
    { id: 12, name: "Dezembro" },
  ];

  useEffect(() => {
    // Atualiza o mês selecionado quando o valor externo (value) muda
    const selected = months.find((month) => month.id === value);
    setSelectedMonth(selected || null);
  }, [value]);

  useEffect(() => {
    // Define o mês atual como valor padrão quando o componente monta
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Mês começa em 0 (janeiro) no objeto Date
    const selected = months.find((month) => month.id === currentMonth);
    setSelectedMonth(selected || null);
    onValueChange(currentMonth); // Chama a função de callback com o ID do mês atual
  }, []);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    onValueChange(month.id); // Chama a função de callback com o ID do mês selecionado
    closeMenu();
  };

  return (
    <View>
      {label ? (
        <Text
          style={{
            marginBottom: 8,
          }}
        >
          {label}
        </Text>
      ) : null}
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button mode="outlined" onPress={openMenu}>
            {selectedMonth ? selectedMonth.name : "Selecione um mês"}
          </Button>
        }
      >
        {months.map((month) => (
          <Menu.Item
            key={month.id}
            onPress={() => handleMonthSelect(month)}
            title={month.name}
          />
        ))}
      </Menu>
    </View>
  );
};

export default MonthSelector;
