import { Link } from "react-router-dom";

interface Message {
  message?: string;
}

const HeaderLogo = ({ message }: Message) => {
  return (
    <header className="flex justify-between m-4">
      <Link to="/">
        <img className="w-15 h-15 mr-1" src="/svg/Logo.svg" alt="" />
      </Link>
      <h1 className="text-right self-center text-2xl font-caprasimo text-[#FFE4E4] w-3/4">
        {message}
      </h1>
    </header>
  );
};

export default HeaderLogo;
