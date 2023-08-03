/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';

/** redux - saga app */
import rootReducer from '@module-global/reducers';
import rootSaga from '@module-global/sagas';

/** types */
import type { TypedUseSelectorHook } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const reduxStore = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof reduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof reduxStore.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { RootState, AppDispatch };
export { reduxStore, useAppDispatch, useAppSelector };
