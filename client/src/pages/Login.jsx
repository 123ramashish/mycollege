import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { useDispatch,useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/user/userSlice.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading,error} = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    systemid: '',
    password: '',
    usertype: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    
      if(res.ok){
      const data = await res.json();
      dispatch(loginSuccess(data));
      navigate(`/${formData.usertype}`);
      }else{
        const errorData = await res.json();
        console.error("Login failed:", errorData.message);
        dispatch(loginFailure(errorData.message));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
  return (
    <div className="loginpage bg-white flex justify-center items-center h-screen">     
    <Card className="w-96 shadow-lg rounded-lg">
      <form type="submit" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="systemid" value="System ID" />
          </div>
          <TextInput id="systemid" type="text" placeholder="20240000" required onChange={handleChange}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" type="password" placeholder="***********" required onChange={handleChange}/>
        </div>
        
        <div>
          <div className="mb-2 block">
            <Label htmlFor="user-type" value="User Type" />
          </div>
          <Select id="usertype" onChange={handleChange}>
            <option  defaultValue>Select User Type</option>
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </Select>
        </div>
        <Button gradientMonochrome="info" type="submit">
            {isLoading ? "Loading..." : "Submit"}
            </Button>
            <p>Don&apos;t have an account? <Link to="/signup" className="text-blue-500 underline">Signup</Link></p>
      </form>
      {error && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span className="font-medium">{error}</span> 
      </div>
      )}
    </Card>
    </div>
  );
}

  