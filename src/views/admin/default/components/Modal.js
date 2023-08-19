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
import styles from "./modal.css";

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
      <ModalContent  className="custom-modal">
        <ModalHeader className="modal-header">
    {props.section.map((section, index) => (
  <div key={index}>
    {index === 0 && <h2>{section.header}</h2>}
  </div>
))}
        </ModalHeader>
        <ModalCloseButton />
  
        <ModalBody className="modal-body">
            {props && props.section.map((section, index) => (
              <div key={index}  className={`section ${index === 0 ? "first-section" : ""}`}
              >
            
                 {index !== 0 && <h2>{section.header}</h2>}
                <p>{section.description}</p>
              </div>
            ))}

            
          </ModalBody>
        
      <ModalFooter className="modal-footer">
      <Button onClick={props.setOpen} variant="solid" className="close-button">
        Close
      </Button>
    </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
};
  export default BasicUsage;
  