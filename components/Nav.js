import React from 'react'
import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { GiStripedSun } from 'react-icons/gi'
import { BsArrowDownLeftCircleFill } from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav({ modeChange }){

 const [toggle, setToggle] = useState(false)
 const handleToggle = () => {
    setToggle(!toggle)
    modeChange(toggle)
 }

 const breakNow = useMediaQuery({
    query: '(min-width: 895px)'
 })
//  const afterBreak = useMediaQuery({
//     query: '(max-width: 896px)'
//  })

//  console.log(toggle)

  return (
    <motion.div className="flex justify-center items-center w-full"
        initial={{ opacity: 0, y:-100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.6 }}
    >
        <nav className={ breakNow ? 
            'flex justify-between items-center py-5 w-full':
            'flex justify-between items-center py-5 w-full'
        }>
            <Image 
                src="https://medicalprone.com/assets/CB..svg" 
                height={30} width={30} alt='logo' 
            />
        {/* { breakNow ? 
            ( */}
            <ul className='flex justify-evenly items-center'>
                {/* <li className='mx-5 text-sm'>Home</li> */}
                {/* <li className='mx-5 text-sm'>Projects</li> */}
                {/* <li onClick={handleToggle} className='mx-5 text-sm'>
                    { toggle ? 
                        <BsFillMoonStarsFill 
                            size={25}
                            className='cursor-pointer text-xl'
                        />
                        :
                        <GiStripedSun
                            size={30}
                            className='cursor-pointer text-xl'
                        />
                    }
                </li> */}
                <li>
                <a 
                    className='bg-gradient-to-r from-Aureolin to-Earth 
                                py-2 px-5 rounded-xl flex items-center 
                                text-Raisin text-reg' 
                    href="/resume.pdf"
                    download
                >
                    Resume
                </a>
                </li>
            </ul>
            {/* )
            :
            ( */}{/* <ul className='flex justify-evenly items-center'>
                    <BsArrowDownLeftCircleFill size={35}/>
                </ul> */}
                
            {/* )
        } */}
        </nav>
    </motion.div>
  )
}