/**
 * @file 定义全局服务管理,一般用于接口管理
 */
import type { LoginParams } from "./types";
import request from "umi-request";

export const fetchPigeon = () => {
  return request("/v1/login", {});
};

export const loginService = async (params: LoginParams) => {
  return new Promise((resolve) => {
    console.log(params);
    resolve({ nid: "123456" });
  });
};

export const userProfileService = () => {
  return new Promise((resolve) => resolve({ email: "1224362143@qq.com" }));
};
