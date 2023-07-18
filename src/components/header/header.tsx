import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nabigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          nabigate("/login");
        }}
      >
        去登录
      </button>
      <button
        onClick={() => {
          nabigate("/home");
        }}
      >
        首页
      </button>
    </div>
  );
};

export default Header;
