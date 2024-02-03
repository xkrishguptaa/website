import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import type { NavigationItem } from "@/types/navigation";
import { MenuIcon } from "lucide-react";
import config from "@/config";

export default function ({ navigationItems }: { navigationItems: NavigationItem[] }) {
  return (
    <header className="xl:px-32 lg:px-24 md:px-18 sm:px-14 px-4 py-2 flex justify-between items-center border-b-2">
      <div>
        <a
          href="/"
          className={cn("text-lg font-bold underline-offset-4 hover:underline")}
        >
          {config.name.split(" ")[0]}
        </a>
      </div>
      <NavigationMenu>
        <div className="hidden md:block">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.url}>
                <NavigationMenuLink
                  href={item.url}
                  className={cn(
                    buttonVariants({
                      variant: "link",
                    })
                  )}
                >
                  {item.text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </div>
        <div className="md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/menu">
                <Button variant="outline" size="icon">
                  <MenuIcon />
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </header>
  );
}
