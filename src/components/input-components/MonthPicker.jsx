import React, { useState } from "react";
import ErrorMesseges from "./ErrorMessages";
import locale from "antd/lib/locale/en_US";
import { DatePicker, Space } from "antd";

const MonthPicker = ({
  id,
  label,
  value,
  type,
  setIsValid,
  validations,
  onChange,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [touched, setTouched] = useState(false);

  const handleDateChange = (date, dateString) => {
    setSelectedDate(date);
    onChange(dateString);
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
        <div className="mb-2">
          <Space direction="vertical">
            <DatePicker
              id={id}
              locale={locale}
              value={selectedDate}
              type={type}
              format="MM/YY"
              onChange={handleDateChange}
              onBlur={() => setTouched(true)}
              validations={validations}
              className={`primary-input w-full p-2 rounded border focus:outline-none focus:ring `}
              renderExtraFooter={() => (
                <div className="text-gray-400">MM/YY format</div>
              )}
            />
          </Space>
        </div>
        {
          <ErrorMesseges
            label={label}
            validations={{ required: true }}
            value={value}
            setIsValid={setIsValid}
            touched={touched}
          />
        }
      </div>
    </div>
  );
};

export default MonthPicker;
