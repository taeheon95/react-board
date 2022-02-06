import React, { useEffect } from "react";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";

interface componentProps<T> {
  [key: string]: unknown;
  queryResult?: T;
}

function queryHoc<queryResultType>(
  WrappedComponent: React.ComponentType<componentProps<queryResultType>>,
  queryKey: Readonly<QueryKey>,
  queryUrl: Readonly<string>,
  queryOptions?: Readonly<
    Omit<
      UseQueryOptions<queryResultType, Error, queryResultType, QueryKey>,
      "queryKey" | "queryFn"
    >
  >
) {
  return function QueryHoc(props: componentProps<queryResultType>) {
    const { data, isLoading, isError, status } = useQuery<
      queryResultType,
      Error
    >(
      queryKey,
      async () => {
        const response: Response = await fetch(queryUrl);
        return response.json();
      },
      queryOptions
    );

    useEffect(() => {
      console.log("%c status : ", "font-weight:bold", status);
      console.log("%c queryUrl : ", "color:#009ff2;font-weight:bold", queryUrl);
      console.log("%c queryData : ", "color:#43a547;font-weight:bold", data);
    }, [status]);

    return isLoading ? (
      <div>로딩중</div>
    ) : isError ? (
      <div>실패</div>
    ) : (
      <WrappedComponent {...props} queryResult={data} />
    );
  };
}

export default queryHoc;
