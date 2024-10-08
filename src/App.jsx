import { useParams } from './hooks/hooks';
import Route from './components/Route';
import Router from './components/Router';
import NavLinks from './components/NavLinks';

const App = () => {
	const ComponenteRaiz = () => {
		return <h1>titulo raiz</h1>;
	};

	const SegundoRoute = () => {
		const params = useParams();
		return (
			<>
				<h2>componente Route con component prop</h2>
				<p>{params.id}</p>
			</>
		);
	};

	const OnlyChildrenRoute = () => {
		const params = useParams();
		return (
			<>
				<h2>children de la ultima ruta</h2>
				<p>{params.name}</p>
			</>
		);
	};

	const Page404 = () => {
		return (
			<>
				<p>La página que buscas no existe</p>
				<p>volver al home</p>
			</>
		);
	};

	return (
		<div>
			<header>
				<h1>Encabezado</h1>
			</header>
			<Router
				routes={[{ path: '/', component: ComponenteRaiz }]}
				defaultPage={Page404}
			>
				<Route path='/cart/:id' component={SegundoRoute} />
				<Route path='/market/:name'>
					<h1>titulo</h1>
					<OnlyChildrenRoute />
				</Route>
			</Router>

			<NavLinks />

			<footer>
				<p>Este es el footer</p>
			</footer>
		</div>
	);
};

export default App;
