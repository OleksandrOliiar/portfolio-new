import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";

export default function Logo() {
  return (
    <Link href="#home">
      <Highlighter action="underline" color="hsl(13.2143 73.0435% 54.9020%)">
        <h3 className="h3 italic tracking-wider">Portfolio</h3>
      </Highlighter>
    </Link>
  );
}
