import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { signIn } from "../store/actions/authActions";

import Loading from "../components/Loading";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const loginHandler = () => {
    dispatch(signIn(enteredEmail, enteredPassword));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputsContainer}>
        <Input
          containerStyle={styles.inputContainer}
          label="Enter you email"
          selectionColor="black"
          placeholder="email@example.com"
          leftIcon={<Icon name="envelope" size={20} color="black" />}
          value={enteredEmail}
          onChangeText={(email) => setEnteredEmail(email)}
        />
        <Input
          containerStyle={styles.inputContainer}
          label="Enter you password"
          selectionColor="black"
          placeholder="password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          value={enteredPassword}
          onChangeText={(password) => setEnteredPassword(password)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          type="outline"
          raised
          style={styles.button}
          titleStyle={styles.buttonText}
        />
        <Button
          title="Sign In"
          type="outline"
          raised
          style={styles.button}
          titleStyle={styles.buttonText}
          onPress={loginHandler}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputsContainer: {
    width: "80%",
  },
  inputContainer: {
    paddingHorizontal: 20,
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

export default LoginPage;
