import AddClassroom from "./AddClassroom";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

export default function ClassRoomTable() {
  const [classroomEntries, setClassroomEntries] = useState([
    {
      roomNo: 'Room 101',
      block: 'A',
      capacity: 30,
      type: 'Classroom',
      available: 'Yes',
    },
    {
      roomNo: 'Room 102',
      block: 'B',
      capacity: 25,
      type: 'Lab',
      available: 'No',
    },
    {
      roomNo: 'Room 103',
      block: 'C',
      capacity: 40,
      type: 'Classroom',
      available: 'Yes',
    },
  ]);

  return (
    <section className="flex flex-col gap-4">
      <div className="m-8 flex justify-end">
        <AddClassroom />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex">
        <div className="overflow-x-auto overflow-y-auto max-h-lg w-full m-auto mb-12">
          <table className="w-full border">
            <thead className="bg-gray-400 border-y-2 border-gray-800">
              <tr className="p-2">
                <th className="p-2 border-x border-gray-800">Room No</th>
                <th className="p-2 border-x-2 border-gray-800">Block</th>
                <th className="p-2 border-r-2 border-gray-800">Capacity</th>
                <th className="p-2 border-r-2 border-gray-800">Type</th>
                <th className="p-2 border-r-2 border-gray-800">Available</th>
                <th className="p-2 border-r border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 border-b border-gray-800">
              {classroomEntries.map((entry, index) => (
                <tr key={index} className="p-2">
                  <td className="p-2 border-x border-gray-800">{entry.roomNo}</td>
                  <td className="p-2 border-r border-gray-800">{entry.block}</td>
                  <td className="p-2 border-r border-gray-800">{entry.capacity}</td>
                  <td className="p-2 border-r border-gray-800">{entry.type}</td>
                  <td className="p-2 border-r border-gray-800">{entry.available}</td>
                  <td className="p-2 border-r border-gray-800">
                   <span className="cursor-pointer flex items-center gap-2 text-2xl"><TfiWrite className="text-blue-500"/><MdOutlineDeleteOutline className="text-red-500"  /></span>
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
