import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout.jsx";
const Navbar = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  return (
    <div className="flex mono justify-between items-center h-20 p-20 w-screen">
      <h1 className="text-5xl font-bold">Skill Match</h1>
      {user ? (
        <h1
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="cursor-pointer"
        >
          Welcome {user.username}
        </h1>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="w-[150px] h-[50px] bg-transparent hover:bg-black hover:text-white transition-all ease-in-out duration-300 border-2 border-black rounded-full"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
