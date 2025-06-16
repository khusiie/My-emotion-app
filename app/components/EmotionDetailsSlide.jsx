"use client";
import sadImg from "@/app/assets/moods/Face-1.svg";
import neutralImg from "@/app/assets/moods/Face-2.svg";
import contentImg from "@/app/assets/moods/Face-3.svg";
import happyImg from "@/app/assets/moods/Face-4.svg";
import aweImg from "@/app/assets/moods/Face-5.svg";
import angryImg from "@/app/assets/moods/Face.svg";
import Image from "next/image";

const EmotionDetailsSlide = ({
  selectedEmotion,
  selectedStages,
  setSelectedStages,
  intensityLevel,
  setIntensityLevel,
  onNext,
  onPrev,
}) => {
  console.log(selectedEmotion);
  console.log(selectedStages);

  // JSON data for all emotions with enhanced color definitions
  const emotionData = {
    angry: {
      title: "Anger is a complex emotion",
      subtitle: "Identifying your emotions is the first step to releasing them",
      color: "bg-red-400",
      gradientFrom: "from-red-300",
      gradientTo: "to-red-600",
      borderColor: "border-red-400",
      sliderLabels: { left: "Slightly Angry", right: "Very Angry" },
      question: "What stage is your anger in?",
      stages: [
        "Irritated",
        "Annoyed",
        "Frustrated",
        "Fed Up",
        "Grumpy",
        "Touchy",
      ],
      image: angryImg,
    },
    sad: {
      title: "Sadness is a natural emotion",
      subtitle: "It's okay to feel sad, acknowledging it helps you heal",
      color: "bg-blue-500",
      gradientFrom: "from-blue-300",
      gradientTo: "to-blue-600",
      borderColor: "border-blue-500",
      sliderLabels: { left: "A Little Down", right: "Very Sad" },
      question: "What kind of sadness are you experiencing?",
      stages: [
        "Disappointed",
        "Melancholy",
        "Heartbroken",
        "Dejected",
        "Sorrowful",
        "Grief-stricken",
      ],
      image: sadImg,
    },
    neutral: {
      title: "Neutral feelings are valid too",
      subtitle: "Sometimes feeling balanced is exactly what we need",
      color: "bg-teal-300",
      gradientFrom: "from-teal-200",
      gradientTo: "to-teal-500",
      borderColor: "border-teal-300",
      sliderLabels: { left: "Slightly Detached", right: "Very Neutral" },
      question: "How would you describe your neutral state?",
      stages: [
        "Calm",
        "Balanced",
        "Indifferent",
        "Peaceful",
        "Steady",
        "Composed",
      ],
      image: neutralImg,
    },
    content: {
      title: "Contentment is a wonderful feeling",
      subtitle: "Appreciating this moment of satisfaction is important",
      color: "bg-yellow-400",
      gradientFrom: "from-yellow-300",
      gradientTo: "to-yellow-600",
      borderColor: "border-yellow-400",
      sliderLabels: { left: "Mildly Content", right: "Very Content" },
      question: "What aspect of contentment are you feeling?",
      stages: [
        "Satisfied",
        "Pleased",
        "Comfortable",
        "At ease",
        "Fulfilled",
        "Grateful",
      ],
      image: contentImg,
    },
    happy: {
      title: "Happiness lights up your world",
      subtitle: "Embracing joy helps spread positivity to others",
      color: "bg-green-400",
      gradientFrom: "from-green-300",
      gradientTo: "to-green-600",
      borderColor: "border-green-400",
      sliderLabels: { left: "Somewhat Happy", right: "Extremely Happy" },
      question: "What type of happiness are you experiencing?",
      stages: [
        "Cheerful",
        "Joyful",
        "Excited",
        "Elated",
        "Euphoric",
        "Blissful",
      ],
      image: happyImg,
    },
    awe: {
      title: "Awe is a profound emotion",
      subtitle: "Feeling amazed connects us to something greater",
      color: "bg-purple-400",
      gradientFrom: "from-purple-300",
      gradientTo: "to-purple-600",
      borderColor: "border-purple-400",
      sliderLabels: { left: "Mildly Impressed", right: "Completely Amazed" },
      question: "What kind of awe are you experiencing?",
      stages: [
        "Impressed",
        "Amazed",
        "Inspired",
        "Wonder-struck",
        "Overwhelmed",
        "Transcendent",
      ],
      image: aweImg,
    },
  };

  const currentEmotion = emotionData[selectedEmotion] || emotionData.neutral;

  const handleStageToggle = (stage) => {
    setSelectedStages((prev) =>
      prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]
    );
  };
  const getEmotionColors = (emotion) => {
    const colorMap = {
      angry: {
        gradient: "linear-gradient(to right, #fca5a5, #dc2626)",
        border: "#f87171",
      },
      sad: {
        gradient: "linear-gradient(to right, #93c5fd, #2563eb)",
        border: "#3b82f6",
      },
      neutral: {
        gradient: "linear-gradient(to right, #5eead4, #14b8a6)",
        border: "#2dd4bf",
      },
      content: {
        gradient: "linear-gradient(to right, #fde047, #ca8a04)",
        border: "#facc15",
      },
      happy: {
        gradient: "linear-gradient(to right, #86efac, #16a34a)",
        border: "#4ade80",
      },
      awe: {
        gradient: "linear-gradient(to right, #c4b5fd, #9333ea)",
        border: "#a855f7",
      },
    };
    return colorMap[emotion] || colorMap.neutral;
  };

  const emotionColors = getEmotionColors(selectedEmotion);

  return (
    <div className="bg-[#FFFFFF40] backdrop-blur-lg rounded-3xl shadow-2xl p-8  w-full mx-auto">
      <h1 className="text-3xl font-bold text-center text-[#3E4352] mb-4">
        {currentEmotion.title}
      </h1>

      <p className="text-center text-[#3E4352] text-lg mb-8">
        {currentEmotion.subtitle}
      </p>

      <div className="flex justify-center mb-8">
        <div className={` rounded-2xl  flex items-center justify-center `}>
          <div className="w-[170px] h-[170px]  rounded-full flex items-center justify-center">
            <Image
              src={currentEmotion.image}
              alt={selectedEmotion}
              width={170}
              height={170}
              className="w-[170px] h-[170px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
            {currentEmotion.sliderLabels.left}
          </span>
          <div className="relative flex-1 h-6">
            <div className="absolute inset-y-1 top-1/2 -translate-y-1/2 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${intensityLevel}%`,
                  background: emotionColors.gradient,
                }}
              ></div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={intensityLevel}
              onChange={(e) => setIntensityLevel(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />

            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-4 rounded-full shadow-lg z-0 transition-all duration-300"
              style={{
                left: `calc(${intensityLevel}% - 12px)`,
                borderColor: emotionColors.border,
              }}
            ></div>
          </div>

          <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
            {currentEmotion.sliderLabels.right}
          </span>
        </div>

        <div className="text-center mt-3">
          <span className="text-gray-600 text-sm font-medium">
            Intensity: {intensityLevel}%
          </span>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
        {currentEmotion.question}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {currentEmotion.stages.map((stage, index) => (
          <button
            key={index}
            onClick={() => handleStageToggle(stage)}
            className={`px-4 py-3 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
              selectedStages.includes(stage)
                ? "bg-gray-700 text-white border-gray-700"
                : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
            }`}
          >
            {stage}
          </button>
        ))}
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={onPrev}
          className="px-8 py-4 rounded-full text-lg font-semibold bg-white text-pink-600 border-2 border-pink-200 hover:bg-pink-50 transition-all duration-200 shadow-lg"
        >
          Add Emotion
        </button>

        <button
          onClick={onNext}
          disabled={selectedStages.length === 0}
          className={`px-12 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg ${
            selectedStages.length > 0
              ? "bg-[#A44167] text-white  hover:shadow-xl"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmotionDetailsSlide;
