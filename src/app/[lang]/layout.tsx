import React from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/Navbar";
import Head from "next/head";

export const metadata = {
  title: "SA COSMOS",
  description: "Welcome to my website",
};
export default async function RootLayout({ children, params }: any) {
  const { lang } = await params;
  return (
    <>
      <Head>
        <title>Team Page</title>
      </Head>
      <body>
        <NavigationBar lang={lang} />

        <main>{children}</main>
      </body>
      <footer>
        <Footer lang={lang} />
      </footer>
    </>
  );
}
