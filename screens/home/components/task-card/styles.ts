import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: colors.dark,
    alignItems: 'center',
    height: 80,
    marginBottom: 8,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },

  taskText: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },

  taskTextChecked: {
    color: '#FFFFFF70',
    fontSize: 14,
    opacity: 10,
    textDecorationLine: 'line-through',
    flex: 1,
  },

  radioButton: {
    borderWidth: 2,
    borderColor: colors.primary,
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
})