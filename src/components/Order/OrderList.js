import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Si usas React Router

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulación de obtener todas las órdenes (solo para admin)
    const simulatedOrders = [
      { id: 101, fecha_orden: '2024-10-27', total: 210.00, estado: 'Pendiente', id_usuario: 5 },
      { id: 102, fecha_orden: '2024-10-25', total: 85.75, estado: 'Enviado', id_usuario: 12 },
    ];
    setOrders(simulatedOrders);

    // En la aplicación real:
    // fetch('/api/admin/ordenes/')  // Ruta para admin
    //   .then(response => response.json())
    //   .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Lista de Órdenes (Admin)</h2>
      <table>
        <thead>
          <tr>
            <th>ID de Orden</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th>ID de Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.fecha_orden}</td>
              <td>${order.total}</td>
              <td>{order.estado}</td>
              <td>{order.id_usuario}</td>
              <td>
                <button>Ver Detalles</button> {/* Usar Link de React Router */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;