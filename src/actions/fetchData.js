import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchData = async (collection) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/${collection}`);
    return await response.data.data;
  } catch (error) {
    console.error("Data fetching failed.", error);
  }
};

export const fetchDataWithImage = async (collection) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/${collection}?populate=*`
    );
    return response.data.data;
  } catch (error) {
    console.error("Data fetching failed.", error);
  }
};
