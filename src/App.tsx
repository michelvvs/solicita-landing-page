import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { DossieExplorer } from './components/DossieExplorer';
import { AchadosCriticosSection } from './components/AchadosCriticosSection';
import { AIAgentsGrid } from './components/AIAgentsGrid';
import { EditalRiskSimulator } from './components/EditalRiskSimulator';
import { StoryAuthoritySection } from './components/StoryAuthoritySection';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingPlans } from './components/PricingPlans';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalActionType, setModalActionType] = useState('Solicitar Dossiê 360°');

  const handleOpenModal = (actionType = 'Solicitar Dossiê 360°') => {
    setModalActionType(actionType);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleExploreSimulator = () => {
    const el = document.querySelector('#simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0a21] text-slate-100 flex flex-col font-sans selection:bg-brand-accent selection:text-white">
      {/* Fixed Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section with Value Proposition */}
        <Hero 
          onOpenModal={handleOpenModal} 
          onExploreSimulator={handleExploreSimulator} 
        />

        {/* 2. Authority & Impact Stats Bar */}
        <StatsBar />

        {/* 3. Dossiê Premium 360° Explorer (18 Dimensions) */}
        <DossieExplorer onOpenModal={handleOpenModal} />

        {/* 4. Exclusive Achados Críticos Section (🔴🟠🟡🟢) */}
        <AchadosCriticosSection onOpenModal={handleOpenModal} />

        {/* 5. SolicitIA AI Agents Suite */}
        <AIAgentsGrid onOpenModal={handleOpenModal} />

        {/* 6. Live Interactive Edital Risk Simulator */}
        <EditalRiskSimulator onOpenModal={handleOpenModal} />

        {/* 7. Authority, Story & Purpose (Thiago Mattos) */}
        <StoryAuthoritySection onOpenModal={handleOpenModal} />

        {/* 8. Comparison: Traditional Manual vs Dossiê 360° */}
        <ComparisonSection onOpenModal={handleOpenModal} />

        {/* 9. Plans & Pricing */}
        <PricingPlans onOpenModal={handleOpenModal} />

        {/* 10. FAQ Accordion */}
        <FaqSection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Floating Action Button */}
      <WhatsAppFloating onOpenModal={handleOpenModal} />

      {/* Lead Capture & WhatsApp Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialAction={modalActionType}
      />
    </div>
  );
}

export default App;
