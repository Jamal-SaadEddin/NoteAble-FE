import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Textarea,
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { deleteNote, updateNote } from "../hooks/useNotes";
import formatDate from "./../services/FormatDate";

const Note = ({ note, notes, setNotes }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }
  }, []);

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [currentNote, setCurrentNote] = useState(note);
  const [showDelete, setShowDelete] = useState(false);
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const handleClose = () => {
    setCurrentNote(note);
    onCloseEdit();
  };

  const handleSave = async () => {
    const updatedNote = await updateNote(currentNote._id, {
      title: currentNote.title,
      content: currentNote.content,
    });
    setCurrentNote(updatedNote);

    onCloseEdit();
  };

  const handleDelete = async () => {
    const wasDeleted = await deleteNote(currentNote._id);
    if (wasDeleted) {
      const filteredNotes = notes.filter((n) => n._id !== currentNote._id);
      setNotes(filteredNotes);
    }

    onCloseDelete();
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
          onClick={onOpenEdit}
          onMouseEnter={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
        >
          <CardBody>
            <VStack alignItems="start" spacing={7}>
              <Heading size="md">{currentNote.title}</Heading>
              <Box
                fontSize="sm"
                whiteSpace="pre-wrap"
                fontFamily="monospace"
                lineHeight="normal"
                overflow="auto"
                maxH="100px"
              >
                {currentNote.content}
              </Box>
              <HStack justifyContent="space-between" w="100%">
                <Tag>{formatDate(currentNote.createdAt)}</Tag>
                <Button
                  visibility={
                    isTouchDevice || showDelete ? "visible" : "hidden"
                  }
                  borderRadius={50}
                  p={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenDelete();
                  }}
                >
                  <Icon as={BsTrash3} fontSize={20} />
                </Button>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </Tooltip>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
      >
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
            <Tag>{formatDate(currentNote.createdAt)}</Tag>
          </ModalBody>
          <ModalFooter>
            <Button
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
              isDisabled={
                currentNote.title === note.title &&
                currentNote.content === note.content
              }
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Note Deletion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you certain you wish to delete this Note?</ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              h="fit-content"
              p={2}
              onClick={onCloseDelete}
            >
              Close
            </Button>
            <Button
              colorScheme="red"
              variant="ghost"
              h="fit-content"
              p={2}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Note;
