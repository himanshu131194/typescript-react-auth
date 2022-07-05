// import { AuthorizationStatus } from '../../contants/const';
import { AuthorizationStatus } from '../../contants/const';
import { useAppSelector } from '../../hooks/use-redux';
import { getAuthorizationStatus } from '../../store/slices/selectors';
import Default from '../../views/layouts/default';
import Loading from '../loading/loading';

const isCheckAuth = (authorizationStatus: AuthorizationStatus): boolean =>
	authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
	const authorizationStatus = useAppSelector(getAuthorizationStatus);

	if (isCheckAuth(authorizationStatus)) {
		return <Loading />;
	}
	return <Default authStatus={authorizationStatus} />;
}

export default App;
