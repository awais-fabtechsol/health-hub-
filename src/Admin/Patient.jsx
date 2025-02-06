import React, { useState } from "react";
import MuiTable from "../mui/TableMuiCustom";
import { TextField, Menu, MenuItem, IconButton, InputAdornment } from "@mui/material";
import { MoreVert, Search } from "@mui/icons-material";

const dummyPatients = [
  { id: 1, name: "John Doe", age: 30, contact: "123-456-7890", email: "john@example.com", gender: "Male" },
  { id: 2, name: "Jane Smith", age: 25, contact: "987-654-3210", email: "jane@example.com", gender: "Female" },
  { id: 3, name: "Alice Johnson", age: 40, contact: "555-123-4567", email: "alice@example.com", gender: "Female" },
  { id: 4, name: "Bob Brown", age: 35, contact: "444-987-6543", email: "bob@example.com", gender: "Male" },
  { id: 5, name: "Charlie White", age: 28, contact: "222-333-4444", email: "charlie@example.com", gender: "Non-binary" },
];
const tableHeaders = {
  Name: "Name",
  Age: "Age",
  Contact: "Contact",
  Email: "Email",
  Gender: "Gender",
  Action: "Action"
};

const Patients = () => {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  
  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPatients = dummyPatients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  const tableData = filteredPatients.map((patient) => ({
    Name: patient.name,
    Age: patient.age,
    Contact: patient.contact,
    Email: patient.email,
    Gender: patient.gender,
    Action: (
      <>
        <IconButton onClick={(event) => handleMenuClick(event, patient)}>
          <MoreVert />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Details</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
        </Menu>
      </>
    ),
  }));

  return (
    <div className="p-2">
      <div className="w-1/4 mx-auto p-3">

        <TextField
          label={null} // or label=""
          variant="outlined"
          placeholder="Search..."
          fullWidth
          margin="normal"
          value={search}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
          }}
        />
      </div>

      <MuiTable
        th={tableHeaders}
        td={tableData}
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
};

export default Patients;
