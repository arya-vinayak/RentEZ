import ProfileCard from "@/components/ProfileCard";
import { Profile } from "@/types/Profile";
import { promises as fs } from "fs";
import path from "path";

function isProfile(profile: any): profile is Profile {
  return (
    profile.hasOwnProperty("ID") &&
    profile.hasOwnProperty("Email") &&
    profile.hasOwnProperty("Flat") &&
    profile.hasOwnProperty("Name") &&
    profile.hasOwnProperty("Phone") &&
    profile.hasOwnProperty("DOB")
  );
}

async function getProfileDetails(): Promise<Profile> {
  const data = await fs.readFile(
    path.join(process.cwd(), "/app/owner/profile/data/profile.json")
  );

  const profile = JSON.parse(data.toString());

  if (!isProfile(profile)) {
    throw new Error("Invalid profile data");
  }

  return profile;
}

export default async function DemoPage() {
  const profile = await getProfileDetails();

  return <ProfileCard {...profile} />;
}
