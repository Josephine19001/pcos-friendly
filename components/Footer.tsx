import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  product: [
    { href: "/download", label: "Download" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  connect: [
    { href: "https://twitter.com", label: "Twitter", external: true },
    { href: "https://instagram.com", label: "Instagram", external: true },
    { href: "mailto:hello@debtfree.app", label: "Contact Us" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow-orb glow-orb-primary opacity-20" />

      <div className="relative section-inner py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Logo size={36} />
              <span className="text-xl font-bold gradient-text">Debt Free</span>
            </Link>
            <p className="text-[#8a8a9a] text-sm leading-relaxed">
              Your AI-powered companion for becoming debt-free. Track, strategize, and conquer your financial goals.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#f0f0f5]">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8a8a9a] hover:text-[#00C8B3] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#f0f0f5]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8a8a9a] hover:text-[#00C8B3] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#f0f0f5]">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-[#8a8a9a] hover:text-[#00C8B3] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8a8a9a] text-sm">
            © {new Date().getFullYear()} Debt Free. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#8a8a9a] hover:text-[#00C8B3] transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#8a8a9a] hover:text-[#00C8B3] transition-colors text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
