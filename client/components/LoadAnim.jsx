import React from 'react'
import { motion } from 'framer-motion'

function LoadAnim () {
  const loadContainer = {
    width: '15vw',
    height: '15vh',
    maxWidth: '150px',
    maxHeight: '150px',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '25vh 45vw',
    gridColumnGap: '1vw'
  }
  const loadCircle = {
    display: 'block',
    width: '20%',
    height: '20%',
    maxWidth: '50px',
    maxHeight: '50px',
    backgroundColor: 'black',
    borderRadius: '50%'
  }

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1
      }
    },
    end: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const loadingCircleVariants = {
    start: {
      y: '0%'
    },
    end: {
      y: '100%'
    }
  }
  const loadingCircleTransition = {
    duration: 0.4,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }

  return (
    <motion.div
      style={loadContainer}
      variants={loadingContainerVariants}
      initial='start'
      animate='end'
      id= 'loadAnim'
    >
      <motion.span
        style={loadCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  )
}

export default LoadAnim
