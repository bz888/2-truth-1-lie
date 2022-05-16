import React from 'react'
import { motion } from 'framer-motion'

function LoadAnim () {
  const loadContainer = {
    display: 'flex',
    justifyContent: 'center',
    margin: '25vh 25vw',
    gridColumnGap: '10px'
  }
  const loadCircle = {
    display: 'block',
    width: '15px',
    height: '15px',
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
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <motion.span
        style={loadCircle}
        variants={loadingCircleVariants}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <motion.span
        style={loadCircle}
        variants={loadingCircleVariants}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  )
}

export default LoadAnim
