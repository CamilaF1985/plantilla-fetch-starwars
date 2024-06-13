import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';
import DetallePersonaje from '../Views/DetallePersonaje';
 //Componente de configuración de rutas
export const Enrutador = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* acá van las rutas */}
                <Route element={<App />} path="/" />
                <Route element={<DetallePersonaje />} path="/people/:id" />
            </Routes>
        </BrowserRouter>
    );
};
