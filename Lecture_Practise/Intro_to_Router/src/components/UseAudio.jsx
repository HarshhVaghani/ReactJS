import React from 'react'
import audio from '../assets/audio.mp3'
import { useRef , useState } from 'react'

const UseAudio = () => {

  const [isPlaying , setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  // const playAudio = () => {
  //   audioRef.current.play()
  // }

  // const pauseAudio = () => {
  //   audioRef.current.pause()
  // }

  const toggleAudio = () => {
    if(isPlaying){
      audioRef.current.pause()
    }else{
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }



  return (
    <div>
      <audio ref={audioRef} controls src={audio}></audio>
      <button className='btn' onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  )
}

export default UseAudio