import { useSearchParams } from '../hooks/hooks';

const MyCartel = () => {
	const [searchParam, setSearchParam] = useSearchParams();

	const handleClick = (name) => {
		const newValue = `name=${name}`;
		setSearchParam(newValue);
	};

	return (
		<>
			<p>{searchParam}</p>
			<button
				type='button'
				onClick={() => {
					handleClick('flor');
				}}
			>
				flor
			</button>
			<button
				type='button'
				onClick={() => {
					handleClick('yuko');
				}}
			>
				yuko
			</button>
		</>
	);
};

export default MyCartel;
