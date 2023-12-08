// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './atoms/nav/nav';
import Footer from './atoms/footer/footer';
import Home from './routes/home/home';
import Store from './routes/store/store';
import ContactUs from './routes/contact-us/contactus';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/store',
    element: <Store />,
  },
  {
    path: '/contact',
    element: <ContactUs />,
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
