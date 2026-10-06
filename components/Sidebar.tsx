"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Building2,
  ShieldCheck,
  Users,
  CalendarDays,
  CreditCard,
  Grid2X2,
  FileBarChart,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/hospitals",
    label: "Hospitals",
    icon: Building2,
  },
  {
    href: "/verifications",
    label: "Verifications",
    icon: ShieldCheck,
  },
  {
    href: "/patients",
    label: "Patients",
    icon: Users,
  },
  {
    href: "/appointments",
    label: "Appointments",
    icon: CalendarDays,
  },
  {
    href: "/subscriptions",
    label: "Subscriptions",
    icon: CreditCard,
  },
  {
    href: "/modules",
    label: "Modules",
    icon: Grid2X2,
  },
  {
    href: "/reports",
    label: "Reports",
    icon: FileBarChart,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {

  const pathname = usePathname();

  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>

        <div className="brand">

          <div className="brand-mark">
            +
          </div>

          <span>
            MediSphere
          </span>

        </div>

        <nav className="nav">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (
                item.href === "/hospitals" &&
                pathname.startsWith("/hospitals")
              );

            return (

              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : ""}
                onClick={onClose}
              >

                <Icon size={21} />

                <span>
                  {item.label}
                </span>

              </Link>

            );

          })}

        </nav>

      </aside>

      <div
        className={`mobile-overlay ${
          open ? "show" : ""
        }`}
        onClick={onClose}
      />

    </>
  );
}