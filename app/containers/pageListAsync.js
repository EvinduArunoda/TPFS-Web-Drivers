import Loadable from 'react-loadable';
import Loading from 'dan-components/Loading';

export const BlankPage = Loadable({
  loader: () => import('./Pages/BlankPage'),
  loading: Loading,
});
export const Form = Loadable({
  loader: () => import('./Pages/Forms/ReduxForm'),
  loading: Loading,
});
export const Table = Loadable({
  loader: () => import('./Pages/Table/BasicTable'),
  loading: Loading,
});
export const ComplaintHistory = Loadable({
  loader: () => import('./Pages/Complaint/ComplaintHistory'),
  loading: Loading,
});
export const FineDocumentation = Loadable({
  loader: () => import('./Pages/Documentation/Documentation'),
  loading: Loading,
});
export const PaymentHistory = Loadable({
  loader: () => import('./Pages/Payment/PaymentHistory'),
  loading: Loading,
});
export const Login = Loadable({
  loader: () => import('./Pages/Users/Login'),
  loading: Loading,
});
export const EditProfile = Loadable({
  loader: () => import('./Pages/Profile/EditProfile'),
  loading: Loading,
});
export const Profile = Loadable({
  loader: () => import('./Pages/Profile/UserProfile'),
  loading: Loading,
});
export const Photo = Loadable({
  loader: () => import('./Pages/Profile/EditPhoto'),
  loading: Loading,
});

export const Logout = Loadable({
  loader: () => import('./Pages/Users/Logout'),
  loading: Loading,
});
export const ChangePassword = Loadable({
  loader: () => import('./Pages/Users/ChangePassword'),
  loading: Loading,
});
export const LoginDedicated = Loadable({
  loader: () => import('./Pages/Standalone/LoginDedicated'),
  loading: Loading,
});
export const SendLink = Loadable({
  loader: () => import('./Pages/Users/SendLink'),
  loading: Loading,
});
export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/ResetPassword'),
  loading: Loading,
});
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/Standalone/NotFoundDedicated'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/Maintenance'),
  loading: Loading,
});
export const ComingSoon = Loadable({
  loader: () => import('./Pages/ComingSoon'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});
