import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  props: any;
}

export default function Logo(props: Props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
}
