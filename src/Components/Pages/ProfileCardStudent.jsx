import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useAuth } from "../AuthContext";
// import ProfileCard from "./ProfileCard";
import { Box } from "@mui/material";
import AlumniProfileCard from "./AluminiProfile";
import AdminProfileCard from "./AdminProfile";
import ProfileCard from "./StudentProfile";
import ProfileDetails from "../ProfileDetails";
import AdminDashboard from "./AdminDashboard";
const ProfileCardStudent = () => {
  const {user}=useAuth();
  // console.log(user);
  const [selected, setSelected] = useState("profile");

  return (
    <Box display="flex">
      <Sidebar setSelected={setSelected} />
      {selected === "edit-profile" && user?.userType==="student" && <ProfileCard />}
      {selected === "edit-profile" && user?.userType==="alumni" && <AlumniProfileCard />}
      {selected === "edit-profile" && user?.userType==="admin" && <AdminProfileCard />}
      {selected === "profile" && user?.userType==="student" && <ProfileDetails />}
      {selected === "profile" && user?.userType==="alumni" && <ProfileDetails />}
      {selected === "profile" && user?.userType==="admin" && <ProfileDetails />}
      {selected === "dashboard" && user?.userType==="admin" && <AdminDashboard/>}
    </Box>
  );
};

export default ProfileCardStudent;