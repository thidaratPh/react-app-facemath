import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FirstPages from "./Pages/FirstPages";
import LoginPages from "./Pages/Login";
import SignupPage from "./Pages/Singup";
import HomePages from "./Pages/HomePages";
import PhotoPages from "./Pages/PhotoPages";
import AddPhotoPages from "./Pages/AddPhotoPages";
import EditPhotoPages from "./Pages/EditPhotoPages";
import RankPages from "./Pages/RankPages";

const routers = createBrowserRouter([
  { path: "/first", element: <FirstPages /> },
  { path: "/login", element: <LoginPages /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/home", element: <HomePages /> },
  { path: "/photo", element: <PhotoPages /> },
  { path: "/add", element: <AddPhotoPages /> },
  { path: "/edit", element: <EditPhotoPages /> },
  { path: "/chart", element: <RankPages /> }]);
function App() {

  return <RouterProvider router={routers} />;
}

export default App
