import React from "react";
import { useNavigate } from "react-router-dom";

function HeroContent() {
  const navigation = useNavigate();
    function handleGetStarted(){
        const token = localStorage.getItem("token")

        if(token){
           navigation("/dashboard")
        }else{
            navigation("/login")
        }
    }
  return (
    <>
      <div className=" fw-bold text-white fs-2 lh-lg">
        Manage Your Tasks Smarter, Not Harder
      </div>
      <p className="text-white fs-5">
        SmartTask helps you organize your daily tasks, track progress, and stay
        productive with a simple and powerful task manager.
      </p>
      <div className="started_btn_div lh-lg"><button onClick={handleGetStarted} className="fw-bold fs-4 btn btn-primary rounded-5 p-2 ">Get Started</button></div>
    </>
  );
}

export default HeroContent;
