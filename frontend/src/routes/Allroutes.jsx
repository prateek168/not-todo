import {createBrowserRouter , Navigate, RouterProvider} from 'react-router-dom'
import DailyTasks from '../pages/dailyTasks/DailyTasks.jsx'
import Login from '../pages/login/Login.jsx'
import Signup from '../pages/register/Signup.jsx'
import MonthlyTasks from '../pages/monthlyTasks/MonthlyTasks.jsx'
import propTypes from 'prop-types'
import Backlog from '../pages/backlogTasks/Backlog.jsx'
import useGetAuthUser from '../hooks/useGetAuthUser.jsx'
import NotFound from '../components/NotFound.jsx'
const ProtectedRoute =({element})=>{
  return useGetAuthUser() ? element : <Navigate to='/login' />
}
ProtectedRoute.propTypes ={
  element : propTypes.element.isRequired
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<ProtectedRoute element={<DailyTasks/>} />,
  },
  {
   path:"/login",
   element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path: "/monthly-tasks",
    element:  <ProtectedRoute element={<MonthlyTasks/>} />
  },
  {
    path: "/backlog-tasks",
    element: <ProtectedRoute element={<Backlog />} />
  },
  {
    path:"*",
    element: <NotFound/>
  }
])

const AllRoutes =()=>{
  return (
    <RouterProvider router={router}/>
  )
}

export default AllRoutes
