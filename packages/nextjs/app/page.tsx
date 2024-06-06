"use client";

import type { NextPage } from "next";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { TicketIcon } from "@heroicons/react/24/outline";
import { Balance } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const { data: eventName } = useScaffoldReadContract({ contractName: "YourContract", functionName: "eventName" });
  const { data: price } = useScaffoldReadContract({ contractName: "YourContract", functionName: "price" });
  const { data: remainingSeat } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "remainingSeat",
  });
  const { data: eventLocation } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "eventLocation",
  });
  const { data: eventDate } = useScaffoldReadContract({ contractName: "YourContract", functionName: "eventDate" });
  const { data: seatNumber } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "seatOwner",
    args: [connectedAddress],
  });

  const fixedPrice = price ? formatEther(price) : "0";

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("YourContract");

  return (
    <>
      <div className="text-center font-bold font-serif text-3xl my-5">Welcome to our theatre!</div>
      {connectedAddress && (
        <div className="flex mx-auto items-center">
          <span className="mr-2 text-2xl font-semibold">Balance :</span>
          <Balance className="text-2xl" address={connectedAddress} />
        </div>
      )}

      <div className="flex flex-col items-center justify-center my-5">
        <TicketIcon className="w-10 h-10" />
        <div className="text-center font-bold font-serif text-2xl">Ticket System</div>
      </div>

      <div className="bg-white dark:bg-gray-800 mx-auto  w-1/4 rounded-xl shadow-xl">
        <div className="font-bold text-center mb-4 my-3 text-2xl"> Buy Ticket</div>
        <div className="mx-12">
          <div className="font-serif text-xl my-2">
            Event name : <span className="font-bold">{eventName}</span>
          </div>
          <div className="justify-center">
            <div className="font-serif text-xl my-2">
              Location : <span className="font-bold">{eventLocation} 📌</span>
            </div>
            <div className="font-serif text-xl my-2">
              Date and time: <span className="font-bold">{eventDate?.toString()}</span> 📅{" "}
            </div>
          </div>
          <div className="font-serif text-xl my-2">
            Price : <span className="font-bold">{fixedPrice} ♦</span>
          </div>
          <div className="font-serif text-xl my-2">
            Remaining seats: <span className="font-bold">{remainingSeat?.toString()}</span> 💺
            {(seatNumber ?? 0) > 0 && (
              <div className="font-serif text-xl my-2">
                Your seat number: <span className="font-bold">{seatNumber?.toString()}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center m-4">
          <button
            className="btn btn-primary dark:bg-black"
            onClick={async () => {
              try {
                await writeYourContractAsync({
                  functionName: "buySeat",
                  args: undefined,
                  value: parseEther("0.005"),
                });
              } catch (e) {
                console.error("Error setting greeting:", e);
              }
            }}
          >
            Buy Ticket 🎫
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
