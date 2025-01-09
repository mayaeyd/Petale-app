import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { CircularProgress } from "@mui/material";
import "./style.css";

const AnalyticsDashboard = ({ salesData, loading }) => {
  if (loading) return <CircularProgress />;

  const revenueData = salesData.map((sale) => {
    // Get listing dates from the listings array
    const listingDates = sale.listings.map(
      (listing) => new Date(listing.listingDate)
    );
    return {
      month: new Date(listingDates[0]).toLocaleString("default", {
        month: "short",
      }),
      revenue: sale.totalRevenue,
      orders: sale.totalGardenerSales,
    };
  });

  return (
    <div className="dashboard-grid">
      <div className="analytics-card">
        <div className="analytics-card-header">
          <h3 className="analytics-card-title">Revenue Over Time</h3>
        </div>
        <div className="analytics-card-content">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#b76e79" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="analytics-card">
        <div className="analytics-card-header">
          <h3 className="analytics-card-title">Monthly Orders</h3>
        </div>
        <div className="analytics-card-content">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#b76e79" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
