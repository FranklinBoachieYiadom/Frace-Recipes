

import Link from 'next/link'
import React from 'react'

function register() {
  return (
    <div className='grid h-fit mt-16 mb-16 place-items-center'>
<div className=" text-2xl p-4 w-full max-w-5xl min-h-fit bg-white rounded-lg border border-gray-200 shadow-2xl sm:p-6 md:p-8 dark:bg-transparent dark:border-gray-700">
    <form className="space-y-6">
        <div className= "p-6 pl-0 pt-2 text-7xl text-gray-900 dark:text-white font-semibold">
            <h2 > <span className='text-orange-500'>Frace</span>Recipes🍂</h2>
        </div>
        <h5 className=" p-6 pl-0 pb-10 text-4xl font-medium text-gray-900 dark:text-white">Account Registration</h5>
        <div className='flex flex-col gap-x-2 lg:flex-row'>
        <div className='flex-1'>
            <label for="firstname" className="text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">First Name</label>
            <input type="string" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="firstname" required=""/>
        </div>
        
        <div className='flex-1'>
            <label for="lastname" className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">Last Name</label>
            <input type="string" name="lastnamel" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="lastname" required=""/>
        </div>
        </div>
        <div>
            <label for="email" className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300">E-mail</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required=""/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-4xl font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
        </div>
        <div>
            <label for="confirm password" className="block mb-2 text-4xl font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
            <input type="password" name="cornfirm password" id="confirm password" placeholder=" confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
        </div>
        
        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"> <Link href="./login"> Register</Link> </button>
        <div className="text-3xl font-medium text-gray-500 dark:text-gray-300">
            Already have an account? <Link href="./login" className="text-orange-700 hover:underline dark:text-orange-500">Log in</Link>
        </div>
        
    </form>
</div>

    </div>
  )
}

export default register