import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "../Routes/ProtectedRoute";

import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/projects/Projects";
import CreateProject from "../pages/projects/CreateProject";
import TaskDetails from "../pages/tasks/TaskDetails";
import Teams from "../pages/myTeam/myTeam";

import Settings from "../pages/Settings";
import Profile from "../pages/Profile";


const AppRouter = createBrowserRouter([

    // Public Routes
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/register",
        element: <Register />
    },


    // Protected Routes
    {
    element: <ProtectedRoute />,
    children: [
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />
                },
                {
                    path: "projects",
                    element: <Projects />
                },
                {
                    path: "createProject",
                    element: <CreateProject />
                },
                {
                    path: "teams",
                    element: <Teams />
                },
                {
                    path: "taskdetails",
                    element: <TaskDetails />
                },
                {
                    path: "settings",
                    element: <Settings />
                },
                {
                    path: "profile",
                    element: <Profile />
                }
            ]
        }
    ]
}

]);

export default AppRouter;