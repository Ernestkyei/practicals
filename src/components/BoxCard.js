import { useState } from "react";

export const BoxCard = ({ results, children }) => {
  const [show, setShow] = useState(true);

  

  return (
    <div>
      {show && (
        <div className={`box box-${results}`}>
          {children}
        </div>
      )}
      {/* <button onClick={() => setShow(!show)} className="trigger">
        {show ? "Hide" : "Show"}
      </button> */}
    </div>
  );
};
