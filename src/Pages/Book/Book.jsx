

const Book = ({ singleBook }) => {
    const {bookName,tags,author,image,review,category,rating}=singleBook
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="bg-[#F3F3F3] m-5">
                <img
                className="max-w-48 p-4"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>{tags}</p>
                <h2 className="card-title">{bookName}</h2>
                <p>{author}</p>
                <div className="card-actions justify-between flex">                
                        <div>{category}</div>
                        <div>{rating}</div>
                </div>
            </div>
        </div>
    );
};

export default Book;