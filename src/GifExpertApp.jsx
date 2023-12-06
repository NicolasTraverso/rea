import {useState} from "react"
import { AddCategories, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto Shippuden'])
    
     const onAddCategory = (newCategory)=> {

         if (categories.includes(newCategory)) return;           
         setCategories([newCategory,...categories]);
     }

  return (
    <>
        <h1>Gifs App</h1>
    
        <AddCategories
            onNewCategory={onAddCategory}
         />


        {   
        categories.map(category =>
            (
                    <GifGrid 
                    key={category} 
                    category={category}
                    />
            ))
        }

    </>
  )
}
