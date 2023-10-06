import React from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import CurrencyInput from "react-native-currency-input";
import { ButtonSelect, MonthMenu, Section } from "../../components";
import { useDispatch } from "react-redux";
import { add_or_edit, remove } from "../../features/incomes/incomesSlice";

function IncomesCrud({ navigation, route: { params } }) {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    descricao: "",
    tipo: 1, // 1 - Fixa | 2 - Extra | 3 - Sobra
    valor: 0,
    mes: null,
  });

  React.useEffect(() => {
    if (params) {
      setState(params);
    }
  }, [params]);

  return (
    <View
      style={{
        padding: 16,
      }}
    >
      <Section>
        <TextInput
          label="Descrição"
          value={state.descricao}
          onChangeText={(value) =>
            setState((_v) => ({ ..._v, descricao: value }))
          }
        />
      </Section>
      <Section>
        <CurrencyInput
          value={state.valor}
          renderTextInput={(textInputProps) => (
            <TextInput label="Valor" {...textInputProps} />
          )}
          onChangeValue={(value) => setState((_v) => ({ ..._v, valor: value }))}
          prefix="R$"
        />
      </Section>
      <Section>
        <MonthMenu
          label="Mês de Referência: "
          value={state.mes}
          onValueChange={(value) => setState((_v) => ({ ..._v, mes: value }))}
        />
      </Section>
      <Section extra={2}>
        <ButtonSelect
          label="Tipo de entrada"
          value={state.tipo}
          onChangeValue={(value) => setState((_v) => ({ ..._v, tipo: value }))}
          options={[
            {
              label: "Fixa",
              value: 1,
            },
            {
              label: "Extra",
              value: 2,
            },
            {
              label: "Sobra",
              value: 3,
            },
          ]}
        />
      </Section>
      {state.index !== undefined && state.index !== null ? (
        <Section>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button
              mode="contained"
              onPress={() => {
                dispatch(remove(state.index));
                navigation.goBack();
              }}
              buttonColor="#c70000"
            >
              Remover
            </Button>
            <Button
              mode="contained"
              onPress={() => {
                dispatch(add_or_edit(state));
                navigation.goBack();
              }}
            >
              Atualizar
            </Button>
          </View>
        </Section>
      ) : (
        <Section>
          <Button
            mode="contained"
            onPress={() => {
              dispatch(add_or_edit(state));
              navigation.goBack();
            }}
          >
            Cadastrar
          </Button>
        </Section>
      )}
    </View>
  );
}

export default IncomesCrud;
