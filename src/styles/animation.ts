import { Box, BoxProps } from '@chakra-ui/react'
import { motion} from 'framer-motion';




export const animationLogo = {
  hidden : {
    pathLenght: 0,
    fill: "rgba(255,255,255,0)"
  },
  visiable: {
    pathLenght: 1,
    fill: "rgba(255,255,255,1)"
  }
}

export const animationContainer = {
    hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
}

export const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const MotionBox = motion<BoxProps>(Box);