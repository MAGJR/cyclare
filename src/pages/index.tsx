import Head from 'next/head';
import { Lead } from '@/components/Lead';
import { Root } from '@/components/Root';
import { MotionBox } from '@/styles/animation';
import { Flex, Heading, IconButton } from '@chakra-ui/react';
import ReactGA from 'react-ga4';
import { useState, useRef, useEffect } from 'react';

import { MdPlayArrow, MdPause } from 'react-icons/md';
import ReactPlayer, { ReactPlayerProps } from 'react-player';



export default function Home() {
  
  const playerRef = useRef<ReactPlayer>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const URL_VIDEO = 'https://d2a7jgldn44rxi.cloudfront.net/VSL%20FINALIZADA.mp4'
  
  
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const [showContent, setShowContent] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && playerRef.current) {
      playerRef.current.seekTo(0);
    }
  }, [isClient]);

  function handlePayAndPause() {
    setIsPlaying(!isPlaying);
    setContentVisible(false);
    if (isPlaying) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
      setVideoStarted(true);
    }

    
  }

  function handleVideoProgress({ playedSeconds,  }: ReactPlayerProps) {
    const threshold = 10;
    if (playedSeconds > threshold) {
      setContentVisible(true);
      setShowContent(true);
    }

    const playrate = (playedSeconds / (playerRef.current?.getDuration() ?? 0)) * 100;
    ReactGA.initialize("G-9MVHYB9S60");
    ReactGA.event({
      category: 'PLAY_RATE',
      action: 'video',
      label: 'video',
      value: playrate
  })
  
  }

  function handleBoxClick() {
    if (isPlaying) {
      setIsPlaying(false);
      setIsButtonVisible(true);
    }
    setContentVisible(true);
  }

  function handleVideoClick () {
    if (isPlaying) {
      setIsPlaying(false);
      setIsButtonVisible(true)
    }
  }

  return (
    <Flex direction="column" align="center" justify="center">
      <Head>
        <title>Cyclare | Início</title>
      </Head>
      <MotionBox 
      maxW={["100%",'70%']} 
      mt={["2","5"]} 
      mb={["2","5"]}
      textAlign="center"
      
      >
        <Heading>Aprenda como se livrar da constipação de uma vez</Heading>
      </MotionBox>
      <MotionBox
        w={['100%', '70%']}
        h={['50vh', '70vh']}
        position="relative"
        onClick={handleBoxClick}
      >
        {isClient && (
          <ReactPlayer
            url= {URL_VIDEO}
            width="100%"
            height="100%"
            controls={false}
            controlsList="nodownload"
            playing={isPlaying}
            ref={playerRef}
            onProgress={handleVideoProgress}
            onClick={handleVideoClick}
          />
        )}
        {isButtonVisible && (
          <IconButton
            bgColor="blue.400"
            _hover={{
              bgColor: 'blue.500',
            }}
            aria-label="play/pause"
            size="lg"
            fontSize="40px"
            variant="ghost"
            icon={isPlaying ? <MdPause /> : <MdPlayArrow />}
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            onClick={handlePayAndPause}
          />
        )}
        
      </MotionBox>
      {isClient && showContent && <Lead />}

  <Root />
</Flex>
  );
}

export async function getStaticProps() {
  // faça a requisição dos dados necessários para a página
  const played = 0;

  return {
    props: {
      played
    },
    
    revalidate: 60 * 60 * 2
  };
}
