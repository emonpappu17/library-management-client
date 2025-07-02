import { Link } from "react-router";
import { useGetBooksQuery } from "../features/books/bookApi";
import type { IBook } from "../types";
import { BookOpen, Edit, Eye, Plus, Trash2 } from "lucide-react";
import Button from "../components/ui/Button";

const BooksPage = () => {
    const { data, isLoading, isError } = useGetBooksQuery(undefined);
    const books = data?.data || [];
    console.log(books);

    const handleDelete = (id: string) => {
        // if (confirm("Are you sure you want to delete this book?")) {
        //     deleteBook(id)
        // }
        console.log(id);
    }
    return (
        // <div className="max-w-7xl mx-auto p-4">
        //     <div className="flex items-center justify-between mb-6">
        //         <h1 className="text-2xl font-bold">📚 All Books</h1>
        //         <Link
        //             to="/create-book"
        //             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        //         >
        //             ➕ Add Book
        //         </Link>
        //     </div>

        //     {isLoading && <p>Loading books...</p>}
        //     {isError && <p>Failed to load books.</p>}

        //     {books && books?.length > 0 ? (
        //         <div className="overflow-x-auto">
        //             <table className="min-w-full table-auto border border-gray-200">
        //                 <thead className="bg-gray-100">
        //                     <tr>
        //                         <th className="px-4 py-2 border">Title</th>
        //                         <th className="px-4 py-2 border">Author</th>
        //                         <th className="px-4 py-2 border">Genre</th>
        //                         <th className="px-4 py-2 border">ISBN</th>
        //                         <th className="px-4 py-2 border">Copies</th>
        //                         <th className="px-4 py-2 border">Available</th>
        //                         <th className="px-4 py-2 border">Actions</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {books?.map((book: IBook) => (
        //                         <tr key={book._id}>
        //                             <td className="px-4 py-2 border">{book.title}</td>
        //                             <td className="px-4 py-2 border">{book.author}</td>
        //                             <td className="px-4 py-2 border">{book.genre}</td>
        //                             <td className="px-4 py-2 border">{book.isbn}</td>
        //                             <td className="px-4 py-2 border">{book.copies}</td>
        //                             <td className="px-4 py-2 border">
        //                                 {book.available ? (
        //                                     <span className="text-green-600 font-semibold">Yes</span>
        //                                 ) : (
        //                                     <span className="text-red-500 font-semibold">No</span>
        //                                 )}
        //                             </td>
        //                             <td className="px-4 py-2 border space-x-2">
        //                                 <Link
        //                                     to={`/edit-book/${book._id}`}
        //                                     className="text-blue-600 hover:underline"
        //                                 >
        //                                     Edit
        //                                 </Link>
        //                                 <Link
        //                                     to={`/borrow/${book._id}`}
        //                                     className="text-green-600 hover:underline"
        //                                 >
        //                                     Borrow
        //                                 </Link>
        //                                 <button
        //                                     onClick={() => handleDelete(book._id)}
        //                                     className="text-red-600 hover:underline"
        //                                 >
        //                                     Delete
        //                                 </button>
        //                             </td>
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         </div>
        //     ) : (
        //         <p className="text-center text-gray-500 mt-10">No books found.</p>
        //     )}
        // </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Library Books</h1>
                    <p className="mt-2 text-gray-600">Manage your book collection</p>
                </div>
                <Link to="/create-book">
                    <Button icon={Plus} variant="success">
                        Add New Book
                    </Button>
                </Link>
            </div>

            {books?.length === 0 ? (
                <div className="text-center py-12">
                    <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
                    <p className="text-gray-500 mb-6">Get started by adding your first book to the library.</p>
                    <Link to="/create-book">
                        <Button icon={Plus} variant="primary">
                            Add Your First Book
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {/* Book Details */}
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Author
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {/* ISBN */}
                                        Genre
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {/* Availability */}
                                        ISBN
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {/* Actions */}
                                        Copies
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {/* Actions */}
                                        Availability
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {books?.map((book) => (
                                    <tr key={book._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{book.title}</div>
                                                {/* {book.description && (
                                                    <div className="text-sm text-gray-500 truncate max-w-xs">
                                                        {book.description}
                                                    </div>
                                                )} */}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{book.author}</div>
                                            {/* <div className="text-sm text-gray-500">{book.genre}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {/* {book.isbn} */}
                                            <div className="text-sm text-gray-500">{book.genre}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {book.isbn}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {book.copies} copies
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${book.available
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                        }`}
                                                >
                                                    {book.available ? 'Available' : 'Unavailable'}
                                                </span>

                                            </div>
                                        </td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${book.available
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                        }`}
                                                >
                                                    {book.available ? 'Available' : 'Unavailable'}
                                                </span>
                                                <span className="ml-2 text-sm text-gray-500">
                                                    ({book.copies} copies)
                                                </span>
                                            </div>
                                        </td> */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <Link to={`/books/${book.id}`}>
                                                    <Button size="sm" variant="secondary" icon={Eye}>
                                                        {/* View */}
                                                    </Button>
                                                </Link>
                                                <Link to={`/edit-book/${book.id}`}>
                                                    <Button size="sm" variant="primary" icon={Edit}>
                                                        {/* Edit */}
                                                    </Button>
                                                </Link>
                                                {book.available && (
                                                    <Link to={`/borrow/${book.id}`}>
                                                        <Button size="sm" variant="success" icon={BookOpen}>
                                                            {/* Borrow */}
                                                        </Button>
                                                    </Link>
                                                )}
                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    icon={Trash2}
                                                // onClick={() => handleDeleteClick(book)}
                                                >
                                                    {/* Delete */}
                                                </Button>

                                                {/* <div className="tooltip tooltip-bottom" data-tip="Delete">
                                                 
                                                </div> */}
                                                {/* <div className="tooltip tooltip-open tooltip-bottom" data-tip="hello">
                                                    <button className="btn">Bottom</button>
                                                </div> */}
                                                {/* <div className="tooltip tooltip-bottom" data-tip="hello">
                                                    <button className="btn">Hover me</button>
                                                </div> */}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}


        </div>
    );
};

export default BooksPage;