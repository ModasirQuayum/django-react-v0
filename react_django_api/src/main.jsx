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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: (
         <Protected>
          <Dashboard />
         </Protected> 
        )
      }
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
