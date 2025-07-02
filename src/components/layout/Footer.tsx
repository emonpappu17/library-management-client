import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
    return (
        // <footer className="bg-base-200  mt-10">
        //     <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
        //         {/* Project Info */}
        //         <div>
        //             <h2 className="text-lg font-semibold text-gray-800">📚 LibraLite</h2>
        //             <p className="mt-2">
        //                 A minimal library management system built with React, TypeScript, and MongoDB.
        //             </p>
        //         </div>

        //         {/* Useful Links */}
        //         <div>
        //             <h2 className="text-md font-semibold text-gray-800 mb-2">Quick Links</h2>
        //             <ul className="space-y-1">
        //                 <li>
        //                     <a href="/books" className="hover:underline hover:text-blue-600 transition">
        //                         All Books
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="/create-book" className="hover:underline hover:text-emerald-600 transition">
        //                         Add Book
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="/borrow-summary" className="hover:underline hover:text-orange-600 transition">
        //                         Borrow Summary
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>

        //         {/* Attribution */}
        //         <div className="flex flex-col justify-between">
        //             <div>
        //                 <h2 className="text-md font-semibold text-gray-800 mb-2">About</h2>
        //                 <p>
        //                     Developed as part of a MERN stack assignment using modern best practices.
        //                 </p>
        //             </div>
        //             <p className="mt-4 text-xs text-gray-500">
        //                 &copy; {new Date().getFullYear()} LibraLite. All rights reserved.
        //             </p>
        //         </div>
        //     </div>
        // </footer>
        // <footer className="bg-gray-900 text-white mt-44  pt-12 pb-6">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        //         <div className="flex flex-col md:flex-row justify-between items-center">
        //             <div className="flex items-center space-x-3 mb-4 md:mb-0">
        //                 <BookOpen className="h-6 w-6 text-blue-400" />
        //                 <span className="text-lg font-semibold">Library Management System</span>
        //             </div>

        //             <div className="flex items-center space-x-2 text-sm text-gray-400">
        //                 <span>Made with</span>
        //                 <Heart className="h-4 w-4 text-red-400 fill-current" />
        //                 <span>for book lovers</span>
        //             </div>
        //         </div>

        //         <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        //             © 2024 Library Management System. Built with React, Redux Toolkit, and TypeScript.
        //         </div>
        //     </div>
        // </footer>

        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <BookOpen className="h-6 w-6 text-blue-400" />
                        <span className="text-lg font-semibold">Library Management System</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <span>Made with</span>
                        <Heart className="h-4 w-4 text-red-400 fill-current" />
                        <span>for book lovers</span>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
                    © 2024 Library Management System. Built with React, Redux Toolkit, and TypeScript.
                </div>
            </div>
        </footer>
    );
};

export default Footer;