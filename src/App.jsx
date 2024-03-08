import {
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Chat, Home } from "./pages";
import { selectCurrentUser } from "./redux/user/userSlice";
import { useSelector } from "react-redux";

const Layout = () => {
  const { currentUser } = useSelector(selectCurrentUser);
  const location = useLocation();
  // console.log(location);
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
  return <Outlet />;
};

// const RequeireAuth = ({ roles }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   //  console.log(user)
//   return roles.includes(user?.role) ? (
//     <Outlet />
//   ) : user?.name || user?.firstName ? (
//     <Navigate to="unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="user-auth" state={{ from: location }} replace />
//   );
// };

function App() {
  return (
    <div className="min-h-screen flex bg-[#f0f2f5]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/chats" element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
