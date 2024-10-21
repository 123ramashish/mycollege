import { IoSearch } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { useState } from "react";
import AddCourseAllotment from "./AddCourseAllotment";

export default function CourseAllotmentTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState("");

  const courseData = [
    { code: 'CSE101', name: 'C Programming', faculty: 'Shikha Verma', slot: 'A1-Theory-MON-08:35-09:25', room: '104-B1' },
    { code: 'CSE102', name: 'Data Structures', faculty: 'Rajesh Kumar', slot: 'A2-Theory-TUE-09:30-10:20', room: '105-B2' },
    { code: 'CSE103', name: 'Algorithms', faculty: 'Nisha Gupta', slot: 'A3-Theory-WED-10:30-11:20', room: '106-B3' },
  ];

  const filteredCourses = courseData.filter(course => {
    if (!selectedAttribute) return true; // If no attribute is selected, show all
    const valueToSearch = course[selectedAttribute] ? course[selectedAttribute].toString() : "";
    return valueToSearch.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center justify-around">
        <div>
          <select
            name="attributes"
            id="attributes"
            className="w-full p-2 rounded-md focus:outline-none"
            onChange={(e) => setSelectedAttribute(e.target.value)}
          >
            <option value="">Select Attribute</option>
            <option value="code">Course Code</option>
            <option value="name">Course Name</option>
            <option value="faculty">Faculty</option>
            <option value="slot">Slot</option>
            <option value="room">Room</option>
          </select>
        </div>
        <div className="flex items-center gap-2 border-2 border-gray-500 rounded-md focus-within:border-blue-500">
          <input
            type="text"
            placeholder="Search Attributes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md border-none focus:outline-none focus:ring-0 bg-transparent"
          />
          <IoSearch className="text-blue-500 text-4xl pr-2" />
        </div>
        <AddCourseAllotment/>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex">
        <div className="overflow-x-auto overflow-y-auto max-h-lg w-full m-auto mb-12">
          <table className="w-full border">
            <thead className="bg-gray-400 border-y-2 border-gray-800">
              <tr className="p-2">
                <th className="p-2 border-x-2 border-gray-800">Course Code</th>
                <th className="p-2 border-r-2 border-gray-800">Course Name</th>
                <th className="p-2 border-r-2 border-gray-800">Faculty</th>
                <th className="p-2 border-r-2 border-gray-800">Slot</th>
                <th className="p-2 border-r-2 border-gray-800">Room</th>
                <th className="p-2 border-r-2 border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 border-b border-gray-800">
              {filteredCourses.map((course, index) => (
                <tr key={index} className="p-2">
                  <td className="p-2 border-x border-gray-800">{course.code}</td>
                  <td className="p-2 border-r border-gray-800">{course.name}</td>
                  <td className="p-2 border-r border-gray-800">{course.faculty}</td>
                  <td className="p-2 border-r border-gray-800">{course.slot}</td>
                  <td className="p-2 border-r border-gray-800">{course.room}</td>
                  <td className="p-2 border-r border-gray-800">
                    <span className="cursor-pointer flex items-center gap-2 text-3xl">
                      <TfiWrite className="text-blue-500" />
                      <MdOutlineDeleteOutline className="text-red-500" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
