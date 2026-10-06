"use client";

import Link from "next/link";
import AppShell from "@/components/AppShell";

export default function AddressPage() {
  return (
    <AppShell>

      <main className="content">

        {/* Breadcrumb */}

        <div className="breadcrumb">

          <Link href="/dashboard">
            Home
          </Link>

          <span>›</span>

          <Link href="/hospitals">
            Hospitals
          </Link>

          <span>›</span>

          <strong>
            Register Hospital
          </strong>

        </div>


        {/* Title */}

        <div className="title-row">

          <h1>
            Register Hospital
          </h1>

          <p>
            Add a new hospital to the MediSphere platform.
          </p>

        </div>


        {/* Stepper */}

        <div className="register-stepper">

          <Link
            href="/hospitals/register"
            className="register-step completed"
          >
            <span>✓</span>
            <strong>
              Basic Information
            </strong>
          </Link>


          <div className="step-line"></div>


          <div className="register-step active">

            <span>
              2
            </span>

            <strong>
              Address & Location
            </strong>

          </div>


          <div className="step-line"></div>


          <div className="register-step">

            <span>
              3
            </span>

            <strong>
              Facilities & Departments
            </strong>

          </div>


          <div className="step-line"></div>


          <div className="register-step">

            <span>
              4
            </span>

            <strong>
              Documents
            </strong>

          </div>


          <div className="step-line"></div>


          <div className="register-step">

            <span>
              5
            </span>

            <strong>
              Review
            </strong>

          </div>

        </div>


        {/* Main */}

        <div className="register-grid">


          {/* Address Form */}

          <div className="card">

            <div className="card-body">

              <h2>
                Address & Location
              </h2>


              <div className="form-grid">


                {/* Address */}

                <div
                  className="field"
                  style={{
                    gridColumn: "1 / -1"
                  }}
                >

                  <label>
                    Full Address <span>*</span>
                  </label>

                  <textarea
                    className="address-textarea"
                    placeholder="Enter complete hospital address"
                  />

                </div>


                {/* City */}

                <div className="field">

                  <label>
                    City <span>*</span>
                  </label>

                  <div className="input-wrapper">

                    <input
                      type="text"
                      placeholder="Enter city"
                    />

                  </div>

                </div>


                {/* State */}

                <div className="field">

                  <label>
                    State <span>*</span>
                  </label>

                  <div className="input-wrapper">

                    <input
                      type="text"
                      placeholder="Enter state"
                    />

                  </div>

                </div>


                {/* PIN */}

                <div className="field">

                  <label>
                    PIN Code <span>*</span>
                  </label>

                  <div className="input-wrapper">

                    <input
                      type="text"
                      placeholder="Enter PIN code"
                    />

                  </div>

                </div>


                {/* Latitude */}

                <div className="field">

                  <label>
                    Latitude
                  </label>

                  <div className="input-wrapper">

                    <input
                      type="text"
                      placeholder="e.g. 18.5204"
                    />

                  </div>

                </div>


                {/* Longitude */}

                <div className="field">

                  <label>
                    Longitude
                  </label>

                  <div className="input-wrapper">

                    <input
                      type="text"
                      placeholder="e.g. 73.8567"
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* Buttons */}

            <div className="form-actions">

              <Link
                href="/hospitals/register"
                className="btn"
              >
                ← Back
              </Link>


              <Link
                href="/hospitals/register/facilities"
                className="btn primary"
              >
                Next →
              </Link>

            </div>

          </div>


          {/* Right Panel */}

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
              Make hospitals
              <br />
              easy to find
            </h3>


            <p>
              Add accurate location information
              so users can discover the hospital
              and reach it easily.
            </p>

          </div>

        </div>

      </main>

    </AppShell>
  );
}