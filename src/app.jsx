import React from 'react';
import Intro from './levels/Intro';
import 'normalize.css';
import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

const App = () => (
  <div className='App'>
    <Intro />
   </div>
);

export default App;
