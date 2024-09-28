import { createContext } from 'preact';

export const EVENT = {
	changeLocation: 'changeLocation',
	changeSearchParam: 'changeSearchParam',
};

/**
 *
 * @param {URL} to
 */
export const navigate = (to) => {
	window.history.pushState({}, '', to);
	document.dispatchEvent(new Event(EVENT.changeLocation));
};

export const ParamContext = createContext();
