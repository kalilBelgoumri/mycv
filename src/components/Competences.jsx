import React from 'react'
import aboutImg from '../assets/about.webp'
import { DiJavascript1, DiCss3, DiVisualstudio, DiScrum } from 'react-icons/di'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import {
  FaReact,
  FaDiscord,
  FaNodeJs,
  FaBootstrap,
  FaDocker,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSpeedtest,
  SiMaterialui,
  SiSemanticuireact,
  SiPostman,
  SiAtom,
  SiSublimetext,
} from 'react-icons/si'
import { CgIfDesign } from 'react-icons/cg'
import { BsSlack } from 'react-icons/bs'
import { FiTrello, FiFigma } from 'react-icons/fi'

function Competences() {
  return (
    <div>
      <div className=" my-32 text-white">
        <ul className="flex  flex-col items-center justify-center  md:flex-row  ">
          <div className="row rounded-xl border-2 py-10 md:border-4 md:px-10">
            <div className="col-md-8 grid">
              <li>
                <div className="flex gap-x-20 gap-y-10">
                  <DiJavascript1 size="50px" color="white" />
                  <AiFillHtml5 size="50px" color="white" />
                  <DiCss3 size="50px" color="white" />
                </div>
              </li>
              <li>
                <div className="flex gap-x-20">
                  <FaBootstrap size="50px" color="white" />
                  <SiTailwindcss size="50px" color="white" />
                  <SiMaterialui size="50px" color="white" />
                  <SiSemanticuireact size="50px" color="white" />
                </div>
              </li>
              <li className="px-5">
                <div className="flex gap-x-20">
                  <FaReact size="50px" color="white" />
                  <SiNextdotjs size="50px" color="white" />
                  <FaNodeJs size="50px" color="white" />
                </div>
              </li>
              <li className="px-5">
                <div className=" mt-2">
                  <div className="flex gap-x-20">
                    <FaDocker size="50px" color="white" />
                    <SiPostman size="50px" color="white" />
                  </div>
                </div>
              </li>
              <li className="px-5">
                <div className=" mt-2 w-full">
                  <div className="flex gap-x-20">
                    <DiVisualstudio size="50px" color="white" />
                    <SiAtom size="50px" color="white" />
                    <SiSublimetext size="50px" color="white" />
                  </div>
                </div>
              </li>
              <li className="p-5">
                <div className=" mt-2">
                  <div className="flex gap-x-20">
                    <DiScrum size="50px" color="white" />
                    <CgIfDesign size="50px" color="white" />
                    <SiSpeedtest size="50px" color="white" />
                  </div>
                </div>
              </li>
              <li className="p-5">
                <div className=" mt-2">
                  <div className="flex gap-x-20">
                    <AiFillGithub size="50px" color="white" />
                    <BsSlack size="50px" color="white" />
                    <FaDiscord size="50px" color="white" />
                    <FiTrello size="50px" color="white" />
                  </div>
                </div>
              </li>
              <li className="p-5">
                <div className=" mt-2">
                  <div className="flex gap-5">
                    <FiFigma size="50px" color="white" />
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="">
            <div className="flex grid-flow-col flex-col lg:grid ">
              <div className="background flex items-center justify-center md:px-40 lg:justify-end">
                <img src={aboutImg} width="500" height="500" alt="AboutImg" />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Competences
