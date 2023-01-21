import {useState} from "react"
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap={
    bird:bird,
    cat:cat,
    cow:cow,
    dog:dog,
    gator:gator,
    horse:horse,
}

    // const svgMap=[bird,cat,cow,dog,gator,horse]
const AnimalShow=({type})=>{
    const [click,setClick] = useState(0);
    const handleClick=()=>{
        setClick(click+1)
        console.log(click);
    };

    return <div onClick={handleClick}>
        <img alt="animal" style={{width:100}} src={svgMap[type]}/>
        <img alt="heart" style={{width:click*10}} src={heart}/>
        
        </div>;
}

export default AnimalShow;