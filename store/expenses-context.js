import { createContext, useReducer } from "react";

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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ dexcription, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { dexcription, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch: ({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch: ({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
