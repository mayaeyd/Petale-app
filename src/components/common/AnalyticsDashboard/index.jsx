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

  const monthlyData = salesData.reduce((acc, sale) => {
    const date =
      sale.listings && sale.listings.length > 0
        ? new Date(sale.listings[0].listingDate)
        : new Date();

    const monthYear = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!acc[monthYear]) {
      acc[monthYear] = {
        monthYear,
        month: date.toLocaleString("default", { month: "short" }),
        year: date.getFullYear(),
        revenue: 0,
        orders: 0,
        date: date,
      };
    }

    acc[monthYear].revenue += sale.totalRevenue;
    acc[monthYear].orders += sale.totalGardenerSales;

    return acc;
  }, {});

  const revenueData = Object.values(monthlyData)
    .sort((a, b) => a.date - b.date)
    .map((data) => ({
      month: `${data.month} ${data.year}`,
      revenue: data.revenue,
      orders: data.orders,
    }));

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
              <XAxis
                dataKey="month"
                tick={{
                  fontFamily: "Proxima Nova Thin",
                  fill: "#333",
                }}
              />
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
              <XAxis
                dataKey="month"
                tick={{
                  fontFamily: "Proxima Nova Thin",
                  fill: "#333",
                }}
              />
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
