import { useState } from 'react';
import { Modal } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";

export default function AddClassroom() {
    const [openModal, setOpenModal] = useState(false);

    const [classroomData, setClassroomData] = useState({
        roomNo: '',
        block: '',
        capacity: '',
        type: '',
        available: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClassroomData({
            ...classroomData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(classroomData);
        setOpenModal(false);
    };

    return (
        <>
            <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => setOpenModal(true)}
            >
                <FaUserAlt /> Add Classroom
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add Classroom Entry</Modal.Header>
                <Modal.Body>
                    <div className="max-w-2xl mx-auto p-4 bg-white">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Room No</label>
                                    <input
                                        type="text"
                                        name="roomNo"
                                        value={classroomData.roomNo}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Block</label>
                                    <input
                                        type="text"
                                        name="block"
                                        value={classroomData.block}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Capacity</label>
                                    <input
                                        type="number"
                                        name="capacity"
                                        value={classroomData.capacity}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Type</label>
                                    <select
                                        name="type"
                                        value={classroomData.type}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    >
                                        <option value="">Select</option>
                                        <option value="Classroom">Classroom</option>
                                        <option value="Lab">Lab</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Available</label>
                                    <select
                                        name="available"
                                        value={classroomData.available}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                                >
                                    Add Classroom
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
