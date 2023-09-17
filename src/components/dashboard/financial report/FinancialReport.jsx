import ReactApexChart from "react-apexcharts";
import girlImage from "../../../assets/imgs/components image/girl_image.png";
const FinancialReport = ({ name }) => {
  const state = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 50, 98, 87, 105, 91, 150, 94],
      },
    ],

    options: {
      chart: {
        type: "bar",
        fontFamily: "roboto",
        toolbar: {
          show: false,
        },
      },

      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },

      legend: {
        show: false,
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          borderRadius: 5,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: 500,
            colors: "#58585898",
          },
        },
      },
      xaxis: {
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: 500,
            colors: "#58585898",
          },
        },
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      fill: {
        opacity: 1,
        colors: ["rgb(3, 201, 215)", "rgb(251, 150, 120)"],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
    },
  };

  return (
    <section>
      <div className="grid grid-cols-4 grid-rows-4 xl:grid-rows-2 gap-6 xl:gap-4">
        <div className="shadow-md px-6 py-8 w-full basis-full border relative overflow-hidden bg-white col-span-4 row-span-1 rounded-xl xl:col-span-2 xl:row-span-1">
          <img
            src={girlImage}
            alt="Girl Image"
            className="absolute w-[300px] -bottom-[100px] -right-[100px]"
          />
          <div>
            <p className="text-lg">Hey {name},</p>
            <p className="text-xl pt-1">Donwload latest report</p>
            <button className="bg-[#58CAD6] text-white p-2 px-4 rounded-lg text-sm mt-6">
              Download
            </button>
          </div>
        </div>
        <div className="w-full shadow-md bg-white col-span-4 row-span-2 xl:col-span-2 rounded-xl xl:row-span-2 border p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl">Sales Overview</p>
            </div>
            <div className="flex gap-3 text-sm">
              <div className="flex items-center gap-1 text-[#03c9d7]">
                <span className="h-3 w-3 bg-[#03c9d7] block rounded-full"></span>
                <p>New Profit</p>
              </div>
              <div className="flex items-center gap-1 text-[#fb9678]">
                <span className="h-3 w-3 bg-[#fb9678] block rounded-full"></span>
                <p>Revenue</p>
              </div>
            </div>
          </div>
          <div>
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height="300px"
              width="100%"
            />
          </div>
        </div>
        <div className="w-full shadow-md bg-white col-span-4 sm:col-span-2 sm:row-span-1 xl:col-span-1 rounded-xl xl:row-span-1 border"></div>
        <div className="w-full shadow-md bg-white col-span-4 sm:col-span-2 sm:row-span-1 xl:col-span-1 rounded-xl xl:row-span-1 border"></div>
      </div>
    </section>
  );
};

export default FinancialReport;
