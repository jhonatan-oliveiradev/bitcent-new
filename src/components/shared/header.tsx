"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Loader2Icon, LogInIcon, LogOutIcon, User2Icon } from "lucide-react";

export const Header = () => {
  const { status } = useSession();

  const handleLogin = async () => await signIn();
  const handleLogout = async () => await signOut();

  return (
    <header className="flex h-14 items-center justify-between border-b px-4">
      <Link href="/">
        <Logo />
      </Link>

      <nav className="flex items-center gap-8">
        <Link href="#" className="transition-all hover:text-muted-foreground">
          Início
        </Link>
        <Link href="#" className="transition-all hover:text-muted-foreground">
          Vantagens
        </Link>
        <Link href="#" className="transition-all hover:text-muted-foreground">
          Depoimentos
        </Link>

        {status === "loading" && (
          <Button
            variant="ghost"
            size="icon"
            className="animate-spin hover:bg-transparent"
          >
            <Loader2Icon size="16" />
          </Button>
        )}

        {status === "unauthenticated" && (
          <Button
            onClick={handleLogin}
            className="flex items-center justify-center gap-2"
          >
            <LogInIcon className="size-5" />
            Login
          </Button>
        )}

        {status === "authenticated" && (
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2">
              <Button variant="ghost" size="icon">
                <Link href="/dashboard">
                  <User2Icon size="16" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="hover:text-primary"
              >
                <LogOutIcon size="16" />
              </Button>
            </div>
          </div>
        )}

        <ModeToggle />
      </nav>
    </header>
  );
};
