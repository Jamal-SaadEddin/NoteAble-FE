import {
  Card,
  CardBody,
  HStack,
  Heading,
  Tag,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { notes } from "../constants/notes";

const Notes = () => {
  return (
    <HStack w="100%" flexWrap="wrap" justifyContent="flex-start" spacing={4}>
      {notes.map((note, index) => (
        <Tooltip label="Edit this note" hasArrow key={index}>
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
          >
            <CardBody>
              <VStack alignItems="start" spacing={7}>
                <Heading size="md">{note.title}</Heading>
                <Text fontSize="sm">{note.content}</Text>
                <Tag>{note.createdAt}</Tag>
              </VStack>
            </CardBody>
          </Card>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default Notes;
