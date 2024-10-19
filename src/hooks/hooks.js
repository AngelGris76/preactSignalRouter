import { useContext } from 'preact/hooks';
import {
	locationSignal,
	searchParamsSignal,
} from '../components/BrowserRouter';
import { match } from 'path-to-regexp';
import { EVENT, ParamContext } from '../utils/utils';

/**
 *
 * @type {import("./preact-signal-router.d.ts").useSearchParams}
 */
export function useSearchParams() {
	const setSearchParams = (param) => {
		const newUrl = `${locationSignal.value}?${param}`;
		window.history.pushState({}, '', newUrl);
		document.dispatchEvent(new Event(EVENT.changeSearchParam));
	};

	return [searchParamsSignal, setSearchParams];
}

/**
 *
 * @type {import("./preact-signal-router.d.ts").useLocation}
 */

export function useLocation() {
	const setLocation = (to) => {
		window.history.pushState({}, '', to);
		document.dispatchEvent(new Event(EVENT.changeLocation));
	};

	return [locationSignal, setLocation];
}

/**
 *
 *@type {import("./preact-signal-router.d.ts").useRoute}
 */
export function useRoute(path) {
	const check = match(path);
	const checkResult = check(locationSignal);

	if (!checkResult) return [false, null];

	return [true, checkResult.params];
}

/**
 *
 * @type {import("./preact-signal-router.d.ts").useParams}
 */
export function useParams() {
	const { params } = useContext(ParamContext);

	return { params };
}
