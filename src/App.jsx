import React from 'react';
import MoviesMarvel from './components/Movies';

import { Provider } from 'react-redux';
import generateStore from './redux/store'

function App() {

  const store = generateStore();

  return (
      <Provider store={store}>
        <div className="container mt-3">
          <MoviesMarvel />
        </div>
      </Provider>
  );
}

export default App;


