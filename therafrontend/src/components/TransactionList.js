import React, { useState, useEffect } from "react";
import { API_URL } from "../config/api";
import "./TransactionList.css";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching transactions from:", `${API_URL}/api/transactions`);
    fetch(`${API_URL}/api/transactions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "omit",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setTransactions(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error details:", {
          message: err.message,
          stack: err.stack,
          url: `${API_URL}/api/transactions`,
        });
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ... resto del código existente ...
}

export default TransactionList;
