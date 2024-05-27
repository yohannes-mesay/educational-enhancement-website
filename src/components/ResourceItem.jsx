import React from "react";
import { Rating, Chip } from "@mui/material";

function ResourceItem({ resource }) {
  return (
    <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
      <img
        src={resource.image}
        alt="Resource 1"
        className="w-24 h-24 rounded-lg mr-4"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{resource.title}</h3>
        <Rating value={resource.rating} precision={0.5} readOnly />
        <p>Rating: {resource.rating}</p>
        <p>Reviews: 1,294</p>
      </div>
      <div className="flex gap-2">
        <Chip label="Study" size="small" />
        <Chip label="Practice Exams" size="small" />
      </div>
    </div>
  );
}

export default ResourceItem;
