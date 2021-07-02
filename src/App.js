import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";

import store from './reduxStore'
import { Home, Login, SignUp, AddNewUser, Edit, Search, Test, ChatDashboard } from './pages';
import { ProtectedRouting } from './components'

export default function AuthExample() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/chatdashboard" component={ChatDashboard} />
          <ProtectedRouting exact path="/home" component={Home} />
          <ProtectedRouting exact path="/addNewUser" component={AddNewUser} />
          <ProtectedRouting exact path="/search" component={Search} />
          <ProtectedRouting exact path="/user/:id/edit" component={Edit} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </Provider>
  );
}
