import { BarChart3, BookOpen, Plus } from "lucide-react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };
    return (
        <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/books" className="flex items-center space-x-3 text-gray-900 hover:text-blue-600 transition-colors">
                            <BookOpen className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold">Library System</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-1">
                        <Link
                            to="/books"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${isActive('/books')
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                        >
                            <BookOpen className="h-4 w-4" />
                            <span>All Books</span>
                        </Link>

                        <Link
                            to="/create-book"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${isActive('/create-book')
                                ? 'bg-emerald-600 text-white shadow-md'
                                : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                                }`}
                        >
                            <Plus className="h-4 w-4" />
                            <span>Add Book</span>
                        </Link>

                        <Link
                            to="/borrow-summary"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2
                                 ${isActive('/borrow-summary')
                                    ? 'bg-orange-600 text-white shadow-md'
                                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                                }`}
                        >
                            <BarChart3 className="h-4 w-4" />
                            <span>Borrow Summary</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;