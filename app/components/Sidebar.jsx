"use client";
import buttonbottom from "@/app/assets/buttonbottom.png";
import ava from "@/app/assets/logo.png";
import lastresult from "@/app/assets/result/logo.png";
import select from "@/app/assets/Select.png";
import tick from "@/app/assets/tick.png";
import EmotionDetailsSlide from "./EmotionDetailsSlide";
import QuestionSlide from "./QuestionSlide";

import {
  BarChart3,
  Bell,
  Calendar,
  ChevronRight,
  HelpCircle,
  Home,
  Menu,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ActivitySelectionSlide from "./ActivitySelectionSlide";
import EmotionReflectionSlide from "./EmotionReflectionSlide";
import RecommendationsSlider from "./RecommendationsSlider";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // State to manage current slide
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [selectedStages, setSelectedStages] = useState([]);
  const [intensityLevel, setIntensityLevel] = useState(50);

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: BarChart3, label: "Analytics", href: "/analytics" },
    { icon: Calendar, label: "Schedule", href: "/schedule" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: HelpCircle, label: "Help", href: "/help" },
  ];

  // Function to handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  // Instructions Slide Component
  const InstructionsSlide = () => (
    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-4xl w-full mx-auto">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div>
            <Image src={ava} alt="ava" height={100} width={100} />
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center text-[#005840] font-bold mb-8">
        Instructions
      </h1>

      <div className="space-y-6 text-center">
        <p className="text-[#0A0B0A] text-[20px] leading-relaxed">
          Welcome to the Stress scale. This is a quiz to identify our stress
          levels ranging from high to low and navigate through such situations.
        </p>

        <div className="space-y-4 flex flex-col justify-center items-center">
          <div className="flex text-left">
            <span>
              <Image src={tick} alt="tick" height={12} width={30} />
            </span>
            <p className="text-[#0A0B0A]">
              Read the statements carefully and relate to each of the
              statements.
            </p>
          </div>

          <div className="flex items-start">
            <span>
              <Image src={select} alt="select" height={12} width={30} />
            </span>
            <p className="text-[#0A0B0A]">
              Choose the option which best describes your mood.
            </p>
          </div>
        </div>

        <div className="pt-8 relative">
          <button
            onClick={nextSlide}
            className="bg-[#005840] text-white px-[21px] w-[450px] py-4 rounded-[21px] text-[30px] font-semibold transition-all duration-200 shadow-lg hover:bg-[#004030]"
          >
            Start Check-in
          </button>
          <span className="absolute top-24">
            <Image
              src={buttonbottom}
              alt="buttonbottom"
              height={40}
              width={40}
            />
          </span>
        </div>
      </div>
    </div>
  );

  const ResultSlide = () => (
    <div className="bg-[#EDEDED5C]  backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-4xl w-full mx-auto">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div>
            <Image src={lastresult} alt="ava" height={304} width={276} />
          </div>
        </div>
      </div>

      <h1 className="text-[28px] text-[#4E2C84]  text-center mb-6 ">
        Great job completing your session!
      </h1>

      <div className="space-y-6 text-center">
        <p className="text-[#4E2C84] text-[18px] leading-relaxed">
          Want to make this a habbit? Set a remainder for next time.
        </p>

        <div className="flex justify-center gap-10">
          <button className="py-[15px] px-[24px] text-[24px] border-[#005840] border rounded-[23px]">
            Set Reminder
          </button>
          <button className="bg-[#005840] text-white font-semibold text-[28px] rounded-[23px] py[15px] px-[72px]">
            View Analytics
          </button>
        </div>
        <div>
          <RecommendationsSlider />
        </div>
      </div>
    </div>
  );

  // Function to render current slide
  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 0:
        return <InstructionsSlide />;
      case 1:
        return (
          <QuestionSlide
            onNext={nextSlide}
            onPrev={prevSlide}
            onSelect={setSelectedFeeling}
          />
        );
      case 2:
        return (
          <EmotionDetailsSlide
            selectedEmotion={selectedFeeling}
            selectedStages={selectedStages}
            setSelectedStages={setSelectedStages}
            intensityLevel={intensityLevel}
            setIntensityLevel={setIntensityLevel}
            onNext={nextSlide}
            onPrev={prevSlide}
          />
        );
      case 3:
        return (
          <EmotionReflectionSlide
            selectedEmotion={selectedFeeling}
            selectedStages={selectedStages}
            intensityLevel={intensityLevel}
            onNext={nextSlide}
            onPrev={prevSlide}
          />
        );

      case 4:
        return (
          <ActivitySelectionSlide
            selectedEmotion={selectedFeeling}
            selectedStages={selectedStages}
            onNext={nextSlide}
            onPrev={prevSlide}
          />
        );
      case 5:
        return <ResultSlide />;
      default:
        return <InstructionsSlide />;
    }
  };

  return (
    <div className="flex">
      <div
        className={`fixed left-0 top-0 h-screen bg-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
          isExpanded ? "w-64" : "w-16"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex items-center p-4 border-b border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            <Menu size={18} />
          </div>
          <div
            className={`ml-3 transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          </div>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 group"
                  >
                    <IconComponent
                      size={20}
                      className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200"
                    />
                    <span
                      className={`ml-3 font-medium transition-all duration-300 ${
                        isExpanded
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                    >
                      {item.label}
                    </span>
                    {isExpanded && (
                      <ChevronRight
                        size={16}
                        className="ml-auto text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={16} className="text-gray-600" />
            </div>
            <div
              className={`ml-3 transition-opacity duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-sm font-medium text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 transition-all duration-300 ${
          isExpanded ? "ml-64" : "ml-16"
        }`}
      >
        <div
          className="min-h-screen relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180.98deg, #8DA4FD 12.02%, #FEC7FE 57.64%, #FFF9D1 87.52%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(181.37deg, rgba(242, 162, 177, 0.3) 12.02%, rgba(245, 208, 203, 0.3) 45.07%, rgba(212, 150, 160, 0.3) 87.52%)",
              mixBlendMode: "overlay",
            }}
          ></div>

          <div className="relative z-10 p-6">
            <button
              onClick={prevSlide}
              className="flex items-center text-white bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-opacity-30 transition-all duration-200"
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-gray-600 text-sm">←</span>
              </div>
              <span className="text-sm text-black font-medium">Back</span>
            </button>
          </div>

          <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
            <div className="transition-all duration-500 ease-in-out">
              {renderCurrentSlide()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
