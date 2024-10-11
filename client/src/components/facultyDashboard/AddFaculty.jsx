import { useState } from 'react';
import { Modal } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";

export default function AddFaculty() {
    const [openModal, setOpenModal] = useState(false);

    const [facultyData, setFacultyData] = useState({
        empId: '',
        name: '',           // Added Name field
        email: '',
        education: '',
        experience: '',
        department: '',
        designation: '',
        course: '',
        subject: '',        // Added Subject field
        section: '',        // Added Section field
        joiningDate: '',
        leaveDate: '',
        status: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFacultyData({
            ...facultyData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(facultyData);
        // Close the modal after submission
        setOpenModal(false);
    };

    return (
        <>
            <button 
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md" 
                onClick={() => setOpenModal(true)}
            >
                <FaUserAlt /> Add Faculty
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add Faculty</Modal.Header>
                <Modal.Body>
                    <div className="max-w-2xl mx-auto p-4 bg-white">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                                    <input
                                        type="text"
                                        name="empId"
                                        value={facultyData.empId}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label> {/* New Name Field */}
                                    <input
                                        type="text"
                                        name="name"
                                        value={facultyData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={facultyData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Education</label>
                                    <input
                                        type="text"
                                        name="education"
                                        value={facultyData.education}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        value={facultyData.experience}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Department</label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={facultyData.department}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Designation</label>
                                    <input
                                        type="text"
                                        name="designation"
                                        value={facultyData.designation}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Course</label>
                                    <input
                                        type="text"
                                        name="course"
                                        value={facultyData.course}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Subject</label> {/* New Subject Field */}
                                    <input
                                        type="text"
                                        name="subject"
                                        value={facultyData.subject}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Section</label> {/* New Section Field */}
                                    <input
                                        type="text"
                                        name="section"
                                        value={facultyData.section}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Joining Date</label>
                                    <input
                                        type="date"
                                        name="joiningDate"
                                        value={facultyData.joiningDate}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Leave Date</label>
                                    <input
                                        type="date"
                                        name="leaveDate"
                                        value={facultyData.leaveDate}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <input
                                        type="text"
                                        name="status"
                                        value={facultyData.status}
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
                                    Add Faculty
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
