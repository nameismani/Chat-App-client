import React from "react";
import { Avatar, Tooltip } from "@chakra-ui/react";

const UserChatHeader = ({ user, selectedUser }) => {
  return (
    <Tooltip label={user.name} placement="bottom-start" hasArrow as="header">
      <span>
        <Avatar
          mt="7px"
          mr={1}
          size="sm"
          cursor="pointer"
          name={user.name}
          src={user.pic}
        />
        {selectedUser}
      </span>
    </Tooltip>
  );
};

export default UserChatHeader;
