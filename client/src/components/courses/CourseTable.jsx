import { IoSearch } from "react-icons/io5";
import AddCourse from "./AddCourse";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

export default function CourseTable() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center justify-around">
        <div>
          <select name="attributes" id="attributes" className="w-full p-2 rounded-md focus:outline-none">
            <option value="">Select Attribute</option>
            <option value="coursename">Course Name</option>
            <option value="coursecode">Course Code</option>
            <option value="credit">Credit</option>
            <option value="coursetype">Course Type</option>
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
                <th className="p-2 border-r-2 border-gray-800">Allocated Seats</th>
                <th className="p-2 border-r-2 border-gray-800">Course Type</th>
                <th className="p-2 border-r-2 border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 border-b border-gray-800">
              <tr className="p-2">
                <td className="p-2 border-x border-gray-800">1</td>
                <td className="p-2 border-r border-gray-800">Mathematics</td>
                <td className="p-2 border-r border-gray-800">MTH101</td>
                <td className="p-2 border-r border-gray-800">3</td>
                <td className="p-2 border-r border-gray-800">30</td>
                <td className="p-2 border-r border-gray-800">Core</td>
                <td className="p-2 border-r border-gray-800 "> <span className="cursor-pointer flex items-center gap-2 text-2xl"><TfiWrite className="text-blue-500"/><MdOutlineDeleteOutline className="text-red-500"  /></span></td>
                </tr>
              <tr className="p-2">
                <td className="p-2 border-x border-gray-800">2</td>
                <td className="p-2 border-r border-gray-800">Physics</td>
                <td className="p-2 border-r border-gray-800">PHY101</td>
                <td className="p-2 border-r border-gray-800">4</td>
                <td className="p-2 border-r border-gray-800">25</td>
                <td className="p-2 border-r border-gray-800">Core</td>
                <td className="p-2 border-r border-gray-800"> <span className="cursor-pointer flex items-center gap-2 text-2xl"><TfiWrite className="text-blue-500"/><MdOutlineDeleteOutline className="text-red-500"  /></span></td>
              </tr>
              <tr className="p-2">
                <td className="p-2 border-x border-gray-800">3</td>
                <td className="p-2 border-r border-gray-800">Chemistry</td>
                <td className="p-2 border-r border-gray-800">CHE101</td>
                <td className="p-2 border-r border-gray-800">4</td>
                <td className="p-2 border-r border-gray-800">30</td>
                <td className="p-2 border-r border-gray-800">Core</td>
                <td className="p-2 border-r border-gray-800"> <span className="cursor-pointer flex items-center gap-2 text-2xl"><TfiWrite className="text-blue-500"/><MdOutlineDeleteOutline className="text-red-500"  /></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
