import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "AmStd Fender J-Bass",
    amount: 1499.99,
    date: new Date("2002-07-12"),
  },
  {
    id: "e2",
    description: "Souldier Strap",
    amount: 69.99,
    date: new Date("2002-07-15"),
  },
  {
    id: "e3",
    description: "Mark Bass 4x10 Combo",
    amount: 2025.99,
    date: new Date("2015-09-01"),
  },
  {
    id: "e4",
    description: "Rock Bag Double Bass",
    amount: 289.99,
    date: new Date("2015-01-22"),
  },
  {
    id: "e5",
    description: "Sef of 5 Strings",
    amount: 49.99,
    date: new Date("2021-12-22"),
  },
  {
    id: "e6",
    description: "Mark Bass 4x10 Combo",
    amount: 2025.99,
    date: new Date("2015-09-01"),
  },
  {
    id: "e7",
    description: "Rock Bag Double Bass",
    amount: 289.99,
    date: new Date("2015-01-22"),
  },
  {
    id: "e8",
    description: "Sef of 5 Strings",
    amount: 49.99,
    date: new Date("2021-12-22"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
