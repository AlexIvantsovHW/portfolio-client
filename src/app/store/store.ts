import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { jobsApi } from "../../shared/api/requests/jobs/jobs.api";
import { jobsSlice } from "../../shared/api/requests/jobs/slice";
import { universitiesApi } from "../../shared/api/requests/universities/universities.api";
import { universitiesSlice } from "../../shared/api/requests/universities/slice";
import { projectsApi } from "../../shared/api/requests/projects/projects.api";
import { feedbacksApi } from "../../shared/api/requests/feedbacks";
import { projectsSlice } from "../../shared/api/requests/projects/slice";
import { feedbacksSlice } from "../../shared/api/requests/feedbacks/slice";
import { personalApi } from "../../shared/api/requests/personal";
import { contactApi } from "../../shared/api/requests/contact";
import { personalSlice } from "../../shared/api/requests/personal/slice";
import { contactSlice } from "../../shared/api/requests/contact/slice";
import { navbarSlice } from "@/shared/ui/navbar/slice";
import { authApi } from "@/shared/api/requests/auth";
import { authSlice } from "@/shared/api/requests/auth/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser", "actualCategorySlice"],
};

const rootReducer = combineReducers({
  [jobsApi.reducerPath]: jobsApi.reducer,
  jobsSlice: jobsSlice.reducer,
  [universitiesApi.reducerPath]: universitiesApi.reducer,
  universitiesSlice: universitiesSlice.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  projectsSlice: projectsSlice.reducer,
  [feedbacksApi.reducerPath]: feedbacksApi.reducer,
  feedbacksSlice: feedbacksSlice.reducer,
  [personalApi.reducerPath]: personalApi.reducer,
  personalSlice: personalSlice.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  contactSlice: contactSlice.reducer,
  navbarSlice: navbarSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  authSlice: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      jobsApi.middleware,
      universitiesApi.middleware,
      projectsApi.middleware,
      feedbacksApi.middleware,
      personalApi.middleware,
      contactApi.middleware,
      authApi.middleware
    ),
});

export const persistor = persistStore(store);
