"use client";
import { useState } from "react";

const ActivitySelectionSlide = ({
  selectedEmotion = "angry",
  selectedStages = ["Annoyed", "Fed up"],
  onNext,
  onPrev,
}) => {
  const [selectedActivities, setSelectedActivities] = useState([]);

  // All available activities
  const activities = [
    "Exercise",
    "Work",
    "Social",
    "Community",
    "Events",
    "Home",
    "Play",
    "Sports",
    "Arts",
    "Cooking",
    "Comparing",
    "Music",
    "Journal",
    "TV/ Show",
    "Stretching",
    "Called a loved one",
    "Reading",
    "Study",
    "Nature",
    "Comedy",
    "Hobbies",
    "Playing with Pets",
    "Treating Yourself",
    "Doom scrolling",
    "Overworking",
    "Substance Use",
    "Comparing",
    "Family",
  ];

  // Emotion data for display
  const emotionData = {
    angry: {
      title: "Angry",
      color: "bg-red-400",
      icon: "😠",
    },
    sad: {
      title: "Sad",
      color: "bg-blue-500",
      icon: "😢",
    },
    neutral: {
      title: "Neutral",
      color: "bg-teal-300",
      icon: "😐",
    },
    content: {
      title: "Content",
      color: "bg-yellow-400",
      icon: "😌",
    },
    happy: {
      title: "Happy",
      color: "bg-green-400",
      icon: "😊",
    },
    awe: {
      title: "Awe",
      color: "bg-purple-400",
      icon: "😲",
    },
  };

  const currentEmotion = emotionData[selectedEmotion] || emotionData.neutral;

  const handleActivityToggle = (activity) => {
    setSelectedActivities((prev) => {
      if (prev.includes(activity)) {
        // Remove activity if already selected
        return prev.filter((a) => a !== activity);
      } else if (prev.length < 5) {
        // Add activity if less than 5 selected
        return [...prev, activity];
      } else {
        // If 5 activities already selected, don't add more
        return prev;
      }
    });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-[rgba(255, 255, 255, 0.25)] bg-opacity-95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          What did you do today?
        </h1>

        <p className="text-center text-gray-600 text-lg mb-8">
          Choose upto 5 activities
        </p>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {activities.map((activity, index) => (
              <button
                key={index}
                onClick={() => handleActivityToggle(activity)}
                disabled={
                  !selectedActivities.includes(activity) &&
                  selectedActivities.length >= 5
                }
                className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                  selectedActivities.includes(activity)
                    ? "bg-gray-700 text-white border-gray-700"
                    : selectedActivities.length >= 5
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                {activity}
              </button>
            ))}
          </div>

          <div className="text-center mt-4 text-sm text-gray-500">
            {selectedActivities.length}/5 activities selected
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
            <div
              className={`w-16 h-16 rounded-2xl ${currentEmotion.color} flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              <span className="text-white text-2xl">{currentEmotion.icon}</span>
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {currentEmotion.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {selectedStages.map((stage, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-red-500 text-xl">
                {currentEmotion.icon}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onNext}
            disabled={selectedActivities.length === 0}
            className={`px-16 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg ${
              selectedActivities.length > 0
                ? "bg-[#A44167] text-white  hover:shadow-xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Complete
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={onPrev}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitySelectionSlide;
