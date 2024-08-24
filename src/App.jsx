import { useState } from "react";
import fingerPrint from "./assets/finger-print.png";
import Details from "./Details";
import Footer from "./Footer";
import { checkDate, formatDate, getGovernorate } from "./utils";

function App() {
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [loc, setLoc] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleClick = () => {
    if (value.length !== 14) return;

    if (!isNaN(parseInt(value, 10))) {
      // get birth date
      const century = (parseInt(value[0]) + 17) * 100;
      const year = parseInt(value.slice(1, 3));
      const month = parseInt(value.slice(3, 5));
      const day = parseInt(value.slice(5, 7));
      const date = `${century + year}-${month}-${day}`;

      if (checkDate(date)) {
        setBirthDate(formatDate(date));
      } else {
        setBirthDate("تاريخ ميلاد خطأ");
      }

      // get goverment
      const government = getGovernorate(value.slice(7, 9));
      if (government !== "Unknown Code") {
        setLoc(government);
      } else {
        setLoc("كود المحافظة خطأ");
      }

      // get gender
      const gend = parseInt(value[12]) % 2 === 0 ? "اثنى" : "ذكر";
      setGender(gend);
    } else {
      return;
    }
  };

  return (
    <div className="bg-[#DBE7F4] p-8 min-h-screen">
      <div className="bg-[#cfdfee] rounded-3xl overflow-hidden shadow-custom">
        <div className="flex flex-col bg-white p-6 sm:p-10">
          <div>
            <img src={fingerPrint} alt="finger print" />
          </div>
          <div className="flex flex-col gap-2 mt-3 self-center max-w-[822px] w-full">
            <h1 className="font-[900] text-[40px] text-[#5982AB] text-center">
              !ممكن نتعرف
            </h1>
            <p className="text-lg font-normal text-[#858585] text-center">
              من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة
            </p>
            <div className="flex w-full bg-[#F3F3F3] rounded-[15px] py-2.5 px-4 gap-4 my-4">
              <button
                className="bg-[#5982AB] px-8 py-1 rounded-3xl font-[900] text-xl text-white"
                onClick={handleClick}
              >
                إبحث
              </button>
              <div className="flex-1" dir="rtl">
                <input
                  className="bg-transparent text-xl font-[300] text-[#858585] placeholder:text-[#B8B8B8] w-full outline-0"
                  placeholder="رقم البطاقة ..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M27.6471 26.0043L19.6135 17.9584C21.1973 16.0574 22.1498 13.6281 22.1498 10.9749C22.1498 4.92175 17.1862 0 11.0806 0C4.9751 0 0 4.92749 0 10.9806C0 17.0337 4.96362 21.9555 11.0692 21.9555C13.6629 21.9555 16.05 21.0653 17.9436 19.5779L26.0059 27.6468C26.4765 28.1177 27.1766 28.1177 27.6471 27.6468C28.1176 27.1759 28.1176 26.4752 27.6471 26.0043ZM2.3527 10.9806C2.3527 6.22541 6.26622 2.36037 11.0692 2.36037C15.8721 2.36037 19.7856 6.22541 19.7856 10.9806C19.7856 15.7358 15.8721 19.6009 11.0692 19.6009C6.26622 19.6009 2.3527 15.7301 2.3527 10.9806Z"
                    fill="#878787"
                  />
                </svg>
              </div>
            </div>
          </div>
          {gender || loc || birthDate ? (
            <Details gender={gender} loc={loc} birthDate={birthDate} />
          ) : (
            <h1 className="text-center text-3xl py-12 font-[700] text-[#858585]">
              إكتب أي رقم قومي عشان تظهرلك شوية بيانات ليه
            </h1>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
