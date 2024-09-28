import Link from "next/link";

export default function Home() {
  return (
    <div>
<ul className="flex gap-5 bg-purple-300">
  <li><Link href="/">Home</Link></li>

  <li><Link href="/about">About</Link></li>
  <li><Link href="/contact">Contact Us</Link></li>
</ul>

<img src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png" alt="sorry"/>
</div>

  );
} 