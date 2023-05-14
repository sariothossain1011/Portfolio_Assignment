import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import './Conponents/Assets/Css/Style.css'
import './Conponents/Assets/Css/Responsive.css'
import "./Conponents/Assets/Css/Progress.css"
import store from './Redux/store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
