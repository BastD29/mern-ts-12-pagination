import { ApiResponseType, fetcher } from ".";
import { ITEMS } from "../constants/endpoints";
import { ItemType } from "../types/item";

type GetItemResponseType = {
  message: string;
  items: ItemType[];
  page: number;
  totalPages: number;
  totalItems: number;
};

type GetItemsParamsType = {
  page?: number;
  limit?: number;
  name?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
};

const getItems = async ({
  page,
  limit,
  name,
  category,
  minPrice,
  maxPrice,
  inStock,
}: GetItemsParamsType): Promise<ApiResponseType<GetItemResponseType>> => {
  const queryParams = new URLSearchParams();

  if (page) queryParams.append("page", page.toString());
  if (limit) queryParams.append("limit", limit.toString());
  if (name) queryParams.append("name", name);
  if (category) queryParams.append("category", category);
  if (minPrice) queryParams.append("minPrice", minPrice.toString());
  if (maxPrice) queryParams.append("maxPrice", maxPrice.toString());
  if (inStock !== undefined) queryParams.append("inStock", inStock.toString());

  const queryString = queryParams.toString();
  const url = `${ITEMS}?${queryString}`;

  return fetcher({
    method: "get",
    url: url,
  });
};

export { getItems };
