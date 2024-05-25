import React from "react";
import {
  Chip,
  Checkbox,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  IconButton,
  
  Rating,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";

function ResourcePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      
      
      {/* Content */}
      <div className="flex p-8">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-4">Exams</h3>
          <div className="flex gap-2 mb-4">
            <Chip className="cursor-pointer" label="All" variant="outlined" size="small" />
            <Chip className="cursor-pointer" label="Grade 0-3" size="small" variant="outlined" />
            <Chip className="cursor-pointer" label="Grade 4-8" size="small" variant="outlined" />
            <Chip className="cursor-pointer" label="Grade 9-12" size="small" variant="outlined" />
            <Chip className="cursor-pointer" label="Grade 12+" size="small" variant="outlined" />
          </div>
          
          <h3 className="font-semibold mb-2">Location</h3>
          <FormControl fullWidth className="mb-4">
            <InputLabel>Country</InputLabel>
            <Select defaultValue="" label="Country">
              <MenuItem value=""><em>Country</em></MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
              <MenuItem value="India">India</MenuItem>
            </Select>
          </FormControl>
          <input
            className="border-2 border-gray-200 rounded-3xl outline-none p-2 w-full mb-4"
            placeholder="Enter Location"
            type="text"
          />
          
          <h3 className="font-semibold mb-2">User status</h3>
          <div className="flex flex-col gap-2 mb-4">
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label={
                <span className="flex items-center">
                  Connected
                  <Tooltip title="User is connected">
                    <InfoOutlinedIcon fontSize="small" className="ml-1" />
                  </Tooltip>
                </span>
              }
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label={
                <span className="flex items-center">
                  Verified
                  <Tooltip title="User is verified">
                    <InfoOutlinedIcon fontSize="small" className="ml-1" />
                  </Tooltip>
                </span>
              }
            />
          </div>
          
          <h3 className="font-semibold mb-2">Subjects</h3>
          <div className="flex flex-wrap gap-2">
            <Chip className="cursor-pointer" label="Mathematics" variant="outlined" size="small" />
            <Chip className="cursor-pointer" label="Science" variant="outlined" size="small" />
            <Chip className="cursor-pointer" label="Literature" variant="outlined" size="small" />
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="w-3/4 ml-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-4xl font-bold mb-2">Top Study Resources</h2>
            <p className="text-xl mb-6">Explore the top study materials available</p>
            
            {/* Filter Section */}
            <div className="flex justify-between items-center mb-4">
              <p>1-10 of 2,000 resources</p>
              <FormControl>
                <InputLabel>Filter by</InputLabel>
                <Select defaultValue="most-popular" label="Filter by">
                  <MenuItem value="most-popular">Most popular</MenuItem>
                  <MenuItem value="highest-rated">Highest rated</MenuItem>
                  <MenuItem value="newest">Newest</MenuItem>
                </Select>
              </FormControl>
            </div>
            
            {/* Resource Cards */}
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
                <img src="resource-image-1.png" alt="Resource 1" className="w-24 h-24 rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Study Buddy</h3>
                  <Rating value={4.5} precision={0.5} readOnly />
                  <p>Rating: 4.5</p>
                  <p>Reviews: 1,294</p>
                </div>
                <div className="flex gap-2">
                  <Chip label="Study" size="small" />
                  <Chip label="Practice Exams" size="small" />
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
                <img src="resource-image-2.png" alt="Resource 2" className="w-24 h-24 rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">LearnHub</h3>
                  <Rating value={5} precision={0.5} readOnly />
                  <p>Rating: 5.0</p>
                  <p>Reviews: 1,294</p>
                </div>
                <div className="flex gap-2">
                  <Chip label="Study" size="small" />
                  <Chip label="Practice Exams" size="small" />
                  <Chip label="Discussion Room" size="small" />
                </div>
                <Chip label="Recommended" color="secondary" size="small" />
              </div>
              
              <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
                <img src="resource-image-3.png" alt="Resource 3" className="w-24 h-24 rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">StudyGenius</h3>
                  <Rating value={4.5} precision={0.5} readOnly />
                  <p>Rating: 4.5</p>
                  <p>Reviews: 2,129</p>
                </div>
                <div className="flex gap-2">
                  <Chip label="Study" size="small" />
                  <Chip label="Practice Exams" size="small" />
                </div>
                <Chip label="New Resource" color="primary" size="small" />
              </div>
              
              <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
                <img src="resource-image-4.png" alt="Resource 4" className="w-24 h-24 rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Grade 12 Resources</h3>
                  <Rating value={4} precision={0.5} readOnly />
                  <p>Rating: 4.0</p>
                  <p>Reviews: 1,000</p>
                </div>
                <div className="flex gap-2">
                  <Chip label="User Profiles" size="small" />
                  <Chip label="Login for resources" size="small" />
                  <Chip label="Study materials" size="small" />
                </div>
                <Chip label="Beginner" size="small" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ResourcePage;
