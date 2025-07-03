import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hook";
import type { IBook } from "../../types";
import { closeModal } from "../../features/modal/modalSlice";
import Button from "../ui/Button";
import { useCreateBorrowMutation } from "../../features/borrows/borrowApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useGetBooksQuery } from "../../features/books/bookApi";

interface Props {
    book: IBook;
}

interface BorrowData {
    quantity: number;
    dueDate: string;
}

const BorrowBookForm = ({ book }: Props) => {
    const dispatch = useAppDispatch();

    const [borrow, { isLoading, }] = useCreateBorrowMutation();
    const { refetch } = useGetBooksQuery();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<BorrowData>();

    const navigate = useNavigate();

    const onSubmit = async (data: BorrowData) => {
        try {
            console.log("Borrow Request:", {
                ...data,
                book: book._id,
            });

            const borrowData = {
                ...data,
                book: book._id,
            }

            // Only UI logic for now
            const res = await borrow(borrowData).unwrap();
            console.log('res borrow-->', res);

            refetch();
            reset()
            dispatch(closeModal());
            navigate("/borrow-summary");
            toast.success("Book borrowed successfully!");
        } catch (error) {
            const err = error as { data: { message: string } };
            toast.error(err.data.message || "Something went wrong!")
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">

            {/* Book Info Box */}
            <div className="grid gap-1 bg-gray-50 p-4 rounded-md text-sm text-gray-700 border border-gray-200">
                <p><strong>Title:</strong> {book.title}</p>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p><strong>Available Copies:</strong> {book.copies}</p>
                <p><strong>ISBN:</strong> {book.isbn}</p>
            </div>

            {/* Quantity */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input
                    {...register("quantity", {
                        required: "Quantity is required",
                        min: { value: 1, message: "Minimum 1 copy required" },
                        max: {
                            value: book.copies,
                            message: `You can borrow up to ${book.copies} copies`,
                        },
                    })}
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter number of copies"
                />
                {errors.quantity && (
                    <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
                )}
            </div>

            {/* Due Date */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                    {...register("dueDate", { required: "Due date is required" })}
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.dueDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>
                )}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
                {/* <button
                    type="button"
                    onClick={() => dispatch(closeModal())}
                    className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                    Cancel
                </button> */}

                <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                        reset()
                        dispatch(closeModal())
                    }}
                >
                    Cancel
                </Button>
                {/* <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
                >
                    Confirm Borrow
                </button> */}

                <Button
                    type="submit"
                    variant="primary"
                    // icon={Confirm}
                    loading={isLoading}
                    disabled={isLoading}
                >
                    {isLoading ? 'Borrowing...' : 'Confirm Borrow'}
                    {/* Confirm Borrow */}
                </Button>
            </div>
        </form>
    );
};

export default BorrowBookForm;