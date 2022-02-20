import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './src/redux/messageSlice';
import usersReducer, { usersAdapter } from './src/redux/usersSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    users: usersReducer,
  },
});

usersAdapter.getSelectors((state: any) => state.users)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const {selectAll: selectAllUsers} = usersAdapter.getSelectors((state: RootState) => state.users);
