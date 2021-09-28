import List from "./components/list";
import { 
  brownSugar, 
  butter, 
  dropsChocolate, 
  eggs, 
  sugar, 
  vanillaEssence, 
  wheatFlour 
} from "./components/list/images"

const h1Style = {
  textAlign: 'center',
  fontSize: '2.5em',
  margin: '5%',
  fontWeight: 'bold'
}

function App() {
  let ingredients = [
    {
      name: 'Brown Sugar',
      image: brownSugar
    },
    {
      name: 'Butter',
      image: butter
    },
    {
      name: 'Chocolate drops',
      image: dropsChocolate
    },
    {
      name: 'Eggs',
      image: eggs
    },
    {
      name: 'Sugar',
      image: sugar
    },
    {
      name: 'Vanilla essence',
      image: vanillaEssence
    },
    {
      name: 'Wheat flour with yeast',
      image: wheatFlour
    }
  ]

  return (
    <div className="App">
      <h1 style={ h1Style }>Ingredientes do Cookie</h1>
      {ingredients.map((item, index) => (
        <List key={ index } image={ item.image }>
          { item.name }
        </List>
      ))}
    </div>
  );
}

export default App;
