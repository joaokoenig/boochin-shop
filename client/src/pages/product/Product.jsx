import React, { useState } from 'react'
import './Product.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import {ethers} from "ethers";
import ABI from "../../../abi.json";



const Product = () => {
  const catId = parseInt(useParams().id)
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tokenBurned, setTokenBurned] = useState(false);

  const [cupomMessage, setCupomMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [balanceMessage, setBalanceMessage] = useState("");
  const [tokenId, setTokenId] = useState("2");
  const [tokensToBurn, setTokensToBurn] = useState(1);


  const images = [
    "https://images.pexels.com/photos/5886042/pexels-photo-5886042.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/5119526/pexels-photo-5119526.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]
  const CONTRACT_ADDRESS = "0x890c5b06C3B257673cfb4C0827492c99dA2A7df5";
  async function getProvider() {
    if (!window.ethereum) throw new Error(`No MetaMask found!`);

    const provider = new ethers.BrowserProvider(window.ethereum);
    //ask permission to talk with the blockchain
    const accounts = await provider.send("eth_requestAccounts", []);
    if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed!');
    return provider;
  }

  async function doSearch() {
    try{
      const provider = await getProvider();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      console.log("WALALELELET", provider.send("eth_requestAccounts", []));
      provider.send("eth_requestAccounts", []).then(res => {
        contract.balanceOf(res[0], tokenId).then(
            responseBalance => {

              const halfTokens = parseInt(responseBalance)/8
              setTokensToBurn(halfTokens)
              if (halfTokens === 0 ) {
                throw new Error("You have 0 tokens.")
              }
            }
        );
      })
      console.log("oiiii")
    }catch (e) {
      console.log(e, e)
      setCupomMessage("You have 0 tokens. Buy clothes or tokens from another user and comeback.")

    }}

  async function getContractSigner() {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
    return contract.connect(signer);
  }

  async function doBurn() {
    try {
      console.log("to no do save")

      if (tokensToBurn === 0 ) {
        throw new Error("You have 0 tokens.")
      }
      const contract = await getContractSigner();
      //alert(JSON.stringify(tx));
      const burn = await contract.burn(parseInt(tokenId), Math.round(tokensToBurn)).then(setTokenBurned(true));

      setResponseMessage(burn)
      setBalanceMessage("Your balance now: " + (tokensToBurn*7))
    } catch (e) {
      setCupomMessage("You have 0 tokens.")
      console.log("OIOIIIII", e)
    }}
  async function doMint() {
    try {
      const provider = await getProvider();
      const contract = await getContractSigner();
      //alert(JSON.stringify(tx));
      let numToken = quantity * 130
      provider.send("eth_requestAccounts", []).then(res => { contract.mint_with_barcode(res[0], 1234567891, numToken).then(setResponseMessage("You just recceived 1 token for each clothe buyed."))})
      console.log("numtoken", numToken)

    } catch (e) {
      setCupomMessage("Some error ocurred. Contact the chat support")
      console.log("error do mint", e)
    }}
  function burnToken() {
    let teste = doSearch()
    doBurn()
    console.log("tokensBurned", tokensToBurn)
    //setTokenBurned(true)
  }

  function transferToken() {
    //TODO implementar função que transfer token quando comprando (mint_with_barcode)
    //exibir mensagem ou alerta, algo do tipo, informando
    //usar barcode hardcoded
    doMint()
  }

  const makeBuyButton = () => {
    if(catId === 2) {
      //case tokens
      return (
          <div>
            <button className='addButton' onClick={() => transferToken()}>
              <AddShoppingCartIcon/> BUY NOW
            </button>
            <p>{responseMessage}</p>
          </div>
      )
    }
    //case exclusive collecion
    return (
        <div>
        {(!tokenBurned) ?
            <div>
              <button className='addButton exclusiveCollectionDisabled'>
                <AddShoppingCartIcon/> BUY NOW
              </button>
              <p>To be able to buy this item you should burn a single token</p>
              <button className='addButton' onClick={() => burnToken()}>
                BURN IT!
              </button>
            </div>
            :
            <div>
              <button className='addButton'>
                <AddShoppingCartIcon/> BUY NOW
              </button>
              <p>Token burned with success. Be happy!</p>
            </div>
        }
        </div>
    )
  }

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$129,80</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nulla sequi modi voluptas illo dolores iste, repellendus consectetur saepe pariatur neque ut! Voluptatibus dolorum id beatae expedita reiciendis aliquid. Consequatur.</p>
        <div className='quantity'>
          <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        {makeBuyButton()}
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;