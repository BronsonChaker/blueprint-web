import { IoMdClose } from "react-icons/io";

export default function TaskSidebar({ selectedTask, taskSidebar, onClose }) {

  console.log(selectedTask)
  return (
    <div className={`w-4/12 fixed right-0 top-0 h-screen bg-white border-l-2 border-stone-200 px-10
            transition-transform duration-300 ease-in-out
            ${taskSidebar ? "translate-x-0" : "translate-x-full"}`}>
      <button onClick={onClose} className="hover:cursor-pointer"></button>
        <div><p>Name: {selectedTask?.name}</p>
          <p>Vendor: {selectedTask?.vendor_name}</p>
          <p>Booking Date: {selectedTask?.booking_date}</p>
          <p>Completed Date: {selectedTask?.completion_date}</p></div>


      <div className="w-full flex flex-row gap-2 items-center justify-center">
        <button onClick={onClose}><div className="button flex flex-row items-center justify-center cursor-pointer"><IoMdClose />Close</div></button>
        <button className="button">Save</button>
      </div>
    </div>
  )
}
