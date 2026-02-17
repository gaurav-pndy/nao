"use client";

export default function TermsPage() {
  return (
    <section className="lg:pt-32 py-20 bg-[#edf2f8]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange mb-4">
            Terms & Conditions
          </h1>
          <p className="">
            This agreement describes your rights and responsibilities with
            regards to use of CSO website. <br />
            Please read it carefully. By choosing to enter our website, you have
            agreed to our Terms of Use by default
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 space-y-8 text-gray-800 leading-relaxed">
          {/* Section */}
          <PolicySection title="1. Acceptance of Terms of Use for the Website">
            <p>
              These website terms and conditions of use (the "Terms") apply to
              your use of (a) the websites operated by Centre for Scientific
              Outreach [CSO], including and all its subdomains, without
              limitation, together with all other websites operated by CSO group
              of Companies and (b) any and all information available on the
              Website, including, data, text, software, sound, photographs,
              graphics, video, messages, and other materials ("Content").
            </p>

            <p>
              You must read the Terms carefully. CSO provides the Website to you
              subject to the Terms. The Terms are entered into by and between
              you and CSO, and you accept them by using the Website in any
              manner. If you do not agree to all of the Terms, do not use the
              Website.
            </p>

            <p>
              The Website is made available for your personal use, educational
              advancement, or professional development. Any materials that you
              download or copy for your own use must maintain all copyright or
              other notices. Except as approved in writing by CSO,
              redistribution, re-transmission, commercial exploitation, or other
              uses of the Website or the Content are strictly prohibited.
            </p>

            <p>
              CSO makes no representation that the Website or the services
              available through the Website are appropriate or available for use
              in all locations. The Website and CSO products and services may
              not be available in your location.
            </p>
          </PolicySection>

          <PolicySection title="2. Notices; Modification and Termination of Services; Amendment of the Terms">
            <p>
              CSO may provide notice to you regarding changes to the Website or
              these Terms via e-mail, regular mail, or posting notices or links
              to notices on the Website. CSO reserves the right at any time in
              its sole discretion to modify, suspend or terminate the services
              provided through the Website (or any part thereof), and / or your
              use of or access to them, with or without notice. CSO may also
              delete, or bar access to or use of, all related Content and files.
            </p>
            <p>
              CSO will not be liable to you or any third-party for any
              modification, suspension or termination of the services or Content
              provided through the Website, or loss of related information. You
              have sole responsibility for adequate protection and backup of
              data and / or equipment used in connection with the Website.
            </p>
            <p>
              CSO may amend these Terms at any time by posting the amended terms
              on the Website.
            </p>
            <p>
              If you are dissatisfied with the services provided through the
              Website, your sole and exclusive remedy is to discontinue your use
              of the Website.
            </p>
          </PolicySection>

          <PolicySection title="3. Registration Data">
            <p>In consideration of your use of the Website, you agree to:</p>
            <ul className=" pl-6 space-y-1">
              <li>
                {" "}
                (a) provide accurate, current, and complete information
                requested by the contact form on the Website (the "Registration
                Data");
              </li>
              <li>
                {" "}
                (b) maintain the security of your password and identification
                (If need be);
              </li>
              <li>
                {" "}
                (c) maintain and promptly update the Registration Data, and any
                other information you provide to CSO, and keep all such
                information accurate, current, and complete; and
              </li>
              <li>
                {" "}
                (d) accept all risks of unauthorized access to all such
                information. You further consent and authorize us to verify your
                Registration Data.
              </li>
            </ul>

            <p>
              CSO's use and disclosure of your Registration Data is governed by
              CSO's Privacy Policy.
            </p>
          </PolicySection>

          <PolicySection title="4. Prohibited Activities">
            <p>You agree that you will not use the Website to:</p>

            <ul className=" pl-6 space-y-1">
              <li> (A) transmit spam, bulk or unsolicited communications;</li>
              <li>
                {" "}
                (B) pretend to be CSO or someone else, or spoof CSO's or someone
                else's identity;
              </li>
              <li>
                {" "}
                (C) forge headers or otherwise manipulate identifiers (including
                URLs) in order to disguise the origin of any Content transmitted
                through the Website;
              </li>
              <li>
                {" "}
                (D) misrepresent your affiliation with a person or entity;
              </li>
              <li>
                {" "}
                (E) disrupt the normal flow of dialogue or otherwise act in a
                manner that negatively affects other users' ability to use the
                Website;
              </li>
              <li>
                {" "}
                (F) engage in activities that would violate any fiduciary or
                contractual relationship; any applicable local, state, national,
                or international law; or any regulations having the force of
                law, including but not limited to operating an illegal lottery
                or gambling operation, stalking or making threats of harm; or
              </li>
              <li>
                {" "}
                (G) collect or store personal data about other users of the
                Website unless specifically authorized by such users.
              </li>
            </ul>

            <p>
              In using the interactive features of the Website, you agree not to
              upload, post or otherwise transmit via the Website Content that:
            </p>

            <ul className=" pl-6 space-y-1">
              <li>
                (A) is inaccurate, harmful, obscene, pornographic, defamatory,
                racist, violent, offensive, or harassing; causes duress,
                distress, or discomfort to another; or is otherwise
                objectionable to CSO or other users of the Website;
              </li>
              <li>
                {" "}
                (B) includes unauthorized disclosure of the personal information
                of third parties;
              </li>
              <li>
                {" "}
                (C) violates or infringes anyone's intellectual property rights;
              </li>
              <li>
                (D) contains software viruses or any other computer code, files
                or programs designed to interrupt, destroy or limit the
                functionality of any computer software or hardware or
                telecommunications equipment;
              </li>
              <li>
                {" "}
                (E) is a form of advertising not approved in advance in writing
                by CSO;
              </li>
              <li>
                {" "}
                (F) constitutes electioneering, such as exhortations to vote for
                or against any candidate for public office; or
              </li>
              <li>
                {" "}
                (G) is injurious to the interests of CSO or other users of the
                Website.
              </li>
            </ul>

            <p>
              Except where expressly stated to the contrary, CSO reserves the
              right to edit or remove any Content from the Website at any time,
              at its sole discretion.
            </p>
          </PolicySection>

          <PolicySection title="5. Security Measures">
            <p>
              You are prohibited from violating or attempting to circumvent the
              security of the Website, including but not limited to:
            </p>
            <ul className=" pl-6 space-y-1">
              <li>
                {" "}
                (A) accessing data not intended for users or logging into a
                server or account which you are not authorized to access;
              </li>
              <li>
                {" "}
                (B) attempting to probe, scan or test the vulnerability of a
                system or network or to breach security or authentication
                measures without proper authorization;
              </li>
              <li>
                {" "}
                (C) attempting to interfere with service to any user, host or
                network;
              </li>
              <li>
                {" "}
                (D) forging any TCP / IP packet header or any part of the header
                information in any e-mail or posting;
              </li>
              <li>
                {" "}
                (E) using manual or automated software, devices, scripts, robots
                or other means or processes to access, "scrape," "crawl," or
                "spider" any Content contained on the Website;
              </li>
              <li>
                {" "}
                (F) introducing viruses, worms, software, Trojan horses or other
                similar harmful code into the Website; or
              </li>
              <li>
                (G) engaging in "framing," "mirroring," or otherwise simulating
                the appearance or function of the Website.
              </li>
            </ul>

            <p>
              Violations of system or network security may result in civil or
              criminal liability.
            </p>

            <p>
              You agree that it is your responsibility to install anti-virus
              software and related protections against viruses, Trojan horses,
              worms, time bombs, cancelbots or other computer programming
              routines or engines that are intended to damage, destroy, disrupt
              or otherwise impair a computer's functionality or operation.
            </p>

            <p>
              CSO will investigate occurrences which may involve violations of
              system or network security and may involve and may cooperate with
              law enforcement authorities in prosecuting users who are involved
              in these violations.
            </p>
          </PolicySection>

          <PolicySection title="6. Electronic Payments">
            <p>
              Any payment link available on the website is not owned or
              controlled by Centre for Scientific Outreach and contents thereof
              are not sponsored, endorsed or approved by the company. Payment
              gateway is handled by Zoho Payments. CSO does not vouch or
              guarantee or take any responsibility for any of the contents of
              the said website including transactions, product, services or
              other items offered through the website. You will access this site
              solely for the purpose of online payment of course fee and you
              acknowledge that any reliance on any opinion, advice, statement,
              memorandum, or information available on the site shall be at your
              sole risk and consequences
            </p>
          </PolicySection>

          <PolicySection title="7. Disclaimer of Warranties">
            <p>
              You expressly agree that CSO has no responsibility for or control
              over the Content that you or other Website users upload, post or
              otherwise transmit via the Website. CSO makes no representation
              that your use of the Website will comply with applicable laws.
              Additionally, we do not represent, warrant or guarantee the
              truthfulness, accuracy, quality or reliability of any of the
              Content posted, displayed, linked to or otherwise transmitted via
              the Website.
            </p>
            <p>
              We also do not endorse any opinions expressed in or through any
              Content available on the Website. You agree that you must evaluate
              and bear all risks associated with your use of any Content,
              including any reliance on the accuracy, completeness or usefulness
              of the Content.
            </p>

            <p>
              YOUR USE OF THE WEBSITE IS AT YOUR SOLE RISK UNLESS OTHERWISE
              EXPLICITLY STATED. THE WEBSITE, INCLUDING ALL SERVICES AND
              CONTENTS PROVIDED ON AN "AS IS," "AS AVAILABLE," AND "WITH ALL
              FAULTS" BASIS. CSO DISCLAIMS ALL EXPRESS OR IMPLIED CONDITIONS,
              REPRESENTATIONS, AND WARRANTIES OF ANY KIND, INCLUDING ANY IMPLIED
              WARRANTY OR CONDITION OF MERCHANT-ABILITY, SATISFACTORY QUALITY,
              FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. CSO MAKES NO
              REPRESENTATIONS, WARRANTIES, CONDITIONS OR GUARANTEES AS TO THE
              USEFULNESS QUALITY, SUITABILITY, TRUTH, ACCURACY OR COMPLETENESS
              OF THE WEBSITE.
            </p>

            <p>
              CSO MAKES NO WARRANTY OR REPRESENTATION THAT: (a) ACCESS TO THE
              WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (b)
              THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITE WILL
              BE ACCURATE OR RELIABLE; (c) THE QUALITY OF ANY PRODUCTS,
              SERVICES, CONTENT, INFORMATION OR OTHER MATERIAL PURCHASED OR
              OBTAINED FROM THE WEBSITE WILL MEET YOUR EXPECTATIONS OR
              REQUIREMENTS; OR (d) ANY ERRORS ON THE WEBSITE WILL BE CORRECTED.
            </p>

            <p>
              YOU ASSUME ALL RISK FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS
              OF DATA THAT RESULTS FROM OBTAINING ANY CONTENT FROM THE WEBSITE,
              INCLUDING ANY DAMAGES RESULTING FROM COMPUTER VIRUSES.
            </p>
          </PolicySection>

          <PolicySection title="8. Limitation of Liability">
            <p>
              The Content of the Website does not constitute professional or
              legal advice and is not intended for use in the practical business
              / Aviation conditions. The Content is not comprehensive and should
              not be used as a substitute for consultation with a licensed
              Aviation professional or other traditional source of Aviation
              information. The mention of any product, service, organization,
              activity, or therapy on the Website should not be construed as an
              CSO endorsement. CSO assumes no responsibility for any injury or
              damage to persons or property arising out of or related to the
              Content of the Website.
            </p>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, CSO DISCLAIMS AND WILL NOT
              BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL,
              CONSEQUENTIAL OR EXEMPLARY DAMAGES (INCLUDING, WITHOUT LIMITATION,
              LOSS OF BUSINESS, REVENUE, PROFITS, GOODWILL, USE, DATA ,
              ELECTRONICALLY TRANSMITTED ORDERS OR OTHER ECONOMIC ADVANTAGE)
              ARISING OUT OF OR IN CONNECTION WITH THE WEBSITE, EVEN IF CSO HAS
              PREVIOUSLY BEEN ADVISED OF, OR REASONABLY COULD HAVE FORESEEN, THE
              POSSIBILITY OF SUCH DAMAGES, HOWEVER THEY ARISE, WHETHER IN BREACH
              OF CONTRACT OR IN TORT (INCLUDING NEGLIGENCE), INCLUDING WITHOUT
              LIMITATION DAMAGES DUE TO: (a) THE USE OF OR THE INABILITY TO USE
              THE WEBSITE; (b) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND
              SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION, OR SERVICES
              PURCHASED OR OBTAINED, OR MESSAGES RECEIVED OR TRANSACTIONS
              ENTERED INTO, THROUGH, OR FROM THE WEBSITE; (c) STATEMENTS OR
              CONDUCT OF ANY THIRD PARTY ON THE WEBSITE, INCLUDING WITHOUT
              LIMITATION UNAUTHORIZED ACCESS TO OR ALTERATION OF TRANSMISSIONS
              OR DATA, MALICIOUS OR CRIMINAL BEHAVIOR OR FALSE OR FRAUDULENT
              TRANSACTIONS; OR (d) CONTENT OR INFORMATION YOU MAY DOWNLOAD, USE,
              MODIFY OR DISTRIBUTE.
            </p>

            <p>
              To the extent that any jurisdiction does not allow the exclusion
              or limitation of direct, incidental, or consequential damages,
              portions of the above limitation or exclusion may not apply.
            </p>

            <p>
              In the event you have any dispute with one or more third parties
              as a result of your use of the Website, or are in any way damaged
              as a result of any third party in connection therewith, you hereby
              release and covenant not to sue or otherwise make a claim, demand
              or file any legal action or institute any legal or regulatory
              proceedings against us, our affiliates, officers, directors,
              employees, agents, representatives and suppliers from, for any
              claims, actions, demands or damages (whether direct, indirect ,
              special, incidental or consequential), of whatever kind or nature,
              known or unknown, suspected or unsuspected, whether foreseeable or
              not, disclosed or undisclosed.
            </p>
          </PolicySection>

          <PolicySection title="9. Intellectual Property Rights and Use of the Content">
            <p>
              The Website, including without limitation all Content and all
              intellectual property rights in and to the same, are owned by or
              licensed to CSO or our third-party vendors. Except as expressly
              authorized by CSO or by third party Content providers, you agree
              not to reproduce, modify, rent, lease, loan, sell, distribute,
              mirror, frame, republish, download, transmit or create derivative
              works of the Content, in whole or in part, by any means. You must
              not modify, de-compile or reverse engineer any software CSO
              discloses to you, and you must not remove or modify any copyright
              or trademark notice, or other notice of ownership.
            </p>

            <p>
              Unless explicitly stated herein, nothing in these Terms shall be
              construed as conferring any license to use the Content or any
              other CSO-owned or licensed intellectual property, whether by
              estoppel, implication or otherwise. You may not do or allow anyone
              else to do anything with the Content which is not specifically
              permitted under the Terms. Permission is granted to display, copy,
              distribute, and download Content owned by CSO on this Website
              provided that: (a) the copyright notice pertaining to the Content
              remains, and a permission notice (eg, "Used with permission") is
              added to such Content; (b) the use of such Content is solely for
              personal informational and educational use and not for commercial
              purposes, and is not used to imply that CSO endorses, sponsors or
              is affiliated with any product or service; (c) such Content will
              not be copied or posted on any networked computer or published in
              any medium, except as explicitly permitted by valid permission or
              license covering such materials; and (d) no modifications are made
              to such Content. This permission terminates automatically without
              notice if you breach any of the terms or conditions in these
              Terms. Upon termination, you must immediately destroy any
              downloaded and / or printed Content.
            </p>

            <p>
              News services may use the materials posted in the CSO Photo
              Gallery solely for the purpose of disseminating information and
              other reporting purposes but may not use the materials posted in
              the CSO Photo Gallery to imply that CSO endorses, sponsors or is
              in any way affiliated with any product or service.
            </p>

            <p>
              "CSO Trademark" means all names, marks, brands, logos, designs,
              trade dress, slogans, and other designations CSO uses in
              connection with its products and services. You may not remove or
              alter any CSO Trademark, or co-brand your own products or material
              with CSO Trademark, without CSO 's prior written consent, which
              can be granted or denied at CSO' s sole discretion. You
              acknowledge CSO 's rights in the CSO Trademark, and you agree not
              to incorporate any CSO Trademark into your trademarks, service
              marks, company names, Internet addresses, domain names or any
              other similar designations, for use on or in connection with your
              or any third party's products, services or information.
            </p>

            <p>
              CSO does not claim ownership of any content that you place on the
              Website and shall have no obligation of any kind with respect to
              such content. Any content that you provide in connection with this
              Website shall be deemed to be provided on a non-confidential
              basis. CSO shall be free to use, reproduce, modify, publish and /
              or disseminate such content on an unrestricted basis for any
              purpose, and you grant CSO and all other users of the Website an
              irrevocable, perpetual, worldwide, royalty-free, transferable,
              nonexclusive license to use, reproduce, modify, distribute,
              transmit, display, perform, adapt, resell, and publish such
              content (including in digital form). You represent and warrant
              that you have proper authorization for the worldwide transfer and
              processing among CSO, its affiliates, and third-party vendors of
              any information or content that you may provide to CSO through the
              Website.
            </p>
          </PolicySection>

          <PolicySection title="10. Identification of Authorised Representation for Receipt of Copyright Infringement Notices">
            <p>
              CSO is committed to respecting others' intellectual property
              rights, and we ask our users to do the same. If you believe that
              your work has been copied in a way that constitutes copyright
              infringement on the Website, please send a written notice of
              claimed copyright infringement to CSO's authorised Representative:{" "}
              <br />
              Praveen Sankaran <br />
              E-mail: hello@thecso.in
            </p>

            <p>In your notice, please provide the following information:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                {" "}
                An electronic or physical signature of the person authorized to
                act on behalf of the owner of the copyright interest.
              </li>
              <li>
                A description of the copyrighted work that you claim has been
                infringed upon.
              </li>
              <li>
                A description of where the material that you claim is infringing
                is located on the Website, including but not limited to the URL.
              </li>
              <li>Your address, telephone number, and e-mail address.</li>
              <li>
                A statement by you that you have a good-faith belief that the
                disputed use is not authorized by the copyright owner, its
                agent, or the law.
              </li>
              <li>
                A statement by you, made under penalty of perjury, that the
                above information in your notice is accurate and that you are
                the copyright owner or authorized to act on the copyright
                owner's behalf.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="11. Confidentiality of CSO Information">
            <p>
              You may obtain direct access via the Website to certain
              confidential information of CSO and certain third-parties that
              should reasonably be understood as confidential ("Confidential
              Information"). You must hold Confidential Information in strict
              confidence. Title to Confidential Information remains with CSO and
              any third-party providers of Confidential Information. Upon
              termination of the Terms or CSO's written request, you must cease
              use of Confidential Information and return or destroy it.
            </p>

            <p>
              The Terms impose no obligation upon you with respect to
              Confidential Information that you can establish by legally
              sufficient evidence: (a) you possessed prior to your receipt from
              CSO, without an obligation to maintain its confidentiality; (b) is
              or becomes generally known to the public through no act or
              omission by you, or otherwise without violation of the Terms; (c)
              you obtained from a third party who had the right to disclose it,
              without an obligation to keep such information confidential; or
              (d) you independently developed without the use of Confidential
              Information and without the participation of individuals who have
              had access to Confidential Information. In addition, if, in
              response to a valid order by a court or other governmental body,
              as otherwise required by law, or as necessary to establish the
              rights of either party under these Terms, you are required to
              disclose Confidential Information, then you may do so, but only to
              the minimum extent required and only after prior notice to CSO
              adequate to afford CSO the opportunity to object to the
              disclosure.
            </p>
          </PolicySection>
          <PolicySection title="12. Indemnity">
            <p>
              You agree to defend, indemnify, and hold CSO and its subsidiaries,
              affiliates, members, officers, directors, agents, licencors,
              suppliers, other partners, employees, and representatives harmless
              from any and all losses, expenses, costs or damages (including
              reasonable attorneys 'fees, expert fees' and other reasonable
              costs of litigation) arising from, incurred as a result of or in
              any manner related to any claim, demand or action based upon
              content uploaded by you to the Website; your use of or connection
              to the Website (including any use by you on behalf of your
              employer and any use by third parties under your accounts); your
              violation of the Terms; or your violation of any applicable laws
              or rights of another. CSO may, if necessary, participate in the
              defense of any such claim or action and any negotiations for its
              settlement or compromise. No settlement which may adversely affect
              CSO's rights or obligations shall be made without CSO 's prior
              written approval. CSO reserves the right, at CSO's own expense and
              on notice to you, to assume exclusive defense and control of any
              such claim or action; in such case your corresponding
              indemnification obligation will end.
            </p>
          </PolicySection>
          <PolicySection title="13. Advertisements and Promotions">
            <p>
              CSO may run advertisements and promotions from third parties on
              the Website. Your correspondence or business dealings with, or
              participation in promotions of, advertisers other than CSO found
              on or through the Website, including payment and delivery of
              related goods or services, and any other terms, conditions,
              warranties or representations associated with such dealings, are
              solely between you and such advertiser. CSO is not responsible or
              liable for any loss or damage of any sort arising from or relating
              to any such dealings or as the result of the presence of such
              non-CSO advertisers on the Website.
            </p>
          </PolicySection>
          <PolicySection title="14. Links and Third-Party Services">
            <p>
              You may find links to other Internet sites or resources on the
              Website, and portions of the Website may identify specific
              Aviation professionals by name, address, or affiliation. You
              acknowledge and agree that (a) CSO is not responsible for the
              availability of such external sites or resources, (b) all links
              and identifications are provided solely for your convenience and
              for other informational purposes, and (c) CSO does not endorse and
              is not responsible or liable for any content, advertising,
              products, or other materials on or available from such sites,
              resources, or aviation professionals or their affiliations.
              Without limiting the foregoing, CSO will not be responsible or
              liable, directly or indirectly, for any actual or alleged damage
              or loss caused by or in connection with the use of or reliance on
              any such content, goods or services available on or through any
              such site or resource or from identified medical professionals or
              their affiliations.
            </p>
          </PolicySection>
          <PolicySection title="15. CSO's Privacy Policy">
            <p>
              You consent to the collection, processing, and storage by CSO of
              personal information about you in accordance with the terms of CSO
              's Privacy Policy. You agree to comply with all applicable laws
              and regulations, and the terms of CSO's Privacy Policy, with
              respect to any access, use, and / or submission by you of any
              personal information in connection with the Website.
            </p>
          </PolicySection>
          <PolicySection title="16. General Terms">
            <p>
              Services, Content, and products derived or obtained from this
              Website may be subject to the export laws of the Republic of India
              and the export or import laws of other countries. You agree to
              comply strictly with all such laws and, in particular, shall:
            </p>

            <ul className=" pl-6 space-y-1">
              <li>
                {" "}
                (a) obtain any export, reexport or import authorizations
                required by the Republic of India or your local laws;
              </li>
              <li>
                {" "}
                (b) not use Services, Content or products from this Website to
                design, develop or produce missile, chemical / biological, or
                nuclear weaponry; and
              </li>
              <li>
                {" "}
                (c) not provide Services, Content or products from this Website
                to prohibited countries an d entities identified in the Indian
                export regulations.
              </li>
            </ul>

            <p>
              The Terms constitute the entire agreement between you and CSO
              relating to their subject matter, and cancel and supersede any
              prior versions of the Terms. No modification to the Terms will be
              binding, unless in writing and signed by an authorized CSO
              representative. You may not assign, sub license, delegate or
              otherwise transfer the Terms or any right granted here under.
            </p>

            <p>
              Rights and obligations under the Terms which by their nature
              should survive will remain in full effect after termination or
              expiration of the Terms, including without limitation those of
              Sections 6, 7, 8, 10, and 11.
            </p>

            <p>
              You agree that any material breach of Sections 4, 5, 8, and 10 of
              the Terms will result in irreparable harm to CSO for which damages
              would be an inadequate remedy and, therefore, in addition to its
              rights and remedies otherwise available at law , CSO will be
              entitled to equitable relief, including both a preliminary and
              permanent injunction, if such a breach occurs. You waive any
              requirement for the posting of a bond or other security if CSO
              seeks such an injunction.
            </p>
            <p>
              Any express waiver or failure to exercise promptly any right under
              the Terms will not create a continuing waiver or any expectation
              of non-enforcement. If any provision of the Terms is held invalid
              by any law or regulation of any government, or by any court or
              arbitrator, the parties agree that such provision will be replaced
              with a new provision that accomplishes the original business
              purpose, and the other provisions of the Terms will remain in full
              force and effect.
            </p>

            <p>
              You may send your questions regarding the Website's services to
              the appropriate contact, listed below:
              <br />
              Centre for Scientific Outreach
              <br />
              Praveen Sankaran
              <br />
              E-mail: hello@thecso.in
            </p>

            <p>
              The Terms shall for all purposes be governed, interpreted,
              construed, and enforced solely and exclusively in accordance with
              the law of the Republic of India, without regard to conflicts of
              law provisions thereof. You agree that exclusive jurisdiction and
              venue of any dispute with CSO or its licensors, or any of their
              respective affiliates, officers, directors, employees,
              contractors, agents, representatives or suppliers, arising out of
              or in any way relating to the Terms or your use of or inability to
              use the Website, services, or Content shall reside in the Central
              and state courts serving the Republic of India. You expressly
              consent to the exercise of personal jurisdiction by such courts
              and agree that you will not object to jurisdiction of or venue in
              such courts on the grounds of lack of personal jurisdiction, forum
              non convenience, or otherwise.
            </p>
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
