import { render } from 'preact';
import BrowserRouter from './components/BrowserRouter.jsx';
import App from './App.jsx';

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);
