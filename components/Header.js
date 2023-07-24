import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons'
import Link from "next/link"
import styles from './styles.module.css'


const Header = () => {
  return (
    <header className='fixed top-0 p-5 right-0 left-0 flex items-start justify-between max-w-5xl mx-auto z-50' >
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0
          }}

          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration:1.5
          }}

        className='flex flex-row items-center lg:items-center'>

          <SocialIcon
            target="_blank"
            url="https://github.com/#"
            fgColor='gray'
            bgColor='transparent'
          />



          <SocialIcon
            target="_blank"
            url="https://www.linkedin.com/"
            fgColor='gray'
            bgColor='transparent'
            className={`hover:${styles.hovering}`}
          />
          

          <SocialIcon
            target="_blank"
            url="https://www.twiter.com/"
            fgColor='gray'
            bgColor='transparent'
          />

        </motion.div>

        <motion.div

        initial={{
          x: 500,
          opacity: 0,
          scale: 0
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration:1.5
        }}
        
        >
          <Link href="#contacts">
            <SocialIcon
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden sm:inline-block text-sm text-white'>get in touch</p>
          </Link>
        </motion.div>
    </header>
  )
}

export default Header