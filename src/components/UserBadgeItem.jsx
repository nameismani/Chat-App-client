import { FaTimes } from "react-icons/fa";
import { Badge } from "@chakra-ui/layout";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {user.name}
      {admin === user._id && <span> (Admin)</span>}
      <FaTimes pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;
