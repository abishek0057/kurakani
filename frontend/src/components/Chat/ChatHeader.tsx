import { useRoom } from "@/contexts/RoomContext";
import React from "react";

function ChatHeader({ roomId }: { roomId: string }) {
  const { rooms } = useRoom();
  const room = rooms.find((room) => room.id === roomId);
  return (
    <div className="basis-[7%] border-b-2 flex items-center p-3 font-medium">
      <p>{room?.title}</p>
    </div>
  );
}

export default ChatHeader;