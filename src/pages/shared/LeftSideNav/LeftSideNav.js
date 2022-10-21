import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h4>Total Categories:{categories.length} </h4>
      <div className="fs-6">
        {categories.map((categorie) => (
          <p key={categorie.id}>
            <Link to={`/category/${categorie.id}`}>{categorie.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
