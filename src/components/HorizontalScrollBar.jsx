/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react"; // Import React
import BodyPart from "./bodyPart"; // Import BodyPart with correct casing
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import "react-horizontal-scrolling-menu/dist/styles.css";

import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

import ExerciseCard from "./ExerciseCard";

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button className="pl-5" onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <button className="pr-5" onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="left-arrow" />
    </button>
  );
}

// Define HorizontalScrollBar component
const HorizontalScrollBar = ({ data, setBodypart, bodyPart, isBodyParts }) => {
  return (
    <ScrollMenu
      scrollContainerClassName="overflow-hidden w-full relative"
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {data.map((item) => (
        <div
          className="mr-[60px] w-full flex justify-evenly items-center"
          key={item}
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              setBodypart={setBodypart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default React.memo(HorizontalScrollBar); // Export HorizontalScrollBar component with React.memo()
