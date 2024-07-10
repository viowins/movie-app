"use client"
import { Icon } from "@/components"
import { useSearch } from "@/contexts/SearchContext"
import { useRouter } from 'next/navigation';

export default function SearchInput() {
    const router = useRouter();
    const { value, setValue } = useSearch();

    const changeHandle = (e) => {
        setTimeout(() => {
            setValue(e.target.value ? e.target.value : "")
            e.target.value ? router.push(`?s=${e.target.value}`) : router.push("/search")
        }, 500);
    }

    return(
        <label className="fixed left-1/2 -translate-x-1/2">
            <Icon name="search" className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input 
                type="text"
                className="md:min-w-[320px] min-h-[48px] bg-zinc-900 text-zinc-100 pl-9 pr-4 py-2 rounded-full !outline-none transition-all focus:shadow-glow"
                placeholder="Search movie, tv or cast"
                onChange={() => changeHandle(event)}
            />
        </label>
    )
}