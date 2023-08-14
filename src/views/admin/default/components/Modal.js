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
import  {
  
  Lorem,  
} from "react-table";


const  BasicUsage = (props) => {
    return (
      <>
        <Modal onClose={() => props.setOpen()} isOpen={props && props.open} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => props.setOpen()}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
  }
  export default BasicUsage;
  