import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:3002/allOrders", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => {
        console.error("Error fetching orders:", err);
      });
    }
  }, []);

  return (
    <div className="orders-container">
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn btn-blue" style={{ marginTop: "15px", display: "inline-block" }}>
              Get started
            </Link>
          </div>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th style={{ textSide: "left", textAlign: "left" }}>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const modeClass = order.mode === "BUY" ? "profit" : "loss";
                return (
                  <tr key={index}>
                    <td style={{ textAlign: "left" }}>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price ? order.price.toFixed(2) : "0.00"}</td>
                    <td className={modeClass} style={{ fontWeight: "600" }}>{order.mode}</td>
                    <td style={{ color: "#4caf50", fontWeight: "600" }}>COMPLETE</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
