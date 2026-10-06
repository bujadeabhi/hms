"use client";

import { useRouter } from "next/navigation";

import {
  Building2,
  FileText,
  Code2,
  Phone,
  Mail,
  ChevronDown,
  Link,
} from "lucide-react";

import AppShell from "@/components/AppShell";

export default function RegisterHospital() {

  const router = useRouter();
    
  return (
    <AppShell>
      <main className="content">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/dashboard">⌂</Link>
          <span>›</span>
          <Link href="/hospitals">Hospitals</Link>
          <span>›</span>
          <strong>Register Hospital</strong>
        </div>

        {/* Page Title */}
        <div className="title-row">
          <h1>Register Hospital</h1>

          <p>
            Add a new hospital to the MediSphere platform.
          </p>
        </div>

        {/* Stepper */}
        <div className="register-stepper">

          <div className="register-step active">
            <span>1</span>
            <strong>Basic Information</strong>
          </div>

          <div className="step-line"></div>

          <div className="register-step">
            <span>2</span>
            <strong>Address & Location</strong>
          </div>

          <div className="step-line"></div>

          <div className="register-step">
            <span>3</span>
            <strong>Facilities & Departments</strong>
          </div>

          <div className="step-line"></div>

          <div className="register-step">
            <span>4</span>
            <strong>Documents</strong>
          </div>

          <div className="step-line"></div>

          <div className="register-step">
            <span>5</span>
            <strong>Review</strong>
          </div>

        </div>

        {/* Main Content */}
        <div className="register-grid">

          {/* Form */}
          <div className="card">

            <div className="card-body">

              <h2>
                Basic Information
              </h2>

              <div className="form-grid">

                {/* Hospital Name */}
                <div className="field">

                  <label>
                    Hospital Name <span>*</span>
                  </label>

                  <div className="input-wrapper">

                    <Building2 size={19} />

                    <input
                      type="text"
                      placeholder="Enter hospital name"
                    />

                  </div>

                </div>

                {/* Legal Name */}
                <div className="field">

                  <label>
                    Legal Name
                  </label>

                  <div className="input-wrapper">

                    <FileText size={19} />

                    <input
                      type="text"
                      placeholder="Enter legal name"
                    />

                  </div>

                </div>

                {/* Hospital Code */}
                <div className="field">

                  <label>
                    Hospital Code <span>*</span>
                  </label>

                  <div className="input-wrapper">

                    <Code2 size={19} />

                    <input
                      type="text"
                      placeholder="Enter unique code"
                    />

                  </div>

                </div>

                {/* Registration Number */}
                <div className="field">

                  <label>
                    Registration Number
                  </label>

                  <div className="input-wrapper">

                    <FileText size={19} />

                    <input
                      type="text"
                      placeholder="Enter registration number"
                    />

                  </div>

                </div>

                {/* Phone */}
                <div className="field">

                  <label>
                    Phone Number <span>*</span>
                  </label>

                  <div className="phone-input">

                    <span>
                      🇮🇳 +91
                    </span>

                    <input
                      type="tel"
                      placeholder="98765 43210"
                    />

                  </div>

                </div>

                {/* Email */}
                <div className="field">

                  <label>
                    Email <span>*</span>
                  </label>

                  <div className="input-wrapper">

                    <Mail size={19} />

                    <input
                      type="email"
                      placeholder="Enter email address"
                    />

                  </div>

                </div>

                {/* Type */}
                <div className="field">

                  <label>
                    Type <span>*</span>
                  </label>

                  <div className="select-wrapper">

                    <Building2 size={19} />

                    <select>

                      <option value="">
                        Select hospital type
                      </option>

                      <option>
                        Multispeciality Hospital
                      </option>

                      <option>
                        General Hospital
                      </option>

                      <option>
                        Clinic
                      </option>

                      <option>
                        Government Hospital
                      </option>

                    </select>

                    <ChevronDown size={18} />

                  </div>

                </div>

                {/* Ownership */}
                <div className="field">

                  <label>
                    Ownership <span>*</span>
                  </label>

                  <div className="select-wrapper">

                    <Building2 size={19} />

                    <select>

                      <option value="">
                        Select ownership type
                      </option>

                      <option>
                        Private
                      </option>

                      <option>
                        Government
                      </option>

                      <option>
                        Trust
                      </option>

                      <option>
                        Charitable
                      </option>

                    </select>

                    <ChevronDown size={18} />

                  </div>

                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="form-actions">

              <Link
                href="/hospitals"
                className="btn"
              >
                Cancel
              </Link>

              <Link
                href="/hospitals/register/address"
                className="btn primary"
              >
                Next →
              </Link>

            </div>

          </div>

          {/* Right Information Panel */}
          <div className="card info-panel">

            <div className="hospital-illustration">

              <div className="hospital-cloud"></div>

              <div className="hospital-building">

                <div className="hospital-plus">
                  +
                </div>

                <div className="hospital-windows">

                  {Array.from({
                    length: 12
                  }).map((_, index) => (
                    <span key={index}></span>
                  ))}

                </div>

                <div className="hospital-door"></div>

              </div>

            </div>

            <h3>
              Create a better
              <br />
              healthcare ecosystem
            </h3>

            <p>
              Register and manage hospitals
              across the platform.
            </p>

          </div>

        </div>

      </main>
    </AppShell>
  );
}