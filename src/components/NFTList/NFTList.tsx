
import PropTypes from "prop-types";
import SingleNFT  from 'components/singleNFT/SingleNFT';

import "./style.css"

type NFTListT ={
  // nftItem: any;

}
const NFTList = ({
// nftItem,
}: NFTListT) =>{

  return (
    <div className="nft_list">
      <SingleNFT
        nftImage="https://cdn2.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png"
        nftTitle="titulo"
        nftId="000"
        nftPriceFiat="10" 
        nftPriceCrypto="0.1"
       />
      <SingleNFT
        nftImage="https://cdn2.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png"
        nftTitle="titulo"
        nftId="000"
        nftPriceFiat="10" 
        nftPriceCrypto="0.1"
       />
       <SingleNFT
       nftImage="https://cdn2.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png"
       nftTitle="titulo"
       nftId="000"
       nftPriceFiat="10" 
       nftPriceCrypto="0.1"
      />
      <SingleNFT
        nftImage="https://cdn2.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png"
        nftTitle="titulo"
        nftId="000"
        nftPriceFiat="10" 
        nftPriceCrypto="0.1"
       />
       <SingleNFT
        nftImage="https://cdn2.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png"
        nftTitle="titulo"
        nftId="000"
        nftPriceFiat="10" 
        nftPriceCrypto="0.1"
       />
    </div>
  );
}
 
export default NFTList

