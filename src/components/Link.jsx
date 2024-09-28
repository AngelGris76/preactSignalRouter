import { navigate } from '../utils/utils';

const Link = ({ to, ...props }) => {
	const handleClick = (ev) => {
		const isModified = ev.ctrlKey || ev.shiftKey || ev.metaKey;
		const isSelf = ev.target.target === '_self' || !ev.target.target;

		if (!isModified && isSelf) {
			ev.preventDefault();
			navigate(to);
		}
	};

	return <a href={to} onClick={handleClick} {...props} />;
};

export default Link;
