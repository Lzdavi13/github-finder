import { Link } from "react-router-dom";
import arrow from "../assets/arrow-left.svg";
import { Header } from "../components/Header";
import { Repositories } from "../components/Repositories";

export function Projects() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex flex-col gap-16 items-center">
        <Header>
          <Link to={"/"}>
            <img
              className="fixed top-9 left-12 w-12 h-12 fill-blue-700 cursor-pointer"
              src={arrow}
              alt=""
            />
          </Link>
        </Header>
        <Repositories />
      </div>
    </>
  );
}
