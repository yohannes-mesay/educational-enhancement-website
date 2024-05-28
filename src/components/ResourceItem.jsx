import React from "react";
import { Rating, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ResourceItem({ resource }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pdf-viewer/${encodeURIComponent(resource.path)}`);
  };
console.log("respath",resource.path)
  return (
    <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
      <img
        src={resource.image}
        alt="Resource"
        className="w-24 h-24 rounded-lg mr-4"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{resource.title}</h3>
        <Rating value={resource.rating} precision={0.5} readOnly />
        <p>Rating: {resource.rating}</p>
        <p>Reviews: {resource.review}</p>
      </div>
      <div className="flex gap-2">
        <Chip label="Study" size="small" />
        <Chip label="Practice Exams" size="small" />
        <Button variant="contained" color="primary" onClick={handleClick}>
          View PDF
        </Button>
      </div>
    </div>
  );
}

export default ResourceItem;
