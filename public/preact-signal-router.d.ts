/**
 *
 * @returns An array with locationSignal and a function to chage location value
 */
export declare function useLocation(): [locationSignal, (path: string) => void];

/**
 *
 * @returns An array with searchParamsSignal and a funciton to change searchparams value
 */
export declare function useSearchParams(): [
	searchParamsSignal,
	(search: string) => void,
];

/**
 *
 * @param path - fix or dinamyc path
 * @returns [true, param] when match, param contain an string that match de path
 * @returns [false, null] when no match occurs
 */
export declare function useRoute(path: string): [boolean, string];

/**
 *
 * @returns {{params}}  Object with parmas matching
 */
export declare function useParams(): { params: object };

/**
 *
 * @param to - path to navigate to
 */
export declare function navigate(to: URLstring): void;
