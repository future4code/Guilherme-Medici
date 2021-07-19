import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Guilherme Trindade Mello Médici" 
          descricao="Oi, me chamo Guilherme Médici, sou natural do Rio de Janeiro, mas moro atualmente do outro lado do país, em Rondônia. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="littlecard-container">
       <CardPequeno
       email="E-mail:"
       endereco="mailguigs@gmail.com"
       />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="" 
          descricao="Formado em direito e ainda advogado, coordenei o departamento jurídico de empresas e atuei como responsável por uma das áreas de atuação do último escritório que trabalhei, porém estou em transição de carreira e estudo programação com professores sensacionais da Labenu. Um dos meus objetivos é usar conhecimento jurídico e de programação para me inserir nesse novo mercado. Apesar das dificuldades, sigo confiante na transição para mergulhar no mundo da programação!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
