import { auth } from "@/auth";
import React from "react";
import UserMenuGuest from "./user-menu-guest";
import UserMenuAuth from "./user-menu-auth";

const UserMenu = async () => {
  //!auth();==> auth.js de export edilen auth
  const session = await auth();

  return (
    <div>
      {session?.user?.role ? (
        <UserMenuAuth session={session} />
      ) : (
        <UserMenuGuest />
      )}
    </div>
  );
};

export default UserMenu;

//!burada session da bir user varsa ona göre menü gösterilecek
//!session olan bilgiyi almak için props olarak gönderdik
