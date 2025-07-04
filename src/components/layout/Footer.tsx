import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
    return (
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