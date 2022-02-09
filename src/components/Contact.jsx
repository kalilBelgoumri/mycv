import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="icon__social mt-20 -mb-20 flex items-center justify-center  md:hidden">
        <div className="GitHub__social cursor-pointer px-5">
          <BsGithub
            onClick={() => {
              window.location.href = 'https://github.com/kalilBelgoumri'
            }}
            size="60px"
            color="white"
          />
        </div>
        <div className="linkedin__social cursor-pointer px-5">
          <TiSocialLinkedinCircular
            onClick={() => {
              window.location.href =
                'https://www.linkedin.com/in/kalil-belgoumri-1a5b17203/'
            }}
            size="80px"
            color="white"
          />
        </div>
      </div>
      <motion.div
        initial={{ y: '-200px' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5 }}
        className="username__Dev mt-16 flex "
      >
        <div className="userName  pb-30 mt-32 flex items-center items-center  justify-center md:ml-4 lg:flex">
          <h5 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-7xl">
            BELGOUMRI KALIL{' '}
          </h5>
          <span className="ml-6 hidden h-1 w-36 bg-white md:flex"></span>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: '-200px' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5 }}
        className="devlopper mt-28 mb-28 flex items-center justify-center sm:ml-4 lg:flex lg:items-center"
      >
        <h5 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-7xl">
          DEVELOPPER FULL STACK{' '}
        </h5>
        <span className="ml-6 hidden h-1 w-36 bg-white md:flex"></span>
      </motion.div>
      <div className="icon__social absolute left-0 -mx-48 mt-44 -rotate-90 transform items-center md:flex">
        <span className="ml-6 h-2 w-36 bg-white"></span>
        <div className="social flex flex-col">
          <h1 className="ml-10 text-5xl font-bold text-white"> SOCIAL </h1>
        </div>
        <div className="GitHub__social cursor-pointer px-5">
          <BsGithub
            onClick={() => {
              window.location.href = 'https://github.com/kalilBelgoumri'
            }}
            size="40px"
            color="white"
          />
        </div>
        <div className="linkedin__social cursor-pointer px-5">
          <TiSocialLinkedinCircular
            onClick={() => {
              window.location.href =
                'https://www.linkedin.com/in/kalil-belgoumri-1a5b17203/'
            }}
            size="55px"
            color="white"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
