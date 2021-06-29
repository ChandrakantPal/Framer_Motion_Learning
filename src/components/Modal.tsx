import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProp {
  showModal: boolean
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Modal: FC<ModalProp> = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          animate="visible"
          initial="hidden"
        ></motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
