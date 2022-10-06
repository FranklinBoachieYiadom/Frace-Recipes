import Recipe from "../../../models/recipes";
import db from "../../../lib/dbConnect";

export default async function handler (req,res){
    if (req.method !=="GET" || req.method!=="POST"){
        res.status(405).json({error: "Only POST and GET methods are allowed"});
    }
    if (req.method == "GET"){
        await db.connect();
        const recipes = await Recipe.find({});

        await db.disconnect();

        res.status(200).json({recipes});
        return
    }
    else if (req.method== "POST"){
        await db.connect();

        const {food,area,ingridients,instructions}= req.body;
        const recipe = await Recipe.create({
            food,
            area,
            ingridients,
            instructions
        })

        await db.disconnect();

        res.status(201).json({recipe});
    }
}