"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const DetailCard = () => {
  const { data, status } = useSession();

  console.log(data);

  return (
    <>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Email: {data?.user?.email ?? "No user found!"}</p>
          <p>Role: {data?.user?.role ?? "No role found!"}</p>
        </div>
      )}

      {data ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </>
  );
};

export default DetailCard;
