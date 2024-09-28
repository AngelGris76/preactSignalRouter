import { signal } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import { EVENT } from '../utils/utils';

export const locationSignal = signal(window.location.pathname);
export const searchParamsSignal = signal(window.location.search);

const BrowserRouter = ({ children }) => {
	useEffect(() => {
		const onChangeLocation = () => {
			locationSignal.value = window.location.pathname;
			searchParamsSignal.value = window.location.search;
		};
		const onChangeSearchParam = () => {
			searchParamsSignal.value = window.location.search;
		};

		document.addEventListener(EVENT.changeLocation, onChangeLocation);
		document.addEventListener(EVENT.changeSearchParam, onChangeSearchParam);

		return () => {
			document.removeEventListener(EVENT.changeLocation, onChangeLocation);
			document.removeEventListener(
				EVENT.changeSearchParam,
				onChangeSearchParam
			);
		};
	});
	return <>{children}</>;
};

export default BrowserRouter;
