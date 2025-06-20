// import Image from "next/image";
 import { AppBar } from "@/components/AppBar";
import { VideoGrid } from "@/components/VideoGrid";
import { Geist, Geist_Mono } from "next/font/google";
import {VideoCard} from "../components/VideoCard"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>

    </div>
  );
}
