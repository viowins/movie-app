"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getSearchData } from "@/services/movie";
import InfiniteScroll from "react-infinite-scroll-component";
import { SwiperSection, SkeletonSwiper } from "@/components";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (!value && value == "") return;
    const fetchInitialData = async () => {
      let initialData = [];
      for (let i = 0; i < 5; i++) {
        const result = await getSearchData(`query=${value}&page=${page + i}`);
        initialData = [
          ...initialData,
          { data: result.results, page: page + i },
        ];
      }
      setSearchData(initialData);
      setPage((prev) => prev + 5);
    };
    fetchInitialData();
  }, [value]);

  const fetchMoreData = async () => {
    const newData = await getSearchData(`query=${value}page=${page}`);
    setSearchData((prev) => [...prev, { data: newData.results, page }]);
    setPage((prev) => prev + 1);
  };

  /*useEffect(() => {
    if (!value && value == "") return;
    getSearchData(`query=${value}&page=1`).then((data) => setSearchData(data));
  }, [value]);*/

  useEffect(() => {
    console.log(searchData)
  }, [searchData])

  return (
    <SearchContext.Provider value={{ value, setValue, searchData }}>
      {children}
      <InfiniteScroll
        dataLength={searchData.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<SkeletonSwiper />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ overflow: "unset" }}
      >
        {searchData.map((search, index) => (
          <SwiperSection
            key={index}
            movies={search.data}
            index={1000 - search.page}
            title={index == 0 && `Search for ${value}`}
          />
        ))}
      </InfiniteScroll>
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
