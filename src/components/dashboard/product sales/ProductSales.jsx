import ReactApexChart from "react-apexcharts";
const ProductSales = () => {
  const donut = {
    series: [44, 55, 41, 25],
    options: {
      labels: ["2020", "2021", "2022", "2023"],
      chart: {
        fontFamily: "roboto",

        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        fontSize: "14px",
        fontFamily: "roboto",
        fontWeight: 500,
        color: "#fff",
        itemMargin: {
          horizontal: 13,
          vertical: 0,
        },
        position: "bottom",
      },
    },
  };
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-6 lg:gap-4 2xl:gap-6">
      <div className="w-full p-4 shadow-md relative flex flex-col justify-between col-span-6 row-span-3 xl:col-span-2 rounded-xl lg:row-span-1 border bg-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl">Total Sales</p>
          </div>
          <div>
            <select
              defaultValue="1"
              className="border py-2 rounded-md text-md text-[#686868] outline-orange-700"
            >
              <option value="1">March</option>
              <option value="2">April</option>
              <option value="3">May</option>
              <option value="4">June</option>
              <option value="5">September</option>
              <option value="6">October</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center my-8">
          <p className="text-[#585858]">Sales Yearly</p>
          <p className="text-xl font-bold">8,364,398</p>
        </div>
        <div>
          <div className="max-w-[450px] mx-auto">
            <ReactApexChart
              options={donut.options}
              series={donut.series}
              type="donut"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-4 shadow-md relative flex flex-col justify-between col-span-6 row-span-2 xl:col-span-4 rounded-xl lg:row-span-1 border bg-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl">Product Performance</p>
          </div>
          <div>
            <select
              defaultValue="1"
              className="border py-2 rounded-md text-md text-[#686868] outline-orange-700"
            >
              <option value="1">March</option>
              <option value="2">April</option>
              <option value="3">May</option>
              <option value="4">June</option>
              <option value="5">September</option>
              <option value="6">October</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full p-4 shadow-md relative flex flex-col justify-between col-span-6 row-span-1 xl:col-span-2 rounded-xl lg:row-span-1 border bg-white">
        <div className="flex">
          <div>
            <p className="text-xl">blog Posts</p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 shadow-md relative flex flex-col justify-between col-span-6 row-span-1 xl:col-span-2 rounded-xl lg:row-span-1 border bg-white">
        <div className="flex">
          <div>
            <p className="text-xl">Weekly Stats</p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 shadow-md relative flex flex-col justify-between col-span-6 row-span-1 xl:col-span-2 rounded-xl lg:row-span-1 border bg-white">
        <div className="flex">
          <div>
            <p className="text-xl">Daily Activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSales;
