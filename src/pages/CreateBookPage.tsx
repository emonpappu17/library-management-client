// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import type { IBook } from "../types";
// import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
// import { ArrowLeft, CheckIcon, ChevronsUpDownIcon } from "lucide-react";
// import Button from "../components/ui/Button";

// const genres = [
//     "FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY",
// ];

// const CreateBookPage = () => {
//     const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
//     const {
//         register,
//         handleSubmit,
//         reset,
//         setValue,
//         formState: { errors, isSubmitting },
//     } = useForm<IBook>();

//     const onSubmit = (data: IBook) => {
//         console.log({ ...data, genre: selectedGenre });
//         reset();
//     };
//     return (
//         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border">
//             <div className="mb-6">
//                 <Button
//                     variant="secondary"
//                     icon={ArrowLeft}
//                     //   onClick={() => navigate('/books')}
//                     className="mb-4"
//                 >
//                     Back to Books
//                 </Button>
//                 <h1 className="text-3xl font-bold text-gray-900">Add New Book</h1>
//                 <p className="mt-2 text-gray-600">Fill in the details to add a new book to the library</p>
//             </div>

//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="max-w-3xl w-full mx-auto p-6 bg-white rounded-xl shadow-md grid gap-6"
//             >
//                 <h2 className="text-2xl font-semibold text-gray-800">📚 Add New Book</h2>

//                 {/* Title */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
//                     <input
//                         {...register("title", { required: "Title is required" })}
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         placeholder="Enter book title"
//                     />
//                     {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
//                 </div>

//                 {/* Author */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
//                     <input
//                         {...register("author", { required: "Author is required" })}
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         placeholder="Enter author name"
//                     />
//                     {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
//                 </div>

//                 {/* ISBN */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
//                     <input
//                         {...register("isbn", { required: "ISBN is required" })}
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         placeholder="e.g. 978-3-16-148410-0"
//                     />
//                     {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>}
//                 </div>

//                 {/* Copies */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Number of Copies</label>
//                     <input
//                         {...register("copies", {
//                             required: "Copies are required",
//                             min: { value: 1, message: "Minimum 1 copy required" },
//                         })}
//                         type="number"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         placeholder="Enter number of copies"
//                     />
//                     {errors.copies && <p className="text-red-500 text-sm mt-1">{errors.copies.message}</p>}
//                 </div>

//                 {/* Genre Dropdown */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
//                     <Listbox value={selectedGenre} onChange={(value) => {
//                         setSelectedGenre(value);
//                         setValue("genre", value as IBook["genre"]);
//                     }}>
//                         <div className="relative">
//                             <ListboxButton className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center focus:ring-2 focus:ring-blue-500">
//                                 <span>{selectedGenre}</span>
//                                 <ChevronsUpDownIcon className="h-5 w-5 text-gray-500" />
//                             </ListboxButton>
//                             <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
//                                 {genres.map((genre, i) => (
//                                     <ListboxOption
//                                         key={i}
//                                         value={genre}
//                                         className={({ active }) =>
//                                             `cursor-pointer px-4 py-2 ${active ? "bg-blue-100 text-blue-700" : "text-gray-800"}`
//                                         }
//                                     >
//                                         {({ selected }) => (
//                                             <div className="flex justify-between">
//                                                 <span>{genre}</span>
//                                                 {selected && <CheckIcon className="w-5 h-5 text-blue-500" />}
//                                             </div>
//                                         )}
//                                     </ListboxOption>
//                                 ))}
//                             </ListboxOptions>
//                         </div>
//                     </Listbox>
//                 </div>

//                 {/* Description */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                     <textarea
//                         {...register("description")}
//                         rows={4}
//                         placeholder="Enter short description"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
//                     />
//                 </div>

//                 {/* Availability */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
//                     <select
//                         {...register("available")}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     >
//                         <option value="true">Available</option>
//                         <option value="false">Unavailable</option>
//                     </select>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-end">
//                     <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-200 disabled:opacity-60"
//                     >
//                         {isSubmitting ? "Submitting..." : "Add Book"}
//                     </button>
//                 </div>
//             </form>

//         </div>
//     );
// };

// export default CreateBookPage;


import { useState } from "react";
import { useForm } from "react-hook-form";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ArrowLeft, CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import type { IBook } from "../types";
import Button from "../components/ui/Button";
// import { useNavigate } from "react-router-dom"; // if using react-router-dom
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const genres = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
];

