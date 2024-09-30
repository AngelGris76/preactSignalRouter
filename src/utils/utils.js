import { createContext } from 'preact';

export const EVENT = {
	changeLocation: 'changeLocation',
	changeSearchParam: 'changeSearchParam',
};

/**
 *
 * @type {import("./preact-signal-router.d.ts").navigate}
 */
export const navigate = (to) => {
	window.history.pushState({}, '', to);
	document.dispatchEvent(new Event(EVENT.changeLocation));
};

export const ParamContext = createContext();
