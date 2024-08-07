import {Fragment} from 'react';
import {Movie} from "../HomePage/Home.tsx";
import MovieItem from "./MovieItem.tsx";
function MovieListSearch({title, listMovie} : {title : string, listMovie : Movie[]}) {
    return (
        <div style={{color: 'white', backgroundColor: 'black'}}>
            <h3 className="p-3 mb-3 text-uppercase ">{title}</h3>
            <div style={{display:"flex",flexWrap : 'wrap'}}>
                {listMovie.map((movie, index) =>
                    <Fragment key={index}>
                        <MovieItem movie={movie}/>
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default MovieListSearch;