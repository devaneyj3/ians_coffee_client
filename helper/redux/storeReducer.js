import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";

import adminReducer from "./slice/loginSlice";
import { PersistGate } from "redux-persist/integration/react";

import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const _persistedReducer = persistReducer(persistConfig, adminReducer);

export const store = configureStore({
	reducer: { admin: _persistedReducer },
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
