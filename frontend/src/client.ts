import { type HousingSociety } from "./types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postHS = async (data: HousingSociety, token: string) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const putHS = async (data: HousingSociety, token: string) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "Put",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getHS = async (token: string): Promise<HousingSociety[]> => {
  const res = await fetch(`${BASE_URL}`, {
    method: "Get",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export const deleteHS = async (data: HousingSociety, token: string) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "Delete",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
