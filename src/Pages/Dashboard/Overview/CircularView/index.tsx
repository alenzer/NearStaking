import React, { FunctionComponent } from 'react';
import { HStack, Stack, Flex, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { BigNumber } from 'bignumber.js';

import {DoughnutChart} from "./DoughnutChart";
import { StableCoins, DECIMALS } from '../../../../constants';
import { useStore, usePrice } from '../../../../store';

const CircularView: FunctionComponent = (props) => {
  const { state, dispatch } = useStore();

  const history = state.amountHistory;
  const price = state.price;
  const last = history.length - 1;

  let stable = new BigNumber(0);
  let volatile = new BigNumber(0);
  let percent = 40;

  if (last > 0) {
    let coins = StableCoins.filter((coin) => !coin.upcoming);
    for (let j = 0; j < coins.length; j++) {
      let usd = new BigNumber(history[last].amount[j] + history[last].reward[j]);
      usd = usd.multipliedBy(price[j]).dividedBy(10 ** DECIMALS[j]);

      if (coins[j].stable)
        stable = stable.plus(usd);
      else
        volatile = volatile.plus(usd);
    }
    const sum = stable.plus(volatile);
    if (!sum.eq(0)) {
      let percent_big = stable.dividedBy(sum).multipliedBy(100);
      percent = percent_big.toNumber();
    }
  }
console.log(percent)
  return (
    <Flex 
    // transform={'rotate(90deg)'} animation='spin 0.3s linear'
    >
      {/* <CircularProgress
        value={percent}
        size={'172px'}
        capIsRound={true}
        color={'#F9D85E'}
        trackColor={'black'}
        thickness='14'
        aria-busy={false}
      >
      </CircularProgress> */}
      <DoughnutChart 
        descriptors = {[
          {
            label: "www",
            color: "black",
            value: percent,
          },
          {
            label: "www",
            color: "#F9D85E",
            value: 100-percent,
          }
        ]}
      />
    </Flex>
  );
}
export default CircularView;