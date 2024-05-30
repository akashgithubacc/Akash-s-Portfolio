import React from "react";
import { BsSendFill } from "react-icons/bs";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      className=" mt-5 flex items-center justify-center gap-1 rounded-full bg-gray-900 px-4 py-2 text-[0.8rem] font-semibold text-white outline-none transition-all duration-[0.4s] hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:animate-spin disabled:bg-opacity-65 sm:gap-2 sm:py-3 sm:text-[1rem] dark:bg-white dark:bg-opacity-10 dark:hover:bg-black dark:hover:text-white"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="animate-spin"></div>
      ) : (
        <>
          <p className=" text-[1rem]">Submit</p>
          <BsSendFill className="  text-[1rem]" />
        </>
      )}
    </button>
  );
}
