import { FaUser } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";
import { AiOutlineStock } from "react-icons/ai";
import { RxActivityLog } from "react-icons/rx";
import { Progress } from "flowbite-react";
import ProjectNoteContainer from "./ProjectNoteContainer";

export default function ProjectDetails() {
  let customerName = "John Smith";
  let customerNumber = "0412350832";
  let customerEmail = "johnsmith@gmail.com";
  let customerAddress = "124 Golden Street, Leonay, NSW 2750";
  let contractStart = "November 12, 2026";
  let contractEnd = "November 15, 2027";
  let contractPrice = "$749,550.00";
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {/* CUSTOMER DETAILS */}
      <div className="col-span-2 shadow-sm rounded-lg border border-stone-100 bg-white text-gray-700">
        <div className="flex flex-row items-center px-4 gap-2 text-gray-700 bg-white py-2 rounded-t-lg h-10">
          <FaUser />
          <span className="text-md font-semibold">Customer Details</span>
        </div>
        <div className="w-full grid grid-cols-2 px-5 gap-5 text-sm">
          <div className="flex flex-col col-span-1">
            <span className="font-semibold">Full Name</span>
            <span>{customerName}</span>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="font-semibold">Phone Number</span>
            <span>{customerNumber}</span>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="font-semibold">Email Address</span>
            <span>{customerEmail}</span>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="font-semibold">Billing Address</span>
            <span>{customerAddress}</span>
          </div>
        </div>
      </div>

      {/* CONTRACT DETAILS */}
      <div className="col-span-2 shadow-sm rounded-lg border border-stone-100 bg-white text-gray-700">
        <div className="flex flex-row items-center px-4 gap-2 text-gray-700 bg-white py-2 rounded-t-lg h-10">
          <LiaFileContractSolid />
          <span className="text-md font-semibold">Contract Details</span>
        </div>
        <div className="w-full grid grid-cols-2 p-5 gap-5 text-sm">
          <div className="flex flex-col">
            <span className="font-semibold col-span-1">
              Contract Start Date
            </span>
            <span>{contractStart}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold col-span-1">Contract End Date</span>
            <span>{contractEnd}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold col-span-1">Contract Price</span>
            <span>{contractPrice}</span>
          </div>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="col-span-4 shadow-sm rounded-lg border border-stone-100 bg-white text-gray-700">
        <div className="flex flex-row items-center px-4 gap-2 text-gray-700 bg-white py-2 rounded-t-lg h-10">
          <AiOutlineStock className="" />
          <span className="text-md font-semibold">Financial Overview</span>
        </div>

        <div className="grid grid-cols-2 p-5 gap-5 text-sm">
          <div className="flex flex-col col-span-1">
            <span className="font-semibold">Total Contract Value</span>
            <span className="text-md">
              $758,240.48
            </span>
            <span className="text-xs">Incl. Variations</span>
          </div>

          <div className="flex flex-col col-span-1">
            <span className="font-semibold">Total ETS Spend</span>
            <span className="text-md">$25,000.00</span>
            <span className="text-xs text-amber-600">3.2% Contract Value</span>
          </div>

          <div className="flex flex-col gap-1 col-span-1">
            <span className="font-semibold">Amount Claimed</span>
            <span className="text-xl font-bold text-primary">$425,000.00</span>
            <span className="text-xs">56% of Contract Value</span>
            <Progress progress={45} color="green" />
          </div>
          <div className="flex flex-col justify-between gap-3 col-span-1">
            <span className="font-semibold">Current Stage</span>
            <span className="text-xs">3 / 5 Stages Completed</span>
            <div className="flex flex-row gap-1">
              <div className="w-1/5">
                <div className="w-full flex flex-col text-center justify-center">
                  <span className="text-xs font-bold text-green-600">Slab</span>
                  <Progress progress={100} color="green" />
                </div>
              </div>
              <div className="w-1/5 ">
                <div className="w-full flex flex-col text-center justify-center">
                  <span className="text-xs font-bold text-green-600">
                    Frame
                  </span>
                  <Progress progress={100} color="green" />
                </div>
              </div>
              <div className="w-1/5 ">
                <div className="w-full flex flex-col text-center justify-center">
                  <span className="text-xs font-bold text-green-600">
                    Lockup
                  </span>
                  <Progress progress={100} color="green" />
                </div>
              </div>
              <div className="w-1/5 opacity-35">
                <div className="w-full flex flex-col text-center justify-center">
                  <span className="text-xs font-bold text-primary">Fix</span>
                  <Progress progress={0} color="green" />
                </div>
              </div>
              <div className="w-1/5 opacity-35">
                <div className="w-full flex flex-col text-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    Complete
                  </span>
                  <Progress progress={0} color="green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Notes */}
      <div className="col-span-2 shadow-sm rounded-lg border border-stone-100 bg-white text-gray-700">
        <ProjectNoteContainer />
      </div>

      {/* Project Activity */}
      <div className="col-span-2 shadow-sm rounded-lg border border-stone-100 bg-white text-gray-700">
        <div className="flex flex-row items-center px-4 gap-2 text-gray-700 bg-white py-2 rounded-t-lg h-10">
          <RxActivityLog />
          <span className="text-sm font-semibold">PROJECT ACTIVITY </span>
        </div>
      </div>
    </div>
  );
}
