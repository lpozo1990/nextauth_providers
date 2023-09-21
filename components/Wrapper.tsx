"use client";
import { SessionProvider } from "next-auth/react";

interface WrapperProps {
  children: JSX.Element;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Wrapper;
