import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  chart: {
    /* toolbar: { //Essas opções escondem a toolbar e zom do gráfico, eu preferi manter
      show: false
    },
    zoom :{
      enabled: false
    }, */
    foreColor: theme.colors.gray["500"],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: "datetime",
    axisBorder: { color: theme.colors.gray["600"] },
    axisTicks: { color: theme.colors.gray["600"] },
    categories: [
      "2022-09-02T00:00:00:00.000Z",
      "2022-09-03T00:00:00:00.000Z",
      "2022-09-04T00:00:00:00.000Z",
      "2022-09-05T00:00:00:00.000Z",
      "2022-09-06T00:00:00:00.000Z",
      "2022-09-07T00:00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [42, 59, 34, 28, 55, 63] }];

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        maxWidth={1480}
        marginY="6"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box
            padding={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            padding={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
