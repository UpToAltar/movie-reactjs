import RatingStar from './../assets/rating.png';
import RatingHalfStar from './../assets/rating-half.png';
import imgBanner from './../assets/temp-1.jpeg';
import {Button} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";

function Banner() {
    const isDiplayTitleH1 = useMediaQuery({ minWidth: 950 });
    const isDisplayDes = useMediaQuery({ minWidth: 680 });
    return (
        <div>
            <div style={{backgroundImage: `url('/banner.png')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', color: 'white', display: 'flex',height : '600px'}}>
                <div style={{position: 'absolute', width: '100%', height: '100%', opacity: 0.3, top : 0, left : 0, right : 0, backgroundColor : 'black',}}/>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    justifyContent: 'space-around',
                    alignItems: 'center',

                }}>
                    {/*left*/}
                    {isDisplayDes && <div style={{width: '50%'}}>
                        {isDiplayTitleH1 && <h1 style={{
                            fontSize: '60px',
                            marginBottom: '30px',
                            background: 'linear-gradient(to right, #f44336 0%, #eaeaea 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold'
                        }}>NETFLIX XIN GIỚI THIỆU</h1>}
                        <h2 style={{fontSize: '40px', marginBottom: '30px'}}>Nghe nói em thích tôi</h2>
                        <div style={{display: 'flex', marginBottom: '30px'}}>
                            <img src={RatingStar} alt="rating"
                                 style={{width: '40px', height: '40px', marginRight: '15px'}}/>
                            <img src={RatingStar} alt="rating"
                                 style={{width: '40px', height: '40px', marginRight: '15px'}}/>
                            <img src={RatingStar} alt="rating"
                                 style={{width: '40px', height: '40px', marginRight: '15px'}}/>
                            <img src={RatingStar} alt="rating"
                                 style={{width: '40px', height: '40px', marginRight: '15px'}}/>
                            <img src={RatingHalfStar} alt="rating"
                                 style={{width: '40px', height: '40px', marginRight: '15px'}}/>
                        </div>
                        <p style={{marginBottom: '30px'}}>No less important than any of the above are the conditions
                            under which the motion picture ideally is seen, where everything helps to dominate the
                            spectators. They are taken from their everyday environment, partially isolated from others,
                            and comfortably seated in a dark auditorium. The darkness concentrates their attention and
                            prevents comparison of the image on the screen with surrounding objects or people. For a
                            while, spectators live in the world the motion picture unfolds before them.</p>
                        <div>
                            <Button size="lg" variant="danger">Xem phim</Button>
                            <Button size="lg" style={{marginLeft: '20px'}} variant="dark">Trailer</Button>
                        </div>
                    </div>}
                    {/*right*/}
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '300px', height: '500px'}}>
                            <img src={imgBanner} alt="banner" style={{width: '100%', height: '100%'}}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;