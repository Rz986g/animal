import {useState} from "react";
import AnimalShow from "./AnimalShow"

const getRandomAnimal =()=>{
    const animals = ["cow","bird","cat","dog","gator","horse"];
    return animals[Math.floor(Math.random()*animals.length)]

}

const App=()=>{
    // useState example //
//     const [count,setCount] = useState(0);
//     const handleClick=()=>{
//         setCount(count+1);  
//     }
//     return (
// <div>
//   <button onClick={handleClick}>Add Animal</button>
//         <div>Number of Clicks: {count}</div>
// </div>

    const [ani,setAnimals] = useState([]);
    
    const handleClick=()=>{
        setAnimals([...ani,getRandomAnimal()]);  
    }
    
    const renderedAnimals =ani.map((animal,index)=>{
        console.log(animal);
        return <AnimalShow type={animal} key={index}/>
    });

    return (



    <div>
    <button onClick={handleClick}>Add Animal</button>
        <div>{renderedAnimals}</div>
    </div>  


        )}

export default App;