import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { OnePage } from './moduloA/pages/one/OnePage';
import { TwoPage } from './moduloA/pages/two/TwoPage';
import { ThreePage } from './moduloB/pages/three/ThreePage';
import { FourPage } from './moduloB/pages/four/FourPage';

const  ModuloALayout = lazy(() => import('./moduloA/layouts/ModuloALayout'));
const  ModuloBLayout = lazy(() => import('./moduloB/layouts/ModuloBLayout'));


export const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <ModuloALayout />,
    children:[
      {
        index: true,
        element: <Navigate to="/one" />
      },
      {
        path: 'one',
        element: <OnePage />
      },
      {
        path: 'two',
        element: <TwoPage />
      }
    ]
  },
  {
    path: '/module-b',
    element: <ModuloBLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/module-b/three" />
      },
       {
        path: 'three',
        element: <ThreePage />
      },
      {
        path: 'four',
        element: <FourPage />
      }
    ]
  },
  {
    path: '*',
    element: <div>404 - Not Found</div>
  }
]);