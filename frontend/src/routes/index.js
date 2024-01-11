import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './../App.tsx';
// import DetailPage from './Detail';
// import DetailPage from "./TestPage";
// import Layout from '../components/Layout';
// import AdminRoute from './Admin/routes';
import Login from './Login';
// import PrivateRoutes from './../components/PrivateRoutes';
// import AdminLayout from '../components/AdminLayout/index.tsx';

const RouterApp = () => {
  return (
    <BrowserRouter>
			<React.Fragment>
				<Routes>
					<Route path="/login" element={<Login />} />
				</Routes>
			</React.Fragment>
		</BrowserRouter>
	);
};

export default RouterApp;
