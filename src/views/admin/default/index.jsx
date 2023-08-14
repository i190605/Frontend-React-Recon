
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
  
} from "@chakra-ui/react";
// Assets

import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import SmellyDrawer from "components/drawer/drawer";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,

} from "react-icons/md";
import { DocumentIcon } from "components/icons/Icons";
import { RocketIcon } from "components/icons/Icons";

import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
     
      <SimpleGrid
        columns={{ base: 1, md: 10, lg: 1, "2xl": 6 }}
        gap='100px'
        mb='20px'>
          
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={DocumentIcon} color={brandColor} />
              }
            />
          }
          name='Repo name'
          value='Masterdon'
        />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'> 
           <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Smells count'
          value='5'
        />
         <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={RocketIcon} color={brandColor} />
              }
            />
          }
          name='Health score'
          value='5%'
        />   
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 10, xl: 1 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={ columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
