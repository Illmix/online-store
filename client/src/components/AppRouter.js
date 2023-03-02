import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(route =>
                <Route key={route.path} {...route}/>
            )}
            {publicRoutes.map(route =>
                <Route key={route.path} {...route}/>
            )}
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
};

export default AppRouter;