import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Millena Brito Bomtempo</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          millena.bomtempo@gmail.com
        </Text>
      </Box>
      <Avatar size="md"  name="Millena Brito Bomtempo" src="https://github.com/millenabomtempo.png" />
    </Flex>
  )
}