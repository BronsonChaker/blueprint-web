import { Avatar } from "flowbite-react";

export default function ProjectNote() {
  return (
    <div className="p-2">
      <div className="p-2 px-5 justify-between flex flex-col">
        <div className="flex flex-row gap-3 items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <div>
              <Avatar />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-md">Jeff Smith</span>
              <span className="text-xs text-subtext font-medium">
                Head of Drafting
              </span>
            </div>
          </div>
          <div>
            <span className="text-sm text-subtext">Feb 26, 2025</span>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <span className="text-lg font-semibold">
            Architectural Plans Updated
          </span>
          <span className="text-sm ">
            Architectural plans have been updated to Revision F. These have been
            uploaded into documents section of project.
          </span>
        </div>
      </div>
    </div>
  );
}
