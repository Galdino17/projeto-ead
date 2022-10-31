import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { Error } from '../pages/Error';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="cadastro" element={<SignUp />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};
