import React from 'react'
import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BsArrowDownLeftCircleFill } from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'


export default function Nav(){

 const breakNow = useMediaQuery({
    query: '(min-width: 895px)'
 })
 const afterBreak = useMediaQuery({
    query: '(max-width: 896px)'
 })

  return (
    <div className="flex justify-center items-center w-full">
        <nav className={ breakNow ? 
            'flex justify-between items-center py-5 w-1/2':
            'flex justify-between items-center py-5 w-full'
        }>
            <Image 
                src="https://medicalprone.com/assets/CB..svg" 
                height={30} width={30} alt='logo' 
            />
        { breakNow ? 
            (
            <ul className='flex justify-evenly items-center'>
                <li className='mx-5 text-sm'>Home</li>
                <li className='mx-5 text-sm'>Projects</li>
                <li className='mx-5 text-sm'>
                <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
                </li>
                <li>
                <a 
                    className='bg-gradient-to-r from-Aureolin to-Earth 
                                py-2 px-5 rounded-xl flex items-center 
                                text-Raisin text-reg' 
                    href="#"
                >
                    Resume
                </a>
                </li>
            </ul>
            )
            :
            (
                <ul className='flex justify-evenly items-center'>
                    <BsArrowDownLeftCircleFill size={35}/>
                </ul>
            )
        }
        </nav>
    </div>
  )
}