import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(location, cb) {
        // trigger code splitting
        System.import('./components/artists/ArtistCreate').then(module =>
          cb(null, module.default)
        );
      }
    },
    {
      path: 'artists/:id',
      getComponent(location, cb) {
        // trigger code splitting
        System.import('./components/artists/ArtistDetail').then(module =>
          cb(null, module.default)
        );
      }
    },
    {
      path: 'artists/:id/edit',
      getComponent(location, cb) {
        // trigger code splitting
        System.import('./components/artists/ArtistEdit').then(module =>
          cb(null, module.default)
        );
      }
    }
  ]
};

const Routes = () => {
  // Remove jsx and dynamically load routes for code splitting.
  return <Router history={hashHistory} routes={componentRoutes} />;
};

export default Routes;
