
import '../assets/MovieList.css';
import MovieItem from "./MovieItem.tsx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Fragment} from "react";
import {Movie} from "../HomePage/Home.tsx";

const responsiveList = {
    superLargeDesktop: {
        breakpoint: { max: 10000, min: 1500 },  // Đặt giá trị max cao để bao quát các màn hình lớn hơn
        items: 5
    },
    desktop: {
        breakpoint: { max: 1500, min: 1200 },   // Màn hình desktop lớn hơn
        items: 4
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },    // Màn hình tablet lớn hơn
        items: 3
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },       // Màn hình mobile
        items: 1
    },
};

function MovieList({title, listMovie} : {title : string, listMovie : Movie[]}) {
    return (

        <div style={{color : 'white',backgroundColor : 'black'}}>
            <h3 className="p-3 mb-3 text-uppercase ">{title}</h3>
            <Carousel responsive={responsiveList} className="list-movie-wrap">
                {listMovie.map((movie, index) =>
                    <Fragment key={index}>
                        <MovieItem movie={movie} />
                    </Fragment>
                )}
            </Carousel>;
        </div>
    );
}

export default MovieList;