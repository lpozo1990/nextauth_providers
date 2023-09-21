"use client";
import { signIn, signOut, useSession } from "next-auth/react";

interface GoogleExampleProps {}

const GoogleExample: React.FC<GoogleExampleProps> = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div style={{ display: "flex" }}>
          <span>
            Signed in as <b>{session.user?.email ?? " "}</b>
          </span>{" "}
          <br />
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
              }}
              src={session.user?.image ?? ""}
            />{" "}
            <br />
            <button onClick={() => signOut()}>Sign out</button>
          </div>{" "}
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default GoogleExample;
