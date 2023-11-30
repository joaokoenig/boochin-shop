import React, {useState} from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import "./Cashback.scss"
function Cashback(props) {
    const [cupomMessage, setCupomMessage] = useState("");
    const [quantity, setQuantity] = useState(1);

    const images = [
    "https://img.freepik.com/psd-gratuitas/pacote-de-notas-de-dolar-com-icone-de-moeda-isolado-ilustracao-de-renderizacao-3d_47987-7815.jpg?w=826&t=st=1701313307~exp=1701313907~hmac=4b0c1447fd80990256ddfa91bc8ca85cdaa16dc0f065aac89ee4d122289ad159",
    ]
    function genCashbackCupom() {
        //TODO burn

        setCupomMessage("Your cashback cupom is: BOOCHIN10")
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
        </div>
    </div>

    );
}

export default Cashback;