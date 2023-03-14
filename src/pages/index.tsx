import { useState, useRef, useEffect } from 'react';
import { Flex, Heading,IconButton, CircularProgress } from '@chakra-ui/react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import { Lead } from '@/components/Lead';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import Head from 'next/head';

import { Root } from '@/components/Root';
import { MotionBox, animationContainer } from '@/styles/animation';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const playerRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && playerRef.current) {
      playerRef.current.seekTo(0);
    }
  }, [isClient]);

  function handlePayAndPause () {
    setIsPlaying((prev) => !prev)
  }

  return (
    <Flex direction="column" align="center" justify="center">
      <Head>
        <title>Cyclare | Início</title>
      </Head>

      <MotionBox
        maxW={'70%'}
        mb="10"
        variants={animationContainer}
        textAlign="center"
        initial="hidden"
        animate="visible"
      >
        <Heading>Headline aqui</Heading>
      </MotionBox>

      <MotionBox w={['100%', '70%']} h={['50vh', '70vh']}>
        {isClient && (
          <ReactPlayer
            url="https://d2a7jgldn44rxi.cloudfront.net/VSL%20FINALIZADA.mp4"
            width="100%"
            height="100%"
            controls={false}
            controlsList="nodownload"
            playing={isPlaying}
            ref={playerRef}
            onProgress={({ playedSeconds, played }: ReactPlayerProps) => {
              const threshold = 10;
              if (playedSeconds > threshold) {
                setShowContent(true);
              }
              setVideoProgress(played);
            }}
          />
        )}
        {isLoading && (
          <CircularProgress 
          isIndeterminate
            size="10%"
            thickness={0.2}
            color="gray.500"
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
          />
        )}
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
          position="relative"
          left="50%"
          top="-50%"
          transform="translate(-50%, -50%)"
          onClick={handlePayAndPause}
        />
      </MotionBox>
      <div>
        Progresso do vídeo: {videoProgress * 100}%
      </div>
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
