import Link from "next/link";
import React from "react";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  return <Link href={`/chat/${id}`}></Link>;
};

export default ChatRow;
