import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import UserProvider, { UserContext } from './context/userContext';
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import CreateTask from "./pages/Admin/CreateTask";
import ManageTasks from "./pages/Admin/ManageTasks";
import ManageUsers from "./pages/Admin/ManageUsers";

import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/Mytasks"
import ViewTaskDetails from "./pages/User/ViewTaskDetails"

import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />
          </Route>

          <Route path='/' element={<Root />} />
        </Routes>
      </Router>
    </div>
    </UserProvider>
  );
}

export default App;

const Root = () => {
  const { user, loading } = useContext(UserContext);

  if(loading) return <Outlet />

  if(!user) {
    return <Navigate to="/login" />;
  }

  return user.role === "admin" ? <Navigate to="/admin/dashboard" /> : <Navigate to="/user/dashboard" />;
}