export interface LandingProps {
    userRole: "owner" | "tenant" | "admin" | null;
    userName: string | null;
    children: React.ReactNode;
}