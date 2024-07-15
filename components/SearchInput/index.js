"use client";
import { useEffect } from "react";
import { Icon } from "@/components";
import { useSearch } from "@/contexts/SearchContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { value, setValue, setPage, setSearchData } = useSearch();

    const changeHandle = (e) => {
        const inputValue = e.target.value;
        setTimeout(() => {
            setPage(0);
            setSearchData([])
            setValue(inputValue);
            inputValue ? router.push(`?s=${inputValue}`) : router.push("/search");
        }, 500);
    };

    useEffect(() => {
        if (searchParams.get("s")) {
            setValue(searchParams.get("s"));
        }
    }, [searchParams, setValue]);

    return (
        <label className="fixed left-1/2 -translate-x-1/2">
            <Icon name="search" className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input 
                type="text"
                className="md:min-w-[320px] min-h-[48px] bg-zinc-900 text-zinc-100 pl-9 pr-4 py-2 rounded-full !outline-none"
                placeholder="Search movie, tv or cast"
                onChange={changeHandle}  // Correct event handler
                value={value}  // Controlled input
            />
        </label>
    );
}
