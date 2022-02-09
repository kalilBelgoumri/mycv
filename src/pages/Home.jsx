import React from 'react'
import Contact from '../components/Contact'
import Competences from '../components/Competences'
import Cardportofolio from '../components/CardPortofolio'
import retrowild from '../assets/retroWild.webp'
import SpacePark from '../assets/SpacePark.webp'
import cv from '../documents/KALIL_BELGOUMRI_CV.pdf'
import Header from '../components/Header'
import Footer from '../components/Footer'
import aboutImg from '../assets/about.webp'
import dag from '../assets/dag.webp'
import { motion } from 'framer-motion'

const Home = () => {
  const bonjour =
    'Bonjour les Amis Dev__00 mon site a été fait par moi même avec React Semantic et Tailwind merci de respecter mon travail :)'

  console.log(bonjour)
  return (
    <div className="home" id="Home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col"
      >
        <Header />
        {/* ** Contact ** */}
        <main className=" flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-gray-900 to-black">
          <div className="contact mb-30">
            <Contact />
          </div>
          {/* ** CV ** */}
          <div className="contact flex cursor-pointer items-center justify-center rounded-xl border-2 border-white px-16 py-3 font-bold text-white focus:text-blue-700 ">
            <a href={cv}> Télécharger mon CV</a>
          </div>

          {/* ** Competences ** */}

          <h1 className="mt-32 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl" id='competences'>
            COMPÉTENCES ET TECHNIQUES
          </h1>
          <div className="mb-10 flex">
            <Competences />
          </div>

          {/* ** Portofolio ** */}
          <h1
            className="-mt-20 text-center text-4xl font-extrabold text-white md:text-6xl"
            id="portfolio"
          >
            MES PROJETS
          </h1>

          <div className="align-items-center my-10 grid gap-4 overflow-x-hidden px-10 lg:grid lg:grid-cols-3  ">
            <Cardportofolio
              heading="SpacePark"
              body={
                <span className="line-clamp-1 hover:line-clamp-none">
                  Projet réaliser avec REACT, TAILWIND SEMANTIC et GOOGLE MAP.
                  Site dédié au partage de place de parking. Link :
                  https:/lyon-Js-Sept21-p2-g1-front.comicscrip.duckdns Org/
                  GitHub :
                  https://github.com/WildCodeSchool/lyon-js-sept21-p2-g1-front
                </span>
              }
              image={SpacePark}
              onClick={(e) => {
                e.preventDefault()
                window.location.href =
                  'https://lyon-js-sept21-p2-g1-front.comicscrip.duckdns.org/'
              }}
            />

            <Cardportofolio
              image={retrowild}
              heading="RetroWild"
              body={
                <span className="line-clamp-1 hover:line-clamp-none">
                  Projet réaliser avec HTML JAVASCRIPT et CSS. Site rétro
                  gaming. Link : https://retrowild Netlify App GitHub :
                  https://github.com/Yannis-Barba/retrowild
                </span>
              }
              onClick={(e) => {
                e.preventDefault()
                window.location.href = 'https://retrowild.netlify.app/'
              }}
            />

            <Cardportofolio
              image={dag}
              heading="DAG-SYS"
              body={
                <span className="line-clamp-1 hover:line-clamp-none">
                  Projet réaliser avec REACT, NEXTJS, TAILWIND, MUI Leaflet Map.
                  Link : https://p3dag.duckdns.org/ GitHub :
                  https://github.com/WildCodeSchool/p3-dag-lyon-js-react-sept21
                </span>
              }
              onClick={(e) => {
                e.preventDefault()
                window.location.href = 'https://p3dag.duckdns.org/'
              }}
            />
          </div>

          {/* ** AboutUs ** */}
          <div className="about mb-10 flex grid-flow-col flex-col px-20 lg:grid">
            <div className="my-52 flex flex-col items-center font-semibold lg:justify-center">
              <span
                className="flex text-2xl text-white sm:text-3xl md:text-3xl lg:text-6xl"
                id="apropos"
              >
                À PROPOS DE MOI
              </span>
              <span
                className=" mt-20 flex w-5/6 text-justify text-xl font-bold tracking-tighter text-white sm:text-2xl md:text-3xl lg:text-justify lg:text-3xl xl:text-3xl"
                id="passion"
              >
                Passionné des nouvelles technologies et du code, je suis
                actuellement ouvert aux opportunités en tant que développeur
                Front-End ou Full Stack Javascript, pour toute proposition,
                veuillez me contacter.
              </span>
            </div>
            <div className="background -mt-36 flex items-center justify-center lg:justify-end">
              <img src={aboutImg} width="500" height="500" alt="AboutImg" />
            </div>
          </div>
          <div className="test"></div>
        </main>
        {/* ** Footer ** */}
        <Footer />
      </motion.div>
    </div>
  )
}

export default Home
