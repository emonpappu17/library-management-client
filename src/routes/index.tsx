import { createBrowserRouter } from "react-router";
import App from "../App";
import BooksPage from "../pages/BooksPage";
import CreateBookPage from "../pages/CreateBookPage";
import BorrowSummaryPage from "../pages/BorrowSummaryPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: BooksPage,
      },
      {
        path: 'books',
        Component: BooksPage,
      },
      {
        path: "create-book",
        Component: CreateBookPage,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummaryPage,
      }
    ]
  },
]);

export default router;