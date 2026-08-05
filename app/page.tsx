import Building from "@/components/Building";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Narrow blueprint column: dashed rules run down both edges, and each
          section adds a full-bleed dashed rule across the top. */}
      <div className="frame relative mx-2 max-w-[690px] sm:mx-8 md:mx-auto">
        <div aria-hidden="true" className="dotfield h-16 w-full" />
        <Profile />
        <Experience />
        <Building />
        <Skills />
        <Education />
        <Footer />
        <div aria-hidden="true" className="dotfield h-16 w-full" />
      </div>
    </main>
  );
}
