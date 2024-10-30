import React from 'react';
import './App.css';
import CurrencyRate from './CurrencyRate';
import { useState, useEffect } from 'react';

function App() {
  const [clock, setClock] = useState('');

    const tick = () => {
        let date = new Date();
        setClock(date.toLocaleTimeString());
    };

    useEffect(() => {
        setInterval(() => { tick() }, 1000);
    }, []);

    return (
        <div className="App">
            <div className="clock-container">
                <h1>Realtime Clock</h1>
                <h2>{clock}</h2>
            </div>
            <CurrencyRate />
        </div>
    );
}

export default App;
