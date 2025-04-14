import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },

  textInput: {
    height: 60,
    padding: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.grayDark,
    color: 'white',
    flex: 1,
  },

  addButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
})