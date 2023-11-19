import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="mt-20 mono flex flex-col justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-5xl py-2 font-bold text-left">
            Precision Recruiting
          </h1>
          <h1 className="text-5xl py-2 font-bold text-right">
            for your perfect team
          </h1>
        </div>
        <div className="w-1/2 relative">
          <input
            onClick={() => navigate("/search")}
            type="text"
            className="cursor-pointer focus:outline-none p-5 mono text-xl w-full my-6 h-[75px] border rounded-full"
            placeholder="Search Skillsets..."
          />
          <div className="cursor-pointer absolute top-9 right-10 rounded-full flex justify-between p-5 items-center bg-[#EDEDED] w-[150px] h-[50px]">
            Search
            <img
              src="/landing/search.png"
              alt="Search Here"
              className="w-6 h-6 "
            />
          </div>
          <div className="flex gap-5 mono justify-center text-xl ">
            <h1 className="cursor-default">Popular Now:</h1>
            <h1 className="cursor-pointer hover:font-bold">Web Desigining</h1>
            <h1 className="cursor-pointer hover:font-bold">Full Stack</h1>
            <h1 className="cursor-pointer hover:font-bold">Mern Stack</h1>
            <h1 className="cursor-pointer hover:font-bold">DevOps</h1>
          </div>
          <div className="pt-20 mono text-xl flex flex-col gap-2 items-center font-bold">
            <h1>Are you a developer?</h1>
            <h1>Showcase your skills on SkillMatch</h1>
            <button
              onClick={() => navigate("/signup")}
              className="w-[200px] h-[50px] bg-transparent hover:bg-black hover:text-white transition-all ease-in-out duration-300 border-2 border-black rounded-full"
            >
              Register Now
            </button>
            <img
              src="/landing/explore.png"
              className="h-8 w-8 mt-5 hover:scale-110 transition-all ease-in-out duration-300"
            />
            <h1 className="mono font-light">Explore More</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
