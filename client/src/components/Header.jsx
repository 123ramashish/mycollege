import { Avatar, Dropdown } from "flowbite-react";
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
export default function Header() {
  const {currentUser} = useSelector(state=>state.user)
  console.log("currentUser",currentUser)
  return (
   <>
   <div className='flex justify-between px-12 bg-black text-white text-semibold text-3xl font-serif text-center py-4 absolute top-0 left-0 w-full'>
    <div></div>
    <div>
    <h1 className="text-center">Welcome to <span className="text-blue-500"> Sharda University</span></h1>
    </div>
    <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            {/* <span className="block text-sm">{currentUser.name}</span> */}
          </Dropdown.Header>
          {/* <Link to={`/${currentUser.usertype}`}>  */}
          <Dropdown.Item >Dashboard</Dropdown.Item>
          {/* </Link> */}
          <Dropdown.Divider />
          <Link to="/signout">
          <Dropdown.Item>Sign out</Dropdown.Item>
          </Link>
        </Dropdown>
        {/* <Navbar.Toggle /> */}
      </div>
   </div>
   </>
  )
}
