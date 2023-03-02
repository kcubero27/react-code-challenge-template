import { type FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { People } from "@pages/people";

const router = createBrowserRouter([
  {
    path: "/",
    element: <People />,
  },
]);

export const Routes: FC = () => {
  return <RouterProvider router={router} />;
};
