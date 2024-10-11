import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import AddFaculty from "./AddFaculty"; // Assuming this is the component to add faculty

export default function FacultyTable() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center justify-around">
        <div className="">
          <select name="attributes" id="attributes" className="w-full p-2 rounded-md focus:outline-none">
            <option value="">Select Attribute</option>
            <option value="name">Name</option>
            <option value="empId">Employee ID</option>
            <option value="email">Email</option>
            <option value="department">Department</option>
            <option value="designation">Designation</option>
            <option value="course">Course</option>
            <option value="joiningDate">Joining Date</option>
            <option value="status">Status</option>
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
        <AddFaculty />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex">
        <div className="overflow-x-auto overflow-y-auto max-h-lg w-full m-auto mb-12">
          <table className="w-full border">
            <thead className="bg-gray-400 border-y-2 border-gray-800">
              <tr className="p-2">
                <th className="p-2 border-x-2 border-gray-800">S.No</th>
                <th className="p-2 border-r-2 border-gray-800">Name</th>
                <th className="p-2 border-r-2 border-gray-800">Employee ID</th>
                <th className="p-2 border-r-2 border-gray-800">Email</th>
                <th className="p-2 border-r-2 border-gray-800">Department</th>
                <th className="p-2 border-r-2 border-gray-800">Designation</th>
                <th className="p-2 border-r-2 border-gray-800">Course</th>
                <th className="p-2 border-r-2 border-gray-800">Joining Date</th>
                <th className="p-2 border-r-2 border-gray-800">Leave Date</th>
                <th className="p-2 border-r-2 border-gray-800">Status</th>
                <th className="p-2 border-r-2 border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 border-b border-gray-800">
              {/* Example Data Rows */}
              <tr className="p-2">
                <td className="p-2 border-x border-gray-800">1</td>
                <td className="p-2 border-r border-gray-800">Dr. John Smith</td>
                <td className="p-2 border-r border-gray-800">EMP001</td>
                <td className="p-2 border-r border-gray-800">john.smith@example.com</td>
                <td className="p-2 border-r border-gray-800">Computer Science</td>
                <td className="p-2 border-r border-gray-800">Professor</td>
                <td className="p-2 border-r border-gray-800">CS101</td>
                <td className="p-2 border-r border-gray-800">2022-01-10</td>
                <td className="p-2 border-r border-gray-800">N/A</td>
                <td className="p-2 border-r border-gray-800">Active</td>
                <td className="p-2 border-r border-gray-800">Edit</td>
              </tr>
              <tr className="p-2">
                <td className="p-2 border-x border-gray-800">2</td>
                <td className="p-2 border-r border-gray-800">Dr. Jane Doe</td>
                <td className="p-2 border-r border-gray-800">EMP002</td>
                <td className="p-2 border-r border-gray-800">jane.doe@example.com</td>
                <td className="p-2 border-r border-gray-800">Mathematics</td>
                <td className="p-2 border-r border-gray-800">Associate Professor</td>
                <td className="p-2 border-r border-gray-800">MAT101</td>
                <td className="p-2 border-r border-gray-800">2021-09-15</td>
                <td className="p-2 border-r border-gray-800">N/A</td>
                <td className="p-2 border-r border-gray-800">Active</td>
                <td className="p-2 border-r border-gray-800">Edit</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
