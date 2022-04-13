import React, { FunctionComponent, useEffect } from 'react';
import { VStack, HStack, Stack, Flex, Text, Image, Link, Center, Divider, Tooltip } from '@chakra-ui/react'
import Warning from "./../../../../assets/Warning.svg"

import { floor } from '../../../../Util';
import BlackPanel from './../../../../assets/BlackPanel.svg'
import YellowPanel from './../../../../assets/YellowPanel.svg'
import GreenPanel from './../../../../assets/GreenPanel.svg'
import BluePanel from './../../../../assets/BluePanel.svg'
import { useUSTBalance, useUSTDeposited, useLUNADeposited, useStore } from '../../../../store';

const Seperator: FunctionComponent = (props) => {
  // const ustPrice = useUstPrice();
  // const lunaPrice = useLunaPrice();
  const {state, dispatch} = useStore();
  const ustPrice = state.ustPrice;
  const lunaPrice = state.lunaPrice;
  const ustBalance = floor(useUSTBalance() * ustPrice);
  const ustDeposited = floor(useUSTDeposited() * ustPrice);
  const lunaDeposited = floor(useLUNADeposited() * lunaPrice);

  return (
    <VStack align={'baseline'} w={'226px'}>
      <HStack spacing={'10px'}>
        <Image src={BlackPanel} w={'15px'} />
        <Text
          fontSize={'20px'}
          fontWeight={'860'}
          lineHeight={'24px'}
        >
          UST Wallet Balance 
        </Text>
        <Tooltip 
          label="Total UST Wallet balance" 
          background={'#C4C4C4'} 
          color={'black'} hasArrow 
          placement='top-start'
        > 
          <Image src={Warning}/>
        </Tooltip>
      </HStack>
      <Text
        fontSize={'14px'}
        fontWeight={'400'}
        fontStyle={'italic'}
      >
          $&nbsp;{ustBalance.toLocaleString()}
      </Text>
      {/* --------------------------------- */}
      <HStack spacing={'10px'}>
        <Image src={GreenPanel} w={'15px'} />
        <Text
          fontSize={'20px'}
          fontWeight={'860'}
          lineHeight={'24px'}
        >
          Total Balance
        </Text>
        <Tooltip 
          label="Total of all UST/Luna deposits, including earnings " 
          background={'#C4C4C4'} 
          color={'black'} hasArrow 
          placement='top-start'
        > 
          <Image src={Warning}/>
        </Tooltip>
      </HStack>
      <Text
        fontSize={'14px'}
        fontWeight={'400'}
        fontStyle={'italic'}
      >
        $&nbsp;{(ustDeposited + lunaDeposited).toLocaleString()}
      </Text>
      {/* --------------------------------- */}
      <HStack spacing={'10px'}>
        <Image src={BluePanel} w={'15px'} />
        <Text
          fontSize={'20px'}
          fontWeight={'860'}
          lineHeight={'24px'}
        >
          UST Balance 
        </Text>
        <Tooltip 
          label="Your total UST deposit including earnings" 
          background={'#C4C4C4'} 
          color={'black'} hasArrow 
          placement='top-start'
        > 
          <Image src={Warning}/>
        </Tooltip>
      </HStack>
      <Text
        fontSize={'14px'}
        fontWeight={'400'}
        fontStyle={'italic'}
      >
        $&nbsp;{ustDeposited.toLocaleString()}
      </Text>
      {/* --------------------------------- */}
      <HStack spacing={'10px'}>
        <Image src={YellowPanel} w={'15px'} />
        <Text
          fontSize={'20px'}
          fontWeight={'860'}
          lineHeight={'24px'}
        >
          LUNA Balance
        </Text>
        <Tooltip 
          label="Your total UST deposit \n including earnings" 
          background={'#C4C4C4'} 
          color={'black'} hasArrow 
          placement='top-start'
        > 
          <Image src={Warning}/>
        </Tooltip>
      </HStack>
      <Text
        fontSize={'14px'}
        fontWeight={'400'}
        fontStyle={'italic'}
      >
        $&nbsp;{lunaDeposited.toLocaleString()}
      </Text>
    </VStack>
  );
}
export default Seperator;