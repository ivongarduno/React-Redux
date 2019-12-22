import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Search from './components/search/search';

import './style.css';

const App = () =>(
  <Provider store={store}>
    <main className='main'>
      <Search/> 
    </main>
  </Provider>
)

export default App;