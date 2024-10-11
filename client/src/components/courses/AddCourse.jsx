import { useState } from 'react';
import { Modal } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";

export default function AddCourse() {
    const [openModal, setOpenModal] = useState(false);

    const [courseData, setCourseData] = useState({
        coursename: '',
        coursecode: '',
        credit: '',
        faculty: '',
        slot: '',
        room: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({
            ...courseData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(courseData);
        // Close the modal after submission
        setOpenModal(false);
    };

    return (
        <>
            <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => setOpenModal(true)}
            >
                <FaUserAlt /> Add Course
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add Course</Modal.Header>
                <Modal.Body>
                    <div className="max-w-2xl mx-auto p-4 bg-white">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Course Name</label>
                                    <input
                                        type="text"
                                        name="coursename"
                                        value={courseData.coursename}
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
                                        value={courseData.coursecode}
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
                                        value={courseData.credit}
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
                                        value={courseData.faculty}
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
                                        value={courseData.slot}
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
                                        value={courseData.room}
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
                                    Add Course
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
