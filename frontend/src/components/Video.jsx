import React from 'react'

function Video() {
  return (
    <div>
        <p>Video</p>
        <video controls autoplay width="500" height="250">
          <source src="http://localhost:3000/" type="video/mp4" />
        </video>
    </div>
  )
}

export default Video