import { data, Link } from "react-router";
import { useGetBooksQuery } from "../features/books/bookApi";
import type { IBook } from "../types";

const BooksPage = () => {
    const { data, isLoading, isError } = useGetBooksQuery(undefined);
    const books = data?.data;
    console.log(books);

    const handleDelete = (id: string) => {
        // if (confirm("Are you sure you want to delete this book?")) {
        //     deleteBook(id)
        // }
        console.log(id);
    }
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">📚 All Books</h1>
                <Link
                    to="/create-book"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    ➕ Add Book
                </Link>
            </div>

            {isLoading && <p>Loading books...</p>}
            {isError && <p>Failed to load books.</p>}

            {books && books?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border">Title</th>
                                <th className="px-4 py-2 border">Author</th>
                                <th className="px-4 py-2 border">Genre</th>
                                <th className="px-4 py-2 border">ISBN</th>
                                <th className="px-4 py-2 border">Copies</th>
                                <th className="px-4 py-2 border">Available</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books?.map((book: IBook) => (
                                <tr key={book._id}>
                                    <td className="px-4 py-2 border">{book.title}</td>
                                    <td className="px-4 py-2 border">{book.author}</td>
                                    <td className="px-4 py-2 border">{book.genre}</td>
                                    <td className="px-4 py-2 border">{book.isbn}</td>
                                    <td className="px-4 py-2 border">{book.copies}</td>
                                    <td className="px-4 py-2 border">
                                        {book.available ? (
                                            <span className="text-green-600 font-semibold">Yes</span>
                                        ) : (
                                            <span className="text-red-500 font-semibold">No</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-2 border space-x-2">
                                        <Link
                                            to={`/edit-book/${book._id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            to={`/borrow/${book._id}`}
                                            className="text-green-600 hover:underline"
                                        >
                                            Borrow
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(book._id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">No books found.</p>
            )}
        </div>
    );
};

export default BooksPage;