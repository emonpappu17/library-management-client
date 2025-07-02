import { ArrowLeft, Save } from "lucide-react";
import Button from "../components/ui/Button";

const CreateBookPage = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6">
                <Button
                    variant="secondary"
                    icon={ArrowLeft}
                    //   onClick={() => navigate('/books')}
                    className="mb-4"
                >
                    Back to Books
                </Button>
                <h1 className="text-3xl font-bold text-gray-900">Add New Book</h1>
                <p className="mt-2 text-gray-600">Fill in the details to add a new book to the library</p>
            </div>

            <form
                //    onSubmit={handleSubmit} 
                className="bg-white shadow-lg rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* <Input
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            error={errors.title}
            required
            placeholder="Enter book title"
          /> */}

                    {/* <Input
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            error={errors.author}
            required
            placeholder="Enter author name"
          /> */}

                    {/* <Input
            label="Genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            error={errors.genre}
            required
            placeholder="Enter book genre"
          /> */}

                    {/* <Input
            label="ISBN"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            error={errors.isbn}
            required
            placeholder="Enter ISBN number"
          /> */}
                </div>

                {/* <Input
          label="Number of Copies"
          name="copies"
          type="number"
          value={formData.copies}
          onChange={handleChange}
          error={errors.copies}
          required
          min={0}
          placeholder="Enter number of copies"
        /> */}

                {/* <Textarea
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter book description (optional)"
          rows={4}
        /> */}

                <div className="flex justify-end space-x-3 pt-6">
                    <Button
                        type="button"
                        variant="secondary"
                    // onClick={() => navigate('/books')}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="success"
                        icon={Save}
                    // loading={isLoading}
                    // disabled={isLoading}
                    >
                        {/* {isLoading ? 'Creating...' : 'Create Book'} */}
                        Create Book
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateBookPage;