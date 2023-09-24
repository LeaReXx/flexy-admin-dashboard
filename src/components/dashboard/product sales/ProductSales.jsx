import ReactApexChart from "react-apexcharts";
import userImage1 from "../../../assets/imgs/components image/1-32ddcd87.jpg";
import userImage2 from "../../../assets/imgs/components image/2-1c16a104.jpg";
import userImage3 from "../../../assets/imgs/components image/3-0594bd0b.jpg";
import userImage4 from "../../../assets/imgs/components image/4-76ce6c0c.jpg";
import userImage5 from "../../../assets/imgs/components image/5-d39d5aaf.jpg";
import postImage from "../../../assets/imgs/components image/blog-bg-2x-7983955c.jpg";
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

  const performanceData = [
    {
      id: 1,
      image: userImage1,
      name: "Sunil Joshi",
      position: "Elite Admin",
      job: "Web Designer",
      priority: "Low",
      priorityColor: "#77BA8A",
      budget: "3.9",
    },
    {
      id: 2,
      image: userImage2,
      name: "Andrew",
      position: "Real Homes",
      job: "Project Manager",
      priority: "Medium",
      priorityColor: "#60B1FF",
      budget: "23.9",
    },
    {
      id: 3,
      image: userImage3,
      name: "Bhavesh patel",
      position: "MedicalPro Theme",
      job: "Developer",
      priority: "High",
      priorityColor: "#687A8C",
      budget: "12.9",
    },
    {
      id: 4,
      image: userImage4,
      name: "Nirav Joshi",
      position: "Elite Admin",
      job: "Frontend Eng",
      priority: "Low",
      priorityColor: "#F3A09C",
      budget: "10.9",
    },
    {
      id: 5,
      image: userImage5,
      name: "Micheal Doe",
      position: "Helping Hands",
      job: "Content Writer",
      priority: "High",
      priorityColor: "#F6C847",
      budget: "12.9",
    },
  ];

  const area = {
    series: [
      {
        name: "series",
        data: [33, 35, 36, 33, 34],
      },
    ],
    options: {
      chart: {
        parentHeightOffset: 0,
        sparkline: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
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
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#60B1FF"],
      },
      fill: {
        opacity: 1,
        colors: ["#60B1FF"],
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
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
        <div className="overflow-x-auto">
          <table className="table-auto w-full mt-6 min-w-[550px]">
            <thead>
              <tr className="text-left text-[#6b6b6b] font-medium">
                <th className="font-normal py-2">Assigned</th>
                <th className="font-normal py-2">Name</th>
                <th className="font-normal py-2">Priority</th>
                <th className="font-normal py-2">Budget</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((item) => (
                <tr key={item.id} className="border-t">
                  {console.log(item)}
                  <td className="py-2 flex items-center gap-2">
                    <div className="w-10 rounded-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium ">{item.name}</p>
                      <p className="text-sm text-[#6b6b6b]">{item.job}</p>
                    </div>
                  </td>
                  <td className="py-2 text-[#6b6b6b] text-sm">
                    {item.position}
                  </td>
                  <td className="py-2 text-sm">
                    <span
                      className="p-1 rounded-md"
                      style={{
                        color: item.priorityColor,
                        backgroundColor: item.priorityColor + 30,
                      }}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-2 text-sm font-semibold">
                    ${item.budget}K
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full overflow-hidden shadow-md relative flex flex-col justify-between col-span-6 row-span-1 xl:col-span-2 rounded-xl lg:row-span-1 border bg-white">
        <div className="w-full">
          <img src={postImage} alt="Blog post" className="w-full h-full" />
        </div>
        <div className="p-4 my-4">
          <div className="flex gap-2 items-center text-[#585858]">
            <i className="fa-sharp fa-regular fa-clock text-xl"></i>
            <span className="text-lg">22 March, 2023</span>
          </div>
          <div className="my-2">
            <p className="text-lg">Super awesome, React is coming!</p>
          </div>
          <div className="text-xs flex gap-3 my-2">
            <span className="text-[#ffa089] bg-[#ffa089] rounded-md bg-opacity-20 px-2 py-1">
              Low
            </span>
            <span className="text-[#a1a2ff] bg-[#a1a2ff] rounded-md bg-opacity-20 px-2 py-1">
              Medium
            </span>
          </div>
          <div className="flex justify-between items-center mt-12">
            <div className="w-12 flex gap-4">
              <img
                src={userImage1}
                alt="Profile image"
                className="rounded-full"
              />
              <img
                src={userImage2}
                alt="Profile image"
                className="rounded-full"
              />
              <img
                src={userImage3}
                alt="Profile image"
                className="rounded-full"
              />
            </div>
            <div className="w-10 h-10 hover:bg-gray-300 cursor-pointer flex justify-center items-center rounded-full">
              <i className="fa-sharp fa-regular fa-comment text-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full shadow-md relative flex flex-col justify-between col-span-6 row-span-1 xl:col-span-2 rounded-xl lg:row-span-1 border bg-white">
        <div className="flex justify-between items-center p-4">
          <div>
            <p className="text-xl">Weekly Stats</p>
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
        <div className="flex flex-col gap-6 p-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="bg-[#F2997D] w-12 h-12 flex justify-center items-center text-white rounded-full">
                <i class="fa-regular fa-cart-shopping"></i>
              </div>
              <div>
                <p className="font-medium text-[#3b3b3b]">Top Sales</p>
                <p className="text-sm text-[#585858]">Johnathan Doe</p>
              </div>
            </div>
            <div>
              <span className="bg-[#E4E4E4] text-xs font-medium px-2 py-1 rounded-md">
                +68%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="bg-[#F6CA25] w-12 h-12 flex justify-center items-center text-white rounded-full">
                <i class="fa-regular fa-star"></i>
              </div>
              <div>
                <p className="font-medium text-[#3b3b3b]">Best Seller</p>
                <p className="text-sm text-[#585858]">MaterialPro Admin</p>
              </div>
            </div>
            <div>
              <span className="bg-[#E4E4E4] text-xs font-medium px-2 py-1 rounded-md">
                +25%
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="bg-[#4EB48C] w-12 h-12 flex justify-center items-center text-white rounded-full">
                <i class="fa-sharp fa-regular fa-comment"></i>
              </div>
              <div>
                <p className="font-medium text-[#3b3b3b]">Most Commented</p>
                <p className="text-sm text-[#585858]">Ample Admin</p>
              </div>
            </div>
            <div>
              <span className="bg-[#E4E4E4] text-xs font-medium px-2 py-1 rounded-md">
                +43%
              </span>
            </div>
          </div>
        </div>
        <div>
          <ReactApexChart
            options={area.options}
            series={area.series}
            type="area"
            height="160px"
            width="100%"
          />
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
