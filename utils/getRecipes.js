import axios from "axios"

export const getRecipes = async (id)=>{
    const res= await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes`);
    const recipes = await res.data;

    if(id){
        const recipe= recipes.find((post)=> recipe._id == id);
        return recipe;
    }
    return recipes;
}