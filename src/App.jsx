import React from 'react';
import MoviesMarvel from './pages/Movies';

import { Provider } from 'react-redux';
import generateStore from './redux/store'

import {router} from './router'
import { RouterProvider } from 'react-router-dom';

function App() {

  const store = generateStore();

  return (
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* <div className="container mt-3">
          <MoviesMarvel />
        </div> */}
      </Provider>
  );
}

export default App;


