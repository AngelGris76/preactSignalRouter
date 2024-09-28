import { match } from 'path-to-regexp';
import { locationSignal } from './BrowserRouter';
import { ParamContext } from '../utils/utils';

const Route = ({ path, component: Component, children }) => {
	const check = match(path);
	const checkResult = check(locationSignal);

	const { params } = checkResult;

	return (
		<ParamContext.Provider value={{ params }}>
			{params && (
				<>
					{Component && <Component />}
					{children}
				</>
			)}
		</ParamContext.Provider>
	);
};

export default Route;
