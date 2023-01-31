import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ArrowRightCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { icons } from "../../assets";
import Input from "../inputs/Input";
import Button from "../inputs/Button";
import TextArea from "../inputs/TextArea";

export default function ContactMe() {
  return (
    <Popover className="bg-secondary rounded-lg flex flex-col items-center p-2 h-40">
      <h1 className="text-4xl font-extrabold text-white flex items-center mt-10">
        <div className="w-10 h-10 rounded inline-block mr-3">
          <icons.Contact />
        </div>
        Contact me
      </h1>
      <Popover.Button className="w-10 h-10 rounded-full absolute right-3 bottom-3">
        <ArrowRightCircleIcon fill="#e7e5e5" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="bg-primary min-h-full flex flex-col m-2 rounded-lg fixed inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50 "
        >
          <div className="w-full flex items-center justify-between">
            <h1 className="text-3xl font-extrabold text-white p-2 text-center ">
              Contact me
            </h1>
            <Popover.Button className="w-10 h-10 hover:bg-primary hover:shadow-sm rounded-full outline-none">
              <span className="sr-only">Menu</span>
              <XMarkIcon fill="#fff" />
            </Popover.Button>
          </div>

          <form action="" className="py-2 px-4 ">
            <Input placeholder="none" name="name" />
            <Input placeholder="none" name="Email" />
            <Input name="Subject"/>
            <div className="w-full">
              <TextArea cols="30" rows="10"/>
            </div>
            <div className="w-full flex justify-center my-2">
              <Button />
            </div>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
