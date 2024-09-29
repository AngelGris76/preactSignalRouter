import Link from './Link';
import style from './nav.module.css';

const NavLinks = () => {
	return (
		<>
			<ul>
				<li>
					<Link class={style.link} to='/'>
						home
					</Link>
				</li>
				<li>
					<Link class={style.link} to='/cart/carrefour'>
						carro de carrefour
					</Link>
				</li>
				<li>
					<Link class={style.link} to='/market/jumbo'>
						mercado jumbo
					</Link>
				</li>
			</ul>
		</>
	);
};

export default NavLinks;
