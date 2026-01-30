import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext';

const TermsOfService = () => {
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>Terms of Service - LevReg.AI</title>
        <meta name="description" content="Terms of Service for LevReg.AI - Review our terms and conditions for using our website and services." />
        <link rel="canonical" href="https://www.levreg.ai/terms-of-service" />
      </Helmet>

      <div className={`min-h-screen ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} py-20`}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Terms of Service for LevReg.AI
          </h1>
          <p className={`text-sm mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Last Updated: January 30, 2026
          </p>

          <div className={`space-y-8 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                1. Agreement to Terms
              </h2>
              <p className="mb-4">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and LevReg.AI ("Company", "we", "us", or "our"), concerning your access to and use of the www.levreg.ai website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p>
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                2. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                3. User Representations
              </h2>
              <p>
                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not under the age of 13; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                4. Prohibited Activities
              </h2>
              <p className="mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="mb-4">
                As a user of the Site, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
                <li>Use the Site to advertise or offer to sell goods and services.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                5. Submissions
              </h2>
              <p>
                You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                6. Site Management
              </h2>
              <p>
                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                7. Term and Termination
              </h2>
              <p>
                These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                8. Governing Law
              </h2>
              <p>
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the State of North Carolina applicable to agreements made and to be entirely performed within the State of North Carolina, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                9. Dispute Resolution
              </h2>
              <p>
                Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and individually, a "Party") shall be commenced or prosecuted in the state and federal courts located in Mecklenburg County, North Carolina, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                10. Disclaimer
              </h2>
              <p>
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                11. Limitations of Liability
              </h2>
              <p>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                12. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Service; (3) any breach of your representations and warranties set forth in these Terms of Service; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                13. User Data
              </h2>
              <p>
                We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                14. Electronic Communications
              </h2>
              <p>
                Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                15. Miscellaneous
              </h2>
              <p>
                These Terms of Service and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                16. Contact Us
              </h2>
              <p className="mb-2">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-semibold">LevReg.AI</p>
                <p>210 Delburg St</p>
                <p>Davidson, NC 28036</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
