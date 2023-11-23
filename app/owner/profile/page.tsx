import ProfileCard from "@/components/ProfileCard";
import { Profile } from "@/types/Profile";
import { promises as fs } from "fs";
import path from "path";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

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

async function getProfileDetails(): Promise<{profile: Profile, role: string}> {
  'use server'
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data : { session }, error } = await supabase.auth.getSession();
  if (error) {
    throw error;
  }
  const user = session?.user;
  const data = await supabase.from('users').select('id, flatNo, name, contactno, dob, role').eq('id', user?.id);
  if (data.error) {
    throw data.error;
  }
  const profile = {
    ID: data.data[0].id,
    Email: user?.email,
    Flat: data.data[0].flatNo,
    Name: data.data[0].name,
    Phone: data.data[0].contactno,
    DOB: data.data[0].dob
  }
  const role = data.data[0].role;
  // console.log(profile); 
  if (!isProfile(profile)) {
    throw new Error("Invalid profile");
  }
  return {profile: profile, role: role};
}

export default async function DemoPage() {
  const {profile, role} = await getProfileDetails()

  return <ProfileCard tenantData={profile} role={role} />;
}
