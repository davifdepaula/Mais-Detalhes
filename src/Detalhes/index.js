import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./detalhes.css"

export default function Detalhes() {
  const {id} = useParams()
  const navigate = useNavigate();
    const [recipes, setRecipes] = useState(null);
    function handleBack() {
      navigate("/");
    }
   console.log("id",id)
    useEffect(() => {
        const promise = axios.get("http://localhost:1234/recipes");

        promise.then(response => {
          console.log(response.data)
          const recipe = response.data.filter(Element => Element.id == id)
          setRecipes(recipe);
          console.log(recipe)
        })
      }, []);
      
      console.log(recipes)
      function howToDO() {
        if (!recipes) return "Carregando..."
        return recipes.map(recipes => {
            return (
            <div className="Menu">
            <h1>{recipes.title}</h1>
            <p>ingredientes: {recipes.ingredients}</p>
            <p> tempo de preparo: {recipes.time} minutos </p>
            <p> <span className="steps"> Como fazer: {recipes.steps}</span> </p>
            
            </div>
          )   
        
        })
      }
    const recipesComponent = howToDO()
    return (
      <div>
          {recipesComponent}
          <button onClick={handleBack}> Voltar</button>
    
      </div>
    )
  }