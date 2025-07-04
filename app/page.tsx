import Hero from '@/components/Hero'
import KeyFindings from '@/components/KeyFindings'
import Methodology from '@/components/Methodology'
import VoteImpactChart from '@/components/VoteImpactChart'
import AnomalyDistribution from '@/components/AnomalyDistribution'
import ThresholdComparison from '@/components/ThresholdComparison'
import MADExplanation from '@/components/MADExplanation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <KeyFindings />
        <Methodology />
        <VoteImpactChart />
        <AnomalyDistribution />
        <ThresholdComparison />
        <MADExplanation />
      </main>
      <Footer />
    </>
  )
}