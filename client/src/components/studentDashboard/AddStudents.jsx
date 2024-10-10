import  { useState } from 'react'
import {  Modal } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";

export default function AddStudents() {
    const [openModal, setOpenModal] = useState(false);

    const [studentData, setStudentData] = useState({
        name: '',
        sysId: '',
        rollNo: '',
        email: '',
        course: '',
        stream: '',
        semester: '',
        admissionDate: '',
        degreeCompleted: '',
        status: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
          ...studentData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(studentData);
      };
  return (
    <>
      <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md " onClick={() => setOpenModal(true)}><FaUserAlt/>Add Studnet</button>


<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Student</Modal.Header>
        <Modal.Body>
          
    <div className="max-w-2xl mx-auto p-4 bg-white ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">SysID</label>
            <input
              type="text"
              name="sysId"
              value={studentData.sysId}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">RollNo</label>
            <input
              type="text"
              name="rollNo"
              value={studentData.rollNo}
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
              value={studentData.email}
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
              value={studentData.course}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stream</label>
            <input
              type="text"
              name="stream"
              value={studentData.stream}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Semester</label>
            <input
              type="text"
              name="semester"
              value={studentData.semester}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Admission Date</label>
            <input
              type="date"
              name="admissionDate"
              value={studentData.admissionDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Degree Completed</label>
            <input
              type="text"
              name="degreeCompleted"
              value={studentData.degreeCompleted}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <input
              type="text"
              name="status"
              value={studentData.status}
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
            Add Student
          </button>
        </div>
      </form>
    </div>
        </Modal.Body>
        
      </Modal>



    </>
  )
}
