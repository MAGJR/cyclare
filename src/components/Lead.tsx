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
    name: 'Joseph',
    description: `I suffered from constipation for years and had tried several treatments without success. My quality of life was greatly affected and I could no longer tolerate this situation. That's when I heard about Cyclare and decided to give it a try. Since then, everything has changed! In addition to gaining much more time without suffering from constipation, I was able to enjoy delicious foods that were previously forbidden to me.`,
    image: '/testimonials.webp'
  },
  {
    name: 'Emma',
    description: `During my pregnancy, I started suffering from constipation and it greatly affected my quality of life. I tried some solutions, but nothing seemed to work and I was getting more and more frustrated. That's when I heard about Cyclare and decided to give it a try. I was surprised by the incredible result!`,
    image: '/testimonials2.webp'
  },
  {
    name: 'Daisy',
    description: `I've always suffered from constipation and started using laxatives to help me evacuate. However, over time, I realized that I couldn't evacuate without them anymore and that began to worry me. That's when I came across Cyclare and decided to give it a try. To my surprise, I no longer needed the laxatives and started to evacuate naturally. I was very happy with the results and now feel much more comfortable and healthy.`,
    image: '/testimonials3.webp'
  },
  {
    name: 'Norman',
    description: `After I turned 30, I began to notice that I wasn't evacuating as frequently as before. I used to go 3 to 5 days without being able to evacuate, and it started to worry me. I tried some solutions, but nothing seemed to work until I heard about Cyclare and decided to give it a try. I was surprised by the immediate result! I started evacuating more daily and my quality of life improved a lot. I thank Cyclare for helping me recover my intestinal health.`,
    image: '/testimonials4.webp'
  },
  {
    name: 'Phillip',
    description: `I was born with constipation and throughout my entire life, I had difficulty evacuating. It was a constant struggle and I had lost hope of finding a solution. That's when I heard about Cyclare and decided to give it a try. I was surprised with the results! For the first time in my life, I began to evacuate more frequently and my life changed completely. I feel much healthier and happier now, all thanks to Cyclare.`,
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
      <Link href="https://pay.hotmart.com/E80970971T?checkoutMode=10">
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
        I want to get rid of constipation now!
        
      </Button>
      </Link>
      <Box mt={["6","8"]} mb={["6", "8"]}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
        Testimonials from customers
        </Text>
        
          {depoimentos.map((depoimento, i) => (
            <Depoimento 
            key={i} 
            isActive={slideIndex === i} 
            depoimento={depoimento}
            />
          ))}
        
        
      </Box>
      <Link href="https://pay.hotmart.com/E80970971T?checkoutMode=10">
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
        I want to get it now!
      </Button>
      </Link>
    </Box>
  );
}
