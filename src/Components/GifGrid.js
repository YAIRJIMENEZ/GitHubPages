//import React,{useState,useEffect} from 'react'//rafc
import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data:images,loading} = useFecthGifs(category);

    //el segundo parametro no tiene dependencias por lo tanto solo se ejecuta 1 vz
    // useEffect(()=>{
    //    getGifs(category).then(setimages);
    // },[category]);
    // const [images, setimages] = useState([]);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="Card-grid animate__jello">
                {  images.map( img => (
                        <li key = {img.id}>
                            <GifGridItem {...img}></GifGridItem>
                        </li>
                    )
                    )
                }
            </div>
        </>
    )
}
