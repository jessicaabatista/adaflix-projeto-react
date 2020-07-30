import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu/>

      <BannerMain
        videoTitle= "Bem-vinda ao ADAFLIX!"
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Aqui você pode ter acesso a vídeos sobre outras mulheres espalhadas pelo mundo que fizeram e fazem história na tecnologia. O nome 'Adaflix' é para homenagear a grande Augusta Ada King, a Condessa de Lovelace, que foi a primeira programadora da história."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Footer />
    </div>
  );
}

export default Home;