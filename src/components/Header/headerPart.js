import React from 'react';

const HeaderPart =(props)=>{
return(
    <header className='bg-gradient-to-b from-green-200'>
        <h1 className='py-4 pl-3 sans-serif text-lg font-bold'>Gruop Buy! Buy more,Fun more</h1>
        <button className='
                    w-30px
                    ml-4 mb-3
                    bg-green-500
                    rounded-lg 
                   '>MVP social webpage</button>
        <ul className='grid grid-cols-3 divide-x divide-green-500'>
            <li className='text-center '>{props.number}social group</li>
            <li className='text-center '>{props.number}selling</li>
            <li className='text-center '>{props.number}join</li>
        </ul>
    </header>
);
}

export default HeaderPart;