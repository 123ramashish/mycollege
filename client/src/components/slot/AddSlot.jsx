import { useState } from 'react';
import { Modal } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";

export default function AddSlot() {
  const [openModal, setOpenModal] = useState(false);
  const [slotData, setSlotData] = useState({
    day: '',
    startTime: '',
    endTime: '',
    type: '',
    code: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlotData({
      ...slotData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., update state in SlotTable)
    console.log(slotData);
    setOpenModal(false); // Close modal after submission
  };

  return (
    <>
      <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setOpenModal(true)}>
        <FaUserAlt /> Add Slot
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Slot</Modal.Header>
        <Modal.Body>
          <div className="max-w-2xl mx-auto p-4 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Day</label>
                  <select
                    name="day"
                    value={slotData.day}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Time</label>
                  <input
                    type="time"
                    name="startTime"
                    value={slotData.startTime}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Time</label>
                  <input
                    type="time"
                    name="endTime"
                    value={slotData.endTime}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    name="type"
                    value={slotData.type}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Type</option>
                    <option value="Theory">Theory</option>
                    <option value="Lab">Lab</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Code</label>
                  <input
                    type="text"
                    name="code"
                    value={slotData.code}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Add Slot
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
