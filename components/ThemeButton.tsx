"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

import React from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle Theme"
        className="mr-6"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></Button>
    </div>
  );
};

export default ThemeButton;
