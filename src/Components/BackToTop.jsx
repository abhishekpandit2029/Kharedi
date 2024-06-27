import { IoIosArrowDropupCircle } from "react-icons/io";

function BackToTop() {
  return (
    <div>
      <IoIosArrowDropupCircle
        className="text-4xl hover:scale-125 text-[#FF7F00] transition-all duration-300 ease-in-out"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}

export default BackToTop;
