'use client'
import React, { useEffect, useState } from 'react'
import { fetchGeneres } from '../api'
import { Genre } from '../types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface GenereFiltersProps {
    genres: Genre[];
    listType: string
}

export default function GenereFilters({ genres, listType }: GenereFiltersProps) {
    // const pathName = usePathname()
    const navigete = useRouter();
    const [page, setPage] = useState<number>(1);
    const searchParams = useSearchParams();
    const [activeGenres, setActiveGenres] = useState<number[]>([]);

    useEffect(() => {
        setPage(parseInt(searchParams.get("page") || "1"))
        // setActiveGenres(parseInt(searchParams.get("genre") || null))
    }, [searchParams])



    return (<>
        {/* <div className=" "> */}
        <div className="flex flex-row flex-wrap gap-3 bg-main py-4 px-8 rounded-2xl ">
            {genres?.map((genre: Genre, i: number) => (
                <button
                    onClick={() => {
                        activeGenres.includes(genre.id)
                            ? setActiveGenres(activeGenres.filter((id) => id !== genre.id))
                            : setActiveGenres([...activeGenres, genre.id]);
                        navigete.push(`/genre/${listType}/?page=${page}?genre=${activeGenres.includes(genre.id) ? `&${genre.id}` : genre.id}`)
                    }}
                    className={`${activeGenres.includes(genre.id) ? "bg-fuchsia-600" : "bg-black/40"}  text-base px-2 rounded-xl`}
                    key={i}
                >
                    {genre.name}
                </button>
            ))}
        </div>
        {/* </div> */}
        {/* <div>{generes?.genres?.map((genere: any) => <div key={genere.id}>{genere.name}</div>)}</div> */}
    </>
    )
}
