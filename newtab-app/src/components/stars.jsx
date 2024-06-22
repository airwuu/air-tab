import React from 'react';

const layers = [
  { url: 'http://imgur.com/9beLKl9.png', animationClass: 'animate-twinkle-1' },
  { url: 'http://imgur.com/46MRYFa.png', animationClass: 'animate-twinkle-2' },
  { url: 'http://imgur.com/46MRYFa.png', animationClass: 'animate-twinkle-3' },
  { url: 'http://imgur.com/BqkETyl.png', animationClass: 'animate-twinkle-4' },
  { url: 'http://imgur.com/x1GB77K.png', animationClass: 'animate-twinkle-5' },
];

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-3/5 overflow-hidden" id="layers">
      {layers.map((layer, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 w-[200vw] h-full bg-repeat-x bg-[length:auto_100%] bg-center ${layer.animationClass}`}
          style={{ backgroundImage: `url(${layer.url})` }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;