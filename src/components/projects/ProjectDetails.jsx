import { FaUser } from "react-icons/fa";
import { LiaFileContractSolid } from "react-icons/lia";
import { AiOutlineStock } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { Progress } from "flowbite-react";
import { Avatar } from "flowbite-react";

export default function ProjectDetails() {
  let customerName = "John Smith";
  let customerNumber = "0412350832";
  let customerEmail = "johnsmith@gmail.com";
  let customerAddress = "124 Golden Street, Leonay, NSW 2750";
  let contractStart = "November 12, 2026";
  let contractEnd = "November 15, 2027";
  let contractPrice = "$749,550.00";
  return (
    <div class="w-full grid grid-cols-4 gap-4">
      {/* CUSTOMER DETAILS */}
      <div className="border border-stone-400 col-span-2 rounded-sm">
        <div className="flex flex-row items-center px-4 gap-4 bg-primary text-white py-2">
          <FaUser />
          <span className="text-sm font-semibold">CUSTOMER DETAILS</span>
        </div>
        <div className="w-full grid grid-cols-2 p-5 gap-5">
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
      <div className="border border-stone-400 col-span-2 rounded-sm">
        <div className="flex flex-row items-center px-4 gap-4 bg-primary text-white py-2">
          <LiaFileContractSolid />
          <span className="text-sm font-semibold">CONTRACT DETAILS</span>
        </div>
        <div className="w-full grid grid-cols-2 p-5 gap-5">
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
      <div className="border col-span-4">
        <div className="flex flex-row items-center px-4 gap-4 bg-primary text-white py-2">
          <AiOutlineStock />
          <span className="text-sm font-semibold">FINANCIAL OVERVIEW</span>
        </div>

        <div className="grid grid-cols-2 p-5 gap-5">
          <div className="flex flex-col col-span-1">
            <span className="font-semibold">Total Contract Value</span>
            <span className="text-xl font-bold text-green-700">
              $758,240.48
            </span>
            <span className="text-xs">Incl. Variations</span>
          </div>

          <div className="flex flex-col col-span-1">
            <span className="font-semibold">Total ETS Spend</span>
            <span className="text-xl font-bold text-amber-600">$25,000.00</span>
            <span className="text-xs">3.2% Contract Value</span>
          </div>

          <div className="flex flex-col gap-1 col-span-1">
            <span className="font-semibold">Amount Claimed</span>
            <span className="text-xl font-bold text-primary">$425,000.00</span>
            <span className="text-xs">56% of Contract Value</span>
            <Progress progress={45} color="green" />
          </div>
          <div className="flex flex-col justify-between gap-3 col-span-1">
            <span className="font-semibold">Current Stage</span>
            <span className="text-xs">1 / 5 Stages Completed</span>
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
      <div className="border col-span-2">
        <div className="flex flex-row items-center px-4 gap-4 bg-primary text-white py-2">
          <FaStickyNote />
          <span className="text-sm font-semibold">PROJECT NOTES</span>
        </div>
        <div className="p-2">
          <div className="p-2 px-5 justify-between flex flex-col">
            <div className="flex flex-row gap-3 items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <div>
                  <Avatar />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">Jeff Smith</span>
                  <span className="text-sm font-medium">Head of Drafting</span>
                </div>
              </div>
              <div>
                <span className="text-sm text-subtext">Feb 26, 2025</span>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-xl font-semibold">
                Architectural Plans Updated
              </span>
              <span className="text-md ">
                Architectural plans have been updated to Revision F. These have
                been uploaded into documents section of project.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Activity */}
      <div className="border col-span-2">
        <div className="flex flex-row items-center px-4 gap-4 bg-primary text-white py-2">
          <RxActivityLog />
          <span className="text-sm font-semibold">PROJECT ACTIVITY </span>
        </div>
      </div>
    </div>
  );
}
