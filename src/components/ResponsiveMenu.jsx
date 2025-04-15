// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export const ResponsiveMenu = ({showMenu}) => {
  return <AnimatePresence mode='wait'>
    {
        showMenu && (
            <motion.div
            initial={{ opacity: '100%', y: -100 }}
            animate={{ opacity: '100%', y: 0 }}
            exit={{ opacity: '0%', y: -100 }}
            transition={{ duration: 0.3 }}
            className='absolute top-20 left-0 h-[calc(100vh-5rem)] z-20 w-full'>
                <div className='bg-black text-white rounded-2xl mx-6 p-6'>
                    <ul className='flex flex-col justify-center items-center gap-6'>
                        <li className='cursor-pointer px-5 py-2'>Home</li>
                        <li className='cursor-pointer px-5 py-2'>About</li>
                        <li className='cursor-pointer px-5 py-2'>Skills</li>
                        <li className='cursor-pointer px-5 py-2'>Projects</li>
                        <li className='cursor-pointer px-5 py-2'>Contact</li>
                    </ul>
                </div>   
            </motion.div>
        )
    }
    </AnimatePresence>
}
