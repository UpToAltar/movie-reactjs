import {useEffect, useState} from "react";
import axios from "axios";
import {Movie} from "./Home.tsx";
import {useLocation} from "react-router-dom";
import MovieListSearch from "../components/MovieListSearch.tsx";


function SearchPage() {
    const query = new URLSearchParams(useLocation().search).get('title')
    const [moviesSearch, setMoviesSearch] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieLst = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                        },
                    })
                setMoviesSearch(movieLst.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, [query]);

    return (
        <div style={{backgroundColor : 'black'}}>
            <MovieListSearch title={'Kết quả tìm kiếm'} listMovie={moviesSearch} />
        </div>
    );
}

export default SearchPage;