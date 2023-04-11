import { MotionBox,  } from "@/styles/animation";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import LogoHome from "../../public/logo.webp"

export function Header() {
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
        <Image src={LogoHome} alt="logo" width={40} height={20} />
       <Box ml="auto" mr="auto" display="flex" justifyContent="space-between" maxW={500} >
        <h1>Inicio</h1>
        <h1>Sobre</h1>
        <h1>Depoimentos</h1>

      </Box> 
     
    </Box>

    </MotionBox>
  )
};

