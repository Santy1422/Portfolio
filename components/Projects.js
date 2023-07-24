import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Projects = () => {
  const projects = [
    {
      pic: "https://i.ibb.co/YfS1VHR/screenshot-app-powerbi-com-2023-07-24-00-54-53.png",
      live: "https://app.powerbi.com/view?r=eyJrIjoiNGQ1N2Y1NWUtMTE1My00ODU2LWFmOWMtZjBkZDlmNzdiN2ZkIiwidCI6Ijg4MmMwYzdjLTIzZGItNDBlNi05OTkyLTViMmMwZjA2NGUwNSIsImMiOjR9",
      git: "#enlace",
      title: "Business Analytics",
      description: "The Business Analytics project is a comprehensive data analysis and visualization endeavor aimed at providing valuable insights into various aspects of a business. Leveraging the power of data, this project employs advanced analytical techniques and visualizations to uncover hidden patterns, trends, and key performance indicators (KPIs). The ultimate goal is to assist decision-makers in making informed choices that optimize business strategies and enhance overall efficiency.",
    },
    {
      pic: "https://i.ibb.co/yYL4Tn7/SEE-MY-CODE.png",
      live: "#",
      git: "#",
      title: "See my code",
      description: "The SQL work that I do at work is confidential, but I have taken some of the most interesting SQL transformations and de-identified them so I could share them publicly in my portfolio. Since the release of ChatGPT I have also spent a considerable amount of my freetime prompt engineering, because I had some Python code that I knew I wanted to write but did not yet have the skillset to write alone. With the help of my AI friend I have written some pretty neat Python code(s?), which I have put into my portfolio. Some of them, like my Tableau Workbook Documentation Script, I use regularly in my job.",
    },
 
  ];
  return (
    <div className='mb-16 relative text-center max-w-4/5 mx-auto items-center'>
      <h3 className={`font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-white text-4xl`}>projects</h3>
      <div className='grid sm:grid-cols-1 xl:grid-cols-1 3xl:w-3/4 gap-7 md:gap-14 p-5 md:p-14 relative mt-10'>
        {projects.map((project, i) => (
          <motion.div
            key={i + 1}
            initial={{
              y: -200,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            className={`flex-shrink-0 hover:scale-110 duration-[1.25s] flex flex-col items-center justify-center py-6 px-3 ${styles.expericenceBorder} ${i === 1 ? styles.highlightedProject : ''}`}
          >
            <motion.div
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2, delay: 0.3 }}
              whileInView={{ y: 0, opacity: 1 }}
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
              <h4 className={`text-2xl sm:text-4xl md:text-4xl font-semibold text-white py-2 ${i === 1 ? 'text-[#5C8A3E]' : ''}`}>{project.title}</h4>
              <p className='text-base sm:text-xl text-justify space-x-1 break-all text-white'>{project.description}</p>
            </div>
            <div className='flex justify-between w-full'>
              {project.live.length > 5 ? (
                <Link href={project.live} target="_blank" className={`rounded-lg ${styles.button} text-base p-2 flex justify-center items-center gap-x-4 hover:border-[#5C8A3E]/40 hover:text-white`}>
                  <span className='hidden sm:block'>Live</span>
                  <Image src='/live.svg' width={16} height={16} alt='live icon' />
                </Link>
              ) : null}
              <Link target="_blank" href={project.git} className={`rounded-lg ${styles.button} text-base p-2 hover:border-[#5C8A3E]/40 hover:text-white flex justify-center items-center gap-x-2`} >
                <span className='hidden sm:block'>GitHub</span>
                <img src='/github.svg' width={16} height={16} alt='live icon' />
              </Link>
            </div>
            <div className='w-full bg-blue-400 ltf-0 h-[3px] mt-4 -skew-y-0' />
          </motion.div>
        ))}
      </div>
      <div className='w-full absolute top-[45%] bg-blue-400ltf-0 h-[400px] -skew-y-12 z-0' />
    </div>
  );
};

export default Projects;
