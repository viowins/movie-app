"use client"
import { SearchInput } from "@/components"
import { SearchProvider } from "@/contexts/SearchContext"

export default function SearchContainer() {
    return(
        <SearchProvider>
            <SearchInput />
        </SearchProvider>
    )
}