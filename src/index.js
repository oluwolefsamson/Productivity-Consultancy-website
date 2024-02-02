import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ValuesPage from './Pages/ValuesPage/ValuesPage';
import ManagementPage from './Pages/ManagementPage/ManagementPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/values",
    element: <ValuesPage />,
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },

  {
    path: "/management",
    element: <ManagementPage />,
  },
]);

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

