import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { signup, error, isLoading } = useSignup();
  const [modeSelect, setModeSelect] = useState("Job Seekers");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    await signup(credentials.username, credentials.email, credentials.password);
  };
  return (
    <div className="max-w-screen h-screen flex">
      <div className="w-1/2 h-full bg-[#880c0c] flex items-center justify-center">
        <img src="/signup/ribbon.svg" className="w-full h-full" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-5 mono">
        <h1 className="text-4xl font-bold">Skill Match</h1>
        <h2 className="text-xl font-medium">Welcome</h2>
        <p className="text-md font-light w-2/3 text-center">
          Unlock Success with Skill Match Streamlined Connections and Endless
          Opportunities. Your Path to Career Excellence Starts Here!
        </p>
        <div className="flex">
          <button
            onClick={() => setModeSelect("Job Seekers")}
            className={`w-[200px] h-[50px] rounded-l-xl ${
              modeSelect === "Job Seekers" ? "bg-red-600 text-white" : ""
            } mono transition-all ease-in-out duration-500`}
          >
            Job Seekers
          </button>
          <button
            onClick={() => setModeSelect("Recruiters")}
            className={`w-[200px] h-[50px] rounded-r-xl ${
              modeSelect === "Recruiters" ? "bg-red-600 text-white" : ""
            } mono transition-all ease-in-out duration-500`}
          >
            Recruiters
          </button>
        </div>
        <form className="w-[450px] flex flex-col gap-3 mono">
          <h1 className="text-left">Username</h1>
          <div className="w-full relative">
            <input
              type="text"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              placeholder="Enter you username."
              className="focus:outline-none w-full h-[50px] p-5 pl-16 rounded-full bg-[#E3E3E3]"
            />
            <img
              src="/login/user.png"
              alt="Enter your email here."
              className="w-6 h-6 absolute left-4 top-4"
            />
          </div>
          <h1 className="text-left">Email</h1>
          <div className="w-full relative">
            <input
              type="email"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              placeholder="Enter you password."
              className="focus:outline-none w-full h-[50px] p-5 pl-16 rounded-full bg-[#E3E3E3]"
            />
            <img
              src="/login/password.png"
              alt="Enter your password here."
              className="w-6 h-6 absolute left-4 top-4"
            />
          </div>
          <h1 className="text-left">Password</h1>
          <div className="w-full relative">
            <input
              type="password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              placeholder="Enter you password."
              className="focus:outline-none w-full h-[50px] p-5 pl-16 rounded-full bg-[#E3E3E3]"
            />
            <img
              src="/login/password.png"
              alt="Enter your password here."
              className="w-6 h-6 absolute left-4 top-4"
            />
          </div>
          <div className="w-2/3 flex justify-end gap-2">
            <input type="checkbox" className=" accent-[#D21D25CC]" />
            <h1 className="text-md font-medium mono">Remember Me</h1>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full h-[50px] bg-[#D21D25CC] text-white font-medium rounded-full mono"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
