import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Si usas React Router

function OrderDetail() {
  const { orderId } = useParams(); // Obtener el ID de la URL (React Router)
  const [order, setOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    // Simulación de obtener los detalles de una orden específica
    const simulatedOrder = { id: orderId, fecha_orden: '2024-10-27', total: 210.00, estado: 'Pendiente', id_usuario: 5 };
    const simulatedOrderDetails = [
      { id_producto: 10, cantidad: 2, precio_unitario: 25.50, subtotal: 51.00 },
      { id_producto: 25, cantidad: 1, precio_unitario: 150.00, subtotal: 150.00 },
    ];
    setOrder(simulatedOrder);
    setOrderDetails(simulatedOrderDetails);

    // En la aplicación real:
    // fetch(`/api/admin/ordenes/${orderId}/`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setOrder(data.order);
    //     setOrderDetails(data.details);
    //   });
  }, [orderId]);

  if (!order) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles de la Orden {order.id} (Admin)</h2>
      <p>Fecha: {order.fecha_orden}</p>
      <p>Total: ${order.total}</p>
      <p>Estado: {order.estado}</p>
      <p>ID de Usuario: {order.id_usuario}</p>

      <h3>Productos en la Orden</h3>
      <table>
        <thead>
          <tr>
            <th>ID de Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map(detail => (
            <tr key={detail.id_producto}>
              <td>{detail.id_producto}</td>
              <td>{detail.cantidad}</td>
              <td>${detail.precio_unitario}</td>
              <td>${detail.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetail;