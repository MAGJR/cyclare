import { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HTMLMotionProps,  motion, Variants } from 'framer-motion';
import { MotionBox } from '@/styles/animation';

interface DepoimentoProps extends HTMLMotionProps<'div'> {
  isActive: boolean;
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

function Depoimento({ isActive }: DepoimentoProps) {
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
      whileHover={{ scale: 1.009 }}
      whileTap={{ scale: 0.9 }}
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
          <Box as="span" color="gray.500" fontSize="xl">
            <i className="fas fa-user"></i>
          </Box>
        </Box>
        <Text fontWeight="bold">Nome do cliente</Text>
      </Box>
      <Text fontSize="sm">
        "Aqui vai o depoimento do cliente sobre como o produto foi útil para ele e como sua vida melhorou depois de usá-lo."
      </Text>
    </MotionBox>
  );
}

export function Lead() {
  const [slideIndex, setSlideIndex] = useState(0);

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
      <Button
        as={motion.button}
        mt={['4','10']}
        colorScheme="green"
        w={["70%","70%"]}
        maxW={['70%', '100%']}
        p={['4', '6']}
        fontSize={['sm', 'md']}
        px={['4', '6']}
        py={['2', '4']}
        
      >
        Compre agora
      </Button>

      <Box mt={["6","8"]}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Depoimentos dos clientes
        </Text>
        <Slider {...settings} >
          {[...Array(5)].map((_, i) => (
            <Depoimento key={i} isActive={slideIndex === i} />
          ))}
        </Slider>
        <Text fontSize="sm" mt={4}>
          {slideIndex + 1} de 5
        </Text>
      </Box>
    </Box>
  );
}
