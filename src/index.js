import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsStore from "./store/newsStore";
import reportWebVitals from './reportWebVitals';
import PartnersStore from "./store/partnersStore";
import ClientsStore from "./store/clientsStore";
import TestimonialsStore from "./store/testimonialsStore";
import LocaleStore from "./store/localeStore";
export const Context = createContext(null);
ReactDOM.render(

  <Context.Provider value={{
      news: new NewsStore(),
      partners: new PartnersStore(),
      clients: new ClientsStore(),
      testimonials: new TestimonialsStore(),
      courses: [
          {name:"Advanced training course The practice of investment projects in the Republic of Uzbekistan.",
              date: new Date(2022,3,15),
              irl:""},
          {name:"Advanced training course The practice of investment projects in the Republic of Uzbekistan.",
              date:new Date(2022,4,15),
              irl:""},
          {name:"aboba training course The practice of investment projects in the Republic of Uzbekistan.",
              date: new Date(2022,3,15),
              irl:""},
          {name:"jorj training course The practice of investment projects in the Republic of Uzbekistan.",
              date: new Date(2022,3,15),
              irl:""},
          {name:"vvdfg training course The practice of investment projects in the Republic of Uzbekistan.",
              date: new Date(2022,3,15),
              irl:""},
          {name:"Advanced training course The practice of investment projects in the Republic of Uzbekistan.",
              date:new Date(2022,4,15),
              irl:""},
          {name:"Advanced training course The practice of investment projects in the Republic of Uzbekistan.",
              date:new Date(2022,4,15),
              irl:""},
          {name:"Advanced training course The practice of investment projects in the Republic of Uzbekistan.",
              date:new Date(2022,4,15),
              irl:""},
      ],
      locale: new LocaleStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
reportWebVitals();
