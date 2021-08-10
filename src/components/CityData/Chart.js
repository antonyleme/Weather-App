import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from "react-responsive";
import { getMax, getMin } from "./utils";

export default function Component({ days }) {
  const isMobile = useMediaQuery({ query: "(max-device-width: 768px)" });

  const [temps, setTemps] = useState([]);

  useEffect(() => {
    const tempsArr = [];

    for (let i = 0; i < days.length; i++) {
      tempsArr.push({
        name: days[i][0],
        max: days[i][1].temp_max || getMax(days[i][1]),
        min: days[i][1].temp_min || getMin(days[i][1]),
      });
    }

    setTemps(tempsArr);
  }, [days]);

  return (
    <Box width="100%" height={isMobile ? "200px" : "280px"}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={temps}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          {!isMobile && <YAxis />}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="max"
            name="Máxima"
            stroke="#D69E2E"
            fill="#F6E05E"
          />
          <Area
            type="monotone"
            dataKey="min"
            name="Mínima"
            stroke="#3182CE"
            fill="#63B3ED"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
