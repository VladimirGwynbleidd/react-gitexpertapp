import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'


export const GifExperApp = () => {

    const [categories, setcategories] = useState(['One Punch']);


    // const handleAdd = () => {
    //     setcategories(cats=>[...cats,'TOTO']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setcategories={setcategories}></AddCategory>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} >
                        </GifGrid>
                    ))
                }
            </ol>


        </div >
    )
}

