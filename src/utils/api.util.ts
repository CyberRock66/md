import axios from 'axios';

let token;

if (typeof window !== 'undefined') {
  token = localStorage.getItem('token');
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: { Authorization: `Bearer ${token || ''}` },
});

export const axiosServerInstance = (tokenServer: string) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: { Authorization: `Bearer ${tokenServer || ''}` },
  });
