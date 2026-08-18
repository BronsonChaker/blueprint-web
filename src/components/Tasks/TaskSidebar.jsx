import { IoMdClose } from "react-icons/io";

export default function TaskSidebar({ selectedTask, taskSidebar, onClose }) {
  return (
    <div className={`w-4/12 fixed right-0 top-0 h-screen bg-white border-l-2 border-stone-200 px-10 py-10
            transition-transform duration-300 ease-in-out flex flex-col gap-5
            ${taskSidebar ? "translate-x-0" : "translate-x-full"}`}>

      <span className="text-2xl font-medium text-primary">{selectedTask?.name}</span>

      <hr className="text-stone-200"></hr>
      <div className="flex flex-col gap-2">
        <label>Select Vendor</label>
        <select className="input">
          <option value={selectedTask?.vendor_name}></option>
        </select>
      </div>

      <div className="row gap-2 justify-between">
        <div className="column w-full gap-2">
          <span>Scheduled Date</span>
          <input type="date" className="input text-center"></input>
        </div>

        <div className="column w-full gap-2">
          <span>Completion Date</span>
          <input type="date" className="input text-center"></input>
        </div>
      </div>

      <hr className="text-stone-200"></hr>

          <p>{selectedTask?.booking_date}</p>
          <p>{selectedTask?.completion_date}</p>


      <div className="w-full flex flex-row gap-2 items-center justify-center">
        <button onClick={onClose}><div className="button flex flex-row items-center justify-center cursor-pointer"><IoMdClose />Close</div></button>
        <button className="button">Save</button>
      </div>
    </div>
  )
}
