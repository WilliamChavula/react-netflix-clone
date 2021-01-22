import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home, Signin, Signup, Browse } from './pages';
import * as ROUTES from './constants/routes';

function App() {
    return (
        <Router>
            <Route exact path={ROUTES.BROWSE} component={Browse} />
            <Route exact path={ROUTES.SIGN_IN} component={Signin} />
            <Route exact path={ROUTES.SIGN_UP} component={Signup} />
            <Route exact path={ROUTES.HOME} component={Home} />
        </Router>
    );
}

export default App;
