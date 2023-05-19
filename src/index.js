import React from 'react';
import ReactDOM from 'react-dom/client';
// import MessengerCustomerChat from "react-messenger-customer-chat";
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import "./Assets/Css/Style.css"
import "./Assets/Css/Responsive.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <MessengerCustomerChat
    pageId="<PAGE_ID>"
    appId="<APP_ID>"
  /> */}
    <App />
    </Provider>
  </React.StrictMode>
);
