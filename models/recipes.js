import {Schema, model, models} from "mongoose";

const postSchema = new Schema(
    {
        food:{
            type: String,
            required: true,
        },
        area:{
            type: String,
            required: true,
        },
        ingridients:{
            type: String,
            required: true,
        },
        instructions:{
            type: String,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);

const Recipes = models.Post || model ("Post",postSchema);
export default Recipes;