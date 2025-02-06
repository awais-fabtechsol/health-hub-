import React, { useState } from "react";
import MuiTable from "../mui/TableMuiCustom";
import { TextField, Menu, MenuItem, IconButton, InputAdornment } from "@mui/material";
import { MoreVert, Search } from "@mui/icons-material";

const dummyBloodBanks = [
  { 
    id: 1, 
    organizationName: "City Blood Bank", 
    location: "New York", 
    contact: "123-456-7890", 
    email: "cityblood@example.com" 
  },
  { 
    id: 2, 
    organizationName: "Central Blood Bank", 
    location: "Los Angeles", 
    contact: "987-654-3210", 
    email: "centralblood@example.com" 
  },
  { 
    id: 3, 
    organizationName: "Southern Blood Bank", 
    location: "Chicago", 
    contact: "555-123-4567", 
    email: "southernblood@example.com" 
  },
  { 
    id: 4, 
    organizationName: "Westside Blood Bank", 
    location: "San Francisco", 
    contact: "444-987-6543", 
    email: "westsideblood@example.com" 
  },
  { 
    id: 5, 
    organizationName: "East Coast Blood Bank", 
    location: "Miami", 
    contact: "222-333-4444", 
    email: "eastcoastblood@example.com" 
  },
];

const tableHeaders = {
  OrganizationName: "Organization Name",
  Location: "Location",
  Contact: "Contact",
  Email: "Email Address",
  Action: "Action"
};

const BloodBank = () => {
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

  const filteredBloodBanks = dummyBloodBanks.filter((bloodBank) =>
    bloodBank.organizationName.toLowerCase().includes(search.toLowerCase())
  );

  const tableData = filteredBloodBanks.map((bloodBank) => ({
    OrganizationName: bloodBank.organizationName,
    Location: bloodBank.location,
    Contact: bloodBank.contact,
    Email: bloodBank.email,
    Action: (
      <>
        <IconButton onClick={(event) => handleMenuClick(event, bloodBank)}>
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

export default BloodBank;
