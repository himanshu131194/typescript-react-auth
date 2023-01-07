import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../contants/const';
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';
import Welcome from '../pages/welcome/welcome';
import Footer from './footer';
// import Plans from '../pages/plans/plans';

type DefaultProps = {
	authStatus: AuthorizationStatus;
};

function Default({ authStatus }: DefaultProps) {
	return (
		<div>
			<Routes>
				<Route path={AppRoute.Login} element={<Login />} />
				<Route path={AppRoute.Signup} element={<Signup />} />
				{/* <Route path={AppRoute.Plans} element={<Plans />} /> */}
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
			<Footer />
		</div>
	);
}

export default Default;
