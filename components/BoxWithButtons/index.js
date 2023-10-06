import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Modal, Portal, Button, Title, IconButton } from "react-native-paper";

const BoxWithOptions = ({ title, type, value, onEdit, onRemove }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return (
    <TouchableWithoutFeedback onPress={hideModal}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onEdit}>
          <View style={styles.content}>
            <View style={styles.leftContent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.type}>{getTypeLabel(type)}</Text>
            </View>
            <Text style={styles.value}>{formattedValue}</Text>
          </View>
        </TouchableOpacity>

        {/* <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainer}
          >
            <View style={styles.modalHeader}>
              <Title>Opções - {title}</Title>
              <IconButton icon="close" onPress={hideModal} />
            </View>
            <View style={styles.modalContent}>
              <Button
                mode="contained"
                onPress={() => {
                  onEdit();
                  hideModal();
                }}
              >
                Editar
              </Button>
              <Button
                mode="contained"
                onPress={() => {
                  onRemove();
                  hideModal();
                }}
              >
                Excluir
              </Button>
            </View>
          </Modal>
        </Portal> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const getTypeLabel = (type) => {
  switch (type) {
    case 1:
      return "Fixo";
    case 2:
      return "Extra";
    case 3:
      return "Sobra";
    default:
      return "";
  }
};

const styles = {
  container: {
    marginBottom: 8,
    padding: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    flexDirection: "column", // Alterado de "row" para "column"
    justifyContent: "flex-start", // Alterado de "space-between" para "flex-start"
    alignItems: "stretch", // Alterado de "center" para "stretch"
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContent: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  type: {
    fontSize: 12,
    color: "gray",
  },
  value: {
    fontSize: 18,
    textAlign: "right",
    fontWeight: "bold",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export default BoxWithOptions;
