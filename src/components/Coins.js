import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function DenseTable() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
    };

    setInterval(fetchData, 300000);
    fetchData();
  }, []);
  let price = coins[0]?.current_price;
  let currentPrices = [];
  for (let i = 0; i < coins.length; i++) {
    currentPrices.push(coins[i].current_price);
  }

  currentPrices.push(price);
  console.log(currentPrices);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>SYMBOL</TableCell>
            <TableCell>CURRENT_PRİCE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coins) => (
            <TableRow
              key={coins.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{coins.symbol}</TableCell>
              <TableCell>{coins.current_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
