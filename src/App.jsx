import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Destinations from './pages/Destinations'
import DestinationDetails from './pages/DestinationDetails'
import Process from './pages/Process'
import FAQPage from './pages/FAQPage'
import Contact from './pages/Contact'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'
import VisaDisclaimer from './pages/VisaDisclaimer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route
  path="/destinations/:slug"
  element={<DestinationDetails />}
/>
          <Route
            path="/privacy-policy"
            element={
              <LegalPage title="Privacy Policy">
                <p>
                  CLW Visa Services respects your privacy. Information submitted through our enquiry form is
                  used solely to respond to your request and provide relevant travel and visa assistance.
                  We do not sell or share your personal information with third parties beyond what is
                  necessary to process your visa or travel request.
                </p>
              </LegalPage>
            }
          />
          <Route
            path="/terms"
            element={
              <LegalPage title="Terms & Conditions">
                <p>
                  By using this website and our services, you agree to engage with CLW Visa Services for
                  visa assistance and travel-related support. Visa decisions rest solely with the relevant
                  embassy, consulate or immigration authority — see our Visa Disclaimer for details.
                </p>
              </LegalPage>
            }
          />
          <Route
  path="/visa-disclaimer"
  element={<VisaDisclaimer />}
/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
