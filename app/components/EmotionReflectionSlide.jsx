"use client";
import sadImg from "@/app/assets/moods/Face-1.svg";
import neutralImg from "@/app/assets/moods/Face-2.svg";
import contentImg from "@/app/assets/moods/Face-3.svg";
import happyImg from "@/app/assets/moods/Face-4.svg";
import aweImg from "@/app/assets/moods/Face-5.svg";
import angryImg from "@/app/assets/moods/Face.svg";
import Image from "next/image";
import { useState } from "react";

const EmotionReflectionSlide = ({
  selectedEmotion = "angry",
  selectedStages = ["Annoyed", "Fed up", "Tired"],
  intensityLevel = 75,
  onNext,
  onPrev,
}) => {
  const [reflectionText, setReflectionText] = useState("");

  const emotionData = {
    angry: {
      title: "Anger",
      color: "bg-red-400",
      icon: angryImg,
    },
    sad: {
      title: "Sadness",
      color: "bg-blue-500",
      icon: sadImg,
    },
    neutral: {
      title: "Neutral",
      color: "bg-teal-300",
      icon: neutralImg,
    },
    content: {
      title: "Content",
      color: "bg-yellow-400",
      icon: contentImg,
    },
    happy: {
      title: "Happy",
      color: "bg-green-400",
      icon: happyImg,
    },
    awe: {
      title: "Awe",
      color: "bg-purple-400",
      icon: aweImg,
    },
  };

  const currentEmotion = emotionData[selectedEmotion] || emotionData.neutral;

  const handleNext = () => {
    if (reflectionText.trim().length > 0 && onNext) {
      onNext({
        selectedEmotion,
        selectedStages,
        intensityLevel,
        reflectionText: reflectionText.trim(),
      });
    }
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="bg-[rgba(255, 255, 255, 0.25)] bg-opacity-95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">
          What is making you feel this way?
        </h1>

        <div className="mb-8">
          <div className="relative">
            <textarea
              value={reflectionText}
              onChange={(e) => setReflectionText(e.target.value)}
              placeholder="I feel this way because...."
              className="w-full h-48 p-6 border-2 border-gray-200 rounded-2xl resize-none text-gray-700 text-lg placeholder-gray-400 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 transition-all duration-200"
            />

            <div className="absolute top-4 right-4">
              <div
                className={`w-10 h-10 ${currentEmotion.color} rounded-full flex items-center justify-center shadow-md overflow-hidden`}
              >
                <Image
                  src={currentEmotion.icon}
                  alt={currentEmotion.title}
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
            <div
              className={`w-16 h-16 rounded-2xl ${currentEmotion.color} flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              <Image
                src={currentEmotion.icon}
                alt={currentEmotion.title}
                width={32}
                height={32}
              />
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {currentEmotion.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-2">
                {selectedStages.map((stage, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 ${currentEmotion.color} text-white text-sm rounded-full shadow-sm`}
                  >
                    {stage}
                  </span>
                ))}
              </div>

              <div className="text-sm text-gray-600">
                Intensity: {intensityLevel}%
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={reflectionText.trim().length === 0}
            className={`px-16 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg ${
              reflectionText.trim().length > 0
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
            ← Back to emotions
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmotionReflectionSlide;
