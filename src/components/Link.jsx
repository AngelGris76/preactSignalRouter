import { navigate } from '../utils/utils';
import { useComputed } from '@preact/signals';
import { locationSignal } from './BrowserRouter';

const Link = ({ to, ...props }) => {
	const isPressed = useComputed(() => {
		return locationSignal.value === to ? 'true' : 'false';
	});

	const handleClick = (ev) => {
		const isModified = ev.ctrlKey || ev.shiftKey || ev.metaKey;
		const isSelf = ev.target.target === '_self' || !ev.target.target;

		if (!isModified && isSelf) {
			ev.preventDefault();
			navigate(to);
		}
	};

	return (
		<a href={to} onClick={handleClick} aria-current={isPressed} {...props} />
	);
};

export default Link;
