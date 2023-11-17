import { GeistSans } from "geist/font";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
// import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'
import userContext from "@/contexts/userContext";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "RentEZ",
  description: "Manage rents",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);
  // const { data: { session }, error } = await supabase.auth.getSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
