import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import {useState} from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/0/203817_nike-phantom-gx-elite-dynamic-fit-gras-voetbalschoenen-fg-wit-felblauw-felroze.jpg',
      name: 'Nike phantom GX elite wit/blauw',
      category: 'Gras/kunstgras',
      price: 280
    },
    {
      url: 'https://www.voetbalshop.be/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/216275_nike-phantom-gx-elite-df-gras-voetbalschoenen-fg-wit-felgeel-zwart.jpg',
      name: 'Nike phantom GX wit/geel',
      category: 'Gras/kunstgras',
      price: 280
    },
    {
      url: 'https://www.knvbshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/0/203953_nike-zoom-mercurial-superfly-9-elite-gras-voetbalschoenen-fg-wit-felblauw-felro.jpg',
      name: 'Nike mercurial superfly',
      category: 'Gras/kunstgras',
      price: 320
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/3a8fffc51952d94f7bcbf926108ab2b0/1/9/191170_nike-zoom-mercurial-superfly-9-elite-cr7-gras-voetbalschoenen-fg-wit-blauw-bron_1.jpg',
      name: 'Nike mercurial superfly elite CR7',
      category: 'Gras/kunstgras',
      price: 240
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/217410_nike-zoom-mercurial-vapor-15-elite-xxv-gras-voetbalschoenen-fg-zilver-felgeel-z.jpg',
      name: 'Nike Mercurial vapor elite',
      category: 'Gras/kunstgras',
      price: 300
    },
    {
      url: 'https://www.knvbshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/216320_nike-zoom-mercurial-superfly-9-elite-gras-voetbalschoenen-fg-felroze-geel-licht.jpg',
      name: 'Nike mercurial superfly elite',
      category: 'Gras/kunstgras',
      price: 269
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/1/9/199797_nike-phantom-gt2-elite-ijzeren-nop-voetbalschoenen-sg-anti-clog-zwart-brons-wit.jpg',
      name: 'Nike phantom gt2 ijzeren noppen',
      category: 'Gras',
      price: 200
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/0/208205_puma-future-ultimate-ijzeren-nop-voetbalschoenen-sg-zwart-wit.jpg',
      name: 'Puma Future ultimate IJzeren noppen',
      category: 'Gras',
      price: 244
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/210312_puma-future-ultimate-elements-gras-kunstgras-voetbalschoenen-mg-zwart-oranje-mu.jpg',
      name: 'Puma Future ultimate Limited edition',
      category: 'Gras/ kunstgras',
      price: 450
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/218287_adidas-predator-accuracy-veterloze-gras-voetbalschoenen-fg-oranje-zwart_1.jpg',
      name: 'Adidad predator accuracy',
      category: 'Gras/kunstgras',
      price: 244
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/1/7/173896_adidas-x-speedportal-messi.1-gras-voetbalschoenen-fg-wit-rood-zwart.jpg',
      name: 'Adidas X speedportal Leo Messi',
      category: 'Gras/kunstgras',
      price: 244
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/1/6/164167_adidas-x-speedportal.1-gras-voetbalschoenen-fg-zwart-rood-groen_1.jpg',
      name: 'Adidas X speedportal zwart/rood',
      category: 'Gras',
      price: 244
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;