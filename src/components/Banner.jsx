import React from 'react';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: 'url("https://wp.technologyreview.com/wp-content/uploads/2021/12/48953946911_7dae1036a2_o.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handleLearnMore = () => {
    window.location.href = 'https://www.spacex.com';
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-white text-4xl font-bold text-center mb-4">
          Welcome to SpaceX
        </h1>
        <p className="text-white text-lg text-center">
          Explore Rockets and Capsules from SpaceX
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
