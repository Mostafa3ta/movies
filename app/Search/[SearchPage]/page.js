 
"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { PagesButtons } from '../../components'
import { imgBaseUrl, options } from '../../utils'
import Image from 'next/image'

function Search() {

    const params = useParams()
    const pageNum = params.SearchPage
    const [Results, setResults] = useState([])
    const [timer, setTimer] = useState(null);

    async function searchResults(value, pageNum) {
        const newValue = value.split(' ').join('%20')
        await fetch(`https://api.themoviedb.org/3/search/multi?query=${newValue}&page=${pageNum}`, options, {
            next: {
                revalidate: 300
            }
        })
            .then(response => response.json())
            .then(response => setResults(response))
    }

    useEffect(() => {
        searchResults(localStorage.getItem('searchValue'), pageNum);
    }, [pageNum])

    const handleChange = (value) => {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(() => {
                searchResults(value, 1)
                localStorage.setItem('searchValue', value)
            }, 1500)
        );

    }

    return <>


        <Helmet>
            <title>Search</title>
        </Helmet>

        <div className='container text-white'>
            <div className='col-sm-10 py-2 my-3 text-center content-margain ms-auto'>
                <form className="form-control search-form w-50 m-auto ">
                    <input type="text" onChange={(e) => handleChange(e.target.value)} placeholder="Search for..." className="search-input rounded-0 form-control" />
                    <button type="button" className="btn"><i className="fa-solid fs-6 search-icon fa-magnifying-glass"></i></button>
                </form>
            </div>

            {Results.length === 0 || localStorage.getItem('searchValue') === '' && <>
                <div className='d-flex'>
                    <h2 className=' ms-4 py-2'><i className="fa-solid fa-angles-right fs-4"></i> Search Results </h2>
                    <i className="fa-solid text-danger fs-4 fa-magnifying-glass"></i>
                </div>
                <div className='fs-4 px-3 ms-3 mb-5'>`{localStorage.getItem('searchValue')}`</div>
                <div className='row text-center my-2'>
                    {Results.total_results === 0 ? <h2 className='fst-italic'>No Results Found </h2> : <>
                        {Results.results?.map((result) =>
                            <div className='col-lg-3 col-md-4 col-6  my-2 px-2'>
                                {result.media_type !== "person" ? <>
                                    {result.media_type === "movie" ? <>
                                        <Link href={`/Movies/MovieDetails/${result.id}`}>
                                            <div className='d-flex align-items-center flex-column img-content'>
                                                {result.poster_path === null ?
                                                    // <Image src="/download3.jpg" className='w-75 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                    <img src="/download3.jpg" className='w-75 m-2 rounded-2' alt='poster' />
                                                    :
                                                    <img src={imgBaseUrl + result.poster_path} className='w-75 m-2 rounded-2' alt='poster' />
                                                    // <Image src={imgBaseUrl + result.poster_path} className='w-75 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                }
                                                <i className="fa-regular fa-circle-play play-ico mt-5 py-5"></i>
                                                <span > <i className="fa-solid fa-film text-danger px-1 fs-5 "></i> {result.title}</span>
                                            </div>
                                        </Link>
                                    </> : <>
                                        <Link href={` /TvShows/ShowDetails/${result.id}`}>
                                            <div className='d-flex align-items-center flex-column img-content'>
                                                {result.poster_path === null ?
                                                    // <Image src="/download3.jpg" className='w-75 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                    <img src="/download3.jpg" className='w-75 m-2 rounded-2' alt='poster' />
                                                    :
                                                    <img src={imgBaseUrl + result.poster_path} className='w-75 m-2 rounded-2' alt='poster' />
                                                    // <Image src={imgBaseUrl + result.poster_path} className='w-75 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                                }
                                                <i className="fa-regular fa-circle-play play-ico mt-5 py-5"></i>
                                                <span> <i className="fa-solid fa-tv text-warning px-2 fs-5"></i>{result.name}</span>
                                            </div>
                                        </Link>
                                    </>}
                                </> : <div className='d-flex align-items-center flex-column'>
                                    {result.profile_path === null ?
                                        // <Image src="/download3.jpg" className='w-75 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                        <img src="/download3.jpg" className='w-75 m-2 rounded-2' alt='poster' />
                                        :
                                        <img src={imgBaseUrl + result.profile_path} className='w-75 m-2 rounded-2' alt='poster' />
                                        // <Image src={imgBaseUrl + result.profile_path} className='w-75 m-2 rounded-2 h-auto' alt='poster' priority width={0} height={0} sizes='100vw' />
                                    }
                                    <span> <i className="fa-solid fa-masks-theater text-warning px-2 fs-5"></i>{result.name}</span>
                                </div>}
                            </div>
                        )}
                        <PagesButtons movies={Results} pageNavLink={`/Search`} />
                    </>}
                </div>
            </>}

        </div>
    </>
}

export default Search