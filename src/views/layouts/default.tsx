import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../contants/const';
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';
import Welcome from '../pages/welcome/welcome';

type DefaultProps = {
	authStatus: AuthorizationStatus;
};

function Default({ authStatus }: DefaultProps) {
	return (
		<Routes>
			<Route path={AppRoute.Login} element={<Login />} />
			<Route path={AppRoute.Signup} element={<Signup />} />
			{/* <Route
				path={AppRoute.Home}
				element={
					<PrivateRoute authorizationStatus={authStatus}>
						<Welcome />
					</PrivateRoute>
				}
			/> */}
			<Route
				path={AppRoute.Home}
				element={
					<PrivateRoute authorizationStatus={authStatus}>
						<Welcome />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
}

export default Default;
