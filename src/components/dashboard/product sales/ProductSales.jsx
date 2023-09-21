const ProductSales = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-6 lg:gap-4 2xl:gap-6">
      <div className="w-full p-4 shadow-md relative flex flex-col justify-between col-span-6 row-span-3 xl:col-span-2 rounded-xl lg:row-span-1 border bg-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl">Total Sales</p>
          </div>
          <div>
            <select defaultValue="1" className="border py-2 rounded-md text-lg">
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
      <div className="w-full p-4 shadow-md relative flex flex-col justify-between col-span-6 row-span-2 xl:col-span-4 rounded-xl lg:row-span-1 border bg-white">
        <div className="flex">
          <div>
            <p className="text-xl">Total Sales</p>
          </div>
          <div>
            <select defaultValue="1">
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
