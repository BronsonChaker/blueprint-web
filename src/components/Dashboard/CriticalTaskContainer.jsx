import CriticalTaskItem from "../Tasks/CriticalTaskItem";

export default function OverviewContainer({ title }) {
  return (
    <div className="h-full w-full card-outline p-5">
      <span className="text-lg font-semibold text-gray-700">{title}</span>
      <hr className="border-gray-300 mt-1 mb-3"></hr>
      <div className="overflow-y-scroll max-h-125 column gap-2">
        <CriticalTaskItem
          projectNumber="135TG7"
          projectAddress="123 Silverdale Road, Llandilo"
          name="QA - Frame Inspection"
          type="Inspection"
          user="Bronson Chaker"
          date="Nov 17 2026"
        />
        <CriticalTaskItem
          projectNumber="135TG7"
          projectAddress="123 Silverdale Road, Llandilo"
          name="QA - Frame Inspection"
          type="Inspection"
          user="Bronson Chaker"
          date="Nov 17 2026"
        />
        <CriticalTaskItem
          projectNumber="135TG7"
          projectAddress="123 Silverdale Road, Llandilo"
          name="QA - Frame Inspection"
          type="Inspection"
          user="Bronson Chaker"
          date="Nov 17 2026"
        />
        <CriticalTaskItem
          projectNumber="135TG7"
          projectAddress="123 Silverdale Road, Llandilo"
          name="QA - Frame Inspection"
          type="Inspection"
          user="Bronson Chaker"
          date="Nov 17 2026"
        />
        <CriticalTaskItem
          projectNumber="135TG7"
          projectAddress="123 Silverdale Road, Llandilo"
          name="QA - Frame Inspection"
          type="Inspection"
          user="Bronson Chaker"
          date="Nov 17 2026"
        />
        <CriticalTaskItem
          projectNumber="135TG7"
          projectAddress="123 Silverdale Road, Llandilo"
          name="QA - Frame Inspection"
          type="Inspection"
          user="Bronson Chaker"
          date="Nov 17 2026"
        />
        <CriticalTaskItem
          projectNumber="135TG7"
          projectAddress="123 Silverdale Road, Llandilo"
          name="QA - Frame Inspection"
          type="Inspection"
          user="Bronson Chaker"
          date="Nov 17 2026"
        />
      </div>
    </div>
  );
}
