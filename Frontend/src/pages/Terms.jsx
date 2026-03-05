import { useEffect } from "react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing and using the Ethereal Strokes website and purchasing our products, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or purchase our products. These terms apply to all visitors, users, and customers of Ethereal Strokes.`,
  },
  {
    title: "2. Products & Orders",
    body: `All products listed on our website are subject to availability. We reserve the right to discontinue any product at any time. Prices are listed in Indian Rupees (INR) and include all applicable taxes. Orders are confirmed only upon successful payment. We reserve the right to refuse or cancel any order at our discretion, in which case a full refund will be issued.`,
  },
  {
    title: "3. Payment",
    body: `Payments are processed securely via Razorpay. We accept UPI, credit/debit cards, net banking, and popular digital wallets. All transactions are encrypted with 256-bit SSL. We do not store your payment information on our servers. In case of a failed transaction where money is debited, it will be automatically refunded within 5–7 business days.`,
  },
  {
    title: "4. Shipping & Delivery",
    body: `We currently ship across India. Delivery timelines are estimates and may vary based on your location and courier partner availability. Ethereal Strokes is not responsible for delays caused by courier partners, natural events, or circumstances beyond our control. Risk of loss passes to you upon dispatch of the product.`,
  },
  {
    title: "5. Returns & Refunds",
    body: `Due to the nature of our product (a physical book), we accept returns only if the item arrives damaged or defective. Return requests must be raised within 48 hours of delivery with photo evidence sent to hello@etherealstrokes.com. Refunds, if approved, will be processed within 7–10 business days to your original payment method. We do not accept returns for change of mind.`,
  },
  {
    title: "6. Intellectual Property",
    body: `All content on this website — including text, images, design, and the book itself — is the intellectual property of Ethereal Strokes and its creator. Reproduction, distribution, or resale of any content without prior written permission is strictly prohibited. Purchasing the book grants you a personal, non-transferable license to use the content for personal learning only.`,
  },
  {
    title: "7. User Conduct",
    body: `You agree not to use our website for any unlawful purpose, to transmit harmful or offensive content, to attempt to gain unauthorised access to any part of our systems, or to engage in any activity that disrupts the normal functioning of our website. We reserve the right to block or remove users who violate these conditions.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `Ethereal Strokes shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability to you for any claim shall not exceed the amount you paid for the relevant product. We make no warranties, express or implied, about the completeness or accuracy of information on this website.`,
  },
  {
    title: "9. Changes to Terms",
    body: `We reserve the right to update these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting. Your continued use of our website after any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.`,
  },
  {
    title: "10. Governing Law",
    body: `These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of India.`,
  },
];

function Terms({ darkMode }) {
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
          <h1 className="text-4xl font-serif font-bold mb-4">Terms & Conditions</h1>
          <p className={`text-sm leading-relaxed ${muted}`}>
            Last updated: February 2026 &nbsp;·&nbsp; Please read these terms carefully before using our website or making a purchase.
          </p>
        </div>

        {/* Sections */}
        <div className={`rounded-2xl border shadow-sm overflow-hidden ${card}`}>
          {sections.map((s, i) => (
            <div key={i} className={`p-6 ${i !== sections.length - 1 ? `border-b ${divider}` : ""}`}>
              <h2 className="text-base font-serif font-bold mb-3 flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-yellow-400 text-black text-[11px] font-black flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {s.title.replace(/^\d+\.\s/, "")}
              </h2>
              <p className={`text-sm leading-7 ${muted}`}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className={`mt-8 rounded-2xl border p-5 shadow-sm ${card}`}>
          <p className={`text-sm leading-relaxed ${muted}`}>
            For any questions regarding these Terms & Conditions, please contact us at{" "}
            <a href="mailto:hello@etherealstrokes.com" className="font-semibold text-yellow-500 hover:underline">
              hello@etherealstrokes.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;