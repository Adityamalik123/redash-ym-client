import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import NotFound from '../../../helpers/NotFound';
import PlaceHolder from '../../../helpers/PlaceHolder';
import DesktopNavbar from './DesktopNavbar';
import './index.less';
import 'assets/less/base.less';
import { AuthProvider } from '../../../helpers/Authorized/Authorized';

export default function ApplicationLayout() {
  return (
    <AuthProvider>
      <div className='application-layout-side-menu'>
        <DesktopNavbar />
      </div>
      <div
        className='application-layout-content'
        style={{ background: '#f6f8f9' }}
      >
        <Switch>
          <Route path='/dashboards'>
            <PlaceHolder info='dashboards' />
          </Route>
          <Route path='/alerts'>
            <PlaceHolder info='alerts' />
          </Route>
          <Route path='/queries'>
            <PlaceHolder info='queries' />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </AuthProvider>
  );
}
