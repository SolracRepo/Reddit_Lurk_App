import React from 'react'

const ListOtherVids = ({otherVideos}) => {

     const definedVals = otherVideos.map((vals)=> {
         try {
             return vals.data.preview.reddit_video_preview.fallback_url

         } catch {
             return null
         }
    })

    const onlyLinks= definedVals.filter((vals)=> {
        return vals !== null
    })

    return (
       onlyLinks.map((values)=>{
           return (
               <div className="img-container">
               <video src={values} controls></video>
               </div>
           )
        })
    )
}

export default ListOtherVids
