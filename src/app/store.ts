import createSagaMiddleware from "redux-saga";
import {
  configureStore,
  ThunkAction,
  Action,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import saga from "../sagas/saga";

// Create a todoSlice using createSlice()
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    id: 0,
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        ...state,
        todos: action.payload,
      };
    },
    selectRoom: (state, action) => {
      return {
        ...state,
        id: action.payload,
      };
    },
  },
});

// Export all the reducers created
export const { fetchData, selectRoom } = todoSlice.actions;

// Create a sagaMiddleware and add it to the middleware array
let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// Create a store and run saga
const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

// Export the store, dispatch type, state type and thunk action
export default store;

export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;