import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";

const SignUpPage = (props) => {
  return (
    <View style={styles.container}>
      <Input
        containerStyle={styles.inputContainer}
        label="Enter you email"
        selectionColor="black"
        placeholder="email@example.com"
        leftIcon={<Icon name="envelope" size={20} color="black" />}
      />
      <Input
        containerStyle={styles.inputContainer}
        label="Enter you password"
        selectionColor="black"
        placeholder="password"
        leftIcon={<Icon name="lock" size={24} color="black" />}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Sign in"
          type="outline"
          raised
          style={styles.button}
          titleStyle={styles.buttonText}
        />
        <Button
          title="Sign Up"
          type="outline"
          raised
          style={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    paddingHorizontal: 60,
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

export default SignUpPage;
