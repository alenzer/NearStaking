import React, { FunctionComponent, useState } from 'react';
import { Stack, Flex, HStack, Button, Text, Divider, Image } from '@chakra-ui/react'
import { Deposit, MsgExecuteContract, WasmAPI, Coin } from '@terra-money/terra.js'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

import Neart from '../../assets/Neart.svg';
import { shortenAddress } from '../../Util';
import { useStore } from '../../store';

interface Props {
  isOpen: boolean,
  onClose: () => void,
}
const FailedModal: FunctionComponent<Props> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useStore();
  const txhash = state.txhash;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        background={'#212121'}
        rounded={'25px'}
        w={{ base: '80%', md: '469px', lg: '469px' }}
        minW={{ sm: '80%', md: '469px', lg: '469px' }}
        h={'455px'}
        px={{ sm: '10px', md: '45px', lg: '45px' }}
        pt={{ base: '10px', lg: '61px' }}
        pb={{ base: '10px', lg: '36px' }}
        alignItems={'center'}
      >
        <Text
          fontSize='40px'
          fontWeight={'400'}
          lineHeight='48px'
        >
          ❌
        </Text>
        <Text
          mt={'27px'}
          fontSize={'20px'}
          fontWeight={'860'}
          lineHeight={'24px'}
          color={'white'}
        >
          Transaction failed...
        </Text>
        <Text
          mt={'23px'}
          fontSize={'9px'}
          fontWeight={'400'}
          lineHeight={'11px'}
          color={'#CEBFBF'}
        >
          Transaction failed<br /><br />
          The transaction requested has failed due to the following reason:<br /><br />
          “...................................”<br /><br /><br />
          For assistance, please report your Tx hash to the official Near Treasury Telegram Support Channel: https://t.me/neartreasury
        </Text>
        <Divider mt={'20px'} orientation='horizontal' variant={'dashed'} color={'#CEC0C0'} />
        <HStack mt={'20px'} w={'100%'} justify={'space-between'}>
          <Text
            fontSize={'9px'}
            fontWeight={'400'}
            lineHeight={'11px'}
            color={'#CEC0C0'}
          >
            Tx Hash
          </Text>
          <Text
            fontSize={'13px'}
            fontWeight={'400'}
            lineHeight={'14px'}
            color={'#CEC0C0'}
          >
            {shortenAddress(txhash)}
          </Text>
        </HStack>
        <Button
          w='80%'
          h='45px'
          bg='#493C3C'
          fontSize='13px'
          mt='40px'
          color='white'
          rounded='25px'
          onClick={() => onClose()}
        >
          Proceed
        </Button>
        <ModalCloseButton color={'#CEBFBF'} />
      </ModalContent>
    </Modal>
  );
}
export default FailedModal;

