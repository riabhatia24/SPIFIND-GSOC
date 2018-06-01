import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import Level1 from './levels/Level1';
import Level2 from './levels/Level2';
import Level3 from './levels/Level3';
import Level4 from './levels/Level4';
import Level5 from './levels/Level5';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/level1" component={Level1}/>
      <Route exact path="/level2" component={Level2}/>
      <Route exact path="/level3" component={Level3}/>
      <Route exact path="/level4" component={Level4}/>
      <Route exact path="/level5" component={Level5}/>

    </div>
  </Router>
);

export default Routes;
