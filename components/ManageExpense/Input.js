import { View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, invalid, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },

  label: {
    fontSize: 14,
    letterSpacing: 1,
    color: "silver",
    marginBottom: 4,
  },

  input: {
    backgroundColor: GlobalStyles.colors.primary700,
    color: "white",
    letterSpacing: 1,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },

  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
