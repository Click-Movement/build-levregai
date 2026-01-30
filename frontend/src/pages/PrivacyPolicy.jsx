import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext';

const PrivacyPolicy = () => {
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>Privacy Policy - LevReg.AI</title>
        <meta name="description" content="Privacy Policy for LevReg.AI - Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://www.levreg.ai/privacy-policy" />
      </Helmet>

      <div className={`min-h-screen ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} py-20`}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Privacy Policy for LevReg.AI
          </h1>
          <p className={`text-sm mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Last Updated: January 30, 2026
          </p>

          <div className={`space-y-8 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to LevReg.AI ("Company", "we", "our", "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.levreg.ai, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              <p>
                We are a company that provides AI consulting and development services, located at 210 Delburg St, Davidson, NC 28036.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Personal Data
              </h3>
              <p className="mb-4">
                Personally identifiable information, such as your name, email address, and telephone number, and company details that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Derivative Data
              </h3>
              <p className="mb-4">
                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Financial Data
              </h3>
              <p className="mb-4">
                We do not collect any financial information.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Data from Social Networks
              </h3>
              <p className="mb-4">
                We do not collect information from social networks.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Mobile Device Data
              </h3>
              <p className="mb-4">
                We do not collect mobile device data.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Third-Party Data
              </h3>
              <p>
                We do not collect third-party data.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                3. Use of Your Information
              </h2>
              <p className="mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Notify you of updates to the Site.</li>
                <li>Offer new products, services, and/or recommendations to you.</li>
                <li>Perform other business activities as needed.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Process payments and refunds.</li>
                <li>Request feedback and contact you about your use of the Site.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
                <li>Send you a newsletter.</li>
                <li>Solicit support for the Site.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                4. Disclosure of Your Information
              </h2>
              <p className="mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                By Law or to Protect Rights
              </h3>
              <p className="mb-4">
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Third-Party Service Providers
              </h3>
              <p className="mb-4">
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Marketing Communications
              </h3>
              <p className="mb-4">
                With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Online Postings
              </h3>
              <p className="mb-4">
                When you post comments, contributions, or other content to the Site, your posts may be viewed by all users and may be publicly distributed outside the Site in perpetuity.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Third-Party Advertisers
              </h3>
              <p className="mb-4">
                We may use third-party advertising companies to serve ads when you visit the Site. These companies may use information about your visits to the Site and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Affiliates
              </h3>
              <p className="mb-4">
                We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Business Partners
              </h3>
              <p className="mb-4">
                We may share your information with our business partners to offer you certain products, services or promotions.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Other Third Parties
              </h3>
              <p className="mb-4">
                We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Sale or Bankruptcy
              </h3>
              <p className="mb-4">
                If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity. If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge that such transfers may occur and that the transferee may decline honor commitments we made in this Privacy Policy.
              </p>

              <p>
                We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations. If you no longer wish to receive correspondence, emails or other communications from third parties, you are responsible for contacting the third party directly.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                5. Tracking Technologies
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Cookies and Web Beacons
              </h3>
              <p className="mb-4">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Internet-Based Advertising
              </h3>
              <p className="mb-4">
                Additionally, we may use third-party software to serve ads on the Site, implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Website Analytics
              </h3>
              <p>
                We may also partner with selected third-party vendors to allow tracking technologies and remarketing services on the Site through the use of first party cookies and third-party cookies, to, among other things, analyze and track users' use of the Site, determine the popularity of certain content and better understand online activity.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                6. Third-Party Websites
              </h2>
              <p>
                The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                7. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                8. Policy for Children (COPPA)
              </h2>
              <p>
                We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below. This section is in compliance with the Children's Online Privacy Protection Act (COPPA).
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                9. Controls for Do-Not-Track Features
              </h2>
              <p>
                Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                10. Your California Privacy Rights (CCPA)
              </h2>
              <p className="mb-4">
                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
              </p>
              <p>
                If you are under 18 years of age, reside in California, and have a registered account with the Site, you have the right to request removal of unwanted data that you publicly post on the Site. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Site, but please be aware that the data may not be completely or comprehensively removed from our systems.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                11. Your GDPR Rights
              </h2>
              <p className="mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
              </p>
              <p className="mb-4">
                In certain circumstances, you have the following data protection rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access, update or to delete the information we have on you.</li>
                <li>The right of rectification.</li>
                <li>The right to object.</li>
                <li>The right of restriction.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                12. Contact Us
              </h2>
              <p className="mb-2">
                If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
