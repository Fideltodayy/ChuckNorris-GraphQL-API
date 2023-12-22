// src/App.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES, GetCategoriesData } from './graphql/queries';
import CategoryButton from './components/CategoryButton';
import { useChuckNorrisContext } from './context/ChuckNorrisContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  const { loading, error, data } = useQuery<GetCategoriesData>(GET_CATEGORIES);
  const { state } = useChuckNorrisContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


// CustomPrevArrow.tsx
const CustomPrevArrow: React.FC = (props) => {
  return (
    <div {...props} className="slick-prev custom-prev-arrow">
      {/* Your custom icon or text for the previous button */}
      <span>&lt;</span>
    </div>
  );
};

// CustomNextArrow.tsx
const CustomNextArrow: React.FC = (props) => {
  return (
    <div {...props} className="slick-next custom-next-arrow">
      {/* Your custom icon or text for the next button */}
      <span>&gt;</span>
    </div>
  );
};


  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "35%",
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust the number of buttons for large screens
          slidesToScroll: 3,
          centerPadding: "50%", // Adjust padding for large screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Display one button on small screens
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
    ],
    // for smoother transitions
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  

  return (
    <div className='container'>
      <h1>Chuck Norris Jokes</h1>
      <div>
        <h2>Categories</h2>
        <div className="slick-slider">
          <Slider {...settings}>
            {data?.categories?.map((category: string) => (
              <div key={category}>
                <CategoryButton category={category} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="random-joke">
      <h2>Random Joke</h2>
      {state.currentJoke ? (
        <p>{state.currentJoke.value}</p>
      ) : (
        <p>Select a category to see a random joke</p>
      )}
    </div>
    </div>
  );
};

export default App;
