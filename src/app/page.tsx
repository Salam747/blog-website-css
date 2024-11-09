"use client"
import Contact from "./componenets/contact";
import BlogPage from "./componenets/blog";
import Hero from "./componenets/hero";
import RecentPost from "./componenets/recentPost";

export default function Home() {
  return (
    <div>
      <Hero/>
      <RecentPost/>
      <BlogPage/>
      <Contact/>
    </div>
  );
}
