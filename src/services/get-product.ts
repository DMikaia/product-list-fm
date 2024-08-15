import type { ApiResponse } from "../types/api";
import type { Item } from "../types/item";
import axios from "axios";

export const getProduct = async () => {
  try {
    const serverUrl = import.meta.env.PUBLIC_API_URL;

    const response = await axios.get<ApiResponse<Item[]>, ApiResponse<Item[]>>(
      `${serverUrl}/api/index.json`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    }

    return [] as Item[];
  } catch (error) {
    throw error;
  }
};
