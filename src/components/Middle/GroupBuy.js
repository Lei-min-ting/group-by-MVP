import React from 'react';

const GroupBuy =()=>{
return(
    <div className='w-auto h-200px
                    border-2 my-5 mx-2 
                    shadow-lg
                    rounded-md
                    text-center'>
        <div className='grid grid-cols-3 divide-x text-center'>
            <div class="grid justify-items-center">
                <svg class="w-6 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <div className='py-2 text-center'>Join Group</div>
            </div>

            <div class="grid justify-items-center">
            <svg class="w-6 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <div className='py-2 text-center'>Join Group Buy</div>
            </div>
            
            <div class="grid justify-items-center">
            <svg class="w-6 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
            <div className='py-2 text-center'>launch Group Buy</div>
            </div>
            
        </div>
        <button className='bg-gradient-to-r from-green-300 via-green-400 to-green-500
                           border-2 my-3 h-10
                           rounded-lg '>launch a Group Buy</button>
    </div>
);
}

export default GroupBuy;