import StoryForm from "./StoryForm";

import { useEffect, useState } from "react";
import { getStoryDataById } from "../../api/story";
import { useParams } from "react-router-dom";
export function PortalEditStory() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getStoryDataById(id);
      setData(res);
    }
    fetchData();
  }, [id]);

  return (
    data && (
      <StoryForm functionality="Edit a story's details" fetchStoryData={data.story} />
    )
  );
}
