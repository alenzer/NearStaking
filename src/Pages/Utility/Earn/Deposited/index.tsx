import React, { FunctionComponent } from 'react';
import { VStack, HStack, Stack, Flex, Text, Input, Link, Center, Divider, Button } from '@chakra-ui/react'
import { MdInfoOutline } from 'react-icons/md';
import { SetStateAction, Dispatch } from 'react';

interface Props{
  amount: string,
  setAmount: Dispatch<SetStateAction<string>>;
}
const Deposited: FunctionComponent<Props> = ({amount, setAmount}) => {
  return (
    <Flex w={'100%'} h={'100%'} direction="column" color='white' align={'baseline'} justify='center'>
      <Input
        width={'100%'}
        border={'none'}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        _focus={{ border: 'none' }}
        fontSize='20px'
        h='20px'
        fontWeight='860'
      />
      <Divider orientation='horizontal' />
      <Text
        fontSize={'9px'}
        fontWeight={'860'}
        lineHeight={'20px'}
      >
        Your Total Deposit in USD
      </Text>
    </Flex>
  );
}
export default Deposited;