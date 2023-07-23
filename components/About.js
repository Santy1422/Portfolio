import {motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css'



const About = () => {
  return (
    <div className="mb-16  min-h-fit flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center">

      <h3 className={`absolute top-16 es:top-20 font-bold ${styles.headertext} uppercase tracking-[10px] es:tracking-[15px] sm:tracking-[20px] text-gray-500 text-4xl`}>About Me</h3>
    
    <div className='mt-44  xs:top-32  flex text-justify flex-col md:flex-row max-w-7xl justify-center mx-2 items-center' >
     
    

             
        <motion.div className='md:hidden justify-center items-center  float-right  w-36 h-36'>

        
          <Image

            // initial ={{
            //   x: -200,
            //   opacity: 0,
            // }}

            // transition = {{
            //   duration: 1.5,
            // }}

            // whileInView={{
            //   opacity:1,
            //   x:0
            // }}
            width={300}
            height={300}

              src={"/professionalpicture.jpg"}

              alt="my professional picture"

              className='w-[100%] h-[100%]  p-0 m-0  flex-shrink-0  rounded-full object-cover md:rounded-lg'
          />
        </motion.div>



          <motion.div
          // initial ={{
          //   x: -200,
          //   opacity: 0,
          // }}

          // transition = {{
          //   duration: 1.5,
          // }}

          // whileInView={{
          //   opacity:1,
          //   x:0
          // }}
          
          className="space-y-2 es:space-x-10 px-0 md:px-10 flex-grow xs:w-full">
            <h5 className='text-2xl mt-3 font-semibold text-center  text-gray-400 underline pb-5 decoration-[#8c61c5] '>
              Biography
            </h5>
            <p className='mt-0 pt-0 text-[18px]  text-gray-400  '>
            Hi, my name is Mauricio Benegas, and I'm a Data Scientist with a passion for exploring and extracting insights from complex datasets. With a strong background in statistics, machine learning, and programming, I thrive on tackling challenging data problems and creating innovative solutions. My expertise includes data preprocessing, feature engineering, and building predictive models to optimize business strategies and decision-making processes. I am adept at utilizing programming languages like Python and R, as well as various data analysis and visualization tools. As a dedicated Data Scientist, I am committed to continuous learning and staying up-to-date with the latest advancements in the field. I am enthusiastic about contributing my skills and knowledge to drive data-centric solutions and make a positive impact in diverse industries.            </p>
        </motion.div>
      </div>

    </div>
  )
}

export default About