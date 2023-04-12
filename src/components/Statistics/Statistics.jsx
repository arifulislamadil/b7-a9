import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    id: "1",
    name: "Ass 1",
    uv: 60,
    pv: 2400,
    amt: 2400,
  },
  {
    id: "2",
    name: "Ass 2",
    uv: 60,
    amt: 2210,
  },
  {
    id: "3",
    name: "Ass 3",
    uv: 60,
    pv: 9800,
    amt: 2290,
  },
  {
    id: "4",
    name: "Ass 4",
    uv: 56,
    pv: 3908,
    amt: 2000,
  },
  {
    id: "5",
    name: "Ass 5",
    uv: 60,
    pv: 4800,
    amt: 2181,
  },
  {
    id: "6",
    name: "Ass 6",
    uv: 56,
    pv: 3800,
    amt: 2500,
  },
  {
    id: "7",
    name: "Ass 7",
    uv: 58,
    pv: 4300,
    amt: 2100,
  }
];

export default class Statistics extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0";

  render() {
    return (
      <div className="mt-20">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
            
          </ResponsiveContainer>
          
        </div>
        <h3 className="text-center text-xl text-purple-400">My 7 Assignments Number</h3>
      </div>
    );
  }
}
