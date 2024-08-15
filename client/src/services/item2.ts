// import { ApiResponseType, fetcher } from ".";
// import { ITEMS } from "../constants/endpoints";
// import { ItemType } from "../types/item";

// type GetItemResponseType = {
//   message: string;
//   items: ItemType[];
//   page: number;
//   totalPages: number;
//   totalItems: number;
// };

// type GetItemsParamsType = {
//   page?: number;
//   limit?: number;
// };

// const getItems = async ({
//   page,
//   limit,
// }: GetItemsParamsType): Promise<ApiResponseType<GetItemResponseType>> =>
//   fetcher({
//     method: "get",
//     url: `${ITEMS}?page=${page}&limit=${limit}`,
//   });

// export { getItems };
