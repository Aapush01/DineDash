// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => <h1 className="text-3xl font-bold text-center mt-10">Welcome on DineDash!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

