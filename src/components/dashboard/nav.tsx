"use client";
import { Button } from "../ui/button";
import { navItems } from "@/config/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <nav className="grid gap-2 items-start">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-accent")}
          asChild
        >
          <Link href={item.href}>
            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
};

export default DashboardNav;
