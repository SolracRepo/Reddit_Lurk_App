import React from 'react'

const ListVideos = (props) => {
     const videos = props.video.filter((vals) => {return vals.data.post_hint === "rich:video"})
    const filtered = videos.map((vals)=> {return vals.data.url.replace(".com", ".com/ifr")})
    // return (
    //          filtered.map((vals)=> {
    //          return (
    //              <iframe src={vals} scrolling="no" allowfullscreen="" width="100%" height="250" frameborder="0"></iframe>
    //          )
    //          }
    return (
        filtered.map((vals)=> {
            return (
                <div className="img-container">
                <iframe src={vals + "?autoplay=0"} scrolling="no" allowfullscreen="" controls frameborder="0"></iframe>
                </div>
            )
        })
    )

}

export default ListVideos

