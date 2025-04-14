import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.gray,
    flex: 1,
  },

  container: {
    padding: 25
  },

  header: {
    backgroundColor: colors.dark,
    paddingTop: 70,
    paddingBottom: 20,
  },

  title: {
    fontSize: 40,
    color: colors.primary,
    fontWeight: "bold",
    textAlign: 'center'
  },

  tasksSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },

  taskSummaryItem: {
    backgroundColor: colors.grayDark,
    padding: 6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  placeholderEmptyList: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  }
})