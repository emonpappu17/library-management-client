import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../store/hook";

import { closeModal } from "../../features/modal/modalSlice";
import BorrowBookForm from "./borrowModal/BorrowBookForm";
import EditBookForm from "./editModal/EditBookForm";
import ViewBookDetails from "./viewBook/ViewBookDetails ";

const BookModals = () => {
    const dispatch = useAppDispatch();
    const { type, book } = useAppSelector((state) => state.modal);
    // console.log('modal--->', type, book);

    const isOpen = type !== null;

    if (!book) return

    return (
        <Dialog open={isOpen} onClose={() => dispatch(closeModal())} className="relative z-50">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Centered Modal Panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel
                    transition

                    // className="w-full max-w-md bg-white rounded-lg shadow-xl px-6 pt-6 pb-4 max-h-[80vh] overflow-y-auto transform transition-all duration-300 ease-out scale-100"

                    className="w-full max-w-md bg-white rounded-lg shadow-xl px-6 pt-6 pb-4 max-h-[80vh] overflow-y-auto duration-300 ease-out transform transition-all data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 "
                >
                    <DialogTitle className="text-lg font-semibold text-gray-800">
                        {type === "borrow" && "Borrow Book"}
                        {type === "edit" && "Edit Book"}
                    </DialogTitle>

                    <p className="mt-1 text-sm text-gray-600">
                        {type === "borrow" &&
                            "Specify how many copies you'd like to borrow and when you'll return them."}
                        {type === "edit" &&
                            "Update the book's details including title, author, availability etc."}
                    </p>

                    {/* Borrow Form */}
                    {type === "borrow" && book && (
                        <div className="mt-4 ">
                            <BorrowBookForm book={book} />
                        </div>
                    )}

                    {/* Edit Form */}
                    {type === "edit" && book && (
                        <div className="mt-4 ">
                            <EditBookForm book={book} />
                        </div>
                    )}

                    {/* View Book */}
                    {type === "view" && book && (
                        <div className="mt-4 ">
                            <ViewBookDetails book={book} />
                        </div>
                    )}
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default BookModals;