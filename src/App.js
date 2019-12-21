import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Search from './components/search';

const App = () =>(
  <Provider store={store}>
    <main>
      <Search/>
      
    </main>
  </Provider>
)

export default App;