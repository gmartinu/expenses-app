import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import counterReducer2 from "./features/counter/counterSlice copy";
import incomesReducer from "./features/incomes/incomesSlice";
import expensesReducer from "./features/expenses/expensesSlice";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  counter2: counterReducer2,
  incomes: incomesReducer,
  expenses: expensesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
