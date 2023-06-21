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
      seller: 'Voetbalschoenenstore',
      price: 280
    },
    {
      url: 'https://www.voetbalshop.be/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/216275_nike-phantom-gx-elite-df-gras-voetbalschoenen-fg-wit-felgeel-zwart.jpg',
      name: 'Nike phantom GX wit/geel',
      category: 'Gras/kunstgras',
      seller: 'Voetbalschoenenstore',
      price: 280
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/217106_nike-zoom-mercurial-vapor-15-elite-ijzeren-nop-voetbalschoenen-sg-pro-player-fe_1.jpg',
      name: 'Nike mercurial vapor',
      category: 'Soft-ground / ijzeren nop',
      seller: 'Voetbalschoenenstore',
      price: 320
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/3a8fffc51952d94f7bcbf926108ab2b0/1/9/191170_nike-zoom-mercurial-superfly-9-elite-cr7-gras-voetbalschoenen-fg-wit-blauw-bron_1.jpg',
      name: 'Nike mercurial superfly elite CR7',
      category: 'Gras/kunstgras',
      seller: 'Voetbalschoenenstore',
      price: 240
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/218449_adidas-x-speedportal-gras-voetbalschoenen-fg-oranje-zwart-goud.jpg',
      name: 'Adidas x speedportal oranje/zwart',
      category: 'Gras/kunstgras',
      seller: 'Voetbalschoenenstore',
      price: 300
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/212319_adidas-x-speedportal.1-parley-gras-voetbalschoenen-fg-wit-lichtblauw.jpg',
      name: 'Adidas x speedportal',
      category: 'Gras/kunstgras',
      seller: 'Voetbalschoenenstore',
      price: 244
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/212319_adidas-x-speedportal.1-parley-gras-voetbalschoenen-fg-wit-lichtblauw.jpg',
      name: 'Adidas x speedportal',
      category: 'Gras/kunstgras',
      seller: 'Voetbalschoenenstore',
      price: 244
    },
    {
      url: 'https://www.voetbalshop.nl/media/catalog/product/cache/d81c8dc66c69ceb69419c2e7e72e896d/2/1/212319_adidas-x-speedportal.1-parley-gras-voetbalschoenen-fg-wit-lichtblauw.jpg',
      name: 'Adidas x speedportal',
      category: 'Gras/kunstgras',
      seller: 'Voetbalschoenenstore',
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