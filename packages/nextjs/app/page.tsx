"use client";

import { useCallback, useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import MintPulpaModal from "~~/components/modals/MintPulpaModal";
import { truncateAddress } from "~~/utils/string";

const config = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.OPT_MAINNET,
};

const chainbaseApiKey = process.env.NEXT_PUBLIC_CHAINBASE_API_KEY as string;

const PulpaTokenAddress = "0x029263aA1BE88127f1794780D9eEF453221C2f30";

type PulpaBalanceElementType = {
  amount: string;
  original_amount: string;
  usd_value: string;
  wallet_address: string;
};

const Home: NextPage = () => {
  const alchemy = new Alchemy(config);
  const account = useAccount();
  const [isMounted, setIsMounted] = useState(false);
  const [pulpaBalance, setPulpaBalance] = useState<number>();
  const [pulpaLeaderboardData, setPulpaLeaderboardData] = useState<PulpaBalanceElementType[]>([]);

  const optimismNetworkId = "10"; // See https://docs.chainbase.com/reference/supported-chains to get the id of different chains.

  const getUserPulpaBalance = useCallback(
    async (ownerAddr: string) => {
      const balances = await alchemy.core.getTokenBalances(ownerAddr, [PulpaTokenAddress]);
      console.log(parseInt(balances.tokenBalances[0].tokenBalance as string) / 10 ** 18);
      setPulpaBalance(parseInt(balances.tokenBalances[0].tokenBalance as string) / 10 ** 18);
    },
    [alchemy.core],
  );

  useEffect(() => {
    if (!account || !account.address) return;
    getUserPulpaBalance(account.address);

    if (!isMounted) {
      fetch(
        `https://api.chainbase.online/v1/token/top-holders?chain_id=${optimismNetworkId}&contract_address=${PulpaTokenAddress}&page=1&limit=25`,
        {
          method: "GET",
          headers: {
            "x-api-key": chainbaseApiKey, // Replace the field with your API key.
            accept: "application/json",
          },
        },
      )
        .then(response => response.json())
        .then(data => {
          console.log(data.data);
          setPulpaLeaderboardData(data.data);
        })
        .catch(error => console.error(error))
        .finally(() => setIsMounted(true));
    }
  }, [account, getUserPulpaBalance, isMounted]);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center pt-16 space-y-4">
        <div className="w-full flex flex-col items-center">
          <p className="m-0 text-5xl">{pulpaBalance}</p>
          <p className="m-0 text-3xl"> $PULPA</p>
        </div>
        <div className="w-full flex justify-center space-x-8">
          <MintPulpaModal />
          <div className="flex flex-col space-y-1 justify-center">
            <button className="btn btn-primary btn-circle">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
            Enviar
          </div>
          <div className="flex flex-col space-y-1 justify-center">
            <button className="btn btn-primary btn-circle">
              <svg fill="currentColor" viewBox="0 0 16 16" className="h-6 w-6">
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15z" />
              </svg>
            </button>
            Quemar
          </div>
        </div>
        <div className="overflow-x-auto w-full md:w-2/3 py-8">
          <table className="table text-lg">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Dirección</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {pulpaLeaderboardData.map((pulpaHolder, index) => (
                <tr key={pulpaHolder.wallet_address}>
                  <th>{index + 1}</th>
                  <td className="text-xl">{truncateAddress(pulpaHolder.wallet_address, 6, 6)}</td>
                  <td className="text-xl">{parseInt(pulpaHolder.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
