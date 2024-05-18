import React from "react";
import DetailCard from "./DetailCard";
import { allUsers } from "@/functions";
import ChangeRole from "./ChangeRole";
// export const dynamic = "force-dynamic";
export const revalidate = 2;
const Page = () => {
  const users = allUsers;
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
              <ChangeRole email={user.email} role="admin" />
              <ChangeRole email={user.email} role="user" />
              <hr className="text-blue-500" />
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
