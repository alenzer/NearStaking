import React, { FunctionComponent } from 'react';
import { VStack, Stack, Text, Divider, HStack, Image, Flex, Button, Tooltip } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import Warning from './../../../assets/Warning.svg'
import AnimationNumber from '../../Components/AnimationNumber';
import { OpenDepositModal, OpenWithdrawModal, useStore, useUSTApr } from '../../../store';
import {COINTYPE} from '../../../store'

interface Props{
  name: COINTYPE,
  description: string,
  avatar: string,
  apr: number,
}

const CoinPanel: FunctionComponent<Props> = ({name, description, avatar, apr}) => {
  const { state, dispatch } = useStore();

  return (
    <VStack
      minW={{base:'100%', lg:'48%'}}
      rounded={'25px'}
      background={'#212121'}
      px={{ sm: '10px', md: '20px', lg: '47px' }}
      py={{ sm: '10px', md: '20px', lg: '55px' }}
      mt='30px'
      color='#CEBFBF'
    >
      <Stack 
        direction='row'
        w='100%' align='center' justify={'space-between'}
      >
        <HStack spacing={'12px'} w='100%'>
          <Image src={'./' + avatar} w={'33px'} />
          <Flex direction='column' align='baseline'>
            <Text 
              color='white'
              fontSize={'20px'}
              fontWeight='800'
            >
              {name}
            </Text>
            <Text
              fontSize='13px'
              fontWeight={'400'}
            >
              {description}
            </Text>
          </Flex>
        </HStack>
        <HStack ml='126px' spacing='30px' w='100%'>
          <VStack align='baseline'>
            <HStack>
              <Text
                fontSize='13px'
                fontWeight='800'
              >
                Saving Balanece
              </Text>
              <Image src={Warning} w={'13px'}/>
            </HStack>
            <Text
              fontSize='13px'
              fontWeight={'400'}
            >
              $ 937,345,00
            </Text>
          </VStack>
          <VStack align='baseline'>
            <HStack>
              <Text
                fontSize='13px'
                fontWeight='800'
              >
                APY
              </Text>
              <Image src={Warning} w={'13px'}/>
            </HStack>
            <Text
              fontSize='13px'
              fontWeight={'400'}
            >
              {apr}%
            </Text>
          </VStack>
        </HStack>
      </Stack>
      <Stack
        w={'100%'}
        pt={'37px'}
        spacing={'24px'}
        justify={'center'}
        align='center'
        direction={{base:'column', lg:'row'}}
      >
        <Button
          w={'200px'}
          h={'45px'}
          background={'#493C3C'}
          rounded={'25px'}
          onClick={() => OpenDepositModal(state, dispatch, name)}
        >
          <Text
            fontSize={'13px'}
            fontWeight={'860'}
            lineHeight={'15px'}

          >
            Deposit
          </Text>
        </Button>
        <Button
          w={'200px'}
          h={'45px'}
          background={'#212121'}
          border={'solid 1px'}
          borderColor={'#CEBFBF'}
          rounded={'25px'}
          onClick={() => OpenWithdrawModal(state, dispatch, name)}
        >
          <Text
            fontSize={'13px'}
            fontWeight={'860'}
            lineHeight={'15px'}
          >
            Withdraw
          </Text>
        </Button>
      </Stack>
    </VStack>
  );
}
export default CoinPanel;