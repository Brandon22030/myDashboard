// import logo from './logo.svg';
// import './App.css';
import { formatInTimeZone } from "date-fns-tz";
import { timezones } from "./timezone";
import { useState } from "react";

import { useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    // <div className="w-fit rounded-[25px] bg-white p-8 aspect">
    //     <p> Time : {date.toLocaleTimeString()}</p>
    //     <p> Date : {date.toLocaleDateString()}</p>

    // </div>
    // <div className="flex justify-center">
    //   <div className="bg-gray-50 rounded-lg shadow-lg px-8 py-6">
    //     <div className="flex flex-col gap-4 items-center justify-between">
    //       <h3 className="text-2xl font-bold text-gray-700">Countdown Timer</h3>
    //       <span id="countdown" className="text-2xl font-semibold text-gray-700">
    //         {/* <div className="w-fit rounded-[25px] bg-white p-8 aspect"> */}
    //           <p> Time : {date.toLocaleTimeString()}</p>
    //           <p> Date : {date.toLocaleDateString('en-US', {timeZone: 'UTC'})}</p>
    //         {/* </div> */}
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative   flex flex-col justify-around items-center w-50 h-50 rounded-2xl shadow-inner shadow-gray-50 bg-neutral-900 text-gray-50">
      <span className="">{date.toLocaleDateString()}</span>
      <span className="z-10 flex items-center text-6xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">
        {/* 12
        <span className="text-xl font-bold text-gray-50 [text-shadow:none]">:</span>
        58 */}
        {date.toLocaleTimeString()}
      </span>
      <div className="text-gray-50 w-48 flex flex-row justify-evenly">
        <span className="text-xs font-bold">89</span>
        <div className="flex flex-row items-center">
          <svg
            className="w-5 h-5 fill-red-500 animate-bounce"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="100"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path
              className=""
              d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z"
              fillRule="evenodd"
            ></path>
          </svg>
          <svg
            className="w-5 h-5 fill-current"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="100"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path
              className="svg-fill-primary"
              d="M80.2,40.7l-1.1-2-.2-.3.3-.3c2.2-14.7-21.3-25.6-20.7-21S57,38.1,45.4,31.8c-9.3-5.1-12.9,12.1-22.8,33.7C16.2,79.4,20.8,82.3,27,81l.3.4L29,83.3a1.4,1.4,0,0,0,1.8.5l.9-.3a1.6,1.6,0,0,0,1.1-1.9l-.5-2.5a38.2,38.2,0,0,0,4.5-2.7L38.6,78a1.8,1.8,0,0,0,2.4-.1l1.2-1.1a1.9,1.9,0,0,0,.4-1.9l-1-2.5L45.5,69l1.7,1.6a1.8,1.8,0,0,0,2.4-.1l.9-1a1.7,1.7,0,0,0,.4-1.8L50,65c5.6-5,11.9-10.9,17.3-15.8l.4.2,1.9,1.1a1.6,1.6,0,0,0,2.1-.2l.8-.8a1.6,1.6,0,0,0,.3-2.1l-1.3-2.1,3.2-3.1,2.2,1.5a1.8,1.8,0,0,0,2.2-.1l.8-.8A1.7,1.7,0,0,0,80.2,40.7Z"
            ></path>
          </svg>
          <svg
            className="w-5 h-5 fill-current"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="100"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path
              className="svg-fill-primary"
              d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
//   return (
//     <div className="p-[20px] text-center">
//       <div className="p-4 bg-white rounded-lg shadow">
//         <div className="flex justify-between">
//           <h2 className="text-xl font-semibold">Timezone</h2>
//           <select onChange={handleChange} value={selectedTimezone}>
//             {timezones.map((tz) => (
//               <option key={tz.timezone} value={tz.timezone}>
//                 {tz.country}
//               </option>
//             ))}
//           </select>
//         </div>
//         <h2>Current Date and Time:</h2>
//         <p>{currentDate}</p>
//       </div>

//     </div>
//   );
// }

// export default Time;