import React,{useState} from 'react'


import ReactDOM from 'react-dom';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const  GiftExpertApp = () => {
   // const categories = ['Goku','Samurai X','MegaMan'];
    const [categories, setCategories] = useState(['']);
    // const handleAdd =()=>{
    //         const newCategory= 'Xmen';
    //         setCategories([...categories,newCategory]);
    // }
    return(
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>
           
            <ol>
                {
                     categories.map( category => 
                        <GifGrid category={category} key={category} ></GifGrid>
                     )
                }
            </ol>
        </>
    );
}
