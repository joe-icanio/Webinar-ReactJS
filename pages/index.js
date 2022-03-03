import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NextSvg from "../public/nextjs.svg";

export default function Home() {
  return (
    <div>
      <div className={"header"}>
        <Image src={NextSvg} height={32} width={32} />
        <h2>Next App</h2>

        <div className="link">
          <Link href={"/users"}>
            <a>Users</a>
          </Link>
        </div>
        {/* <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
        <Link href={"/products"}>
          <a>Products</a>
        </Link>
        <Link href={"/news"}>
          <a>News</a>
        </Link> */}
      </div>
    </div>
  );
}
