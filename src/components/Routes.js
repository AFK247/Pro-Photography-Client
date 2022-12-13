import AddService from "./AddService";
import Blog from "./Blog";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import Myreview from "./Myreview";
import PrivateRoute from "./PrivateRoute";
import Register from "./Register";
import ServiceDetails from "./ServiceDetails";
import Services from "./Services";
import UpdateReview from "./UpdateReview";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/services', 
          element: <Services></Services>
        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
            path: '/register', 
            element: <Register></Register>
        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params})=> fetch(`https://photography-server-side.vercel.app/services/${params.id}`)
        },
        {
          path: '/myreview',
          element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
        },
        {
          path: '/updateReview',
          element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
        },
        {
          path: '/addservice',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);

  export default router;