import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsReducer } from './contsctsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice,
  },
});
// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contsctsSlice';
// import { filterSlice } from './filterSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer.reducer,
//   filter: filterSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
