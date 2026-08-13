import { LoginPage } from "@/features/auth/pages/LoginPage"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
])
