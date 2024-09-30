export declare function useLocation(): [
	location: signal,
	setLocation: (path: string) => void,
];

export declare function useSearchParams(): [
	searchParams: signal,
	setSearchParams: (search: string) => void,
];

export declare function Route(obj: {
	path: URLstring;
	component?: funcionalComponent;
}): funcionalcomponent;

export declare function navigate(to: URLstring): void;
