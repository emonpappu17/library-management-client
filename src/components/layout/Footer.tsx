import { BookOpenText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#0D1B2A] text-white mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Brand Section */}
                <div>
                    <Link to="/" className="flex items-center space-x-2 mb-3 text-white hover:text-blue-600 transition-colors">
                        <BookOpenText className="h-7 w-7" />
                        <span className="text-xl font-bold">Library System</span>
                    </Link>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        A modern, minimal library management app to manage books, borrowing, and summaries with ease. Built with ❤️ using React + MongoDB.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                to="/books"
                                className="text-slate-300 hover:text-blue-600 transition-colors"
                            >
                                📚 All Books
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/create-book"
                                className="text-slate-300 hover:text-blue-600 transition-colors"
                            >
                                ➕ Add New Book
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/borrow-summary"
                                className="text-slate-300 hover:text-blue-600 transition-colors"
                            >
                                📊 Borrow Summary
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social & Credits */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Connect with Developer</h3>
                    <div className="flex space-x-4 mb-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-blue-600 transition-colors"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-blue-600 transition-colors"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} Minimal Library System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;