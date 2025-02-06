import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import MuiTable from "../mui/TableMuiCustom";

const doctorData = [
  { name: "Dr. A", date: "2024-01-01", uv: 590 },
  { name: "Dr. B", date: "2024-02-15", uv: 868 },
  { name: "Dr. C", date: "2024-03-20", uv: 1397 },
  { name: "Dr. D", date: "2024-04-10", uv: 1480 },
  { name: "Dr. E", date: "2024-05-05", uv: 1520 },
];

const patientData = [
  { name: "Patient 1", date: "2024-06-01", uv: 400 },
  { name: "Patient 2", date: "2024-07-15", uv: 600 },
  { name: "Patient 3", date: "2024-08-20", uv: 800 },
  { name: "Patient 4", date: "2024-09-10", uv: 1000 },
  { name: "Patient 5", date: "2024-10-05", uv: 1200 },
];

const tableHeaders = {
  appointmentId: "Appointment ID",
  patientName: "Patient Name",
  doctorName: "Doctor Name",
  appointmentTime: "Appointment Time",
};

const tableData = [
  { appointmentId: "A001", patientName: "John Doe", doctorName: "Dr. A", appointmentTime: "10:00 AM" },
  { appointmentId: "A002", patientName: "Jane Smith", doctorName: "Dr. B", appointmentTime: "11:30 AM" },
  { appointmentId: "A003", patientName: "Alice Johnson", doctorName: "Dr. C", appointmentTime: "01:00 PM" },
  { appointmentId: "A004", patientName: "Bob Brown", doctorName: "Dr. D", appointmentTime: "02:15 PM" },
  { appointmentId: "A005", patientName: "Charlie White", doctorName: "Dr. E", appointmentTime: "03:45 PM" },
];

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Doctor Chart */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Doctor Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={doctorData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid stroke="#e0e0e0" />
            <XAxis dataKey="date" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={30} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Patient Chart */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Patient Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={patientData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid stroke="#e0e0e0" />
            <XAxis dataKey="date" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={30} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      {/* Appointment Table */}
      <div className="col-span-1 md:col-span-2 bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Appointment Details</h2>
        <MuiTable
          th={tableHeaders}
          td={tableData}
          styleTableContainer={{ boxShadow: "none", borderRadius: "10px" }}
          styleTableThead={{ backgroundColor: "#F8F9FA" }}
          styleTableTh={{ fontWeight: "bold", color: "#333", fontSize: "16px" }}
          styleTableTbody={{ backgroundColor: "#FFFFFF" }}
          cellStyles={{
            appointmentId: { fontSize: "18px", color: "#444" },
            patientName: { fontSize: "18px", color: "#444" },
            doctorName: { fontSize: "18px", color: "#444" },
            appointmentTime: { fontSize: "18px", color: "#444" },
          }}
          rowStyles={{ backgroundColor: "#FFFFFF", fontSize: "16px", color: "#333" }}
          headerRounded={true}
          rowRounded={true}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
