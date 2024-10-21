import { useState } from 'react';
import { Modal } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";

export default function AddCourseAllotment() {
    const [openModal, setOpenModal] = useState(false);

    const [courseAllotmentData, setCourseAllotmentData] = useState({
        courseCode: '',
        courseName: '',
        faculty: '',
        slot: '',
        room: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseAllotmentData({
            ...courseAllotmentData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(courseAllotmentData);
        setOpenModal(false);
    };

    return (
        <>
            <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => setOpenModal(true)}
            >
                <FaUserAlt /> Add Course Allotment
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add Course Allotment Entry</Modal.Header>
                <Modal.Body>
                    <div className="max-w-2xl mx-auto p-4 bg-white">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Course Code</label>
                                    <input
                                        type="text"
                                        name="courseCode"
                                        value={courseAllotmentData.courseCode}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Course Name</label>
                                    <input
                                        type="text"
                                        name="courseName"
                                        value={courseAllotmentData.courseName}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Faculty</label>
                                    <input
                                        type="text"
                                        name="faculty"
                                        value={courseAllotmentData.faculty}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Slot</label>
                                    <input
                                        type="text"
                                        name="slot"
                                        value={courseAllotmentData.slot}
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
                                        value={courseAllotmentData.room}
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
                                    Add Course Allotment
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
