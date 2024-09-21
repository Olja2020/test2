// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { HashRouter } from 'react-router-dom';
// import App from './components/App/App.jsx';
// import 'modern-normalize';
// import './styles/globalStyles.css';
// import './index.css';

// import { PersistGate } from 'redux-persist/integration/react';
//  import Loader from './components/Loader/Loader.jsx'; import { BrowserRouter } from 'react-router-dom';
// import { persistor, store } from './redux/store.js';

//  import { Provider } from 'react-redux';

//  createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={<Loader />} persistor={persistor}>
//         <BrowserRouter basename="/test2">
//           <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </StrictMode>
// );
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { HelmetProvider } from 'react-helmet-async';
// import App from './components/App/App.jsx';
// import 'modern-normalize';
// import './styles/globalStyles.css';
// import './index.css';

// import { PersistGate } from 'redux-persist/integration/react';
// import Loader from './components/Loader/Loader.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import { persistor, store } from './redux/store';

// import { Provider } from 'react-redux';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <Provider store={store}> 
//       <PersistGate loading={<Loader />} persistor={persistor}>
//         <BrowserRouter basename="/test2">
//           <HelmetProvider> 
//             <App />
//            </HelmetProvider> 
//         </BrowserRouter>
//      </PersistGate> 
   
//     </Provider> 
//     </StrictMode>
// );
//import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App  from './components/App/App';
import store from './store/index';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);