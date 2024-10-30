import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrencyRate = () => {
    const [rates, setRates] = useState([]);
    const apiKey = 'b8370f7635b0422783f0d02a22813a82';

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=${apiKey}`);
                const baseCurrency = 'USD';
                console.log(`The base currency is: ${baseCurrency}`);
                const currencies = ['CAD', 'IDR', 'JPY', 'CHF', 'EUR', 'GBP'];
                const exchangeRates = currencies.map(currency => {
                    const rate = parseFloat(response.data.rates[currency]);
                    return {
                        currency,
                        weBuy: (rate * 1.05).toFixed(6),
                        exchangeRate: rate.toFixed(6),
                        weSell: (rate * 0.95).toFixed(6),
                    };
                });
                setRates(exchangeRates);
            } catch (error) {
                console.error('Error fetching currency rates:', error);
            }
        };
        fetchRates();
    }, []);

    return (
        <div style={{ backgroundColor: '#FFA500', padding: '20px', color: '#fff' }}>
            <h1>Rate Currency</h1>
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>We Buy</th>
                        <th>Exchange Rate</th>
                        <th>We Sell</th>
                    </tr>
                </thead>
                <tbody>
                    {rates.map((rate) => (
                        <tr key={rate.currency}>
                            <td>{rate.currency}</td>
                            <td>{rate.weBuy}</td>
                            <td>{rate.exchangeRate}</td>
                            <td>{rate.weSell}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Rates are based from 1 USD</p>
            <p>This application uses API from https://currencyfreaks.com</p>
            <p class="tekswarna">Made By Henz (Muhamad Hendy Saputra)</p>
        </div>
    );
};

export default CurrencyRate;
