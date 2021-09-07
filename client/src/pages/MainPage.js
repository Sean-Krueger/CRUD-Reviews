import "./mainpage.css";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Box } from "../styles";
import Ticker from 'react-ticker'
 
function  MainPage(){
    const [ coins, setCoins ] = useState([])
    const [topChats, setTopChats] = useState([]);

    // useEffect(()=> {
    //     fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d%2C%2030d%2C%20200d%2C%201yr`)
    //     .then(r => r.json())
    //     .then( crypto => setCoins(crypto)
    //     )
    //   }, []) 
 

      useEffect(() => {
        fetch("/chatters")
          .then((r) => r.json())
          .then(setTopChats);
      }, []);

      return (
        <>
      <div id="page">
        <h1 className="heading">Crypto Ticker</h1>
        <Ticker>
          {({ index }) => (
            <>
                <h2>Crypto Iteration #{index}!  </h2>
                {/* <img src=" " alt=""/> */}
            </>
        )}
         </Ticker>
            <br/>

          <h1 className="heading">Communities</h1>
            <Button as={Link} to="/new">
            Promote Projects
            </Button>
            
            <Button as={Link} to="/chatter">
            Crypto Chatter
            </Button>

          <h1 className="heading"> Top Crypto Chats </h1>
             {topChats.likes > 0 ? (
             topChats.map((chatter) => (
            <Box>
              <h2>{chatter.headline}</h2>
              <p>{chatter.chat}</p>
              <p>
                <cite>By {chatter.user.username}</cite>
              </p>
            </Box>
            ))
            ) : (
        <>
          <h2>No Chats Yet</h2>
          <Button as={Link} to="/newchatter">
            Make a New Chat!
          </Button>
        </>
      )}
   </div>
        </>
      )
}

export default MainPage;