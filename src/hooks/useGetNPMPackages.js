import { useState, useEffect, useCallback } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import { getNPMPackages } from "../services/npmV2";

export const useGetNPMPackages = (packageName) => {
  const [debounceValue, setDebounceValue] = useState(packageName);

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setDebounceValue(packageName);
    }, 300);
    return () => clearTimeout(subscribe);
  }, [packageName]);

  const getNPMPackagesFunction = useCallback(async (pkgName) => {
    try {
      const response = await getNPMPackages(pkgName);
      return response;
    } catch (error) {
      throw error;
    }
  }, []);

  const { isLoading, error, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["npmPackages", [debounceValue]],
    queryFn: async ({ pageParam }) => {
      console.log(pageParam);
      return await getNPMPackagesFunction(debounceValue);
    },
    enabled: debounceValue.length >= 0,
    keepPreviousData: true,
    retry: 10,
    getNextPageParam: (lastPage) => {
      return lastPage;
    },
  });

  return { isLoading, error, data: data, fetchNextPage };
};
