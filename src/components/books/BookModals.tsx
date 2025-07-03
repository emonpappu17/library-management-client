// import { Dialog, DialogPanel, TransitionChild } from "@headlessui/react";
// import { useAppDispatch, useAppSelector } from "../../store/hook";
// import { Fragment } from "react/jsx-runtime";
// import { useForm } from "react-hook-form";
// import { closeModal } from "../../features/modal/modalSlice";

// const BookModals = () => {
//     const { type, book } = useAppSelector((state) => state.modal);
//     console.log('modal--->', type, book);

//     const isOpen = type !== null;


//     const dispatch = useAppDispatch();
//     const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<BorrowData>();

//     const onSubmit = async (data: BorrowData) => {
//         // try {
//         //     // ✨ Call your borrow mutation here instead
//         //     console.log("Borrowing book:", book, "by", data);
//         //     toast.success(`"${book.title}" borrowed successfully by ${data.borrowerName}`);
//         //     dispatch(closeModal());
//         //     reset();
//         // } catch (error) {
//         //     toast.error("Failed to borrow book. Try again.");
//         // }
//     };

//     return (


//         <Dialog open={isOpen} as="div" className="relative z-50" onClose={() => dispatch(closeModal())}>
//             <TransitionChild
//                 as={Fragment}
//                 enter="ease-out duration-200"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="ease-in duration-100"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//             >
//                 <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//             </TransitionChild>

//             <div className="fixed inset-0 overflow-y-auto">
//                 <div className="flex min-h-full items-center justify-center p-4">
//                     <TransitionChild
//                         as={Fragment}
//                         enter="ease-out duration-200"
//                         enterFrom="opacity-0 scale-95"
//                         enterTo="opacity-100 scale-100"
//                         leave="ease-in duration-100"
//                         leaveFrom="opacity-100 scale-100"
//                         leaveTo="opacity-0 scale-95"
//                     >
//                         <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                             {/* {type === "borrow" && book && <BorrowBookForm book={book} />} */}

//                             <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">Borrow Book: {book?.title}</h2>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
//                                     <input
//                                         {...register("borrowerName", { required: "Name is required" })}
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//                                         placeholder="Enter your name"
//                                     />
//                                     {errors.borrowerName && <p className="text-red-500 text-sm mt-1">{errors.borrowerName.message}</p>}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
//                                     <input
//                                         {...register("returnDate", { required: "Return date is required" })}
//                                         type="date"
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//                                     />
//                                     {errors.returnDate && <p className="text-red-500 text-sm mt-1">{errors.returnDate.message}</p>}
//                                 </div>

//                                 <div className="flex justify-end gap-3 pt-2">
//                                     <button
//                                         type="button"
//                                         onClick={() => dispatch(closeModal())}
//                                         className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         type="submit"
//                                         disabled={isSubmitting}
//                                         className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
//                                     >
//                                         {isSubmitting ? "Submitting..." : "Confirm Borrow"}
//                                     </button>
//                                 </div>
//                             </form>
//                         </DialogPanel>
//                     </TransitionChild>
//                 </div>
//             </div>
//         </Dialog>
//     );
// };

// export default BookModals;


import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../store/hook";

import { closeModal } from "../../features/modal/modalSlice";
import BorrowBookForm from "./BorrowBookForm";

const BookModals = () => {
    const dispatch = useAppDispatch();
    const { type, book } = useAppSelector((state) => state.modal);
    console.log('modal--->', type, book);

    const isOpen = type !== null;

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
                    </DialogTitle>

                    <p className="mt-1 text-sm text-gray-600">
                        {type === "borrow" && "Set quantity and due date to borrow this book"}
                    </p>

                    {/* Borrow Form */}
                    {type === "borrow" && book && (
                        <div className="mt-4 ">
                            <BorrowBookForm book={book} />
                        </div>
                    )}
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default BookModals;