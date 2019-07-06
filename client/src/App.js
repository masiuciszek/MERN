import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/layout/Layout';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import store from './store';
import Alert from './components/layout/Alert';
import DashBoard from './components/dashboard/DashBoard';
import Profiles from './components/profiles/Profiles';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import './App.css';
import { loadUser } from './actions/auth';
import SetAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import AddEducation from './components/profile-forms/AddEducation';

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <PrivateRoute exact path="/dashboard" component={DashBoard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
          </section>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
