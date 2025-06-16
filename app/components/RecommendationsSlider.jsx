import {
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Flower,
  Headphones,
  Leaf,
  Play,
  Star,
} from "lucide-react";
import React, { useState } from "react";

const RecommendationsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recommendations = [
    {
      id: 1,
      title: "9 Habits to stay happy",
      duration: "7min",
      type: "Video",
      typeIcon: <Play className="w-4 h-4" />,
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      accentColor: "text-green-600",
      decorativeIcon: <Leaf className="w-6 h-6 text-green-500" />,
      image: "forest-video", // placeholder for forest video thumbnail
      decorativeElements: [
        <Leaf
          className="absolute top-2 left-2 w-5 h-5 text-green-400"
          key="leaf1"
        />,
        <Leaf
          className="absolute bottom-4 left-4 w-4 h-4 text-green-500"
          key="leaf2"
        />,
      ],
    },
    {
      id: 2,
      title: "9 Habits to stay happy",
      duration: "7min",
      type: "Text",
      typeIcon: <FileText className="w-4 h-4" />,
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-50",
      accentColor: "text-yellow-600",
      decorativeIcon: <Star className="w-6 h-6 text-yellow-500" />,
      image: "laptop-screen", // placeholder for laptop screen
      decorativeElements: [
        <Star
          className="absolute top-3 left-3 w-4 h-4 text-yellow-400"
          key="star1"
        />,
        <Star
          className="absolute bottom-2 right-2 w-3 h-3 text-yellow-500"
          key="star2"
        />,
      ],
    },
    {
      id: 3,
      title: "9 Habits to stay happy",
      duration: "7min",
      type: "Audio",
      typeIcon: <Headphones className="w-4 h-4" />,
      borderColor: "border-pink-400",
      bgColor: "bg-pink-50",
      accentColor: "text-pink-600",
      decorativeIcon: <Flower className="w-6 h-6 text-pink-500" />,
      image: "headphones-setup", // placeholder for headphones setup
      decorativeElements: [
        <Flower
          className="absolute top-2 right-2 w-5 h-5 text-pink-400"
          key="flower1"
        />,
        <Flower
          className="absolute bottom-3 left-2 w-4 h-4 text-pink-500"
          key="flower2"
        />,
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + recommendations.length) % recommendations.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
        My Recommendations
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {recommendations.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0 px-2">
                <div className="flex gap-4 justify-center">
                  {recommendations.slice(0, 3).map((card, cardIndex) => (
                    <div
                      key={card.id}
                      className="bg-white rounded-[9.78px] border border-[#17916B] relative overflow-hidden transition-all duration-300"
                      style={{
                        width: "309px",
                        height: "120px",
                        boxShadow:
                          "0px 1.96px 24.46px 3.91px rgba(184, 216, 213, 0.16)",
                      }}
                    >
                      <div className="absolute top-2 left-2">
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.84 17.17 9.84 12.13 17 10.34V8z" />
                        </svg>
                      </div>
                      {cardIndex === 0 && (
                        <div className="absolute bottom-2 left-2">
                          <svg
                            className="w-3 h-3 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.84 17.17 9.84 12.13 17 10.34V8z" />
                          </svg>
                        </div>
                      )}
                      {cardIndex === 1 && (
                        <>
                          <div className="absolute top-2 left-2">
                            <svg
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          </div>
                          <div className="absolute bottom-1 right-1">
                            <svg
                              className="w-3 h-3 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          </div>
                        </>
                      )}
                      {cardIndex === 2 && (
                        <>
                          <div className="absolute top-2 right-2">
                            <svg
                              className="w-4 h-4 text-pink-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z" />
                            </svg>
                          </div>
                          <div className="absolute bottom-2 left-2">
                            <svg
                              className="w-3 h-3 text-pink-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z" />
                            </svg>
                          </div>
                        </>
                      )}

                      <div className="flex justify-between items-center h-full p-3">
                        <div className="flex-1 flex flex-col justify-between h-full">
                          <div>
                            <h3 className="font-semibold text-sm text-green-600 mb-2">
                              {card.title}
                            </h3>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-gray-600">
                              <Clock className="w-3 h-3" />
                              <span className="text-xs">{card.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                              {React.cloneElement(card.typeIcon, {
                                className: "w-3 h-3",
                              })}
                              <span className="text-xs">{card.type}</span>
                            </div>
                          </div>
                        </div>

                        <div className="w-16 h-16 rounded-lg flex items-center justify-center ml-2">
                          {cardIndex === 0 && (
                            <div className="w-full h-full bg-green-800 rounded-lg flex items-center justify-center relative">
                              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                <Play className="w-3 h-3 text-green-800 ml-0.5" />
                              </div>
                            </div>
                          )}
                          {cardIndex === 1 && (
                            <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                              <div className="w-12 h-8 bg-white rounded border border-gray-300 flex items-center justify-center">
                                <div className="w-6 h-4 bg-blue-200 rounded"></div>
                              </div>
                            </div>
                          )}
                          {cardIndex === 2 && (
                            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                                <Headphones className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          disabled={currentSlide === recommendations.length - 1}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {recommendations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="text-right mt-6">
        <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors border-b-2 border-teal-600">
          Explore other features
        </button>
      </div>
    </div>
  );
};

export default RecommendationsSlider;
