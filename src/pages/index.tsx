import Head from 'next/head';
import { Lead } from '@/components/Lead';
import { Foot } from '@/components/Foot';
import { MotionBox } from '@/styles/animation';
import { Flex, Heading, IconButton, Text } from '@chakra-ui/react';
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

  function handleVideoProgress({ playedSeconds, totalDuration }: ReactPlayerProps) {
    const threshold = 1545.45;
  
    if (playedSeconds > threshold) {
      setContentVisible(true);
      setShowContent(true);
      const playRate = calculatePlayRate(playedSeconds, totalDuration);
      MetricsVideo(playRate);
    }
  }
  
  async function MetricsVideo(playRate: number) {
    try {
      await ReactGA.event({
        category: 'video_metrics',
        action: 'play_rate_change',
        label: 'video_category',
        value: playRate,
      });
    } catch (error) {
      console.error('Error sending GA event:', error);
    }
  }
  
  function calculatePlayRate(playedSeconds: number, totalDuration: number): number {
    const playRate = (playedSeconds / totalDuration) * 100;
    return parseFloat(playRate.toFixed(2));
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
    <Flex direction="column" align="center" justify="center" mt={120}>
      <Head>
        <title>Cyclare | Home</title>
      </Head>
      <MotionBox 
      maxW={["100%",'70%']} 
      mt={["2","5"]} 
      mb={["2","5"]}
      textAlign="center"
      
      >
      <Heading mt="3"><Text as="span"  color="orange.400" >This molecule</Text> discovered by scientists is capable of cleaning the intestine</Heading>
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
            bgColor="orange.400"
            _hover={{
              bgColor: 'orange.500',
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
   <h1><Text color="gray.900">This website is not part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. Facebook is a trademark of Facebook, Inc.</Text></h1>   
  <Foot />
</Flex>
  );
}

export async function getStaticProps() {
  
  const played = 0;

  return {
    props: {
      played
    },
    
    revalidate: 60 * 60 * 2
  };
}