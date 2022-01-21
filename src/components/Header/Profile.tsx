import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData= true }: ProfileProps){
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Millena Brito Bomtempo</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            millena.bomtempo@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md"  name="Millena Brito Bomtempo" src="https://github.com/millenabomtempo.png" />
    </Flex>
  )
}