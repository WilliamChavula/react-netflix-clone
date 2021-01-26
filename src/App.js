import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
    const { user } = useAuthListener();
    return (
        <Router>
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_IN}
                exact>
                <Signin />
            </IsUserRedirect>
            {/* <Route exact path={ROUTES.SIGN_IN} component={Signin} /> */}
            {/* <Route exact path={ROUTES.SIGN_UP} component={Signup} /> */}
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_UP}
                exact>
                <Signup />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
                <Browse />
            </ProtectedRoute>
            {/* <Route exact path={ROUTES.BROWSE} component={Browse} /> */}
            <Route exact path={ROUTES.HOME} component={Home} />
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.HOME}
                exact>
                <Home />
            </IsUserRedirect>
        </Router>
    );
}

export default App;
