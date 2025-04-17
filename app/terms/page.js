"use client";
import { useEffect, useState } from "react";

export default function Terms() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = "k";
    const domain = "abs.gd";
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <main className="max-w-6xl mx-auto mt-25 px-4">
      <h1 className="text-5xl">Terms of Use for kayleigh.page</h1>
      <p className="italic mt-2">Effective Date: April 10, 2025</p>

      <h2 className="text-3xl mt-8">1. Acceptance of Terms</h2>
      <p className="mt-2">
        By accessing and using{" "}
        <a
          href="https://kayleigh.page"
          className="text-blue-600 underline cursor-pointer hover:text-blue-800 hover:no-underline"
        >
          kayleigh.page
        </a>{" "}
        (&quot;the Website&quot;), you acknowledge that you have read,
        understood, and agree to be bound by these Terms of Use and our
        Privacy Policy. If you do not agree with any part of these terms,
        please do not use the Website.
      </p>

      <h2 className="text-3xl mt-8">2. Use of the Website</h2>
      <p className="mt-2">
        You agree to use the Website for lawful purposes only and in a
        manner consistent with all applicable local, national, and
        international laws and regulations. You are prohibited from:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Violating any laws or regulations.</li>
        <li>
          Infringing upon or violating our intellectual property rights or
          the intellectual property rights of others.
        </li>
        <li>
          Engaging in any conduct that is harmful, fraudulent, deceptive, or
          offensive.
        </li>
        <li>
          Interfering with or disrupting the operation of the Website or
          servers or networks connected to the Website.
        </li>
      </ul>

      <h2 className="text-3xl mt-8">3. Intellectual Property</h2>
      <p className="mt-2">
        All content on the Website, including text, graphics, logos, images,
        and software, is the property of Kayleigh.page or its content
        suppliers and is protected by intellectual property laws.
        Unauthorized use of any content without prior written permission is
        strictly prohibited.
      </p>
      <p className="mt-2">
        Any proposals, presentations, or other materials shared during
        service discussions remain our intellectual property. They may not
        be used, shared, or implemented without our explicit written
        consent.
      </p>

      <h2 className="text-3xl mt-8">4. User-Generated Content</h2>
      <p className="mt-2">
        If you submit or post any content on the Website, including comments
        or feedback, you grant Kayleigh.page a non-exclusive, royalty-free,
        perpetual, and worldwide license to use, reproduce, modify, and
        display such content. You are solely responsible for the content you
        submit and must ensure it does not violate any laws or rights of
        third parties.
      </p>

      <h2 className="text-3xl mt-8">5. Newsletter Subscription</h2>
      <p className="mt-2">
        By providing your email address to subscribe to our newsletter, you
        consent to receive periodic emails from us. You can unsubscribe at
        any time by following the instructions provided in each email or by
        contacting us directly at{" "}
        <a
          href={`mailto:${email}`}
          className="text-blue-600 underline cursor-pointer hover:text-blue-800 hover:no-underline"
        >
          {email}
        </a>
        .
      </p>

      <h2 className="text-3xl mt-8">6. Services offered</h2>
      <p className="mt-2">
        In addition to the content provided on this Website, we offer
        professional web and application development services. Detailed
        information about these services is available upon request. To
        inquire, please contact us at{" "}
        <a
          href={`mailto:${email}`}
          className="text-blue-600 underline cursor-pointer hover:text-blue-800 hover:no-underline"
        >
          {email}
        </a>
        .
      </p>

      <h2 className="text-3xl mt-8">7. User Responsibilities</h2>
      <p className="mt-2">
        <strong>Accurate Information:</strong> When reaching out to us
        regarding our professional services, you agree to provide accurate
        and complete information to facilitate effective communication and
        service provision.
      </p>

      <h2 className="text-3xl mt-8">8. Disclaimers</h2>
      <p className="mt-2">
        The Website is provided on an &quot;as-is&quot; and
        &quot;as-available&quot; basis. We make no warranties, expressed or
        implied, regarding the operation or availability of the Website or
        the information, content, or materials included on the Website. To
        the fullest extent permitted by law, we disclaim all warranties,
        expressed or implied.
      </p>

      <h2 className="text-3xl mt-8">9. Limitation of Liability</h2>
      <p className="mt-2">
        To the fullest extent permitted by law, Kayleigh.page shall not be
        liable for any damages arising out of or in connection with your use
        of the Website. This limitation of liability applies to all damages
        of any kind, including but not limited to direct, indirect,
        incidental, punitive, and consequential damages.
      </p>
      <p className="mt-2">
        Initial communications or inquiries about our professional services
        do not constitute a binding agreement. We are not liable for any
        decisions or actions taken based on these preliminary discussions. A
        formal contract outlining terms, conditions, and obligations must be
        signed by both parties to establish any binding agreement.
      </p>

      <h2 className="text-3xl mt-8">10. Indemnification</h2>
      <p className="mt-2">
        You agree to indemnify and hold harmless Kayleigh.page and its
        affiliates, officers, agents, and employees from any claim or demand
        made by any third party due to or arising out of your breach of
        these Terms of Use or your violation of any law or the rights of a
        third party.
      </p>

      <h2 className="text-3xl mt-8">11. Changes to Terms</h2>
      <p className="mt-2">
        We reserve the right to modify these Terms of Use at any time. Any
        changes will be effective immediately upon posting on the Website.
        Your continued use of the Website after any changes constitutes your
        acceptance of the new Terms of Use.
      </p>

      <h2 className="text-3xl mt-8">12. Governing Law</h2>
      <p className="mt-2">
        These Terms of Use are governed by and construed in accordance with
        the laws of Belgium. Any disputes relating to these terms shall be
        subject to the exclusive jurisdiction of the courts of Belgium.
      </p>

      <h2 className="text-3xl mt-8">13. Contact Information</h2>
      <p className="mt-2">
        For any questions or concerns regarding these Terms of Use, please
        contact us at:
      </p>
      <p className="mt-2">
        <strong>Email:</strong>
        <a
          href={`mailto:${email}`}
          className="text-blue-600 underline cursor-pointer hover:text-blue-800 hover:no-underline"
        >
          {email}
        </a>
      </p>
    </main>
  );
}
