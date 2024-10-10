import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import AddStudents from "./AddStudents";

export default function StudentsTable() {
  return (
    <section className="flex flex-col gap-4">
    <div className="flex flex-wrap gap-4 items-center justify-around">
      <div className="">
        <select name="attributes" id="attributes" className="w-full p-2 rounded-md focus:outline-none">
          <option value="" >Select Attribute</option>
          <option value="name">Name</option>
          <option value="sysid">SysID</option>
          <option value="rollno">RollNo</option>
          <option value="email">Email</option>
          <option value="course">Course</option>
          <option value="stream">Stream</option>
          <option value="semester">Semester</option>
          <option value="admissiondate">Admission Date</option>
          <MdOutlineArrowDropDown/>
        </select>
      </div>
      <div className="flex items-center gap-2 border-2 border-gray-500 rounded-md   focus-within:border-blue-500">
      <input
        type="text"
        placeholder="Search Attributes"
        className="w-full p-2 rounded-md border-none focus:outline-none focus:ring-0 bg-transparent"
      />
      <IoSearch className="text-blue-500 text-4xl pr-2"/>
    </div>
    <AddStudents/>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-lg flex">
      <div className="overflow-x-auto overflow-y-auto max-h-lg w-full m-auto mb-12">
       
<table className="w-full border">
  <thead className="bg-gray-400 border-y-2 border-gray-800 ">
    <tr className="p-2">
      <th className="p-2 border-x-2 border-gray-800">S.No</th>
      <th className="p-2 border-r-2 border-gray-800"  >Name</th>
      <th className="p-2 border-r-2 border-gray-800">SysID</th>
      <th className="p-2 border-r-2 border-gray-800">RollNo</th>
      <th className="p-2 border-r-2 border-gray-800">Email</th>
      <th className="p-2 border-r-2 border-gray-800">Course</th>
      <th className="p-2 border-r-2 border-gray-800">Stream</th>
      <th className="p-2 border-r-2 border-gray-800">Semester</th>
      <th className="p-2 border-r-2 border-gray-800">Admission Date</th>
      <th className="p-2 border-r-2 border-gray-800">Degree Completed</th>
      <th className="p-2 border-r-2 border-gray-800">Status</th>
      <th className="p-2 border-r-2 border-gray-800">Actions</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-800 border-b border-gray-800">   
    <tr className="p-2">
      <td className="p-2 border-x border-gray-800 ">1</td>
      <td className="p-2 border-r border-gray-800 ">John Doe</td>
      <td className="p-2 border-r border-gray-800 ">1234567890</td>
      <td className="p-2 border-r border-gray-800 ">1234567890</td>
      <td className="p-2 border-r border-gray-800 ">john@doe.com</td>
      <td className="p-2 border-r border-gray-800 ">B.Tech</td>
      <td className="p-2 border-r border-gray-800 ">Computer Science</td>
      <td className="p-2 border-r border-gray-800 ">1st Semester</td>
      <td className="p-2 border-r border-gray-800 ">2020-01-01</td>
      <td className="p-2 border-r border-gray-800 ">Yes</td>
      <td className="p-2 border-r border-gray-800 ">Active</td>
      <td className="p-2 border-r border-gray-800 ">Edit</td>
    </tr> 
    <tr className="p-2">
      <td className="p-2 border-x border-gray-800 ">1</td>
      <td className="p-2 border-r border-gray-800 ">John Doe</td>
      <td className="p-2 border-r border-gray-800 ">1234567890</td>
      <td className="p-2 border-r border-gray-800 ">1234567890</td>
      <td className="p-2 border-r border-gray-800 ">john@doe.com</td>
      <td className="p-2 border-r border-gray-800 ">B.Tech</td>
      <td className="p-2 border-r border-gray-800 ">Computer Science</td>
      <td className="p-2 border-r border-gray-800 ">1st Semester</td>
      <td className="p-2 border-r border-gray-800 ">2020-01-01</td>
      <td className="p-2 border-r border-gray-800 ">Yes</td>
      <td className="p-2 border-r border-gray-800 ">Active</td>
      <td className="p-2 border-r border-gray-800 ">Edit</td>
    </tr> 
    <tr className="p-2">
      <td className="p-2 border-x border-gray-800 ">1</td>
      <td className="p-2 border-r border-gray-800 ">John Doe</td>
      <td className="p-2 border-r border-gray-800 ">1234567890</td>
      <td className="p-2 border-r border-gray-800 ">1234567890</td>
      <td className="p-2 border-r border-gray-800 ">john@doe.com</td>
      <td className="p-2 border-r border-gray-800 ">B.Tech</td>
      <td className="p-2 border-r border-gray-800 ">Computer Science</td>
      <td className="p-2 border-r border-gray-800 ">1st Semester</td>
      <td className="p-2 border-r border-gray-800 ">2020-01-01</td>
      <td className="p-2 border-r border-gray-800 ">Yes</td>
      <td className="p-2 border-r border-gray-800 ">Active</td>
      <td className="p-2 border-r border-gray-800 ">Edit</td>
    </tr> 
    
  </tbody>
</table>
      </div>
    </div>

    </section>
  );
}
