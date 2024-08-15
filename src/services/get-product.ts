import type { ApiResponse } from "../types/api";
import type { Item } from "../types/item";
import axios from "axios";

export const getProduct = async (url: URL): Promise<Item[]> => {
  try {
    const response = await axios.get<ApiResponse<Item[]>, ApiResponse<Item[]>>(
      `${url.protocol}//${url.host}/api/products.json`,
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
