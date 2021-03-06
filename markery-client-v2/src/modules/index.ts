import { combineReducers } from 'redux';
import { AuthState } from './actions/auth';
import { authReducer } from './reducers/auth';
import { NotificationState } from './actions/notification';
import { notificationReducer } from './reducers/notification';
import { LoadingState } from './actions/loading';
import { loadingReducer } from './reducers/loading';
import { ContentState } from './actions/content';
import { contentReducer } from './reducers/content';
import { ModalState } from './actions/modal';
import { modalReducer } from './reducers/modal';
import { ErrorState } from './actions/error';
import { errorReducer } from './reducers/error';

export type RootState = {
  auth: AuthState;
  notifications: NotificationState;
  loading: LoadingState;
  content: ContentState;
  modal: ModalState;
  error: ErrorState;
};

export const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationReducer,
  loading: loadingReducer,
  content: contentReducer,
  modal: modalReducer,
  error: errorReducer
});
