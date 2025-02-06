import React, { useEffect, useState } from "react";
import MuiTable from "../mui/TableMuiCustom";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const tableHeaders = {
  transactionId: "Transaction ID",
  amount: "Amount",
  currency: "Currency",
  status: "Status",
  date: "Date",
};

export default function Payment() {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    Object.values(transaction).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="p-3">
      <div className="w-[280px] mx-auto my-4" >
      <TextField
        variant="outlined"
        placeholder="Search transactions"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ marginBottom: "10px", width: "100%" }}
      />
      </div>
     
      <MuiTable
        th={tableHeaders}
        td={filteredTransactions}
        styleTableContainer={{ boxShadow: "none", borderRadius: "10px" }}
        styleTableThead={{ backgroundColor: "#F8F9FA" }}
        styleTableTh={{ fontWeight: "bold", color: "#333", fontSize: "16px" }}
        styleTableTbody={{ backgroundColor: "#FFFFFF" }}
        rowStyles={{ backgroundColor: "#FFFFFF", fontSize: "16px", color: "#333" }}
        headerRounded={true}
        rowRounded={true}
      />
    </div>
  );
}
