import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { processesMetadataApi } from "../api/processes-metadata";

export const store = configureStore({
  reducer: {
    [processesMetadataApi.reducerPath]: processesMetadataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(processesMetadataApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
