"use client";

import { useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";

export default function HospitalsPage() {

  const router = useRouter();

  return (
    <AppShell>

      <main className="content">

        <h1>Hospitals</h1>

        <p>
          Manage hospitals here.
        </p>

        <button
          type="button"
          className="btn primary"
          onClick={() =>
           router.push("/hospitals/register")
          }
        >
          Register Hospital
        </button>

      </main>

    </AppShell>
  );
}