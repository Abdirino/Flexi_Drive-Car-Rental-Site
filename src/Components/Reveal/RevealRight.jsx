import React from 'react'
import { motion } from 'framer-motion'

const RevealRight = ({children}) => {
  return (
    <div style={{overflow: "hidden"}}>
      <motion.div
      variants={{
        hidden: {opacity: 0, x: -74},
        visible: {opacity: 1, x: 0}
      }}
      initial="hidden"
      animate="visible" 
      transition={{duration: 0.4, delay: 0.1}}     
      >{children}</motion.div>
    </div>
  )
}

export default RevealRight