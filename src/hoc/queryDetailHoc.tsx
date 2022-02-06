import React, { useEffect } from "react";
import { QueryKey, useQuery, UseQueryOptions } from "react-query";

interface componentProps<T> {
  [key: string]: unknown;
  queryResult?: T;
  queryParams?: {
    [key: string]: string;
  };
}

function queryDetailHoc<queryResultType>(
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
  return function QueryDetailHoc(props: componentProps<queryResultType>) {
    const { queryParams } = props;
    const url: string =
      queryParams === undefined || queryParams === null
        ? queryUrl
        : `${queryUrl}?${Object.entries(queryParams)
            .map(([key, value]) => {
              return `${key}=${value}`;
            })
            .join("&")}`;
    const { data, isLoading, isError, status } = useQuery<
      queryResultType,
      Error
    >(
      queryKey,
      async () => {
        const response: Response = await fetch(url);
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

export default queryDetailHoc;
