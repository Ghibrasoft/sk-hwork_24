import MainPage from "./pages/MainPage";
import LinkLayout from "./layout/LinkLayout";
import About from "./pages/About";
import Home from "./pages/Home";

const router = [
  {
    element: <LinkLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        element: <MainPage />,
        path: "/main"
      },
      {
        element: <About />,
        path: "about"
      },
    ]
  }
]
export default router