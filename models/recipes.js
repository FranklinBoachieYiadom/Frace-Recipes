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
        time: {
            type: String,
            emun: ["breakfast", "lunch", "supper"]
        },
        type: {
            type: String,
            emun: ["beef", "chicken", "lamb", "pork","seaFood","sideDish","vegetarian","dessert","miscellaneous"]
        },
        ingredients:{
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