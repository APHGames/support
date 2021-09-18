const Vivus = require('vivus');

const mojo = document.getElementsByTagName('svg');


new Vivus(
    mojo[0].id,
    {
      type: 'sync',
      duration: 200,
      animTimingFunction: Vivus.EASE
    },
    () => {
        
    }
  );