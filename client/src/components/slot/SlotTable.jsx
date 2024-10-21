import { IoSearch } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { useState } from "react";
import AddSlot from "./AddSlot";

export default function SlotTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [slotData, setSlotData] = useState([
    { day: 'Monday', startTime: '8:30', endTime: '9:30', type: 'Theory', code: 'A1', startAmPm: 'AM', endAmPm: 'AM' },
    { day: 'Tuesday', startTime: '9:30', endTime: '10:30', type: 'Lab', code: 'B1', startAmPm: 'AM', endAmPm: 'AM' },
    { day: 'Wednesday', startTime: '10:30', endTime: '11:30', type: 'Theory', code: 'C1', startAmPm: 'AM', endAmPm: 'AM' },
    // Add more rows as needed
  ]);

  const filteredSlots = slotData.filter(slot => {
    return (
      slot.day.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${slot.startTime} ${slot.startAmPm}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${slot.endTime} ${slot.endAmPm}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slot.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slot.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex flex-wrap gap-4 items-center justify-around w-full mx-12">
        <div className="">
          <select name="attributes" id="attributes" className="w-full p-2 rounded-md focus:outline-none">
            <option value="">Select Attribute</option>
            <option value="day">Day</option>
            <option value="startTime">Start Time</option>
            <option value="endTime">End Time</option>
            <option value="type">Type</option>
            <option value="code">Code</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div className="flex items-center gap-2 border-2 border-gray-500 rounded-md focus-within:border-blue-500">
          <input
            type="text"
            placeholder="Search Slots"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md border-none focus:outline-none focus:ring-0 bg-transparent"
          />
          <IoSearch className="text-blue-500 text-4xl pr-2" />
        </div>
        <AddSlot />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex">
        <div className="overflow-x-auto overflow-y-auto max-h-lg w-full m-auto mb-12">
          <table className="w-full border">
            <thead className="bg-gray-400 border-y-2 border-gray-800">
              <tr className="p-2">
                <th className="p-2 border-x-2 border-gray-800">Day</th>
                <th className="p-2 border-r-2 border-gray-800">Start Time</th>
                <th className="p-2 border-r-2 border-gray-800">End Time</th>
                <th className="p-2 border-r-2 border-gray-800">Type</th>
                <th className="p-2 border-r-2 border-gray-800">Code</th>
                <th className="p-2 border-r-2 border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 border-b border-gray-800">
              {filteredSlots.map((slot, index) => (
                <tr key={index} className="p-2">
                  <td className="p-2 border-x border-gray-800">{slot.day}</td>
                  <td className="p-2 border-r border-gray-800">
                    {slot.startTime} {slot.startAmPm}
                  </td>
                  <td className="p-2 border-r border-gray-800">
                    {slot.endTime} {slot.endAmPm}
                  </td>
                  <td className="p-2 border-r border-gray-800">{slot.type}</td>
                  <td className="p-2 border-r border-gray-800">{slot.code}</td>
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
