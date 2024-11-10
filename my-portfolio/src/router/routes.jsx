import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import App from "../App";
import CommonLayout from "../pages/Common/CommonLayout";
import DisplayError from "../Error/DisplayError";
import Blogpage from "../pages/Blogpage";
import Skillpage from "../pages/Skillpage";
import Workpage from "../pages/Workpage";
import Contact from "../pages/Contact";

const router=createBrowserRouter([
    {
        path:`/`,
        element:<CommonLayout/>,
        errorElement:<DisplayError/>,
        children:[
            {
                path:`/`,
                element:<Homepage/>
            },
            {
                path:`/about`,
                element:<Aboutpage/>
            },
            {
                path:`/blog`,
                element:<Blogpage/>
            },
            {
                path:`/skills`,
                element:<Skillpage/>
            },
            {
                path:`/works`,
                element:<Workpage/>
            },
            {
                path:`/contact`,
                element:<Contact/>
            },
            

        ]
        
    }
    
]);

export default router;