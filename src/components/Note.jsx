import {
  Card,
  CardBody,
  Heading,
  Tag,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Note = ({ note }) => {
  return (
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
  );
};

export default Note;
