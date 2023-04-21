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
      
      >
       
     
    </Box>

    </MotionBox>
  )
};

