import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      className="relative flex-shrink-0  w-60 h-[250px] rounded-[45px] px-8 py-9 bg-zinc-900/90 text-white p-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-xs leading-tight mt-2 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-2 px-8 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center  ">
            {data.close ? (
              <IoCloseOutline />
            ) : (
              <FiDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4  ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center `}
          >
            <h3 className="text-md ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
