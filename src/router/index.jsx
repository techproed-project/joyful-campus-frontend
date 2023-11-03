import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import CoursesPage from "../pages/courses-page";
import EventsPage from "../pages/events-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";



const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
            {
                path:"courses",
                element: <CoursesPage/>
            },
            {
                path:"events",
                element: <EventsPage/>
            },
            {
                path:"about",
                element: <AboutPage/>
            },
            {
                path:"contact",
                element: <ContactPage/>
            }
        ]
    }
]);


const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter