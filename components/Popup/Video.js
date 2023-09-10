"use client";
import {getVideo} from "@/services/hooks"
import { useEffect, useState } from "react";


export default  function Video({...props}) {
  const {type, id} = props;
  const [video, setVideo] = useState([])
  useEffect(() => {
    const fetchVideo = async () => {
      const data = await getVideo(`${type}/${id}/videos`);
      const filter = data.results.filter((item) => item.type === "Trailer");
      setVideo(filter[0 ]);
    };
    fetchVideo();
   
  }, []);
 
  return (
    <div className="m-5 overflow-hidden rounded-lg flex">
      {video && (
        <iframe
          className="w-full aspect-video rounded-lg"
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )
        
      }
     
    </div>
  );
}
