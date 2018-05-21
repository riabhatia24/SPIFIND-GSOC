import React from 'react';
import Scene from './components/Scene';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

const App = () => (
  <div className='App'>
    <div>
    	<Scene />
    </div>
  </div>
);

export default App;
