import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    

    const [categories, setCategories] = useState(['One Punch']);

    //const handleAdd = () =>{
    //    setCategories([...categories, 'Demon Slayer' ])
    //}


    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr/>


        <ul>

            {categories.map((category)=>(
                <li key={category}><GifGrid category={category}/></li>
            ))}
        </ul>

    </>
  )
}

export default GifExpertApp