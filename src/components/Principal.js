import React from 'react'
import Video from '../videos/video.mp4'
export const Principal = () => {
  return (
      <>
        <div className='principaldiv' id='homediv' style={{display:'flex', justifyContent:'center', alignItems:'center', height: '90vh'}}> 
        <div className='videoContainer'>
            <video className='videoPrincipal' autoPlay loop muted src={Video} type='video/mp4'> Principal </video>
        </div>
        <div className='tittleContainer'>
            <h1 className='h1tittle'>Chic by Lore Solís</h1>
            <p className='pSubtittle'>Nails and Lashes</p>
        </div>
        </div>
      
      </>
  )
}
