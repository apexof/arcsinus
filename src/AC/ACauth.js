import { RSAA } from "redux-api-middleware";

export const START = "_START";
export const ERR = "_ERR";
export const LOG_IN = "LOG_IN";
export const REG = "REG";
export const SMS_CHECK = "SMS_CHECK";
export const CLEAR_REG = "CREAR_REG";
export const CLEAR_LOGIN = "CLEAR_LOGIN";

export function smsCheck(formData) {
  return {
    [RSAA]: {
      method: "POST",
      endpoint: "/sms-check",
      body: formData,
      types: [START, SMS_CHECK, SMS_CHECK + ERR]
    }
  };
}

export function login(formData) {
  return {
    [RSAA]: {
      method: "POST",
      endpoint: "/login",
      body: formData,
      types: [START, LOG_IN, LOG_IN + ERR]
    }
  };
}

export function registrate(formData) {
  return {
    [RSAA]: {
      method: "POST",
      endpoint: "/registrate",
      body: formData,
      types: [START, REG, REG + ERR]
    }
  };
}
export function clearReg() {
  return { type: CLEAR_REG };
}
export function clearLogin() {
  return { type: CLEAR_LOGIN };
}
