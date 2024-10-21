import { Sidebar } from "flowbite-react";
// import AdminCard from '../components/adminDashboard/AdminCard'
import { useState } from "react";

import {
  HiUsers,
  HiChartPie,
  HiClipboard,
  HiLogin,
  HiPencil,
} from "react-icons/hi";
import Dashboard from "../components/adminDashboard/Dashboard";
import StudentsTable from "../components/studentDashboard/StudentsTable";
import CourseTable from "../components/courses/CourseTable";
import FacultyTable from "../components/facultyDashboard/FacultyTable";
import ClassRoomTable from "../components/classroom/ClassRoomTable";
import SlotTable from "../components/slot/SlotTable";
import CourseAllotmentTable from "../components/courseAllotment/CourseAllotmentTable";

export default function Admin() {
  const [tab,setTab]=useState('dashboard')
  return (
    <>
    <div className=" flex flex-col lg:flex-row pt-16">
    <div className="flex flex-col h-screen bg-[#0e7490]">
      <div className="bg-[#286a7c] w-full cursor-pointer text-white text-2xl font-bold p-2">
  <h1 >Admin Dashboard</h1>
  </div>
  <div>
          <Sidebar
            aria-label="Sidebar with multi-level dropdowns example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                
                <Sidebar.Items>
                  <Sidebar.ItemGroup >
                    <Sidebar.Item  icon={HiChartPie} onClick={()=>setTab('dashboard')} className="text-black font-semibold cursor-pointer">
                      Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiUsers} onClick={()=>setTab('students')} className="text-black font-semibold cursor-pointer" >
                      Students
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiPencil} onClick={()=>setTab('faculty')}  className="text-black font-semibold cursor-pointer">
                    Faculty
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiUsers} onClick={()=>setTab('courses')} className="text-black font-semibold cursor-pointer  ">
                     Courses
                    </Sidebar.Item>
                   
                    <Sidebar.Item icon={HiLogin} onClick={()=>setTab('classroom')} className="text-black font-semibold cursor-pointer" >
                     Classroom
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiLogin} onClick={()=>setTab('courseallotment')} className="text-black font-semibold cursor-pointer" >
                     Course Allotment
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiLogin} onClick={()=>setTab('slot')} className="text-black font-semibold cursor-pointer" >
                     slot
                    </Sidebar.Item>
                    
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/signout" icon={HiClipboard} className="text-black font-semibold cursor-pointer">
                      Sign Out
                    </Sidebar.Item>
                    
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
    </div>
    </div>
    <div className='mt-8 scroll-y-auto'>
  {tab === 'dashboard' && <Dashboard />}
{tab === 'students' && <StudentsTable />}
{tab === 'courses' && <CourseTable />}
{tab === 'slot' && <SlotTable />}
{tab === 'classroom' && <ClassRoomTable/>}
{tab === 'courseallotment' && <CourseAllotmentTable />}
{tab === 'faculty' && <FacultyTable />}


    </div>
    </div>
    </>
  )
}
