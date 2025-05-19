import { Link } from "react-router-dom";

export default function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2"
    >
      {children}
    </Link>
  );
}
