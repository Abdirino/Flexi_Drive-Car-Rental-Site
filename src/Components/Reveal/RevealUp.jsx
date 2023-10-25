import React from 'react'
import { motion } from 'framer-motion'

const RevealUp = ({children}) => {
  return (
    <div style={{position: "relative", overflow: "hidden"}}>
      <motion.div
      variants={{
        hidden: {opacity: 0, y: -74},
        visible: {opacity: 1, y: 0}
      }}
      initial="hidden"
      animate="visible"
      transition={{duration: 0.6}}
      >{children}</motion.div>
    </div>
  )
}

export default RevealUp