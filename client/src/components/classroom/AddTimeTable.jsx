import { useState } from 'react';
import { Modal } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";

export default function AddTimeTable() {
    const [openModal, setOpenModal] = useState(false);

    const [timetableData, setTimetableData] = useState({
        day: '',
        time: '',
        coursecode: '',
        coursename: '',
        credit: '',
        teacher: '',
        room: '',
        class: '',
        section: '',
        group: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTimetableData({
            ...timetableData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(timetableData);
        setOpenModal(false);
    };

    return (
        <>
            <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => setOpenModal(true)}
            >
                <FaUserAlt /> Add Timetable
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add Timetable Entry</Modal.Header>
                <Modal.Body>
                    <div className="max-w-2xl mx-auto p-4 bg-white">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Day</label>
                                    <input
                                        type="text"
                                        name="day"
                                        value={timetableData.day}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Time</label>
                                    <input
                                        type="text"
                                        name="time"
                                        value={timetableData.time}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Course Code</label>
                                    <input
                                        type="text"
                                        name="coursecode"
                                        value={timetableData.coursecode}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Course Name</label>
                                    <input
                                        type="text"
                                        name="coursename"
                                        value={timetableData.coursename}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Credit</label>
                                    <input
                                        type="number"
                                        name="credit"
                                        value={timetableData.credit}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Teacher</label>
                                    <input
                                        type="text"
                                        name="teacher"
                                        value={timetableData.teacher}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Room</label>
                                    <input
                                        type="text"
                                        name="room"
                                        value={timetableData.room}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Class</label>
                                    <input
                                        type="text"
                                        name="class"
                                        value={timetableData.class}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Section</label>
                                    <input
                                        type="text"
                                        name="section"
                                        value={timetableData.section}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Group</label>
                                    <input
                                        type="text"
                                        name="group"
                                        value={timetableData.group}
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
                                    Add Timetable
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
