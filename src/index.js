import React from 'react';
import ReactDOM from 'react-dom/client';
// import MessengerCustomerChat from "react-messenger-customer-chat";
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
// add all css file
import "./Assets/Css/Style.css"
import "./Assets/Css/Responsive.css"
import '../src/Components/blogs/Blogs.css';
import '../src/Components/Contact//Contact.css';
import '../src/Components/Home//Home.css';
import '../src/Components/Portfolios/Portfolios.css';
import '../src/Components/Home/Home.css';
import '../src/Assets/Css/Progress.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>
);
