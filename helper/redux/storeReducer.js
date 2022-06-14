import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import { combineReducers } from "redux";

import adminReducer from "./slice/loginSlice";
import drinkReducer from "./slice/drinkSlice";
import userReducer from "./slice/userSlice";

import { PersistGate } from "redux-persist/integration/react";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const reducers = combineReducers({
	adminReducer,
	drinkReducer,
	userReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: _persistedReducer,
});

let persistor = persistStore(store);

export const ReduxProvider = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};
