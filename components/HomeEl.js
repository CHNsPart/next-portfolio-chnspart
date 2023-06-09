import React from 'react'
import Image from 'next/image'
import { 
  BsLinkedin,
  BsBehance,
  BsDribbble,
  BsGithub,
  BsInstagram,
  BsFacebook 
} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaJava, FaNode} from 'react-icons/fa'
import {SiJavascript, SiTypescript, SiPython, SiNestjs, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiMaterialdesign, SiFlask, SiMongodb, SiExpress, SiPostgresql, SiMysql, SiPrisma, SiFramer, SiAdobexd, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro} from 'react-icons/si'
import {IoLogoSass} from 'react-icons/io'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import { motion } from 'framer-motion'


export default function HomeEl() {

  const copyMail = () => {
    var copyText = "imchn24@gmail.com"; 
    navigator.clipboard.writeText(copyText);
    
    toast.success("mail address copied!")
  }

  return (
    <section className='h-fit w-full flex flex-col md:flex-row justify-around items-center gap-5'>
      <motion.div className='flex flex-col w-full h-[35rem] lg:h-[42rem]
                    bg-gradient-to-tr from-Back/50 via-Aureolin/20
                    to-Poppy/10 rounded-3xl relative'
        initial={{ opacity: 0, x:-100 }}
        animate={{ opacity: 1, x:0 }}
        transition={{ duration: 1, delay:0.3 }}
      >
        <h1 className='font-midlineSans text-Raisin text-left w-full px-10 pt-10 pb-5 text-big tracking-widest'>
          <span className='font-midlineReg font-bold text-Raisin/50'>I'm,</span><br /> Touhidul Islam Chayan
        </h1>
        <p className='font-sans text-Raisin/70 w-full md:w-2/3 px-10 text-med tracking-wide text-left'>a <span className='underline underline-offset-2 text-Poppy'>software engineer</span> specializing in front-end development and UI/UX design.</p>
        <div className='flex gap-2 min-h-20 w-full absolute bottom-0 right-0 p-5 overflow-auto'>
          <button
            className='bg-gradient-to-r from-Raisin to-Raisin/80
                        p-5 rounded-full min-w-fit flex items-center
                        text-Back text-reg hover:from-Poppy hover:to-Poppy'
            href="#"
            onClick={copyMail}
          >
            Contact Me
          </button>
          <a
            className='bg-white rounded-full
                        p-5 flex items-center
                        text-Raisin text-med hover:bg-blue-600 hover:text-white'
            target="_blank"
            href="https://www.linkedin.com/in/touhidul-islam-chayan-50b857143/"
          >
            <BsLinkedin/>
          </a>
          <a
            className='bg-white rounded-full
                        p-5 flex items-center
                        text-Raisin text-med hover:bg-blue-700 hover:text-white'
            target="_blank"
            href="https://www.behance.net/CHNsPart"
          >
            <BsBehance/>
          </a>
          <a
            className='bg-white rounded-full
                        p-5 flex items-center
                        text-Raisin text-med hover:bg-red-500 hover:text-white'
            target="_blank"
            href="https://www.dribbble.com/CHNsPart"
          >
            <BsDribbble/>
          </a>
          <a
            className='bg-white rounded-full
                        p-5 flex items-center
                        text-Raisin text-med hover:bg-slate-800 hover:text-white'
            target="_blank"
            href="https://www.github.com/CHNsPart"
          >
            <BsGithub/>
          </a>
          <a
            className='bg-white rounded-full
                        p-5 flex items-center
                        text-Raisin text-med hover:bg-gradient-to-b 
                        hover:from-blue-500 hover:via-purple-500 hover:to-red-500
                        hover:text-white'
            target="_blank"
            href="https://www.instagram.com/CHNsPart"
          >
            <BsInstagram/>
          </a>
          <a
            className='bg-white rounded-full
                        p-5 flex items-center
                        text-Raisin text-med hover:bg-blue-600 hover:text-white'
            target="_blank"
            href="https://www.facebook.com/CHNsPart"
          >
            <BsFacebook/>
          </a>
        </div>
      </motion.div>
      <motion.div 
        className='flex flex-col w-full h-[35rem] lg:h-[42rem] 
                  justify-between gap-5'
        initial={{ opacity: 0, x:100 }}
        animate={{ opacity: 1, x:0 }}
        transition={{ duration: 1, delay:0.6 }}
      >


        <motion.div className='font-midlineSans h-[30rem] rounded-3xl 
                        py-5 flex flex-row gap-0 md:gap-2'
                        >
          {/* UI Designer */}
          <motion.div className='bg-gradient-to-b from-Aureolin to-Aureolin/70 
                          w-1/4 rounded-full duration-500 tracking-widest
                          flex flex-col justify-center items-center text-Raisin
                          hover:rounded-3xl hover:w-full hover:transition-all
                          transition-all hover:duration-500 hover:bg-Earth
                          text-xs md:text-base group'
            initial={{ opacity: 0, scaleX:0 }}
            animate={{ opacity: 1, scaleX:1 }}
            transition={{ 
              duration: 1, 
              delay:0.6,
              type: "just",
              ease: "easeInOut",
              stiffness: 500,
              damping: 10, 
            }}
          >
            <h1 className='px-2 text-center text-[0.5rem] md:text-base'>
              UI/UX</h1>
            <h1 className='px-2 text-center text-[0.5rem] md:text-base group-hover:mb-2'>
              Designer</h1>
              <Image 
                src="/ui.png" 
                className='hidden h-auto w-auto md:h-auto md:w-auto group-hover:flex rounded-3xl object-cover hover:justify-center'
                height={200} width={200} 
              />
            <p className='hidden group-hover:flex pt-5 px-2 text-center font-midlineReg'>Recent Design</p>
          </motion.div>
          {/* Front-End Developer */}
          <motion.div className='bg-gradient-to-b from-Cordovan to-Cordovan/70 
                          w-1/4 rounded-full duration-500 tracking-widest
                          flex flex-col justify-center items-center text-white
                          hover:rounded-3xl hover:w-full hover:transition-all
                          transition-all hover:duration-500 hover:bg-Poppy
                          text-xs md:text-base group'
            initial={{ opacity: 0, scaleX:0 }}
            animate={{ opacity: 1, scaleX:1 }}
            transition={{ 
              duration: 1, 
              delay:0.7,
              type: "just",
              ease: "easeInOut",
              stiffness: 500,
              damping: 10, 
            }}
          >
            <h1 className='px-2 text-center text-[0.5rem] md:text-base'>
              Front-End</h1>
            <h1 className='px-2 text-center text-[0.5rem] md:text-base group-hover:mb-2'>
              Developer</h1>
            <Image 
              src="/frontend.png" 
              className='hidden h-auto w-auto md:h-auto md:w-auto group-hover:flex rounded-3xl object-cover hover:justify-center'
              height={200} width={200} 
            />
            <p className='hidden group-hover:flex pt-5 px-2 text-center font-midlineReg'>Recent Landing Page</p>
          </motion.div>
          {/* Back-End Developer */}
          <motion.div className='bg-gradient-to-b from-Poppy to-Poppy/70
                          w-1/4 rounded-full duration-500 tracking-widest
                          flex flex-col justify-center items-center text-white
                          hover:rounded-3xl hover:w-full hover:transition-all
                          transition-all hover:duration-500 hover:bg-Cordovan
                          text-xs md:text-base group'
            initial={{ opacity: 0, scaleX:0 }}
            animate={{ opacity: 1, scaleX:1 }}
            transition={{ 
              duration: 1, 
              delay:0.8,
              type: "just",
              ease: "easeInOut",
              stiffness: 500,
              damping: 10, 
            }}
          >
            <h1 className='px-2 text-center text-[0.5rem] md:text-base'>
              Back-End</h1>
            <h1 className='px-2 text-center text-[0.5rem] md:text-base group-hover:mb-2'>
              Developer</h1>
            <Image 
              src="/backend.png" 
              className='hidden h-auto w-auto md:h-auto md:w-auto group-hover:flex rounded-3xl object-cover hover:justify-center'
              height={200} width={200} 
            />
            <p className='hidden group-hover:flex pt-5 px-2 text-center font-midlineReg'>Recent Project</p>
          </motion.div>
          {/* AI/ML Developer */}
          <motion.div className='bg-gradient-to-b from-Earth to-Earth/70
                          w-1/4 rounded-full duration-500 tracking-widest
                          flex flex-col justify-center items-center text-Raisin
                          hover:rounded-3xl hover:w-full hover:transition-all
                          transition-all hover:duration-500 hover:bg-Aureolin
                          text-xs md:text-base group'
            initial={{ opacity: 0, scaleX:0 }}
            animate={{ opacity: 1, scaleX:1 }}
            transition={{ 
              duration: 1, 
              delay:0.9,
              type: "just",
              ease: "easeInOut",
              stiffness: 500,
              damping: 10, 
            }}
          >
            <h1 className='px-2 text-center text-[0.5rem] md:text-base'>
              AI/ML</h1>
            <h1 className='px-2 text-center text-[0.5rem] md:text-base group-hover:mb-2'>
              Developer</h1>
            <Image 
              src="/ml.png" 
              className='hidden h-auto w-auto md:h-auto md:w-auto group-hover:flex rounded-3xl object-cover hover:justify-center'
              height={200} width={200} 
            />
            <p className='hidden group-hover:flex pt-5 px-2 text-center font-midlineReg'>Recent Project</p>
          </motion.div>
        </motion.div>
        <div className='flex flex-col justify-around font-midlineSans h-[12rem] rounded-3xl'>
          {/* Upper Div */} 
          <motion.div 
            className='relative mb-5'
            initial={{ opacity: 0, y:-50 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ 
              duration: 1, 
              delay:1.4,
              type: "just",
              ease: "easeInOut",
              stiffness: 500,
              damping: 10, 
            }}
          >
            <h1 className='font-midlineSans text-Raisin/50 text-left w-full text-med tracking-widest pb-2'>
              Recent <span className='underline underline-offset-2 text-Poppy'>Tech Stack</span>
            </h1>
            <div className='flex flex-row gap-5 whitespace-nowrap'>
              <SiJavascript size={45} />
              <SiTypescript size={45} />
              <SiNestjs size={45} />
              <SiNextdotjs size={45} />
              <SiTailwindcss size={45} />
              <SiPostgresql size={45} />
            </div>
          </motion.div>
          {/* Lower Div */} 
          <motion.div 
            className=''
            initial={{ opacity: 0, y:-50 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ 
              duration: 1, 
              delay:1.5,
              type: "just",
              ease: "easeInOut",
              stiffness: 500,
              damping: 10, 
            }}  
          >
            <h1 className='font-midlineSans text-Raisin/50 text-left w-full text-med tracking-widest pb-2'>
              my technical <span className='underline underline-offset-2 text-Cordovan'>skillset</span>
            </h1>
            <div className='relative min-h-[40px] overflow-x-hidden'>
              <div className='flex justify-center items-center whitespace-normal flex-row absolute gap-5 top-0 animate-marquee'>
                <span>{" "}</span>
                <p className='tracking-widest bg-Cerulean text-white py-2 px-4 leading-5 rounded-full '>
                  Languages
                </p> 
                <HiOutlineArrowSmRight 
                  className='text-Cerulean animate-bounce' size={30} 
                />
                <FaJava size={30} />
                <SiJavascript size={30} />
                <SiTypescript size={30} />
                <SiPython size={30} />
                <FaNode size={30} />
                <p className='tracking-widest bg-Cordovan text-white py-2 px-4 leading-5 rounded-full '>
                  Frameworks
                </p> 
                <HiOutlineArrowSmRight 
                  className='text-Cordovan animate-bounce' size={30} 
                />

                <SiNextdotjs size={30} />
                <SiReact size={30} />
                <SiExpress size={30} />
                <SiNestjs size={30} />
                <SiFlask size={30} />

                <p className='tracking-widest bg-Earth text-white py-2 px-4 leading-5 rounded-full '>
                  CSS
                </p> 
                <HiOutlineArrowSmRight 
                  className='text-Earth animate-bounce' size={30} 
                />

                <SiTailwindcss size={30} />
                <SiMaterialdesign size={30} />
                <SiBootstrap size={30} />
                <IoLogoSass size={30} />

                <p className='tracking-widest bg-Poppy text-white py-2 px-4 leading-5 rounded-full '>
                  Database
                </p>            
                <HiOutlineArrowSmRight 
                  className='text-Poppy animate-bounce' size={30} 
                />

                <SiPostgresql size={30} />
                <SiMongodb size={30} />
                <SiMysql size={30} />
                <SiPrisma size={30} />

                <p className='tracking-widest bg-Raisin py-2 px-4 leading-5 rounded-full text-white'>
                  Animate
                </p>             
                <HiOutlineArrowSmRight 
                  className='text-Rabg-Raisin animate-bounce' size={30} 
                />

                <SiFramer size={30} />


                <p className='tracking-widest bg-Aureolin py-2 px-4 leading-5 rounded-full '>
                  Aobe
                </p>             
                <HiOutlineArrowSmRight 
                  className='text-Aureolin animate-bounce' size={30} 
                />

                <SiAdobexd size={30} />
                <SiAdobeillustrator size={30} />
                <SiAdobephotoshop size={30} />
                <SiAdobepremierepro size={30} />
              </div> 
            </div>
          </motion.div>
        </div>
      </motion.div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        limit={3}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  )
}
