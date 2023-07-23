import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import styles from './styles.module.css'

const Projects = () => {
  const projects = [
    {
      pic: "https://i.ibb.co/YfS1VHR/screenshot-app-powerbi-com-2023-07-24-00-54-53.png",
      live:"https://app.powerbi.com/view?r=eyJrIjoiNGQ1N2Y1NWUtMTE1My00ODU2LWFmOWMtZjBkZDlmNzdiN2ZkIiwidCI6Ijg4MmMwYzdjLTIzZGItNDBlNi05OTkyLTViMmMwZjA2NGUwNSIsImMiOjR9",
      title: "Nombre del proyecto",
      git: "#enlace",
      descripion: "Descripcion",
    },
    {
      pic: "https://i.ibb.co/yYL4Tn7/SEE-MY-CODE.png",
      live:"#",
      git: "#",
      title: "See my code",
      descripion: "Descripcion",
    },
  
  ]
  return (
    <div
    className='mb-16 relative flex flex-col overflow-hidden text-left md:flex-row max-w-4/5 justify-evenly mx-auto items-center z-0 '>
      <h3 className={`absolute top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>projects</h3>
      <div className='grid sm:grid-cols-2 xl:grid-cols-3 3xl:w-3/4 gap-7 md:gap-14 p-5 md:p-14 relative snap-x snap-mandatory mt-40 z-20'>
        {projects.map((project, i)=>{
          return <div key={i+1} className={`flex-shrink-0 snap-center hover:scale-110 duration-[1.25s] flex flex-col items-center justify-center py-6 px-3 ${styles.expericenceBorder}`}>
            <motion.div
            initial={{
              y:-200,
              opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{y:0, opacity:1}}
            >
            <img
            src={project.pic}
            alt="project" 
            className='w-60'
            width={200}
            height={150}
            />
            </motion.div>
            
            <div className='p-4 max-w-4xl'>
              <h4 className='text-2xl sm:text-4xl md:text-4xl font-semibold text-center py-2 text-gray-400 '> {project.title} </h4>
              <p className='text-base sm:text-xl text-justify space-x-1 break-all  text-gray-400'> {project.descripion} </p>
            </div>
              <div className='flex justify-between w-full'>
                {project.live.length>5?
                <Link href={project.live}  target="_blank" className={`rounded-lg ${styles.button} text-base p-2 flex justify-center items-center gap-x-4  hover:border-[#f7ab0a]/40 hover:text-gray-400`}>
                <span className='hidden sm:block'>Live</span><Image src='/live.svg' width={16} height={16} alt='live icon'/>  
                </Link>
                :<div></div>}

                <Link  target="_blank" href={project.git} className={`rounded-lg ${styles.button} text-base p-2 hover:border-[#f7ab0a]/40 hover:text-gray-400   flex justify-center items-center gap-x-2`} >
                  <span className='hidden sm:block'>GitHub</span>
                  <img src='/github.svg' width={16} height={16} alt='live icon'/>
                </Link>
              </div>
              <div className='w-full bg-[#f7ab8a]/10 ltf-0 h-[3px] mt-4 -skew-y-0' />
          </div>
          
        })}

      </div>
      <div className='w-full absolute top-[37%] bg-[#f7ab8a]/10 ltf-0 h-[400px] -skew-y-12 z-0' />
      </div>
  )
}

export default Projects