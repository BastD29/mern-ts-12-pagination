import { RouteObject } from "react-router-dom";
import Layout from "../components/layouts/Layout/Layout";
import { Home, NotFound, Store } from "./routes";
import { ItemProvider } from "../context/item/provider3";
import { PaginationProvider } from "../context/pagination/provider";
import { FilterProvider } from "../context/filter/provider";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        element: (
          <FilterProvider>
            <PaginationProvider>
              <ItemProvider>
                <Store />
              </ItemProvider>
            </PaginationProvider>
          </FilterProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
