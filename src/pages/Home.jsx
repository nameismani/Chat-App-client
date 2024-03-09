import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Login, SignUp } from "../components";
import { selectCurrentUser } from "../redux/user/userSlice";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser } = useSelector(selectCurrentUser);
  const location = useLocation();
  let navigate = useNavigate();
  let from = location?.state?.from?.pathname || "/chats";

  useEffect(() => {
    if (currentUser) {
      // If user is logged in redirect to chats page.
      navigate(from, { replace: true });
    }
  }, []);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" textAlign="center">
          Chat App
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
