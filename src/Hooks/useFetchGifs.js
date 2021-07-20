import { getGifs } from '../helpers/getGifs';
import { useState, useEffect } from 'react';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs => {


            console.log(imgs);
            setState({
                data: imgs,
                loading: false
            });



        });
    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000);

    return state;
}