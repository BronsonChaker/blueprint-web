import { FaStickyNote } from "react-icons/fa";
import ProjectNote from "./ProjectNote";

export default function ProjectNoteContainer() {
  return (
    <div>
      <div className="flex flex-row items-center px-4 gap-2 text-gray-700 bg-white py-2 rounded-t-lg h-10">
        <FaStickyNote />
        <span className="text-sm font-semibold">Project Notes</span>
      </div>
      <div>
        <ProjectNote />
      </div>
    </div>
  );
}
