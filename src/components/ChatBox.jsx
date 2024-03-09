import { Box } from "@chakra-ui/layout";
import SingleChat from "./SingleChat";
import { selectSelectedChat } from "../redux/chat/selectedChatSlice";
import { useSelector } from "react-redux";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = useSelector(selectSelectedChat);

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      // p={3}
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      className="chatbox"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
