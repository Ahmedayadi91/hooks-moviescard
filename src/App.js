import React from 'react'
import ArrayDyn from './componant/arrayDyn'
import './App.css';
import CardItem from './componant/CardItem';
function App() {
  return (
      <div className="App">
          <div>
             {/* <ArrayDyn /> */}
             <CardItem title="titanic" text="Titanic est un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997.

              Intégrant à la fois des aspects historiques et fictionnels, le film est basé sur
              le récit du naufrage du RMS Titanic et met en vedette Leonardo DiCaprio et Kate Winslet." link = " https://fr.wikipedia.org/wiki/Titanic_(film,_1997)" 
              src = "https://img-4.linternaute.com/qN-WR7DLLyCdwzybd_TCAnVsrpE=/1240x/c6bfd8570c3a4cdf8983a07bc8c67bb0/ccmcms-linternaute/135211.jpg" />
            </div>
            <div>
            <CardItem title="Gladiator" text="Gladiator revisite le genre du péplum, dont les derniers films majeurs avaient été réalisés dans les années 1960. 
                    Le film ne se fonde pas sur des événements réels mais reprend les noms 
                    et certains traits de personnalité de l'empereur Marc Aurèle et de ses enfants Commode et Lucilla."
                     link = " https://fr.wikipedia.org/wiki/Gladiator_(film,_2000)" 
                     src = "https://i.pinimg.com/originals/49/22/6c/49226cc2be5cb537218993fa89d075a8.jpg" />
    
          </div>
          <div>
            <CardItem title="Lion" text="Lion est un film américano-britannico-australien réalisé par Garth Davis, sorti en 2016.
                    Il s'agit de l'adaptation cinématographique du roman Je voulais retrouver ma mère de Saroo Brierley. 
                    Le film est basé sur une histoire vraie"
                     link = "https://fr.wikipedia.org/wiki/Lion_(film,_2016)" 
                     src = "https://www.cinehorizons.net/sites/default/files/affiches/1347450524-lion.jpg" />
    
          </div>
        </div>
  )
}

export default App;
