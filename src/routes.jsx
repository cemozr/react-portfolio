import { createBrowserRouter } from "react-router-dom";
import { Projects } from "./pages/projects/Projects";
import { Contact } from "./pages/contact/Contact";
import { Bio } from "./pages/bio/Bio";
import { Error } from "./pages/error/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Bio />,
    errorElement: <Error />,
  },
  {
    path: "/bio",
    element: <Bio />,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
]);
