import { locationSignal } from './BrowserRouter';
import { match } from 'path-to-regexp';
import { toChildArray } from 'preact';
import Route from './Route';

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

	const componentToRender = allRoutes.find((route) => {
		if (route.path === locationSignal.value) return true;
		const check = match(route.path);
		if (!check(locationSignal)) return false;
		return true;
	});

	if (!componentToRender) {
		return <>{DefaultPage && <DefaultPage />}</>;
	}

	return (
		<>
			<Route
				path={componentToRender.path}
				component={componentToRender.component}
			>
				{componentToRender.children}
			</Route>
		</>
	);
};

export default Router;
