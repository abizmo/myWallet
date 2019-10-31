import React from "react";
import { StyleSheet, Modal, View } from "react-native";

export default class extends React.Component {
  render() {
    return (
      <Modal
        visible={this.props.isVisible}
        transparent
        onRequestClose={this.props.onClose}
      >
        <View style={styles.container}>
          <View style={styles.modal}>{this.props.children}</View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height,
    justifyContent: "center",
    backgroundColor: "#EDEDEDCC"
  },
  modal: {
    marginHorizontal: 24,
    backgroundColor: "#FCFCFC",
    borderRadius: 4,
    borderColor: "#EDEDED",
    borderWidth: 1,
    height: 200
  }
});
