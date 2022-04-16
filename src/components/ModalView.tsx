import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import checkBoxMenuImg from '../../assets/images/checkBoxMenu.png'

interface PropType { 
  text: string;
  contents: string;
}

const ModalView = (props : PropType) => {
  const [modalVisible, setModalVisible] = useState(false);
  const pressTheModal = () => {
    setModalVisible(true);
  }

  const { text , contents} = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> {contents} </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}> {text} </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
        <TouchableOpacity onPress = {pressTheModal}>
              <AutoHeightImage source={checkBoxMenuImg} width={28} style={{position: 'absolute', right: -270, top:-55}} />
        </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalView;