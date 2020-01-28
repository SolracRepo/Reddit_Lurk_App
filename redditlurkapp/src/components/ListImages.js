import React from 'react'

const ListImages = ({images}) => {
    return (
        images.map((vals)=> {
            return (
                <img  src={vals.data.url} />
                )
        })
    )

}

export default ListImages;
