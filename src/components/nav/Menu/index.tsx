import { Button, buttonVariants } from "@/components/ui/button"
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface L {
    herf: string
    name: string
}

const links: L[] = [
    {
        herf: "https://www.linkedin.com/in/yoketh/",
        name: "Linkedin"
    },
    {
        herf: "https://www.github.com/yoketh/",
        name: "Github"
    }
]

export function Menu() {
    return (
        <div></div>
    );
}
