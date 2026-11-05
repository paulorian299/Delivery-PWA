
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#111827',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      padding: '30px 20px'
    }}>
      <h1>Delivery PWA</h1>

      <p>Seu restaurante, seu delivery!</p>

      <div style={{
        background: '#1f2937',
        padding: '20px',
        borderRadius: '15px',
        marginTop: '30px'
      }}>
        <h2>Bem-vindo!</h2>
        <p>Estamos preparando sua loja digital.</p>
        <button style={{
          background: '#16a34a',
          color: 'white',
          border: 'none',
          padding: '14px 20px',
          borderRadius: '8px',
          fontSize: '16px'
        }}>
          Conhecer cardápio
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
