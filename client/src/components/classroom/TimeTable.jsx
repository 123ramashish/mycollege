import AddTimeTable from "./AddTimeTable";
import { useState } from "react";

export default function TimeTable() {
  const [timetableEntries, setTimetableEntries] = useState([
    {
      day: 'Monday',
      time: '9:00 - 11:00',
      coursecode: 'MTH101',
      coursename: 'Mathematics',
      credit: 3,
      teacher: 'Dr. Smith',
      room: 'Room 101',
      class: '1A',
      section: 'A',
      group: 'Group 1',
    },
    {
      day: 'Tuesday',
      time: '10:00 - 12:00',
      coursecode: 'PHY101',
      coursename: 'Physics',
      credit: 4,
      teacher: 'Dr. Johnson',
      room: 'Room 102',
      class: '1A',
      section: 'A',
      group: 'Group 1',
    },
    {
      day: 'Wednesday',
      time: '1:00 - 3:00',
      coursecode: 'CHE101',
      coursename: 'Chemistry',
      credit: 4,
      teacher: 'Dr. Brown',
      room: 'Room 103',
      class: '1A',
      section: 'A',
      group: 'Group 1',
    },
  ]);

  
  return (
    <section className="flex flex-col gap-4">
      <div className="m-8 flex justify-end">
        <AddTimeTable />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex">
        <div className="overflow-x-auto overflow-y-auto max-h-lg w-full m-auto mb-12">
          <table className="w-full border">
            <thead className="bg-gray-400 border-y-2 border-gray-800">
              <tr className="p-2">
                <th className="p-2 border-x border-gray-800">Day</th>
                <th className="p-2 border-x-2 border-gray-800">Time</th>
                <th className="p-2 border-r-2 border-gray-800">Course Code</th>
                <th className="p-2 border-r-2 border-gray-800">Course Name</th>
                <th className="p-2 border-r-2 border-gray-800">Credit</th>
                <th className="p-2 border-r-2 border-gray-800">Teacher</th>
                <th className="p-2 border-r-2 border-gray-800">Room</th>
                <th className="p-2 border-r-2 border-gray-800">Class</th>
                <th className="p-2 border-r-2 border-gray-800">Section</th>
                <th className="p-2 border-r-2 border-gray-800">Group</th>
                <th className="p-2 border-r border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 border-b border-gray-800">
              {timetableEntries.map((entry, index) => (
                <tr key={index} className="p-2">
                  <td className="p-2 border-x border-gray-800">{entry.day}</td>
                  <td className="p-2 border-r border-gray-800">{entry.time}</td>
                  <td className="p-2 border-r border-gray-800">{entry.coursecode}</td>
                  <td className="p-2 border-r border-gray-800">{entry.coursename}</td>
                  <td className="p-2 border-r border-gray-800">{entry.credit}</td>
                  <td className="p-2 border-r border-gray-800">{entry.teacher}</td>
                  <td className="p-2 border-r border-gray-800">{entry.room}</td>
                  <td className="p-2 border-r border-gray-800">{entry.class}</td>
                  <td className="p-2 border-r border-gray-800">{entry.section}</td>
                  <td className="p-2 border-r border-gray-800">{entry.group}</td>
                  <td className="p-2 border-r border-gray-800">Edit</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
