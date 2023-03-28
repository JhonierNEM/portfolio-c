import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

export default function ComingSoon() {
  return (
    <Popover className="">
      <Popover.Button className="">coming soon</Popover.Button>

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
          className=" w-[500px] h-[500px]  bg-main fixed top-[5rem] right-4 transform transition z-50"
        ></Popover.Panel>
      </Transition>
    </Popover>
  );
}
