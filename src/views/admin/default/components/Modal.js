import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  } from "@chakra-ui/react";

import React, { useMemo } from "react";

import CheckTable from "./CheckTable";
import ColumnsTable from "./CheckTable";
import ComplexTable from "./ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,

  columnsDataComplex,
} from "../variables/columnsData";

import tableDataCheck from "../variables/tableDataCheck.json";
import tableDataComplex from "../variables/tableDataComplex.json";


const  BasicUsage = (props) => {
  return (
    <>
     <Modal onClose={props.setOpen} isOpen={props.open}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
        </ModalHeader>
        <ModalCloseButton />
  
        <ModalBody>
            {props && props.section.map((section, index) => (
              <div key={index}>
                <h2>{section.header}</h2>
                <p>{section.description}</p>
              </div>
            ))}
          </ModalBody>
        
        <ModalFooter>
          <Button onClick={props.setOpen}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
};
  export default BasicUsage;
  