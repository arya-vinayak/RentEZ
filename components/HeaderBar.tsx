"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";

import { Header1Props } from "@/types/headerProps";
import Logo from "@/public/rentez.svg";

const Header1 = ({ userType }: Header1Props) => {
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const handleProfileClick = () => {
    router.push(`/${userType}/profile`);
  };

  const handleSettingsClick = () => {
    router.push(`/${userType}/settings`);
  };

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row h-16 items-center justify-between w-full">
          <div className="flex items-center mb-2 sm:mb-0">
            {/* You can add your logo or other content here */}
          </div>

          <div className="flex items-center ml-auto">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton
              handleProfileClick={handleProfileClick}
              handleSettingsClick={handleSettingsClick}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header1;
