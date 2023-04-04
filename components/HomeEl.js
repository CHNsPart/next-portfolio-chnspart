import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsBehance } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomeEl() {

  const copyMail = () => {
    var copyText = "imchn24@gmail.com";

    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(copyText);
    
    toast.success("mail address copied!")
  }

  return (
    <section className='h-fit w-full flex flex-col md:flex-row justify-around items-center gap-5'>
      <div className='flex flex-col w-full h-[35rem] lg:h-[42rem]
                    bg-gradient-to-tr from-Aureolin/50 via-Earth/45
                    to-Aureolin/15 rounded-3xl relative'
      >
        <h1 className='font-midlineSans text-Raisin text-left w-full px-10 pt-10 pb-5 text-big tracking-widest'>
          <span className='font-midlineReg font-bold text-Raisin/50'>I'm,</span><br /> Touhidul Islam Chayan
        </h1>
        <p className='font-sans text-Raisin/70 w-full md:w-2/3 px-10 text-med tracking-wide text-left'>a <span className='underline underline-offset-2 text-Poppy'>software engineer</span> specializing in front-end development and UI/UX design.</p>
        <div className='flex gap-2 min-h-20 w-full absolute bottom-0 right-0 p-5 overflow-auto'>
          <button
            className='bg-gradient-to-r from-Raisin to-Raisin/80
                        py-2 px-5 rounded-full min-w-fit flex items-center
                        text-Back text-reg'
            href="#"
            onClick={copyMail}
          >
            Contact Me
          </button>
          <a
            className='bg-white rounded-full
                        py-2 px-5 flex items-center
                        text-Raisin text-med'
            target="_blank"
            href="https://www.linkedin.com/in/touhidul-islam-chayan-50b857143/"
          >
            <BsLinkedin/>
          </a>
          <a
            className='bg-white rounded-full
                        py-2 px-5 flex items-center
                        text-Raisin text-med'
            target="_blank"
            href="https://www.behance.net/CHNsPart"
          >
            <BsBehance/>
          </a>
          <a
            className='bg-white rounded-full
                        py-2 px-5 flex items-center
                        text-Raisin text-med'
            target="_blank"
            href="https://www.dribbble.com/CHNsPart"
          >
            <BsDribbble/>
          </a>
          <a
            className='bg-white rounded-full
                        py-2 px-5 flex items-center
                        text-Raisin text-med'
            target="_blank"
            href="https://www.github.com/CHNsPart"
          >
            <BsGithub/>
          </a>
          <a
            className='bg-white rounded-full
                        py-2 px-5 flex items-center
                        text-Raisin text-med'
            target="_blank"
            href="https://www.instagram.com/CHNsPart"
          >
            <BsInstagram/>
          </a>
          <a
            className='bg-white rounded-full
                        py-2 px-5 flex items-center
                        text-Raisin text-med'
            target="_blank"
            href="https://www.facebook.com/CHNsPart"
          >
            <BsFacebook/>
          </a>
        </div>
      </div>

      <div className='flex flex-col w-full h-[35rem] lg:h-[42rem] 
                      justify-between gap-5'
      >
        <div className='font-midlineSans h-[30rem] rounded-3xl 
                        py-5 flex flex-row gap-0 md:gap-2'
        >
          <div className='bg-gradient-to-b from-Aureolin to-Aureolin/70 
                          w-1/4 rounded-full duration-500 tracking-widest
                          flex flex-col justify-center items-center text-Raisin
                          hover:rounded-3xl hover:w-full hover:transition-all
                          transition-all hover:duration-500
                          text-xs md:text-base group'
          >
            <h1 className='px-2 text-center'>UI/UX</h1>
            <h1 className='px-2 text-center'>Designer</h1>
            <div className='hidden group-hover:block'></div>
          </div>
          <div className='bg-gradient-to-b from-Cordovan to-Cordovan/70 
                          w-1/4 rounded-full duration-500 tracking-widest
                          flex flex-col justify-center items-center text-white
                          hover:rounded-3xl hover:w-full hover:transition-all
                          transition-all hover:duration-500
                          text-xs md:text-base'
          >
            <h1 className='px-2 text-center'>Front-End</h1>
            <h1 className='px-2 text-center'>Developer</h1>
          </div>
          <div className='bg-gradient-to-b from-Poppy to-Poppy/70
                          w-1/4 rounded-full duration-500 tracking-widest
                          flex flex-col justify-center items-center text-white
                          hover:rounded-3xl hover:w-full hover:transition-all
                          transition-all hover:duration-500
                          text-xs md:text-base'
          >
            <h1 className='px-2 text-center'>Back-End</h1>
            <h1 className='px-2 text-center'>Developer</h1>
            <h1></h1>
          </div>
          <div className='bg-gradient-to-b from-Earth to-Earth/70
                          w-1/4 rounded-full duration-500 tracking-widest
                          flex flex-col justify-center items-center text-Raisin
                          hover:rounded-3xl hover:w-full hover:transition-all
                          transition-all hover:duration-500
                          text-xs md:text-base'
          >
            <h1 className='px-2 text-center'>AI/ML</h1>
            <h1 className='px-2 text-center'>Developer</h1>
          </div>
        </div>
        <div className='font-midlineSans border-2 h-[12rem] rounded-3xl'>
          Nigga!
        </div>
      </div>
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
