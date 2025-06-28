import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux'
import Dashboard from './pages/Dashboard.jsx'
import Protected from './components/ProtectedRoute.jsx'
import PublicRoute from './components/PublicRoute.jsx'
import ProductGeneration from './pages/ProductGeneration.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Signup from './pages/Signup.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/login",
        element: (
          <PublicRoute>
          <Login />
          </PublicRoute>
        )
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
          <Signup />
          </PublicRoute>
        )
      },
      {
        path: "/dashboard",
        element: (
         <Protected>
          <Dashboard />
         </Protected> 
        )
      },
      {
        path: "/create-product",
        element: (
         <Protected>
          <ProductGeneration />
         </Protected> 
        )
      },
      {
        path: "/product-detail/:productId",
        element: (
         <Protected>
          <ProductDetail />
         </Protected> 
        )
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
