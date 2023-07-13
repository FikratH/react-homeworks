import React, { useContext } from "react";
import { Space, Select } from "antd";
import MainContext from "../../contexts/MainContext";

const SelectComponent = () => {
  const { setFilterValue } = useContext(MainContext);

  const handleChange = (value) => {
    setFilterValue(value);
  };
  return (
    <Space wrap>
      <Select
        defaultValue="Filter by Region"
        style={{
          width: "200px",
        }}
        onChange={handleChange}
        options={[
          {
            value: "",
            label: "All",
          },
          {
            value: "africa",
            label: "Africa",
          },
          {
            value: "americas",
            label: "America",
          },
          {
            value: "asia",
            label: "Asia",
          },
          {
            value: "europe",
            label: "Europe",
          },
          {
            value: "oceania",
            label: "Oceania",
          },
        ]}
      />
    </Space>
  );
};

export default SelectComponent;
