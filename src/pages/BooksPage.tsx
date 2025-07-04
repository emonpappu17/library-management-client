import { Link } from "react-router";
import { useDeleteBookMutation, useGetBooksQuery } from "../features/books/bookApi";
import type { IBook } from "../types";
import { BookOpen, Edit, Eye, Plus, Trash2 } from "lucide-react";
import Button from "../components/ui/Button";
import Lottie from "lottie-react";
import loader from '../assets/loader.json'
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useAppDispatch } from "../store/hook";
import { openModal } from "../features/modal/modalSlice";
import BookModals from "../components/books/BookModals";
import { useGetBorrowSummaryQuery } from "../features/borrows/borrowApi";


const BooksPage = () => {
    const { data, isLoading, isError } = useGetBooksQuery(undefined);
    const [deleteBook] = useDeleteBookMutation()
    const { refetch } = useGetBorrowSummaryQuery();
    const books = (data?.data as IBook[]) || [];

    console.log(books);

    const dispatch = useAppDispatch();

    // ✅ 1. Delete Book
    const handleDelete = (id: string, title: string) => {
        try {
            Swal.fire({
                title: "Delete this book?",
                text: `Are you sure you want to remove "${title}" from the library? This action cannot be undone.`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it",
                cancelButtonText: "Cancel",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await deleteBook(id).unwrap();
                    console.log('delete res-->', res);
                    if (res.success) {
                        Swal.fire({
                            title: "Deleted!",
                            text: `"${title}" has been successfully removed.`,
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                        });
                        refetch();
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to remove. Please try again.",
                            icon: "error",
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    }
                }
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error!",
                text: "Failed to remove. Please try again.",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
            });
        }
    }

    // ✅ 1. Loading State
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <Lottie className="size-20" animationData={loader} />
            </div>
        );
    }

    // ✅ 2. Error State
    if (isError) {
        return (
            <div className="flex flex-col justify-center items-center h-[60vh] text-center">
                <h2 className="text-xl font-semibold text-red-600">Something went wrong</h2>
                <p className="text-gray-500 mt-2">
                    Failed to fetch books. Please try again.
                </p>
                <Button variant="primary" className="mt-4" onClick={() => window.location.reload()}>
                    Retry
                </Button>
            </div>
        );
    }

    // ✅ 3. Main Return (Normal + Empty State)
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
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
                        <table className="min-w-full divide-y divide-gray-200 " >
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Author
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Genre
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ISBN
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Copies
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{book.author}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    icon={Eye}
                                                    onClick={() => dispatch(openModal({ type: "view", book: book }))}
                                                />
                                                <Button
                                                    size="sm"
                                                    variant="primary"
                                                    icon={Edit}
                                                    onClick={() => dispatch(openModal({ type: "edit", book: book }))}
                                                />

                                                {/* Borrow Modal */}
                                                {book.available ?
                                                    (
                                                        <Button
                                                            size="sm"
                                                            variant="success"
                                                            icon={BookOpen}
                                                            onClick={() => dispatch(openModal({ type: "borrow", book: book }))}
                                                        />

                                                    ) :
                                                    <Button size="sm" variant="success" icon={BookOpen} onClick={() => { toast.error("Sorry, this book is currently unavailable") }} />
                                                }
                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    icon={Trash2}
                                                    onClick={() => handleDelete(book._id, book.title)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <BookModals></BookModals>
        </div>
    );
};

export default BooksPage;