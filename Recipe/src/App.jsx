import React, { useState } from "react";

const recipesData = [
  {
  id: 1,
  title: "Margherita Pizza",
  image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
  time: "20 min",
  description: "Classic Italian pizza topped with fresh mozzarella and basil."
},
{
  id: 2,
  title: "Paneer Butter Masala",
  image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg",
  time: "35 min",
  description: "Soft paneer cubes cooked in a rich buttery tomato gravy."
},
{
  id: 3,
  title: "Chicken Biryani",
  image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=800&q=80",
  time: "45 min",
  description: "Aromatic basmati rice layered with spiced chicken and herbs."
},
{
  id: 4,
  title: "Grilled Chicken",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCejJG8uGK5kCRUQUlRptPivNJj8kSoWtjgg&s",
  time: "30 min",
  description: "Juicy grilled chicken marinated with herbs and spices."
},
{
  id: 5,
  title: "Tacos",
  image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  time: "25 min",
  description: "Mexican tacos filled with veggies, meat, and spicy sauces."
},
{
  id: 6,
  title: "French Fries",
  image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  time: "15 min",
  description: "Crispy golden fries seasoned with salt and herbs."
},
{
  id: 7,
  title: "Avocado Toast",
  image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  time: "10 min",
  description: "Toasted bread topped with mashed avocado and seasonings."
},
{
  id: 8,
  title: "Chocolate Brownie",
  image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
  time: "40 min",
  description: "Rich and fudgy chocolate brownie with a soft center."
},
{
  id: 9,
  title: "Ice Cream Sundae",
  image: "https://cdn.dotpe.in/longtail/store-items/5661665/lbS7n7Ze.jpeg",
  time: "10 min",
  description: "Creamy ice cream topped with chocolate sauce and nuts."
},
{
  id: 10,
  title: "Falafel Wrap",
  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  time: "20 min",
  description: "Crispy falafel wrapped with veggies and tahini sauce."
},
{
  id: 11,
  title: "Momos",
  image: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
  time: "30 min",
  description: "Steamed dumplings stuffed with vegetables or chicken."
},
{
  id: 12,
  title: "Smoothie Bowl",
  image: "https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=800&q=80",
  time: "15 min",
  description: "Healthy smoothie topped with fruits, seeds, and granola."
}

];


const App = () =>{
  const [search, setSearch] = useState("");

  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="recipe-app">
      <h1>Recipe Finder</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />

            <div className="card-body">
              <h3>{recipe.title}</h3>

              {/* DESCRIPTION */}
              <p className="recipe-desc">{recipe.description}</p>

              <span>⏱ {recipe.time}</span>

              <button>View Recipe</button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default App;
