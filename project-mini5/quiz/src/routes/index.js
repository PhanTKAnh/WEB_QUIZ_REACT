import PrivateRoute from "../components/PrivateRoute";
import LayoutDefault from "../layout/LayoutDefault";
import Answers from "../Pages/Answers";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register"
import Quiz from "../Pages/Quiz"
import Result from "../Pages/Result"
import Topic from "../Pages/Topic"
import LogOut from "../Pages/LogOut";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "logout",
                element: <LogOut />
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: "answers",
                        element: <Answers/>
                    },                    {
                        path: "quiz/:id",
                        element: <Quiz/>
                    },                    {
                        path: "result/:id",
                        element: <Result/>
                    },                    {
                        path: "topic",
                        element: <Topic/>
                    },
                ]


            }
        ]
    }
]