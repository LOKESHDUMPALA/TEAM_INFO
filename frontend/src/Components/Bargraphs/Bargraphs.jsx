import React from "react";
import "./Bargraphs.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Bargraphs = ({ data }) => {
    // Check if data is not null before mapping
    const colorBars = data && data.map((entry) => {
        if (entry.value <= 25) {
            return { ...entry, fill: "red" };
        } else if (entry.value > 25 && entry.value < 50) {
            return { ...entry, fill: "yellow" };
        } else if (entry.value >= 50 && entry.value < 75) {
            return { ...entry, fill: "blue" };
        } else {
            return { ...entry, fill: "green" };
        }
    });

    return (
        <div className="bar-graph-container">
            <div className="card">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={colorBars || []}>
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="fill" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Bargraphs;
