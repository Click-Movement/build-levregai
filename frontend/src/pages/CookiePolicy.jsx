import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext';

const CookiePolicy = () => {
  const { isDark } = useTheme();

  return (
    <>
      <Helmet>
        <title>Cookie Policy - LevReg.AI</title>
        <meta name="description" content="Cookie Policy for LevReg.AI - Learn about how we use cookies and similar technologies on our website." />
        <link rel="canonical" href="https://www.levreg.ai/cookie-policy" />
      </Helmet>

      <div className={`min-h-screen ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} py-20`}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Cookie Policy for LevReg.AI
          </h1>
          <p className={`text-sm mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Last Updated: January 30, 2026
          </p>

          <div className={`space-y-8 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                1. Introduction
              </h2>
              <p>
                This Cookie Policy explains how LevReg.AI ("Company", "we", "our", and "us") uses cookies and similar technologies to recognize you when you visit our website at www.levreg.ai ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                2. What Are Cookies?
              </h2>
              <p className="mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, LevReg.AI) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                3. Why Do We Use Cookies?
              </h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                4. What Types of Cookies Do We Use?
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Essential Website Cookies
              </h3>
              <p className="mb-4">
                These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Performance and Functionality Cookies
              </h3>
              <p className="mb-4">
                These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Analytics and Customization Cookies
              </h3>
              <p className="mb-4">
                These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
              </p>

              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Advertising Cookies
              </h3>
              <p>
                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                5. How Can You Control Cookies?
              </h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
              </p>
              <p>
                Most browsers also allow you to control cookies through their 'settings' preferences. For more information on how to manage and delete cookies, visit aboutcookies.org.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                6. Changes to This Cookie Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                7. Contact Us
              </h2>
              <p className="mb-2">
                If you have any questions about our use of cookies or other technologies, please contact us at levreg.ai or by post to:
              </p>
              <div className="mt-4">
                <p className="font-semibold">LevReg.AI</p>
                <p>210 Delburg St</p>
                <p>Davidson, NC 28036</p>
                <p>United States</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
