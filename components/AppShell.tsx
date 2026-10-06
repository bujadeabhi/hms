"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">

      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
      />

      <div className="main-area">

        <Topbar
          onMenu={() => setOpen(true)}
        />

        {children}

      </div>

    </div>
  );
}