import React, { useState } from "react";
import {
  Chip,
  Checkbox,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  TextField,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useResource } from "../contexts/ResourceContext";
import Loader from "../components/Loader";
import ResourceItem from "../components/ResourceItem";

function Resource() {
  const [language, setLanguage] = useState("");
  const [bookType, setBookType] = useState([]);
  const [examGrade, setExamGrade] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { resource, isLoading } = useResource();

  if (isLoading) {
    return <Loader />;
  }

  const handleBookTypeChange = (event) => {
    const { checked, value } = event.target;
    setBookType((prev) =>
      checked ? [...prev, value] : prev.filter((type) => type !== value)
    );
  };

  const handleExamGradeChange = (exam) => {
    setExamGrade(exam === "All" ? "" : exam);
  };

  const filteredResources = resource.filter((res) => {
    const matchesLanguage = language ? res.language === language : true;
    const matchesBookType = bookType.length
      ? bookType.includes(res.type)
      : true;
    const matchesExamGrade = examGrade ? res.catagory === examGrade : true;
    const matchesSearchQuery = searchQuery
      ? res.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return (
      matchesLanguage &&
      matchesBookType &&
      matchesExamGrade &&
      matchesSearchQuery
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-4">Exams</h3>
          <div className="flex gap-2 mb-4">
            {["All", "Grade 0-3", "Grade 4-8", "Grade 9-12", "Grade 12+"].map(
              (exam) => (
                <Chip
                  key={exam}
                  className="cursor-pointer"
                  label={exam}
                  variant={examGrade === exam ? "default" : "outlined"}
                  size="small"
                  onClick={() => handleExamGradeChange(exam)}
                />
              )
            )}
          </div>

          <h3 className="font-semibold mb-2">Language</h3>
          <FormControl fullWidth className="mb-4">
            <InputLabel>Choose language</InputLabel>
            <Select
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
              label="Choose language"
            >
              <MenuItem value="">
                <em>Language</em>
              </MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Amharic">Amharic</MenuItem>
              <MenuItem value="Tigray">Tigray</MenuItem>
              <MenuItem value="Oromifa">Oromifa</MenuItem>
              <MenuItem value="Somali">Somali</MenuItem>
            </Select>
          </FormControl>

          <h3 className="font-semibold mb-2">Book type</h3>
          <div className="flex flex-col gap-2 mb-4">
            {["text", "tg", "exam"].map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    value={type}
                    checked={bookType.includes(type)}
                    onChange={handleBookTypeChange}
                    color="secondary"
                  />
                }
                label={
                  <span className="flex items-center">
                    {type === "text"
                      ? "Student textbook"
                      : type === "tg"
                      ? "Teachers guide"
                      : "Exam"}
                    <Tooltip
                      title={
                        type === "text"
                          ? "for students"
                          : type === "tg"
                          ? "for teachers"
                          : "exam material"
                      }
                    >
                      <InfoOutlinedIcon fontSize="small" className="ml-1" />
                    </Tooltip>
                  </span>
                }
              />
            ))}
          </div>

          <h3 className="font-semibold mb-2">Subjects</h3>
          <div className="flex flex-wrap gap-2">
            <Chip
              className="cursor-pointer"
              label="Mathematics"
              variant="outlined"
              size="small"
            />
            <Chip
              className="cursor-pointer"
              label="Science"
              variant="outlined"
              size="small"
            />
            <Chip
              className="cursor-pointer"
              label="Literature"
              variant="outlined"
              size="small"
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 ml-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-4xl font-bold mb-2">Top Study Resources</h2>
            <p className="text-xl mb-6">
              Explore the top study materials available
            </p>

            {/* Filter Section */}
            <div className="flex justify-between items-center mb-4">
              <p>1-10 of {filteredResources.length} resources</p>
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Resource Cards */}
            <div className="space-y-4">
              {filteredResources.map((res) => (
                <ResourceItem key={res.title} resource={res} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Resource;
