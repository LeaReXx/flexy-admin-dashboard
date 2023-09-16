import girlImage from "../../../assets/imgs/components image/girl_image.png";
const FinancialReport = ({ name }) => {
  return (
    <section>
      <div className="grid grid-cols-4 grid-rows-2 gap-5">
        <div className="shadow-md px-6 py-8 w-full basis-full border relative overflow-hidden bg-white  rounded-xl col-span-2 row-span-1">
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
        <div className="w-full shadow-md bg-white col-span-2 rounded-xl row-span-2 border"></div>
        <div className="w-full shadow-md bg-white col-span-1 rounded-xl row-span-1 border"></div>
        <div className="w-full shadow-md bg-white col-span-1 rounded-xl row-span-1 border"></div>
      </div>
    </section>
  );
};

export default FinancialReport;
