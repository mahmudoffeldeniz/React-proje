import React from "react";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white rounded-0 mt-5">
        <img
          src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title mt-5">Lorem ipsun </h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            laborum porro itaque, deserunt <br /> ratione quibusdam pariatur
            optio sed aperiam ab obcaecati et facere laudantium rem adipisci
            molestias similique ex, quis qui.
            <br /> Optio aspernatur architecto accusantium dolor. Non temporibus
            illo natus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
