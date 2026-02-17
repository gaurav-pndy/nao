"use client";

export default function RefundPolicyPage() {
  return (
    <section className="lg:pt-32 py-20 bg-[#edf2f8]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="">Last updated on 19 January 2026</p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 space-y-8 text-gray-800 leading-relaxed">
          <p>
            Centre for Scientific Outreach{" "}
            <strong> (“CSO”, “we”, “us”) </strong> is a not-for-profit
            organization working to make science and technology accessible to
            all. <br />
            This Refund & Cancellation Policy explains how refunds (if any) are
            handled for payments made on/through CSO’s website.
          </p>
          {/* Section */}
          <PolicySection title="1. Payments are processed via a payment gateway">
            <p>
              CSO does not collect or store card/banking details on its own
              servers. Payments are processed through a third-party payment
              gateway (currently <strong> Zoho Payments </strong>, as referenced
              in CSO’s Terms & Conditions).
            </p>

            <p>
              Where a refund is approved, it is typically returned to the{" "}
              <strong>original payment method</strong> used for the transaction.
            </p>
          </PolicySection>

          <PolicySection title="2. What this policy covers">
            <p>This policy applies to payments made toward:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li> Donations to support CSO’s mission</li>
              <li>
                {" "}
                Registrations/fees for CSO programs, workshops, events,
                competitions, or similar activities (where CSO charges a fee)
              </li>
              <li>
                {" "}
                Any other paid offering listed on CSO’s website/payment link
                (where applicable)
              </li>
            </ul>

            <p>
              Because CSO runs limited-seat programs and commits costs in
              advance (venue, materials, facilitators, logistics), refunds are
              restricted and may not always be possible.
            </p>
          </PolicySection>

          <PolicySection title="3. Refund rules by payment type">
            <h3 className="font-semibold text-lg mt-8">A) Donations</h3>
            <p>
              Donations are generally non-refundable, because they are used to
              fund ongoing work. Refunds for donations are considered only in
              limited situations, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li> Duplicate transaction</li>
              <li> Incorrect amount charged due to a technical error</li>
              <li>
                {" "}
                Payment deducted but transaction failed / no confirmation
                received
              </li>
            </ul>

            <p>
              Time window: Submit a request within 7 days of the transaction
              date.
            </p>

            <h3 className="font-semibold text-lg mt-8">
              B) Application / Entrance / Assessment fees (if applicable)
            </h3>

            <p>
              If any CSO program uses an application, assessment, or entrance
              fee, it is non-refundable unless:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li> the amount was charged more than once, or</li>
              <li> the payment was deducted due to a technical error.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-8">
              C) Program / Workshop / Event registration fees (paid seats)
            </h3>

            <p>If you paid to reserve a seat in a program/workshop/event:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                {" "}
                Full refund if you request cancellation within 7 days of payment
                and before the program/event begins.
              </li>
              <li>
                {" "}
                If you request cancellation after 7 days of payment, or after
                hookup/seat planning has started (whichever comes first), CSO
                may approve a partial refund or no refund, depending on the
                situation and costs already committed.
              </li>

              <li>
                No refund once the program/event has started, or once you have
                attended/participated in any part of it (including an
                orientation/first session), unless CSO cancels the
                program/event.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-8">
              D) If CSO cancels or reschedules
            </h3>

            <p>If CSO cancels a paid program/event, you can choose either:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li> a full refund, or</li>
              <li>
                {" "}
                transfer your registration to the rescheduled date (if offered).
              </li>
            </ul>

            <p>
              If CSO reschedules and you cannot attend the new date, CSO may
              issue a refund (or a credit/transfer option), depending on the
              nature of the program and vendor commitments.
            </p>
          </PolicySection>

          <PolicySection
            title="4. Exceptions (case-by-case)
"
          >
            <p>CSO may consider exceptions in genuine cases such as:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li> Medical emergency (with reasonable documentation)</li>
              <li>
                {" "}
                Situations where participation becomes impossible due to
                circumstances outside your control
              </li>
            </ul>

            <p>Approval is discretionary and evaluated case-by-case.</p>
          </PolicySection>

          <PolicySection title="5. Deductions & charges">
            <p>If a refund is approved:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                {" "}
                Payment gateway charges / bank charges (if any) may be deducted
                and may not be refundable.
              </li>
              <li>
                {" "}
                CSO may also deduct reasonable administrative/processing costs
                where applicable (especially for seat-based programs).
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="6. How to request a refund">
            <p>
              To request a refund, email us from the same email address used
              during payment/registration.
              <br />
              Email: info@thecso.in
              <br />
              Subject line (recommended): “Refund Request – [Transaction ID]”
              Include:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li> Full name</li>
              <li> Registered email and phone number</li>

              <li> Transaction ID / payment reference</li>

              <li> Date and amount paid</li>

              <li> Purpose of payment (donation / workshop / program name)</li>

              <li> Clear reason for requesting a refund</li>

              <li>
                {" "}
                Any relevant proof (screenshots, receipts, medical note, etc.)
              </li>
            </ul>

            <p>
              CSO may contact you to verify details before initiating any
              refund.
            </p>
          </PolicySection>

          <PolicySection title="7. Refund timeline">
            <p>
              If approved, refunds are typically processed within 30 working
              days from the date CSO confirms eligibility and completes
              verification (actual timelines can vary by bank/payment method).
            </p>
          </PolicySection>

          <PolicySection title="8. Contact">
            <p>For questions about this policy or your payment:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li> Email: info@thecso.in</li>
              <li> Phone: +91 92112 29927</li>

              <li>
                {" "}
                Address: B-1, Third Floor, Greater Kailash Enclave – II, New
                Delhi - 110048
              </li>
            </ul>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

/* Helper Component */
function PolicySection({ title, children }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold text-[#2d333a]">
        {title}
      </h2>
      {children}
    </div>
  );
}
