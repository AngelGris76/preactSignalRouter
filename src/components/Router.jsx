import { locationSignal } from './BrowserRouter';
import { match } from 'path-to-regexp';
import { toChildArray } from 'preact';
import { ParamContext } from '../utils/utils';

const Router = ({ routes, children, defaultPage: DefaultPage }) => {
	const childrenRoutes = toChildArray(children).map(({ props }) => {
		return {
			path: props.path,
			component: props.component,
			children: props.children,
		};
	});

	let allRoutes = [];
	if (routes) allRoutes = [].concat(routes);
	allRoutes = allRoutes.concat(childrenRoutes);

	let params;

	const componentToRender = allRoutes.find((route) => {
		if (route.path === locationSignal.value) return true;
		const check = match(route.path);
		const checkResult = check(locationSignal.value);
		if (!checkResult) return false;
		params = checkResult.params;
		return true;
	});

	if (!componentToRender) {
		return <>{DefaultPage && <DefaultPage />}</>;
	}

	const ActualComponent = componentToRender.component;

	return (
		<>
			<ParamContext.Provider value={{ params }}>
				{ActualComponent && <ActualComponent />}
				{componentToRender.children}
			</ParamContext.Provider>
		</>
	);
};

export default Router;