const CreateBookPage = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<IBook>();

    const onSubmit = (data: IBook) => {
        if (!selectedGenre) {
            setError("genre", { message: "Genre is required" });
            return;
        }

        const finalData = {
            ...data,
            genre: selectedGenre,
            // available: data.available === "false" ? false : true,
        };

        console.log("📚 Final Book Data:", finalData);

        // Call your mutation function here (e.g., addBook(finalData))

        toast.success("Book added successfully!");
        reset();
        setSelectedGenre(null);
        navigate("/");
    };

    return (
        <section className="min-h-screen bg-gray-50 pt-10">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Button
                        variant="secondary"
                        icon={ArrowLeft}
                        onClick={() => navigate("/")}
                        className="mb-4"
                    >
                        Back to Books
                    </Button>
                    <h1 className="text-3xl font-bold text-gray-900">Add New Book</h1>
                    <p className="mt-2 text-gray-600">Fill in the details to add a new book to the library</p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full p-6 bg-white rounded-xl shadow-md"
                >
                    {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">📚 Add Book</h2> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Book Title <span className="text-red-500 ">*</span></label>
                            <input
                                {...register("title", { required: "Title is required" })}
                                type="text"
                                placeholder="Enter book title"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                        </div>

                        {/* Author */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Author <span className="text-red-500 ">*</span></label>
                            <input
                                {...register("author", { required: "Author is required" })}
                                type="text"
                                placeholder="Enter author name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
                        </div>

                        {/* ISBN */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">ISBN <span className="text-red-500 ">*</span></label>
                            <input
                                {...register("isbn", { required: "ISBN is required" })}
                                type="text"
                                placeholder="e.g. 978-3-16-148410-0"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>}
                        </div>

                        {/* Copies */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Copies <span className="text-red-500 ">*</span></label>
                            <input
                                {...register("copies", {
                                    required: "Copies are required",
                                    min: { value: 1, message: "Minimum 1 copy required" },
                                })}
                                type="number"
                                placeholder="Enter number of copies"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.copies && <p className="text-red-500 text-sm mt-1">{errors.copies.message}</p>}
                        </div>

                        {/* Genre */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Genre <span className="text-red-500 ">*</span></label>
                            <Listbox
                                value={selectedGenre}
                                onChange={(value) => {
                                    setSelectedGenre(value);
                                    setValue("genre", value as IBook["genre"]);
                                }}
                            >
                                <div className="relative">
                                    <ListboxButton className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center focus:ring-2 focus:ring-blue-500">
                                        <span className={selectedGenre ? "" : "text-gray-400"}>
                                            {selectedGenre || "Select Genre"}
                                        </span>
                                        <ChevronsUpDownIcon className="h-5 w-5 text-gray-500" />
                                    </ListboxButton>
                                    <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                                        {genres.map((genre, i) => (
                                            <ListboxOption
                                                key={i}
                                                value={genre}
                                                className={({ active }) =>
                                                    `cursor-pointer px-4 py-2 ${active ? "bg-blue-100 text-blue-700" : "text-gray-800"
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <div className="flex justify-between">
                                                        <span>{genre}</span>
                                                        {selected && <CheckIcon className="w-5 h-5 text-blue-500" />}
                                                    </div>
                                                )}
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </div>
                            </Listbox>
                            {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>}
                        </div>

                        {/* Availability */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                            <select
                                defaultValue="true"
                                {...register("available")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="true">Available</option>
                                <option value="false">Unavailable</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                                {...register("description")}
                                rows={4}
                                placeholder="Enter short description"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-200 disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting..." : "Add Book"}
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default CreateBookPage;

// <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="w-full p-6 bg-white rounded-xl shadow-md grid gap-6"
//             >
//                 <h2 className="text-2xl font-semibold text-gray-800">📚 Add Book</h2>

//                 {/* Title */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
//                     <input
//                         {...register("title", { required: "Title is required" })}
//                         type="text"
//                         placeholder="Enter book title"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                     {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
//                 </div>

//                 {/* Author */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
//                     <input
//                         {...register("author", { required: "Author is required" })}
//                         type="text"
//                         placeholder="Enter author name"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                     {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
//                 </div>

//                 {/* ISBN */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
//                     <input
//                         {...register("isbn", { required: "ISBN is required" })}
//                         type="text"
//                         placeholder="e.g. 978-3-16-148410-0"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                     {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>}
//                 </div>

//                 {/* Copies */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Number of Copies</label>
//                     <input
//                         {...register("copies", {
//                             required: "Copies are required",
//                             min: { value: 1, message: "Minimum 1 copy required" },
//                         })}
//                         type="number"
//                         placeholder="Enter number of copies"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                     {errors.copies && <p className="text-red-500 text-sm mt-1">{errors.copies.message}</p>}
//                 </div>

//                 {/* Genre Dropdown */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
//                     <Listbox value={selectedGenre} onChange={(value) => {
//                         setSelectedGenre(value);
//                         setValue("genre", value as IBook["genre"]);
//                     }}>
//                         <div className="relative">
//                             <ListboxButton className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center focus:ring-2 focus:ring-blue-500">
//                                 <span className={selectedGenre ? "" : "text-gray-400"}>
//                                     {selectedGenre || "Select Genre"}
//                                 </span>
//                                 <ChevronsUpDownIcon className="h-5 w-5 text-gray-500" />
//                             </ListboxButton>
//                             <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
//                                 {genres.map((genre, i) => (
//                                     <ListboxOption
//                                         key={i}
//                                         value={genre}
//                                         className={({ active }) =>
//                                             `cursor-pointer px-4 py-2 ${active ? "bg-blue-100 text-blue-700" : "text-gray-800"}`
//                                         }
//                                     >
//                                         {({ selected }) => (
//                                             <div className="flex justify-between">
//                                                 <span>{genre}</span>
//                                                 {selected && <CheckIcon className="w-5 h-5 text-blue-500" />}
//                                             </div>
//                                         )}
//                                     </ListboxOption>
//                                 ))}
//                             </ListboxOptions>
//                         </div>
//                     </Listbox>
//                     {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>}
//                 </div>

//                 {/* Description */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                     <textarea
//                         {...register("description")}
//                         rows={4}
//                         placeholder="Enter short description"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
//                     />
//                 </div>

//                 {/* Availability */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
//                     <select
//                         defaultValue="true"
//                         {...register("available")}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     >
//                         <option value="true">Available</option>
//                         <option value="false">Unavailable</option>
//                     </select>
//                 </div>

//                 {/* Submit */}
//                 <div className="flex justify-end">
//                     <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-200 disabled:opacity-60"
//                     >
//                         {isSubmitting ? "Submitting..." : "Add Book"}
//                     </button>
//                 </div>
//             </form>
