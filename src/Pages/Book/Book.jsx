import { Star } from "lucide-react";
import { Link } from "react-router";


const Book = ({ singleBook }) => {
    const {bookId, bookName, tags, author, image, category, rating } = singleBook
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 shadow-sm border-gray-300 w-full sm:w-72 md:w-80 lg:w-96">

            <figure className="bg-[#F3F3F3] m-5">
                <img
                    className="max-w-48 h-58.5 p-4"
                    src={image}
                    alt={bookName}
                />
            </figure>


            <div className="card-body gap-3">

                <div className="flex justify-center items-center gap-20">
                    {
                        tags.map(tag =><button>{tag}</button>)
                    }
                </div>
                <h2 className="card-title text-2xl">
                    {bookName}
                    
                </h2>
                <p className="font-medium">By: {author}</p>
                

                <div className="border-t-2  border-dashed"></div>
                <div className="card-actions justify-between flex">
                    <div>{category}</div>
                    
                    <div className="flex justify-center items-center gap-2">
                        <Star /> {rating}
                    </div>
                </div>



            </div>
        </div></Link>
    );
};

export default Book;