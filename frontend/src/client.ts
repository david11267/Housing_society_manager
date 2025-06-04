import { fakeData, type HsData } from './types';

const BASE_URL = 'http://localhost:3000/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postHS = async (data: any, token: string) => {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getHS = async (token: string): Promise<HsData[]> => {
  return fakeData;
  /*  const res = await fetch(`${BASE_URL}`, {
    method: 'Get',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return fakeData.json(); */
};
