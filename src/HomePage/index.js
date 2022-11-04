import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css"
export default function HomePage() {
  const [recipes, setRecipes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get("http://localhost:1234/menu");
    promise.then(response => {
      setRecipes(response.data);
    })
  }, []);

  function buildRecipes() {
   
    if (!recipes) return <h1>Carregando...</h1>
    return recipes.map(recipe => {
      const url = `/products/${recipe.id}`;
      return (
        <div className="item"><Link to={url}>{recipe.item}</Link></div>
      )
    })
    
  }



  const recipesComponent = buildRecipes();
  return (
    <div className="container">
      <div className="page-product">
        <div className="product">
        <h1>Receitinhas delícia 🍔🍟</h1>
        </div>
     
      <div onClick={buildRecipes}>
        {recipesComponent}
       
      </div>

      
       
      
    </div>
    </div>
    
  )
}