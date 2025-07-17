// Sidebar.tsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Backend/AuthContext";
import { createNewThread, getUserThreads } from "../../Backend/Firebase/firebaseThreads";

type Thread = {
  id: string;
  name: string;
};

const Sidebar = () => {
  const { user } = useAuth();
  const [threads, setThreads] = useState<Thread[]>([]);

  const fetchThreads = async () => {
    if (user?.uid) {
      const userThreads = await getUserThreads(user.uid);
      setThreads(userThreads as Thread[]);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, [user]);

  const handleNewChat = async () => {
    if (user?.uid) {
      const newId = await createNewThread(user.uid);
      fetchThreads();
      // You can also navigate to that threadId if needed later
    }
  };

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <button onClick={handleNewChat} className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded">
          + New Chat
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {threads.map((thread) => (
          <div key={thread.id} className="p-3 hover:bg-gray-700 cursor-pointer">
            {thread.name}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700">
        {/* user profile */}
      </div>
    </div>
  );
};

export default Sidebar;
