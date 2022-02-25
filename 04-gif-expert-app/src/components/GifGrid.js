//import { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';
//import {getGifs} from '../helpers/getGif'

import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p> }

                <div className="card-grid">

                    {
                        images.map((img, index) => (
                            <GifGridItem key={index} {...img} />
                        ))
                    }

                </div>
          


        </>
    )
}

export default GifGrid