import React from 'react';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  const data = [
    {
      title: 'XPhone',
      descs: [
        'Lots to love. Less to Spend.',
        'Starting at $399.'
      ],
      textColor: '#fff',
      href: '#',
      src: require('./assets/iphone.png'),
    },
    {
      title: 'Tablet',
      descs: [
        'Just the right amount of everything.',
      ],
      textColor: '#000',
      href: '#',
      src: require('./assets/tablet.png'),
    },
    {
      title: 'Buy a Tablet or xPhone for college. Get arPods.',
      textColor: '#000',
      href: '#',
      src: require('./assets/airpods.png'),
    }
  ];
  return (
    <div className="App">
      <div className="full-app">
        <Carousel items={data} />
      </div>
    </div>
  );
}

export default App;
