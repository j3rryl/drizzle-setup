import React from "react";
import DetailCard from "./DetailCard";
import { allUsers } from "@/functions";

const Page = () => {
  const users = allUsers;
  console.log(users);

  return (
    <>
      <div>
        <p className="text-blue-500">Users Table</p>
        {users?.map((user) => {
          return (
            <div key={user.id} className="flex flex-col justify-start">
              <hr />
              <p>{user?.name}</p>
              <p>{user?.email}</p>
              <p>{user?.role}</p>
              <hr />
            </div>
          );
        })}
      </div>

      <p className="text-red-500">Logged In user</p>
      <DetailCard />
      <div>Details</div>
    </>
  );
};

export default Page;
