import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/Footer";
import { FaAngleUp } from "react-icons/fa";
import "../../public/assets/css/style.css";
import "../../public/assets/css/meanmenu.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/owl.carousel.min.css";
import "../../public/assets/css/owl.theme.default.min.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/defult.css";
import "../../public/assets/css/jquery-ui.min.css";
import "../../public/assets/css/jquery.mCustomScrollbar.css";
import "../../public/assets/css/responsive.css";

export const metadata = {
  title: "ATechSole",
  description: "ATechSole offers cutting-edge services in AI, web development, app development, and cyber security to help businesses thrive in the digital age.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add any additional head elements, such as SEO tags, here */}
      </Head>
      <body className="mx-auto">
        {/* <Sidebar /> */}
        <Navbar />
        <div className="scroll-area  cursor-pointer">
          <FaAngleUp />
        </div>
        {children}
        <Footer />
        {/* Include the scripts at the bottom of the body */}
        <Script
          src="assets/js/jquery-3.7.4.min.js"
          strategy="beforeInteractive"
        />
        <Script src="assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="assets/js/meanmenu.min.js" strategy="lazyOnload" />
        <Script src="assets/js/magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="assets/js/modernizer.min.js" strategy="lazyOnload" />
        <Script src="assets/js/waypoints.js" strategy="lazyOnload" />
        <Script src="assets/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script
          src="assets/js/jquery.mCustomScrollbar.js"
          strategy="lazyOnload"
        />
        <Script src="assets/js/jequery-nav.min.js" strategy="lazyOnload" />
        <Script src="assets/js/titlt.jequery.min.js" strategy="lazyOnload" />
        <Script src="assets/js/wow.min.js" strategy="lazyOnload" />
        <Script src="assets/js/jquery-ui.min.js" strategy="lazyOnload" />
        <Script src="assets/js/submenu.min.js" strategy="lazyOnload" />
        <Script src="assets/js/custom.js" strategy="lazyOnload" />
        <Script src="assets/js/scrolloverflow.min.js" strategy="lazyOnload" />
        <Script src="assets/js/jquery.fullpage.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
