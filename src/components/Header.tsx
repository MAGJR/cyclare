import { MotionBox,  } from "@/styles/animation";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import LogoHome from "../../public/logo.webp"
import Link from "next/link";

export function Header() {
 /* const today = moment().format('MM/DD/YYYY');
  const message = `Today ${today} is the last day to watch this video` */

  return (
    <MotionBox>
    <Box position="fixed"
      top="0"
      left="0"
      right="0"
      height="80px"
      width="100%"
      bgColor="gray.900"
      backdropFilter="blur(5px)" 
      borderBottom="1px solid orange"
      borderRadius="6px"
      zIndex="1"
      >
       
       <Box mt="20" >
        <Link href="/">
       <Image src={LogoHome} alt="logo" width={40} height={20} />
       </Link>
      </Box> 
     
    </Box>

    </MotionBox>
  )
};

