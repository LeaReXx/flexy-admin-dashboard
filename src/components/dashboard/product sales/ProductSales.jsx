import ReactApexChart from "react-apexcharts";
import userImage1 from "../../../assets/imgs/components image/1-32ddcd87.jpg";
import userImage2 from "../../../assets/imgs/components image/2-1c16a104.jpg";
import userImage3 from "../../../assets/imgs/components image/3-0594bd0b.jpg";
import userImage4 from "../../../assets/imgs/components image/4-76ce6c0c.jpg";
import userImage5 from "../../../assets/imgs/components image/5-d39d5aaf.jpg";
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
