const BASE_URL = 'http://localhost:3000/api';

export const get = async (userId: string) => {
  const res = await fetch(`${BASE_URL}/users?userId=${userId}`);
  return res.json();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postHS = async (data: any, userId?: string) => {
  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getHS = async (userId: string) => {
  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};
