import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import { useParams } from "react-router-dom";
import axios from "axios";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      try {
        // Make sure id is not undefined
        if (id) {
          const response = await axios.get(
            `http://localhost:5500/exercise/${id}`
          );

          setExerciseDetail(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching exercise detail:", error);
      }
    };

    fetchExerciseDetail();
  }, [id]);

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
    </>
  );
};

export default ExerciseDetail;
