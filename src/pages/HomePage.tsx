import React from 'react';

import { WithSubnavigation,CallToActionWithAnnotation,BasicStatistics,LargeWithNewsletter } from '../components'
import TableTopUser4iIndustria from '../components/TableTopUser4iIndustria';
import { Text } from '@chakra-ui/react'
import Banner from '../components/home/Banner'
import FundedProjects from '../components/home/FundedProjects'
import Dappfunctions from '../components/home/Dappfunctions'
import {
  Flex, chakra
} from '@chakra-ui/react';
import CallToActionWithVideo from '../components/CallToActionWithVideo';
import DeSciEcosystem from '../components/home/DeSciEcosystem';
import DeSciCommunity from '../components/home/DeSciCommunity';

export const HomePage = () => {
  return (
    <> 
    <Flex p={8}></Flex>
      <CallToActionWithAnnotation/>
      <BasicStatistics/>  
      <Flex p={8}></Flex>
      <CallToActionWithVideo/>
      <Flex p={8}></Flex>
      <FundedProjects/>
      <Flex p={8}></Flex>
      <Dappfunctions/>
      <DeSciEcosystem/>
      <DeSciCommunity/>
      
      {/*<TableTopUser4iIndustria/>*/}   
    </>
  )
}