import { FaStickyNote } from "react-icons/fa";
import ProjectNote from "./ProjectNote";

export default function ProjectNoteContainer() {
  return (
    <div>
      <div className="flex flex-row items-center px-4 gap-4 bg-primary text-white py-2 rounded-t-lg h-10">
        <FaStickyNote />
        <span className="text-sm font-semibold">PROJECT NOTES</span>
      </div>
      <div>
        <ProjectNote />
      </div>
    </div>
  );
}
