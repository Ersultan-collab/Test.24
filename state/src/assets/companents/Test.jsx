import { useState } from "react"; 


function Test({name, brand, price, text, images,}){
    const [more, setmore] = useState(false); 
    let [index, setindex] = useState(0)

    function next(){
      if(index == images.length - 1){
        index = 0
        
      }
      setindex(index + 1)
    }
  
    function prev(){
    if(index == 0){
        index = images.length - 1
        
    }
    setindex(index - 1)
    }

    function click(){
        setmore(!more)
    }

    return(
        <div className='card'>
        <div className='card-img'>
          <img src={images[index]}></img>
          <div className='card-buttons'>
            <button onClick={prev} className="button-index">prev</button>
            <button onClick={next} className="button-index">next</button>
          </div>
        </div>
        <div className='card-texts'>
            <h1>{name}</h1>
            <h3>${price}</h3>
            <h3>{brand}</h3>
            <button className="button-more" onClick={click}>{
                more? 'Hide' : 'More...'
            }</button>
            {more && <a>{text}</a>}
            
        </div>
      </div>
    )
}
export default Test