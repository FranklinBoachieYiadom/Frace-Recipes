import Link from 'next/link';
import React from 'react';

function addrecipe() {
  return (
    <div>
    <div className='grid h-screen place-items-center mb-7 mt-3'>
    <div className=" text-2xl p-4 w-full max-w-5xl min-h-fit bg-white rounded-lg border border-gray-200 shadow-2xl sm:p-6 md:p-8 dark:bg-transparent dark:border-gray-700">
       <form className="space-y-6" action="#">
       <div className= "p-6 pl-0 pt-2 text-7xl text-gray-900 dark:text-white font-semibold">
            <h2 > <span className='text-orange-500'>Frace</span>Recipes🍂</h2>
        </div>
        <h5 className=" p-6 pl-0 pb-10 text-4xl font-medium text-gray-900 dark:text-white">Add Your Menu Recipe</h5>
        <div className='flex flex-col gap-x-2 lg:flex-row'>
       <div className='flex-1'>
            <label for="food" className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Food</label>
            <input type="string" name="food" id="food" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="food" required=""/>
        </div>
        <div className='flex-1'>
            <label for="area" className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Area</label>
            <input type="string" name="area" id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  placeholder="area" required=""/>
        </div>
      
        </div>
        <div className='flex flex-col gap-x-2 lg:flex-row'>
       <div className='flex-1'>
            <label for="time" className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Time</label>
            <input type="string" name="time" id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  placeholder="time" required=""/>
        </div>
        <div className='flex-1'>
            <label for="type" className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Type</label>
            <input type="string" name="type" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="type" required=""/>
        </div>
        </div>
        <div>
            <label for="ingrediants" className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Ingrediants</label>
            <input type="string" name="ingrediants" id="ingrediants" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ingrediants" required=""/>
        </div>
        <div>
            <label for="recipe" className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Recipes</label>
            <input type="string" name="recipe" id="recipee" size="50" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="recipe" required="true"/>
        </div>
        <button type="button" className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"> <Link href="./savedMeals"> Submit</Link> </button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default addrecipe;
