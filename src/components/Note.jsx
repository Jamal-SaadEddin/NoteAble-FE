import {
  Button,
  Card,
  CardBody,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  Textarea,
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import formatDate from "./../services/FormatDate";

const Note = ({ note }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentNote, setCurrentNote] = useState(note);

  const handleClose = () => {
    setCurrentNote(note);
    onClose();
  };

  const handleSave = () => {
    // Save Note to database...

    onClose();
  };

  return (
    <>
      <Tooltip label="Edit this note" hasArrow>
        <Card
          width={{
            base: "100%",
            sm: "calc(50% - 1rem)",
            md: "calc(33.333% - 1.333rem)",
            lg: "calc(25% - 1.5rem)",
          }}
          flex="1"
          flexBasis="auto"
          minWidth="300px"
          maxWidth="443px"
          cursor="pointer"
          onClick={onOpen}
        >
          <CardBody>
            <VStack alignItems="start" spacing={7}>
              <Heading size="md">{currentNote.title}</Heading>
              <Text fontSize="sm">{currentNote.content}</Text>
              <Tag>{currentNote.createdAt}</Tag>
            </VStack>
          </CardBody>
        </Card>
      </Tooltip>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Input
              placeholder="Title"
              border="none"
              pl={0}
              _focus={{ boxShadow: "none" }}
              value={currentNote.title}
              onInput={(event) =>
                setCurrentNote({ ...currentNote, title: event.target.value })
              }
            />
          </ModalHeader>
          <ModalCloseButton onClick={handleClose} zIndex={100} />
          <ModalBody>
            <Textarea
              placeholder="Write your note..."
              border="none"
              p={0}
              _focus={{ boxShadow: "none" }}
              value={currentNote.content}
              onInput={(event) =>
                setCurrentNote({ ...currentNote, content: event.target.value })
              }
            />
            <Input
              type="date"
              value={formatDate(currentNote.createdAt)}
              onInput={(event) =>
                setCurrentNote({
                  ...currentNote,
                  createdAt: new Date(event.target.value).toLocaleDateString(
                    "en-GB"
                  ),
                })
              }
              mt={3}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              variant="ghost"
              mr={3}
              h="fit-content"
              p={2}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              colorScheme="green"
              variant="ghost"
              h="fit-content"
              p={2}
              onClick={handleSave}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Note;
