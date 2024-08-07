import {createContext, useContext, useState} from "react";
import YouTube from "react-youtube";
import Modal from 'react-modal';
interface VideoContextType {
    modalIsOpen: boolean;
    videoKey: string;
    setVideo: (key: string) => void;
    setOpenVideo: (isOpen: boolean) => void;
}

const videoContext = createContext<VideoContextType | undefined>(undefined);


export const useVideo = () => {
    const context = useContext(videoContext);
    if (!context) {
        throw new Error('useVideo must be used within a VideoProvider');
    }
    return context;
};
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay : {
        position : 'fixed',
        zIndex : 9999,
    }
};

const optsYoutube = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

export const VideoProvider = ({children}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [videoKey, setVideoKey] = useState('');
    const setVideo = (key : string) => {
        setVideoKey(key);
    };
    const setOpenVideo = (isOpen : boolean) => {
        setIsOpen(isOpen);
    }

    return (
        <videoContext.Provider value={{modalIsOpen,videoKey,setVideo,setOpenVideo}}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <YouTube videoId={videoKey} opts={optsYoutube}/>
            </Modal>
        </videoContext.Provider>
    )
}