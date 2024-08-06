import axios from "axios";

const API_BASE_URL = 'https://koreanjson.com/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getFetch = async (url: string) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error(`GET - Fetch Error in ${url} :: `, error);
    throw error;
  }
}

export const postFetch = async <T>(url: string, data: T) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`POST - Fetch Error in ${url} :: `, error);
    throw error;
  }
}

export const patchFetch = async <T>(url: string, data: T) => {
  try {
    const response = await api.patch(url, data);
    return response.data;
  } catch (error) {
    console.error(`PATCH - Fetch Error in ${url} :: `, error);
    throw error;
  }
}