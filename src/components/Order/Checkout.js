import React, { useState, useContext } from 'react';
// Supongamos que tienes un Context para el carrito (no lo implementamos aquí)
// import { CartContext } from '../CartContext'; 

function Checkout() {
  // const { cart, total } = useContext(CartContext);  // Si usas Context
  const [paymentDetails, setPaymentDetails] = useState({
    metodo_pago: 'Tarjeta de Crédito', // Valor por defecto
    numero_tarjeta: '', // Simulado
    nombre_titular: '', // Simulado
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handlePaymentChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulación de la lógica de pago (no hay backend real)
    console.log('Detalles de pago:', paymentDetails);
    alert('¡Pago Simulado Exitoso!');
    setOrderConfirmed(true);

    // Aquí iría la llamada a la API para crear la orden (simulado)
    // fetch('/api/ordenes/', { ... })
    //   .then(response => response.json())
    //   .then(data => { ... });
  };

  if (orderConfirmed) {
    return <OrderConfirmation />;
  }

  return (
    <div>
      <h2>Finalizar Compra</h2>
      {/* {cart.map(item => ( ... ))}  // Mostrar los items del carrito
          <p>Total: ${total}</p>        // Mostrar el total
      */}

      <form onSubmit={handlePlaceOrder}>
        <div>
          <label>Método de Pago:</label>
          <select
            name="metodo_pago"
            value={paymentDetails.metodo_pago}
            onChange={handlePaymentChange}
          >
            <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
            <option value="PayPal">PayPal</option>
            <option value="Efectivo">Efectivo</option>
          </select>
        </div>

        {paymentDetails.metodo_pago === 'Tarjeta de Crédito' && (
          <div>
            <label>Número de Tarjeta (Simulado):</label>
            <input
              type="text"
              name="numero_tarjeta"
              value={paymentDetails.numero_tarjeta}
              onChange={handlePaymentChange}
            />
          </div>
        )}

        {paymentDetails.metodo_pago === 'Tarjeta de Crédito' && (
          <div>
            <label>Nombre del Titular (Simulado):</label>
            <input
              type="text"
              name="nombre_titular"
              value={paymentDetails.nombre_titular}
              onChange={handlePaymentChange}
            />
          </div>
        )}

        <button type="submit">Realizar Pedido</button>
      </form>
    </div>
  );
}

export default Checkout;