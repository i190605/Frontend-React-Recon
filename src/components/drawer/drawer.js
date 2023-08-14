import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Text } from "@chakra-ui/react";

const SmellyDrawer = ({ isOpen, onClose }) => {

  // Code Smell 1: Large Function
  // Description: This function is doing too much, making it hard to understand and maintain.
  // Refactoring: Break it down into smaller, more focused functions.
  const handleButtonClick = () => {
    // ... lots of complex logic here ...
  };

  // Code Smell 2: Magic Numbers
  // Description: Using hard-coded numbers without clear explanations can lead to confusion.
  // Refactoring: Define constants with meaningful names to make the code more readable.
  const MAGIC_NUMBER = 42;

  // Code Smell 3: Deep Nesting
  // Description: Nested structures can make the code difficult to follow and debug.
  // Refactoring: Flatten the structure by extracting components or using helper functions.
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hello, Code Smells!</DrawerHeader>
          <DrawerBody>
            <Text>Some content here...</Text>
            <Button onClick={handleButtonClick}>Click Me</Button>
            <Text>{MAGIC_NUMBER}</Text>
            
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

// Code Smell 4: Unused Function
// Description: This function is defined but not used anywhere in the component.
// Refactoring: Remove the function if it's not being used or find a use for it.
const unusedFunction = () => {
  // ...
};

// Code Smell 5: Long Parameter List
// Description: A function with many parameters can be hard to manage and understand.
// Refactoring: Consider using an object to pass multiple parameters or breaking down into multiple functions.
const SmellyFunctionWithLongParameters = (param1, param2, param3, param4, param5) => {
  // ...
};

export default SmellyDrawer;
