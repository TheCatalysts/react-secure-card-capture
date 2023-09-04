import React, { useState } from "react";
import ErrorMesseges from "./ErrorMessages";
import * as moment from "moment";
const MonthPickeer = ({
  id,
  label,
  value,
  onChange,
  type,
  name,
  setIsValid,
}) => {
  const [isMonthtouched, setMonthTouched] = useState(false);
  const [isYeartouched, setYearTouched] = useState(false);
  const [state, setState] = useState({
    month: null,
    year: null,
  });

  const computeDate = (field, value) => {
    const values = { ...state, [field]: value };
    setState(values);
    onChange(moment(new Date(state.year, state.month, 1)).format("DD/MM/YYYY"));
    setIsValid(true);
  };

  return (
    <div className="mb-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="flex">
        <div className="w-1/3">
          <input
            id={id}
            name={name}
            onBlur={() => setMonthTouched(true)}
            className={`primary-input w-full p-2 rounded border focus:outline-none focus:ring 
            
        `}
            placeholder="MM"
            type="number"
            value={state.month}
            onChange={(e) => {
              computeDate("month", e.target.value);
            }}
          />
          {
            <ErrorMesseges
              label="Month"
              validations={{ required: true, min: 1, max: 12 }}
              value={state.month}
              touched={isMonthtouched}
              setIsValid={setIsValid}
            />
          }
        </div>
        /
        <div className="w-2/3">
          <input
            placeholder="YYYY"
            id={id}
            name={name}
            value={state.year}
            onBlur={() => setYearTouched(true)}
            className={`primary-input w-full p-2 rounded border focus:outline-none focus:ring 
      
        `}
            type={type}
            onChange={(e) => {
              computeDate("year", e.target.value);
            }}
          />
          {
            <ErrorMesseges
              label="Year"
              validations={{ required: true, min: 2000 }}
              value={state.year}
              touched={isYeartouched}
              setIsValid={setIsValid}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default MonthPickeer;
