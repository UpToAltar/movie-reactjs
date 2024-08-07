
import MovieList from "../components/MovieList.tsx";
import {useEffect, useState} from "react";
import axios from "axios";


export type Movie = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

function Home() {
    const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);
    const [moviesTopRated, setMoviesTopRated] = useState<Movie[]>([]);
    const [moviesUpcoming, setMoviesUpcoming] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [popularResponse, topRatedResponse,upcommingResponse] = await Promise.all([
                    axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                        },
                    }),
                    axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                        },
                    }),
                    axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                        },
                    }),
                ]);

                setMoviesPopular(popularResponse.data.results);
                setMoviesTopRated(topRatedResponse.data.results);
                setMoviesUpcoming(upcommingResponse.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div style={{backgroundColor : 'black'}}>
            <MovieList title={'Phim hot'} listMovie={moviesPopular} />
            <MovieList title={'Phim đề cử'} listMovie={moviesTopRated} />
            <MovieList title={'Phim sắp chiếu'} listMovie={moviesUpcoming} />
        </div>
    );
}

export default Home;