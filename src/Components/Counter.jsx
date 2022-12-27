import { useContext, useState } from "react";

export function Countert() {
  const [counert, setCounert] = useState(0);

  return (
    <div className="text-center">
      <button
        className=" bg-gray-700 text-white font-semibold hover:border-slate-600  py-2 px-4 content-center my-10 border border-gray-400 rounded shadow  "
        onClick={() => {
          setCounert(counert + 1);
        }}
      >
        Count This: {counert}
      </button>
    </div>
  );
}
