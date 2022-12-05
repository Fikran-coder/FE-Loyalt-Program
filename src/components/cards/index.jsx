import React from "react";
import { Card } from "antd";
import { AiOutlineUser } from "react-icons/ai";

const Cards = () => {
  return (
    <div>
      <Card
        className="shadow-md shadow-blue-500 "
        type="inner "
        title="2022-01-01"
      >
        <div className="flex">
          <div>
            <AiOutlineUser className=" flex-none w-24 h-24 " />
          </div>
          <div className="w-screen ml-8">
            <p className="text-2xl">content</p>
            <p className="text-2xl">content</p>
            <p className="text-2xl text-right">Point</p>
          </div>
        </div>
      </Card>
      <Card
        style={{
          marginTop: 16,
        }}
        type="inner"
        title="Tanggal"
        className="shadow-md shadow-blue-500"
      >
        <div className="flex">
          <div>
            <AiOutlineUser className=" flex-none w-24 h-24 " />
          </div>
          <div className="w-screen ml-8">
            <p className="text-2xl">content</p>
            <p className="text-2xl">content</p>
            <p className="text-2xl text-right">Point</p>
          </div>
        </div>
      </Card>
      <Card
        style={{
          marginTop: 16,
        }}
        type="inner"
        title="Tanggal"
        className="shadow-md shadow-blue-500"
      >
        <div className="flex">
          <div>
            <AiOutlineUser className=" flex-none w-24 h-24 " />
          </div>
          <div className="w-screen ml-8">
            <p className="text-2xl">content</p>
            <p className="text-2xl">content</p>
            <p className="text-2xl text-right">Point</p>
          </div>
        </div>
      </Card>
      <Card
        style={{
          marginTop: 16,
        }}
        type="inner"
        title="Tanggal"
        className="shadow-md shadow-blue-500"
      >
        <div className="flex">
          <div>
            <AiOutlineUser className=" flex-none w-24 h-24 " />
          </div>
          <div className="w-screen ml-8">
            <p className="text-2xl">content</p>
            <p className="text-2xl">content</p>
            <p className="text-2xl text-right">Point</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
