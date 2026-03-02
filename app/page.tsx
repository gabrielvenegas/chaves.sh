import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Install } from "@/components/install"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main style={{ backgroundColor: "#1d2021", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Install />
      <Footer />
    </main>
  )
}
