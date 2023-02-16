import "./App.css";

import { useEffect, useState } from "react";

import { States } from "./States";

export type TState = {
  key: string;
  name: string;
};

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<Record<string, boolean>>(
    States.reduce((obj, state) => ({ ...obj, [state.key]: false }), {})
  );

  const noOfSelectedStates = Object.values(selectedState).filter(Boolean);

  return (
    <div className="panel">
      <button onClick={() => setToggle((prev) => !prev)} className="toggleBtn">
        {noOfSelectedStates.length > 0 ? (
          <p>{noOfSelectedStates.length} selected</p>
        ) : (
          <p>--Select yout states--</p>
        )}
      </button>
      {toggle && (
        <div className="AllStates">
          {States.map((state: any) => (
            <div
              key={state.key}
              className={
                !selectedState[state.key] ? "stateData" : "selectedstatedata"
              }
            >
              <input
                style={{ cursor: "pointer" }}
                type="checkbox"
                name="state"
                id={`${state.key}`}
                checked={selectedState[state.key]}
                onClick={(e) => {
                  setSelectedState({
                    ...selectedState,
                    [state.key]: e.currentTarget.checked,
                  });
                }}
              />
              <label style={{ cursor: "pointer" }} htmlFor={`${state.key}`}>
                {state.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
