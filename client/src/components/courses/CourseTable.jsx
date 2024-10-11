import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import AddCourse from "./AddCourse";

export default function CourseTable() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center justify-around">
        <div>
          <select name="attributes" id="attributes" className="w-full p-2 rounded-md focus:outline-none">
            <option value="">Select Attribute</option>
            <option value="coursename">Course Name</option>
            <option value="coursecode">Course Code</option>
            <option value="faculty">Faculty</option>
            <option value="slot">Slot</option>
            <option value="room">Room</option>
            <MdOutlineArrowDropDown />
          </select>
        </div>
        <div className="flex items-center gap-2 border-2 border-gray-500 rounded-md focus-within:border-blue-500">
          <input
            type="text"
            placeholder="Search Attributes"
            className="w-full p-2 rounded-md border-none focus:outline-none focus:ring-0 bg-transparent"
          />
          <IoSearch className="text-blue-500 text-4xl pr-2" />
        </div>
        <AddCourse />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex">
        <div className="overflow-x-auto overflow-y-auto max-h-lg w-full m-auto mb-12">
          <table className="w-full border">
            <thead className="bg-gray-400 border-y-2 border-gray-800">
              <tr className="p-2">
                <th className="p-2 border-x-2 border-gray-800">S.No</th>
                <th className="p-2 border-r-2 border-gray-800">Course Name</th>
                <th className="p-2 border-r-2 border-gray-800">Course Code</th>
                <th className="p-2 border-r-2 border-gray-800">Credit</th>
                <th className="p-2 border-r-2 border-gray-800">Faculty</th>
                <th className="p-2 border-r-2 border-gray-800">Slot</th>
                <th className="p-2 border-r-2 border-gray-800">Room</th>
                <th className="p-2 border-r-2 border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 border-b border-gray-800">
              <tr className="p-2">
                <td className="p-2 border-x border-gray-800">1</td>
                <td className="p-2 border-r border-gray-800">Mathematics</td>
                <td className="p-2 border-r border-gray-800">MTH101</td>
                <td className="p-2 border-r border-gray-800">3</td>
                <td className="p-2 border-r border-gray-800">Dr. Smith</td>
                <td className="p-2 border-r border-gray-800">Mon 9-11</td>
                <td className="p-2 border-r border-gray-800">Room 101</td>
                <td className="p-2 border-r border-gray-800">Edit</td>
              </tr>
              <tr className="p-2">
                <td className="p-2 border-x border-gray-800">2</td>
                <td className="p-2 border-r border-gray-800">Physics</td>
                <td className="p-2 border-r border-gray-800">PHY101</td>
                <td className="p-2 border-r border-gray-800">4</td>
                <td className="p-2 border-r border-gray-800">Dr. Johnson</td>
                <td className="p-2 border-r border-gray-800">Tue 10-12</td>
                <td className="p-2 border-r border-gray-800">Room 102</td>
                <td className="p-2 border-r border-gray-800">Edit</td>
              </tr>
              <tr className="p-2">
                <td className="p-2 border-x border-gray-800">3</td>
                <td className="p-2 border-r border-gray-800">Chemistry</td>
                <td className="p-2 border-r border-gray-800">CHE101</td>
                <td className="p-2 border-r border-gray-800">4</td>
                <td className="p-2 border-r border-gray-800">Dr. Brown</td>
                <td className="p-2 border-r border-gray-800">Wed 1-3</td>
                <td className="p-2 border-r border-gray-800">Room 103</td>
                <td className="p-2 border-r border-gray-800">Edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
