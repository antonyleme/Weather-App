import React from "react";
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

export default function Component({ data }) {
  const isMobile = useMediaQuery({ query: "(max-device-width: 768px)" });

  return (
    <Box width="100%" height={isMobile ? "200px" : "280px"}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
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
          <Area type="monotone" dataKey="uv" stroke="#3182CE" fill="#63B3ED" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
