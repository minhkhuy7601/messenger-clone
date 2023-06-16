import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import NextTopLoader from "nextjs-toploader";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <>
      <NextTopLoader />
      <Sidebar>
        <div className="h-full">
          <ConversationList
            users={users}
            title="Messages"
            initialItems={conversations}
          />
          {children}
        </div>
      </Sidebar>
    </>
  );
}