import React from 'react'

const ListImages = ({images}) => {
    return (
        images.map((vals)=> {
            return (
                <div className="img-container">
                <img  src={vals.data.url} />
                </div>
                )
        })
    )

}

export default ListImages;
