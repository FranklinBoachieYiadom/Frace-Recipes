
import Login from "./login"
// import {getRecipes} from "../../utils/getRecipes"

// export async function getStaticProps(){
//   const recipes = await getRecipes();

//   return {
//     props:{
//       recipes,
//     },
//   };
// }

export default function Home({}) {
  return (
    <>
    <Login/>

    {/* {recipes.map((recipe)=>(
      <p>{recipe.title}</p>
    ))} */}
     
    </>
  );
}
