"use client";
import { useRouter } from "next/navigation";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";

import { Header1Props } from "@/types/headerProps";

const Header1 = ({ userType, avatarURL }: Header1Props) => {

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
            <ProfileButton
              handleProfileClick={handleProfileClick}
              handleSettingsClick={handleSettingsClick}
              avatarURL={avatarURL}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header1;
