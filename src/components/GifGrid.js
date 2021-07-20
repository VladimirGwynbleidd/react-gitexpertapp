import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {


    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]);

    // getGifs();


    const { data: images, loading } = useFetchGifs(category);

    // console.log(data);
    // console.log(loading);


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p>loading...</p>}

            <div className='card-grid'>
                {
                    images.map(img => (

                        <GifGridItems key={img.id} {...img} >

                        </GifGridItems>
                        // <li key={id}>
                        //     {
                        //         title
                        //     }
                        // </li>

                    ))
                }
            </div>
        </>
    )
}
