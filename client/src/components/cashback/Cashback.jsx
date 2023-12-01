import React, {useState} from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { ethers } from 'ethers';
import "./Cashback.scss"
import ABI from "../../../abi.json";
function Cashback(props) {
    const [cupomMessage, setCupomMessage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [responseMessage, setResponseMessage] = useState("");
    const [balanceMessage, setBalanceMessage] = useState("");
    const [tokenId, setTokenId] = useState("1");
    const [tokensToBurn, setTokensToBurn] = useState(0);

    const images = [
    "https://img.freepik.com/psd-gratuitas/pacote-de-notas-de-dolar-com-icone-de-moeda-isolado-ilustracao-de-renderizacao-3d_47987-7815.jpg?w=826&t=st=1701313307~exp=1701313907~hmac=4b0c1447fd80990256ddfa91bc8ca85cdaa16dc0f065aac89ee4d122289ad159",
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
            const burn = await contract.burn(parseInt(tokenId), Math.round(tokensToBurn)).then(setCupomMessage("Your cashback cupom is: BOOCHIN10"));

            setResponseMessage(burn)
            setBalanceMessage("Your balance now: " + (tokensToBurn*7))
        } catch (e) {
            setCupomMessage("You have 0 tokens.")
            console.log("OIOIIIII", e)
        }

    }
    function  genCashbackCupom() {
        let teste = doSearch()
        doBurn()
        console.log("tokensBurned", tokensToBurn)
    }
    return (

    <div className='cashback'>
        <div className="left">
            <div className="mainImg">
                <img src={images[0]} alt=""/>
            </div>
        </div>
        <div className="right">
            <span>Change your token to cashback</span>
            <p>Your tokens will be burned and you will receive a cupom to use as cashback.</p>

            <button className='addButton' onClick={() => genCashbackCupom()}>
                <CurrencyExchangeIcon/> GET CUPOM
            </button>
            <p className={'cupom'}>{cupomMessage}</p>
            <p className={'cupom'}>{balanceMessage}</p>
        </div>
    </div>

    );
}

export default Cashback;