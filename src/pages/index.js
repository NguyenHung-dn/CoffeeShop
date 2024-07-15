import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import HeaderSection from "@/components/HeaderSection";
import headerPic from "../assets/header_pic.jpg";
import Content from "@/components/Content";
import MoreProducts from "@/components/MoreProducts";
import Magazine from "@/components/Magazine";
import Parallax from "@/components/Parallax";
import LifeStyle from "@/components/LifeStyle";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <Content />
      <MoreProducts />
      <Magazine />
      <Parallax />
      <LifeStyle />
    </main>
  );
}
