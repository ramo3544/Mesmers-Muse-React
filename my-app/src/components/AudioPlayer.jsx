import React, {useEffect, useRef, useState} from "react";
import '../stylesheets/AudioPlayer.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const AudioPlayer = ({audioSrc, coverArtImg, songName}) => {

    //State variables to manage the player's status and current time.
    const[isPlaying, setIsPlaying] = useState(false);
    const[currentTime, setCurrentTime] = useState(0);
    const[duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    //Function to seek specific time in the audio track.
    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    //Function to update the current time and duration of the audio track.
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    //Function to handle playing the audio track.
    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    //Function to handle pausing the audio track.
    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };


    //Function to toggle play/pause state of the audio track.
    const handlePlayPause = () => {
        if(isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    //Function to format time in mm:ss format.
    const formatDuration = (durationSeconds) => {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        const currentVal = audioRef.current
        currentVal.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            currentVal.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, []);

    return (
        <div className='player-card mx-auto d-block pt-5 w-auto'>
            <div>
                <h6>{songName}</h6>
            </div>
            <img className='card-img' src={coverArtImg} alt='Cover Image'/>
            {/* Input Range for seeking within the audio track. */}
            <input
                type='range'
                min='0'
                max={duration}
                value={currentTime}
                onChange={handleSeek}
            />
            {/* The <audio> element to play the audio track. */}
            <audio ref={audioRef} src={audioSrc}/>

            {/* Display current time and total duration of the audio track. */}
            <div className='track-duration'>
                <p>{formatDuration(currentTime)}</p>
                <p>{formatDuration(duration)}</p>
            </div>
            {/* Play/Pause button to control audio playback. */}
            <button className='play-button' onClick={handlePlayPause}>
                <span>
                    {isPlaying ? <i class="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
                </span>
            </button>
        </div>
    )
}
export default AudioPlayer;