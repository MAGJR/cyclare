import { MotionBox,  } from "@/styles/animation";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import LogoHome from "../../public/logo.webp"
import Link from "next/link";
import moment from "moment";

export function Header() {
  const today = moment().format('MM/DD/YYYY');
  const message = `Today ${today} is the last day to watch this video` 

  return (
    <MotionBox>
    <Box
      display="flex"
      justifyContent="center" 
      alignItems="center"
      height="60px"
      width="100%"
      bgColor="orange"
      backdropFilter="blur(5px)" 
      borderBottom="1px solid orange"
      borderRadius="6px"
      zIndex="1"
      >
       <Heading fontSize="3xl" fontWeight="bold">{message}</Heading>
       
     
    </Box>

    </MotionBox>
  )
};

