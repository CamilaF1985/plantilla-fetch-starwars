import React from 'react';
import { createRoot } from 'react-dom/client';
import { Enrutador } from './assets/Routes/Routes.jsx'; //importar el enrutador

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Enrutador> {/* envoltura del enrutador */}

    </Enrutador>
  </React.StrictMode>
);

