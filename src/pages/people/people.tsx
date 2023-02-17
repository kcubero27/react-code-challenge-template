import { usePeople } from "@hooks/use-people";
import { type FC } from "react";

export const People: FC = () => {
  const { data, isError, isLoading } = usePeople();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  console.log("DATA", data);

  return <p>data</p>;
};