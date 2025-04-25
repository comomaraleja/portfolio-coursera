import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FullScreenSection from "./FullScreenSection";

const Card = ({ title, description, imageSrc }) => {

  return <FullScreenSection
    backgroundColor="white"
    marginBottom="10px"
    borderRadius="md"
    alignItems="left"
    minH="sm"
  >
    <Image rounded="md" src={imageSrc} />

    <VStack
      alignItems="left"
      padding="20px"
      gap="10px">
      <Heading size="md">{title}</Heading>
      <Text size>{description}</Text>
      <Text fontWeight="semibold">See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </VStack>





  </FullScreenSection>;
};

export default Card;
