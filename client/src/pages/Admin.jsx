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
import Courses from "../components/classroom/Courses";
import Slots from "../components/classroom/Slots";
import CourseAllotment from "../components/classroom/CourseAllotment";
import ClassRoom from "../components/classroom/ClassRoom";
import StudentsTable from "../components/studentDashboard/StudentsTable";

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
                    <Sidebar.Item  icon={HiChartPie} onClick={()=>setTab('dashboard')} className="text-black font-semibold">
                      Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiUsers} onClick={()=>setTab('students')} className="text-black font-semibold" >
                      Students
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiUsers} onClick={()=>setTab('courses')} className="text-black font-semibold">
                     Courses
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiLogin} onClick={()=>setTab('slots')} className="text-black font-semibold" >
                      Slots
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiPencil} onClick={()=>setTab('classrooms')}  className="text-black font-semibold">
                     Classrooms
                    </Sidebar.Item>
                    <Sidebar.Item  icon={HiPencil} onClick={()=>setTab('courseallotment')} className="text-black font-semibold" >
                     Course Allotment
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/signout" icon={HiClipboard} className="text-black font-semibold">
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
{tab === 'courses' && <Courses />}
{tab === 'slots' && <Slots />}
{tab === 'classrooms' && <ClassRoom />}
{tab === 'courseallotment' && <CourseAllotment />}


    </div>
    </div>
    </>
  )
}
