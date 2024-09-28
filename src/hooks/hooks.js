import { useContext } from 'preact/hooks';
import {
	locationSignal,
	searchParamsSignal,
} from '../components/BrowserRouter';
import { match } from 'path-to-regexp';
import { EVENT, ParamContext } from '../utils/utils';

/**
 *
 * @returns {[{value:String},(value:String)=>void]}
 * [searchParam object, function to change searchParam]
 */
export const useSearchParams = () => {
	const setSearchParams = (param) => {
		const newUrl = `${locationSignal.value}?${param}`;
		window.history.pushState({}, '', newUrl);
		document.dispatchEvent(new Event(EVENT.changeSearchParam));
	};

	return [searchParamsSignal, setSearchParams];
};

/**
 *
 * @returns {[{value:String},(value:String)=>void]}
 * [location object, function to change location]
 */
export const useLocation = () => {
	const setLocation = (to) => {
		window.history.pushState({}, '', to);
		document.dispatchEvent(new Event(EVENT.changeLocation));
	};

	return [locationSignal, setLocation];
};

/**
 *
 * @param {String} path
 *
 * @returns {[match:boolean,params:{key:value}]}
 */
export const useRoute = (path) => {
	const check = match(path);
	const checkResult = check(locationSignal);

	if (!checkResult) return [false, null];

	return [true, checkResult.params];
};

/**
 *
 * @returns {{params}} dynamic route param
 */
export const useParams = () => {
	const { params } = useContext(ParamContext);

	return params;
};
