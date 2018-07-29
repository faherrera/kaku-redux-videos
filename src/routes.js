import {Switch,Route} from 'react-router-dom';
import React from 'react';

import Home from './screens/Home/containers/Home';
import Movie from './screens/Movie/containers/Movie';
import MovieDetail from './screens/Movie/containers/Detail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/movies/" component={Movie}/>
    <Route exact path="/movies/:id" component={MovieDetail}/>
    {/* <Route exact path="/movies/:id" component={Movie}/> */}
  </Switch>
)

export default Routes;