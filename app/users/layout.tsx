import { useEffect } from "react";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";
import NextTopLoader from "nextjs-toploader";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <>
      <NextTopLoader />
      <Sidebar>
        <div className="h-full">
          <UserList items={users} />
          {children}
        </div>
      </Sidebar>
    </>
  );
}
