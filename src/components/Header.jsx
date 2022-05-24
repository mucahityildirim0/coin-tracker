import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./Coins";
import { Table } from "react-bootstrap";

export default function Header() {
  const [coins, setCoins] = useState([]);
  console.log(coins);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
    };
    fetchData();
  }, []);

  const mapCoin = coins.map((key) => {
    return key.id;
  });

  return (
    <div className="container">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 10 }).map((_, id) => (
              <th key={id}>
                {mapCoin.map((coin) => {
                  return coin;
                })}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}>birinci sıra</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}>ikinci sıra</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}>birinci sıra</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
