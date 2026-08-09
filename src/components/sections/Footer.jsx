import { HeartPulse, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#173D47] text-white">
      <div className="mx-auto max-w-7xl px-8 py-20 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F67D72]">
                <HeartPulse className="h-6 w-6" />
              </div>

              <h3 className="text-3xl font-bold">
                RehabAI
              </h3>
            </div>

            <p className="mt-6 leading-8 text-gray-300">
              AI-powered rehabilitation platform helping patients,
              athletes and physiotherapists recover faster with
              evidence-based rehabilitation guidance.
            </p>
          </div>

         
          <div>
            <h4 className="text-xl font-semibold">
              Product
            </h4>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>AI Coach</li>
              <li>Exercise Library</li>
              <li>Recovery Tracking</li>
              <li>Medical Reports</li>
              <li>Pricing</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-xl font-semibold">
              Company
            </h4>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>About</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-xl font-semibold">
              Connect
            </h4>

            <div className="mt-6 flex items-center gap-3 text-gray-300">
              <Mail className="h-5 w-5 text-[#F67D72]" />
              <span>Kartikeygogiait@gmail.com</span>
            </div>

            <div className="mt-8 flex gap-5 text-2xl">
              <FaGithub className="cursor-pointer transition hover:text-[#F67D72]" />
              <FaLinkedin className="cursor-pointer transition hover:text-[#F67D72]" />
              <FaXTwitter className="cursor-pointer transition hover:text-[#F67D72]" />
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-400">
          © 2026 RehabAI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;