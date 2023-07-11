import React, { useEffect, useState } from "react";
import styles from "./Coins.module.css";
import { Space, Table, Tag } from "antd";
import axios from "axios";

const Coins = () => {
  const api_key = "C3C250CC-FF6F-4D65-AB84-CA28571BC542";
  const link = `https://rest.coinapi.io/v1/exchanges/apikey-${api_key}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get(link).then((res) => {
        setData(res.data);
        console.log(data);
      });
    }
    fetchData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, { website }) => <a href={website}>{text}</a>,
    },
    {
      title: "Volume 1 day",
      dataIndex: "volume_1day_usd",
      key: "volume_1day_usd",
    },
    {
      title: "Volume 1 Hour",
      dataIndex: "volume_1hrs_usd",
      key: "volume_1hrs_usd",
    },
    {
      title: "Volume 1 Month",
      key: "volume_1mth_usd",
      dataIndex: "volume_1mth_usd",
    },
  ];
  return (
    <div className={styles.app_admin_coins}>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Coins;
