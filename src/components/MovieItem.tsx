
import axios from "axios";
import {Movie} from "../HomePage/Home.tsx";
import {useVideo} from "../context/videoProvider.tsx";

type props = {
    movie: Movie,
}
function MovieItem({movie} : props) {
    const {setVideo,setOpenVideo} = useVideo();
    const fetchVideo = async (id : string) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                    },
                });

            setVideo(res.data.results[0].key)
        } catch (error) {
            console.log(error);
        }

    };
    const handleClick = async () => {
        await fetchVideo(movie.id.toString())
        setOpenVideo(true);
    };

    return (
        <div onClick={handleClick} className="hotlist">
            <div className="hotlist-img-wrap p-3">
                <img className="hotlist-img" src={import.meta.env.VITE_IMG_URL + movie.poster_path} alt={movie.title}/>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0.3,
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'black',
                }}/>
                <p className="hotlist-title">{movie.title || movie.original_title}</p>
            </div>

        </div>
    );
}

export default MovieItem;