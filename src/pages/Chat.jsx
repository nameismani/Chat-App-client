import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectCurrentUser, signoutSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/SideDrawer";

const Chat = () => {
  const { currentUser } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   let controller = new AbortController();
  //   let signal = controller.signal;
  //   const fetchChat = async () => {
  //     try {
  //       const response = await fetch("/api/chat", { signal });

  //       const { data } = await response.json();
  //       console.log(response);
  //       setChats(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchChat();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const handleSignOut = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post("/api/auth/logout");
      // console.log(data);
      if (data.success) {
        dispatch(signoutSuccess());
        navigate("/");
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {currentUser && <SideDrawer />}
      <Box>
        {/* {currentUser && <MyChats />} */}
        {/* {currentUser && <ChatBox />} */}
      </Box>
    </>
  );
};

export default Chat;
