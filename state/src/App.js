import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Gallery from './assets/companents/Gallery';
import Form from './assets/companents/Form';
import Test from './assets/companents/Test';
import { productsList } from './assets/companents/data';

function App() {


  return (
    <div className="App">
      {/* <AlertButton message={'Click me'} click={click}>
        {
          sowmore? <p>Sowmore!</p> : null
        }
      </AlertButton>
      <AlertButton message={'Hello World!'} >
       

      </AlertButton>

      <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={(e) => {
        // e.preventDefault()   
        e.stopPropagation(); 
        alert('Playing!')
      }}>
        
        Play Movie
      </button>
      <button onClick={(e) => {
        e.stopPropagation()
        alert('Uploading!')
      }}>
        Upload Image
      </button>

      
    </div>
    <Gallery />
    <Form/> */}

  
      <div className='cards-header'>
        <h1>Shopify</h1>
      </div>
    <section className='cards'>
      
      
      {
        productsList.map((item) => {
          return (
            <Test name={item.title} images={item.images} price={item.price} brand={item.brand} text={item.description}/>
          )
        })
      }
    </section>

    </div>
  );
}


export default App;

function AlertButton({ message, children, click }) {
  return (
    <button onClick={click}>
      {children}
    </button>
  );
}