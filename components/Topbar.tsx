"use client";

import {
  Bell,
  CircleHelp,
  Menu,
  ChevronDown,
  Search,
} from "lucide-react";

export default function Topbar({
  onMenu,
}: {
  onMenu: () => void;
}) {

  return (

    <header className="topbar">

      <button
        className="mobile-menu"
        onClick={onMenu}
      >
        <Menu size={24} />
      </button>

      <div className="search">

        <Search size={19} />

        <input
          type="text"
          placeholder="Search hospitals, patients, or anything..."
        />

      </div>

      <div className="top-actions">

        <button className="icon-btn">

          <Bell size={21} />

          <span className="badge">
            3
          </span>

        </button>

        <button className="icon-btn help">

          <CircleHelp size={21} />

        </button>

        <div className="profile">

          <div className="avatar">
            RS
          </div>

          <div>

            <strong>
              Rajesh Sharma
            </strong>

            <small>
              Super Administrator
            </small>

          </div>

          <ChevronDown size={16} />

        </div>

      </div>

    </header>

  );
}