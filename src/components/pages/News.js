import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsCard from "../elements/NewsCard";

const News = () => {
  const [news, setNews] = useState([]);
  const [editing, setEditing] = useState(null);

  const [name, setName] = useState("İnformaiton");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [index, setIndex] = useState(0);
  const [array, setArray] = useState(["İnformation", "Gallery"]);
  const [object, setObject] = useState({});

  useEffect(() => {
    console.log("news mounted");
    let data = JSON.parse(localStorage.getItem("news"));
    setNews(data?.length ? data : []);
  }, []);

  const deleteNews = (id) => {
    let arr = [...news];
    let da = arr.filter((d) => {
      return d.id !== id;
    });
    setNews(da);
    localStorage.setItem("news", JSON.stringify(da));
  };

  const editNews = (id) => {
    console.log(id);
    let editingData = news.find((s) => s.id === id);
    console.log(editingData);
    setEditing(id);
    setTitle(editingData.title);
    setImage(editingData.img);
  };

  const UpdateName = () => {
    if (index !== array.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setName(array[index]);
  };

  const addNews = () => {
    if (title.trim() !== "" && image.trim() !== "") {
      if (!editing) {
        let object = {
          id: Math.floor(Math.random() * new Date()),
          title: title,
          img: image,
        };
        let arr = [...news, object];
        setNews(arr);
        localStorage.setItem("news", JSON.stringify(arr));
        setTimeout(() => {
          setTitle("");
          setImage("");
        }, 200);
      } else {
        /// update
        let arr = [...news];
        let editingData = arr.find((s) => s.id === editing);
        editingData.title = title;
        editingData["img"] = image;
        setNews(arr);
        localStorage.setItem("news", JSON.stringify(arr));
        setTimeout(() => {
          setTitle("");
          setImage("");
          setEditing(null);
        });
      }
    }
    console.log(news);
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1
              onClick={() => {
                UpdateName();
              }}
              className={"text-center"}
            >
              News {name}
            </h1>
          </div>

          <div className="w-100 mb-5 card">
            <div className="card-body">
              <img
                height={"200px"}
                src={
                  image
                    ? image
                    : "https://i.etsystatic.com/38393840/r/il/addd04/4751675725/il_fullxfull.4751675725_h4rb.jpg"
                }
                alt="image"
              />

              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="mt-3 form-control"
                name="name"
                value={title}
                placeholder="title"
              />

              <input
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                className="mt-3 form-control"
                name="image"
                value={image}
                placeholder="image"
              />

              <button
                onClick={() => {
                  addNews();
                }}
                className="btn btn-primary w-100 mt-3"
              >
                Save
              </button>
            </div>
          </div>

          {news.map((data, index) => {
            return (
              <NewsCard
                key={data.id}
                data={data}
                title={data.title}
                mainText={data.title}
                img={data.img}
                id={data.id}
                editNews={editNews}
                deleteNews={deleteNews}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
