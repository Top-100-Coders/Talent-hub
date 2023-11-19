import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login, error, isLoading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials.email, credentials.password);
    if (error) {
      console.log(error);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="max-w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[450px] h-[450px] flex flex-col gap-5 items-center justify-center border border-[#DB4A5133] rounded-xl shadpw-[#DB4A511A] shadow-xl mono"
      >
        <h1 className="text-4xl font-bold">Skill Match</h1>
        <h2 className="text-xl font-medium">Welcome Back</h2>
        <div className="w-2/3 relative">
          <input
            type="email"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            placeholder="Enter you email."
            className="focus:outline-none w-full h-[50px] border border-[#DB4A5133] p-5 pl-16 shadpw-[#DB4A511A] shadow-md rounded-full bg-[#E3E3E3]"
          />
          <img
            src="/login/user.png"
            alt="Enter your email here."
            className="w-6 h-6 absolute left-4 top-4"
          />
        </div>
        <div className="w-2/3 relative">
          <input
            type="password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="Enter you password."
            className="focus:outline-none w-full h-[50px] border border-[#DB4A5133] p-5 pl-16 shadpw-[#DB4A511A] shadow-md rounded-full bg-[#E3E3E3]"
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
        <button className="w-1/2 h-[50px] bg-[#D21D25CC] text-white font-medium rounded-full mono">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
