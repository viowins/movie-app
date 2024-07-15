"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getSearchData } from "@/services/movie";
import InfiniteScroll from "react-infinite-scroll-component";
import { SwiperSection, SkeletonSwiper } from "@/components";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (!value && value == "") return;
    const fetchInitialSearch = async () => {
      let initialSearch = [];
      for (let i = 0; i < 5; i++) {
        const result = await getSearchData(`query=${value}&page=${page + i}`);
        initialSearch = [...initialSearch, { data: result.results, page: page + i }];
        setTotalPages(result.total_pages)
      }
      setSearchData(initialSearch);
      setPage(prev => prev + 5);
    };
    fetchInitialSearch();
  }, [value]);

  const fetchMoreData = async () => {
    if (totalPages == page) return;
    const newSearch = await getSearchData(`query=${value}&page=${page + 1}`);
    console.log(newSearch)
    setSearchData(prev => [...prev, { data: newSearch.newSearch, page }]);
    setPage(prev => prev + 1);
  }

  useEffect(() => {
    console.log(searchData)
  }, [searchData, value])
  

  return (
    <SearchContext.Provider value={{ value, setValue, searchData, setPage, setSearchData }}>
      {children}
      {searchData.length > 0 ? (
        <div className="mt-8">
          <InfiniteScroll
            dataLength={searchData.length}
            next={fetchMoreData}
            hasMore={totalPages != page}
            loader={<SkeletonSwiper />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            style={{ overflow: 'unset' }}
          >
            {searchData.map((search, index) => (
              <SwiperSection key={index} movies={search.data} index={1000 - search.page} />
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <div className="text-center mt-16">Search</div>
      )}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
