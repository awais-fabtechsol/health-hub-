import React, { useState } from "react";
import MuiTable from "../mui/TableMuiCustom";
import { TextField, Menu, MenuItem, IconButton, InputAdornment } from "@mui/material";
import { MoreVert, Search } from "@mui/icons-material";

const dummyDoctors = [
  { 
    id: 1, 
    fullName: "John Doe", 
    contact: "123-456-7890", 
    specialty: "Cardiology", 
    age: 30, 
    city: "New York", 
    email: "john@example.com", 
    experience: 5, 
    degree: "MD", 
    medicalLicense: "12345XYZ" 
  },
  { 
    id: 2, 
    fullName: "Jane Smith", 
    contact: "987-654-3210", 
    specialty: "Pediatrics", 
    age: 25, 
    city: "Los Angeles", 
    email: "jane@example.com", 
    experience: 3, 
    degree: "MBBS", 
    medicalLicense: "98765XYZ" 
  },
  { 
    id: 3, 
    fullName: "Alice Johnson", 
    contact: "555-123-4567", 
    specialty: "Neurology", 
    age: 40, 
    city: "Chicago", 
    email: "alice@example.com", 
    experience: 12, 
    degree: "MD", 
    medicalLicense: "54321XYZ" 
  },
  { 
    id: 4, 
    fullName: "Bob Brown", 
    contact: "444-987-6543", 
    specialty: "Orthopedics", 
    age: 35, 
    city: "San Francisco", 
    email: "bob@example.com", 
    experience: 8, 
    degree: "DO", 
    medicalLicense: "11223XYZ" 
  },
  { 
    id: 5, 
    fullName: "Charlie White", 
    contact: "222-333-4444", 
    specialty: "Dermatology", 
    age: 28, 
    city: "Miami", 
    email: "charlie@example.com", 
    experience: 4, 
    degree: "MD", 
    medicalLicense: "99887XYZ" 
  },
];

const tableHeaders = {
  FullName: "Full Name",
  Contact: "Contact",
  Specialty: "Specialty",
  Age: "Age",
  City: "City",
  Email: "Email Address",
  Experience: "Experience (Years)",
  Degree: "Degree",
  MedicalLicense: "Medical License",
  Action: "Action"
};

const Doctors = () => {
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

  const filteredDoctors = dummyDoctors.filter((doctor) =>
    doctor.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const tableData = filteredDoctors.map((doctor) => ({
    FullName: doctor.fullName,
    Contact: doctor.contact,
    Specialty: doctor.specialty,
    Age: doctor.age,
    City: doctor.city,
    Email: doctor.email,
    Experience: doctor.experience,
    Degree: doctor.degree,
    MedicalLicense: doctor.medicalLicense,
    Action: (
      <>
        <IconButton onClick={(event) => handleMenuClick(event, doctor)}>
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

export default Doctors;
