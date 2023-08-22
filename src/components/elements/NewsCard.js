import { Link } from "react-router-dom";

const NewsCard = (props) => {
  const { img, title, id, mainText, editNews, deleteNews } = props;

  return (
    <div className="col-md-4 mb-4 col-sm-6 col-12">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{mainText}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex gap-3">
            <Link to={`/news/${id}`} className="btn btn-primary">
              See detailed
            </Link>
            <button
              onClick={() => {
                deleteNews(id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              onClick={() => {
                editNews(id);
              }}
              className="btn btn-primary"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
