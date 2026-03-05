import { useEffect } from "react";

const sections = [
  {
    icon: "🔍",
    title: "Information We Collect",
    body: `When you place an order or contact us, we collect personal information including your full name, email address, phone number, and shipping address. We also collect payment-related information (processed securely via Razorpay — we never see or store your card details). We may also collect basic usage data such as pages visited and browser type to improve your experience on our website.`,
  },
  {
    icon: "🎯",
    title: "How We Use Your Information",
    body: `We use your information solely to process and fulfil your orders, communicate with you about your purchase, respond to your queries, and send you occasional updates about new products or offers (only if you opt in). We do not use your information for automated decision-making or profiling. We will never sell your personal data to third parties.`,
  },
  {
    icon: "🤝",
    title: "Sharing Your Information",
    body: `We share your information only with trusted third parties who help us operate our business — specifically our payment processor (Razorpay) and shipping courier partners. These partners are contractually obligated to keep your information secure and use it only for the services they provide to us. We may also disclose information if required by law or to protect our legal rights.`,
  },
  {
    icon: "🍪",
    title: "Cookies",
    body: `Our website uses cookies to enhance your browsing experience, remember your preferences, and analyse website traffic. Cookies are small text files stored on your device. You can choose to disable cookies in your browser settings, though this may affect some features of our website. We do not use cookies to track you across other websites.`,
  },
  {
    icon: "🔒",
    title: "Data Security",
    body: `We take the security of your personal data seriously. All data transmitted between your browser and our website is encrypted using 256-bit SSL. Payments are handled entirely by Razorpay, which is PCI-DSS compliant. We store only the minimum information necessary to fulfil your order and respond to your queries. Access to your data is strictly limited to authorised personnel.`,
  },
  {
    icon: "⏳",
    title: "Data Retention",
    body: `We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy — typically for the duration required by Indian tax and accounting regulations (usually 7 years). After this period, your data is securely deleted. You may request earlier deletion of your data by contacting us, subject to legal requirements.`,
  },
  {
    icon: "✅",
    title: "Your Rights",
    body: `You have the right to access the personal data we hold about you, request corrections to inaccurate data, request deletion of your data (subject to legal obligations), withdraw consent to marketing communications at any time, and lodge a complaint with a relevant data protection authority. To exercise any of these rights, please contact us at hello@etherealstrokes.com.`,
  },
  {
    icon: "👶",
    title: "Children's Privacy",
    body: `Our website and products are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately and we will take steps to delete that information.`,
  },
  {
    icon: "🔗",
    title: "Third-Party Links",
    body: `Our website may contain links to third-party websites such as Instagram or Facebook. These sites have their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policies of any third-party sites you visit through links on our website.`,
  },
  {
    icon: "📋",
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a revised date. Your continued use of our website after any changes constitutes your acceptance of the updated policy. We encourage you to review this page periodically.`,
  },
];

function Privacy({ darkMode }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const dm    = darkMode;
  const bg    = dm ? "bg-gray-900" : "bg-[#FAF8F5]";
  const text  = dm ? "text-white"  : "text-gray-900";
  const muted = dm ? "text-gray-400" : "text-gray-500";
  const card  = dm ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";
  const divider = dm ? "border-gray-700" : "border-gray-100";

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-300`}>

      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">

        {/* Heading */}
        <div className="mb-12">
          <p className={`text-[11px] uppercase tracking-[0.35em] font-semibold mb-3 ${dm ? "text-yellow-400" : "text-yellow-600"}`}>
            Legal
          </p>
          <h1 className="text-4xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className={`text-sm leading-relaxed ${muted}`}>
            Last updated: February 2026 &nbsp;·&nbsp; Your privacy matters to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Intro banner */}
        <div className={`rounded-2xl border p-5 mb-6 shadow-sm flex items-start gap-4 ${card}`}>
          <span className="text-2xl shrink-0">🛡</span>
          <p className={`text-sm leading-7 ${muted}`}>
            Ethereal Strokes is committed to protecting your personal data and respecting your privacy. We collect only what is necessary, use it only for the purposes stated, and never sell it to anyone.
          </p>
        </div>

        {/* Sections */}
        <div className={`rounded-2xl border shadow-sm overflow-hidden ${card}`}>
          {sections.map((s, i) => (
            <div key={i} className={`p-6 ${i !== sections.length - 1 ? `border-b ${divider}` : ""}`}>
              <h2 className="text-base font-serif font-bold mb-3 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-lg shrink-0">
                  {s.icon}
                </span>
                {s.title}
              </h2>
              <p className={`text-sm leading-7 ml-12 ${muted}`}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* Contact note */}
        <div className={`mt-8 rounded-2xl border p-5 shadow-sm ${card}`}>
          <p className="font-serif font-bold mb-2">Questions about your data?</p>
          <p className={`text-sm leading-relaxed ${muted}`}>
            Contact our privacy team at{" "}
            <a href="mailto:hello@etherealstrokes.com" className="font-semibold text-yellow-500 hover:underline">
              hello@etherealstrokes.com
            </a>
            . We aim to respond to all privacy-related enquiries within 72 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;