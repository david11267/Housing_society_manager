export const get = async (url: string, userId: string) => {
  // Example: Add userId as a query param or header
  const res = await fetch(`${url}?userId=${userId}`);
  return res.json();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const post = async (url: string, data: any, userId: string) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user-id': userId || '',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

/* const put = async (url: string, data: any) => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'user-id': user?.id || '',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

const del = async (url: string) => {
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'user-id': user?.id || '',
    },
  });
  return res.json();
};
 */
