
import Header from "../components/Header.tsx";
import Banner from "../components/Banner.tsx";
import {Outlet} from "react-router-dom";
import {VideoProvider} from "../context/videoProvider.tsx";

function HomePage() {

    return (
        <VideoProvider>
            <div style={{backgroundColor: 'black'}}>
                <Header/>
                <Banner/>
                <Outlet/>
            </div>
        </VideoProvider>
    );
}

export default HomePage;