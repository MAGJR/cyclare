import { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import { HTMLMotionProps,  motion, Variants } from 'framer-motion';
import { MotionBox } from '@/styles/animation';
import Link from 'next/link';



interface Depoimento {
  name: String;
  description: String;
  image: string;
}

interface DepoimentoProps extends HTMLMotionProps<'div'> {
  isActive: Boolean;
  depoimento: Depoimento
}



const animationContainer: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2
    }
  }
};

function Depoimento({ isActive, depoimento }: DepoimentoProps) {
  return (
    <MotionBox
      padding={["2","8"]}
      borderWidth="1px"
      borderRadius="lg"
      mb={['2', '0']}
      mr={['0', '4']}
      variants={animationContainer}
      initial="hidden"
      animate={isActive ? 'show' : 'show'}
      whileHover={{ scale: 1.020 }}
      whileTap={{ scale: 0.9 }}
      mt="4"
    >
      <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
        <Box
          w="40px"
          h="40px"
          borderRadius="full"
          bg="gray.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr={['2','4']}
          
        >
          <Image src={depoimento.image} h="45px" w="40px"  borderRadius="full" alt="testimonious"/>
          <Box as="span" color="gray.500" fontSize="xl">
            <i className="fas fa-user"></i>
          </Box>
        </Box>
        <Text fontWeight="bold">{depoimento.name}</Text>
      </Box>
      <Text fontSize="sm">
        {depoimento.description}
      </Text>
    </MotionBox>
  );
}

export function Lead() {
  const [slideIndex, setSlideIndex] = useState(0);
  const depoimentos: Depoimento[] = [
    {
    name: 'Javier',
    description: `Padecí de estreñimiento durante años y probé varios tratamientos sin éxito. Mi calidad de vida se vio gravemente afectada y ya no podía tolerar esta situación. Fue entonces cuando escuché acerca de Cyclare y decidí probarlo. ¡Desde entonces, todo ha cambiado! Además de ganar mucho más tiempo sin sufrir de estreñimiento, pude disfrutar de deliciosos alimentos que antes me estaban prohibidos.`,
    image: '/testimonials.webp'
  },
  {
    name: 'Maria Dolores',
    description: `Durante mi embarazo, empecé a padecer de estreñimiento y esto afectó considerablemente mi calidad de vida. Probé algunas soluciones, pero nada parecía funcionar y cada vez me sentía más frustrada. Fue entonces cuando escuché sobre Cyclare y decidí probarlo. ¡Me sorprendí con el resultado increíble!`,
    image: '/testimonials2.webp'
  },
  {
    name: 'Antónia',
    description: `Siempre he padecido de estreñimiento y comencé a usar laxantes para ayudarme a evacuar. Sin embargo, con el tiempo, me di cuenta de que ya no podía evacuar sin ellos y eso comenzó a preocuparme. Fue entonces cuando descubrí Cyclare y decidí probarlo. Para mi sorpresa, ya no necesitaba los laxantes y empecé a evacuar de forma natural. Estaba muy feliz con los resultados y ahora me siento mucho más cómodo y saludable.`,
    image: '/testimonials3.webp'
  },
  {
    name: 'Manuel',
    description: `Después de cumplir los 30 años, empecé a notar que no evacuaba con la misma frecuencia que antes. Solía pasar de 3 a 5 días sin poder evacuar y eso empezó a preocuparme. Probé algunas soluciones, pero nada parecía funcionar hasta que escuché sobre Cyclare y decidí probarlo. ¡Me sorprendí con el resultado inmediato! Empecé a evacuar más a diario y mi calidad de vida mejoró muchísimo. Agradezco a Cyclare por ayudarme a recuperar mi salud intestinal.`,
    image: '/testimonials4.webp'
  },
  {
    name: 'José Luís',
    description: `Nací con estreñimiento y a lo largo de toda mi vida tuve dificultades para evacuar. Era una lucha constante y había perdido la esperanza de encontrar una solución. Fue entonces cuando escuché sobre Cyclare y decidí probarlo. ¡Me sorprendieron los resultados! Por primera vez en mi vida, empecé a evacuar con mayor frecuencia y mi vida cambió por completo. Ahora me siento mucho más saludable y feliz, todo gracias a Cyclare.`,
    image: '/testimonials5.webp'
  }
]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (next: number) => setSlideIndex(next)
  };

  return (
    <Box textAlign="center" maxW={"80%"} m="0 auto" >
      <Link href="https://pay.hotmart.com/J84333709U?checkoutMode=10">
      <Button
        as={motion.button}
        mt={['4','10']}
        colorScheme="green"
        w={["100%","70%"]}
        maxW={['100%', '100%']}
        p={['4', '6']}
        fontSize={['sm', 'md']}
        px={['4', '6']}
        py={['2', '4']}
        
      >
        adquirir ahora!
        
      </Button>
      </Link>
      <Box mt={["6","8"]} mb={["6", "8"]}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
        Testimonios de clientes.
        </Text>
        
          {depoimentos.map((depoimento, i) => (
            <Depoimento 
            key={i} 
            isActive={slideIndex === i} 
            depoimento={depoimento}
            />
          ))}
        
        
      </Box>
      <Link href="https://pay.hotmart.com/J84333709U?checkoutMode=10">
      <Button
        as={motion.button}
        mt={['2','2']}
        colorScheme="green"
        w={["70%","70%"]}
        maxW={['70%', '100%']}
        p={['4', '6']}
        fontSize={['sm', 'md']}
        px={['4', '6']}
        py={['2', '4']}
        
      >
        Adquirir ahora!
      </Button>
      </Link>
    </Box>
  );
}
