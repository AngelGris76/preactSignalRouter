## Basic router for preact using signals and some hooks

### Table of content

#### Component api
  + [\<BrowserRouter />](#browser-router-component)
  + [\<Router />](#router-component)
  + [\<Route />](#route-component)
  + [\<Link />](#link-component)

#### Hook api
  + [useLocation](#location-hook)
  + [useSearchParams](#search-params-hook)
  + [useParams](#params-hook)
  + [useRoute](#route-hook)

#### Aditional function
  + [navigate](#navigate-function)

#### Description

##### \<BrowserRouter /> component

You need to envolve your app in this component.  
This component internally get an useEffect to actualize location and serachParams signal, when any change occurs in the address bar

##### \<Router /> component

This component only render the first matching route. Passing routes as a prop or children of Route.
Also can pass defaultPage prop with the component to be rendered when no match path occurs

    import HomePage from './HomePage.jsx'
    import AboutPage from './AboutPage.jsx'
    import Page404 from './Page404.jsx'

    const myRoutes = [{path='/', component={HomePage}},{path='/about', component={AboutPage}}
    ]

    ...
    <Router routes={myRoutes} defaultPage={Page404} />
    ...

or

    ...
    <Router>
      <Route .../>
      ...
    </Router>
    ...

##### \<Route /> component

The Route component render the component in its component prop and children when path prop match with de location

    ...
    <Route path='/' component={HomePage}>
    ...

dinamyc path is supported too

     ...
     <Rotue path='/some/:id' component={...}>
     ...

Both, fix and dinamyc path can render component prop and children

    ...
    <Rotue path='/some' component={...}>
      <h1>title</h1>
    </Rotue>

    <Route>
      <p>only render a children</p>
    </Route>
    ...

It also generate a context with de params match location of dinamyc path, which can be accessed via useParams hook inside the component to be rendered

##### \<Link /> component

It is used to render an anchor \<a>\</a> component and navigate into the spa.  
It use window.history.pushState function.

    ...
    <Link to='/about'>
      about page
    </Link>
    ...

Attributes like class, id or target are passed directly to the anchor.  
Also, the anchor receive an "aria-current" attribute with true value when path match with its "to" attirbute.

##### useLocation hook

It return an array with locationSignal and a setter to change the location

    const [location, setLocation] = useLocation();

    setLocation('/about')

The setter simply use window.history.pushState function.

##### useSearchParams hook

It return an array with searchParamsSignal and a setter to change the searchParams.  
The setter simply use window.history.pushState function.

##### useParams hook

It return an object with the params of a matching route. Based on context generated by Router or Route component

    const {params} = useParams()

##### useRoute hook

Ir receive the path to be matched. And return an array with a boolean value indicating where is match or not, and the params which match.

    const [match, params] = useRoute('/user/:name')

##### navigate function

Navigate function perform a navigation to a certain path.  
It use window.history.pushState function

    navigate('/products')
