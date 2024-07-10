"use client"
import { useSearch } from "@/contexts/SearchContext"

export default function SearchWrapper() {
    const { searchData } = useSearch();

    return(
        <div>test</div>
    )
}