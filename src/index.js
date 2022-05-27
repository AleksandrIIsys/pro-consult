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
import CareersStore from "./store/careersStore";
import CoursesTable from "./components/EditableTable/CoursesTable";
import CourseStore from "./store/courseStore";
import ProjectStore from "./store/projectStore";
import SliderStore from "./store/sliderStore";
export const Context = createContext(null);
ReactDOM.render(

  <Context.Provider value={{
      news: new NewsStore(),
      partners: new PartnersStore(),
      clients: new ClientsStore(),
      testimonials: new TestimonialsStore(),
      courses: new CourseStore(),
      locale: new LocaleStore(),
      careers: new CareersStore(),
      project: new ProjectStore(),
      slider: new SliderStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
reportWebVitals();
