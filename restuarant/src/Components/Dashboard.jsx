import React, { useState, useEffect } from "react";
const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const url = "https://dummyjson.com/recipes";
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.recipes);
        setLoading(false);
      } catch (err) {
        setError("Failed to load recipes.");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}
      {!error && !loading && (
        <div>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Recipe Name</th>
                <th>Cuisine</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((r) => (
                <tr key={r.id}>
                  <td>
                    <img
                      src={r.image}
                      alt={r.name}
                      width="50"
                      height="50"
                      style={{ objectFit: "cover" }}
                    />
                  </td>
                  <td>{r.name}</td>
                  <td>{r.cuisine}</td>
                  <td>{r.rating}</td>
                  <td>120/-</td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
