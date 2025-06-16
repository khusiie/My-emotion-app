"use client";

import face1 from "@/app/assets/moods/Face-1.svg";
import face2 from "@/app/assets/moods/Face-2.svg";
import face3 from "@/app/assets/moods/Face-3.svg";
import face4 from "@/app/assets/moods/Face-4.svg";
import face5 from "@/app/assets/moods/Face-5.svg";
import face6 from "@/app/assets/moods/Face.svg";
import Image from "next/image";
import { useState } from "react";

const QuestionSlide = ({ onNext, onPrev, onSelect }) => {
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  const feelings = [
    { id: "angry", label: "Angry", img: face6 },
    { id: "sad", label: "Sad", img: face1 },
    { id: "neutral", label: "Neutral", img: face2 },
    { id: "content", label: "Content", img: face3 },
    { id: "happy", label: "Happy", img: face4 },
    { id: "awe", label: "Awe", img: face5 },
  ];

  const handleSelect = (feelingId) => {
    setSelectedFeeling(feelingId);
    if (onSelect) onSelect(feelingId);
  };

  return (
    <div className="bg-[#FFFFFF40] backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">
        How are you feeling today?
      </h1>

      <p className="text-center text-gray-600 text-lg mb-12">
        No matter how you're feeling, it's okay. We're here to support you.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16">
        {feelings.map((feeling) => (
          <div key={feeling.id} className="flex flex-col items-center">
            <button
              onClick={() => handleSelect(feeling.id)}
              className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-3 transition-all duration-200 transform hover:scale-105 ${
                selectedFeeling === feeling.id
                  ? "ring-4 ring-blue-300 scale-105"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={feeling.img}
                  alt={feeling.label}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
            <span className="text-gray-600 text-sm font-medium">
              {feeling.label}
            </span>
          </div>
        ))}
      </div>

      <p className="text-center text-[#3E4352] text-lg mb-8">
        Choose the feeling that is closest to how you are feeling
      </p>

      <div className="flex justify-center">
        <button
          onClick={onNext}
          disabled={!selectedFeeling}
          className={`w-[455px] h-[65px] px-[105px] py-[14px] rounded-full text-lg font-semibold transition-all duration-200 shadow-lg ${
            selectedFeeling
              ? "bg-[#A44167] text-white hover:bg-[#832e4f] cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default QuestionSlide;
