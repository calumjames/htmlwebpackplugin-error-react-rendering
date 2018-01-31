import React from 'react';
import ReactDOM from 'react-dom';

import { Loaded } from './components/Loaded';

const App = () => <Loaded />;

setTimeout(() => {
  ReactDOM.render(<App />, document.querySelector('main'));
}, 2000);



