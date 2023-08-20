import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  Heading,
  Text,
} from "@chakra-ui/react";

import React from "react";
import styles from "./modal.css";

const BasicUsage = (props) => {
  console.log(props.section);
  return (
    <>
      <Modal onClose={props.setOpen} isOpen={props.open}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="modal-footer"></ModalHeader>

          <ModalCloseButton />

          <ModalBody className="modal-body">
            {props &&
              props.section.map((section, index) => {
                const isPercentage = section.header === "Percentage";
                const descriptionValue = parseFloat(section.description);
                let descriptionColor = "inherit";
                let severityLevel = "";

                if (isPercentage) {
                  if (descriptionValue > 90) {
                    descriptionColor = "red";
                    severityLevel = "High";
                  } else if (descriptionValue > 70) {
                    descriptionColor = "blue";
                    severityLevel = "Moderate";
                  } else if (descriptionValue > 50) {
                    descriptionColor = "yellow";
                    severityLevel = "Low";
                  } else {
                    descriptionColor = "green";
                    severityLevel = "Very Low";
                  }
                }

                const descriptionStyle = {
                  marginLeft: "1em",
                  color: isPercentage ? descriptionColor : "inherit",
                };

                return (
                  <div key={index}>
                    <Heading as="h5" size="sm">
                      {section.header}
                    </Heading>
                    <Text style={descriptionStyle}>
                      {section.description}
                      {isPercentage && (
                        <span> - Severity: {severityLevel}</span>
                      )}
                    </Text>
                  </div>
                );
              })}
          </ModalBody>

          <ModalFooter className="modal-footer">
            <Button
              onClick={props.setOpen}
              variant="solid"
              className="close-button"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicUsage;
