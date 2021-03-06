import { Link } from "react-router-dom"
import Dashboard from "./Dashboard";
import {useState} from "react";

function CoinCard({id, name , image, symbol, price, crypto, setCryptos}) {
    // const [errors, setErrors] = useState([])
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    // const {id} = crypto;

    function deleteCrypto(){
      fetch(`/watchlists/${id}`,
       { method: 'DELETE' })
       .then((r)=>{
        if (r.ok){
          handleDelete(crypto)
      }})
    }
  
  const handleDelete = (deletedCrypto) =>{
      setCryptos((cryptos)=>cryptos.filter((crypto)=>crypto.id !== deletedCrypto.id))
    }

      // function addToDashboard(){
      //   const crypto = {
      //     user_id: user.id,
      //     chatter_id: chatter.id
      //   }
      //   fetch('/watchlists',{
      //     method:'POST',
      //     headers:{'Content-Type': 'application/json'},
      //     body:JSON.stringify(crypto)
      //   })
      //   .then(res => res.json())
      //   .then((r) => {
      //       setIsLoading(false);
      //       if (r.ok) {
      //         history.push("/dashboard");
      //       } else {
      //         r.json().then((err) => setErrors(err.errors));
      //       }
      //     });
      //   }
    
    return (
    
    <div className="coin-card">
        <img src={image} alt='crypto'/>
        <h1>{name}
            <small>{symbol}</small>
            <span style={{fontSize:"11pt"}}>Price: {formatter.format(price)}</span>
        </h1>
        {/* <button onClick={() => addToDashboard(crypto)} >Add to Dashboard</button> */}
        {/* <button type='submit' 
              onClick={deleteCrypto}
              >
                Remove from Cryptos
              </button> */}
    

        
    </div>
    
    )
}

export default CoinCard