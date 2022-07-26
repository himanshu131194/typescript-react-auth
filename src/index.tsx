/* eslint-disable @typescript-eslint/no-floating-promises */
// import '../public/styles/index.scss';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './utils/browser-history';
import App from './components/app/app';
import { store } from './store/store';
import { checkAuthAction } from './services/api-actions';

store.dispatch(checkAuthAction());

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<HistoryRouter history={browserHistory}>
				<App />
			</HistoryRouter>
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);
