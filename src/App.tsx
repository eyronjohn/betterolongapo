import { NuqsAdapter } from 'nuqs/adapters/react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ui/ScrollToTop';
import Services from './pages/Services';
import Document from './pages/Document';
import Government from './pages/Government';
import Tourism from './pages/Tourism';
import Contact from './pages/Contact';
import About from './pages/about';
import AboutOlongapo from './pages/about/Olongapo';
import AboutBetterGov from './pages/about/BetterGov';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- ADD THESE NEW IMPORTS ---
import ElectedOfficials from './pages/government/elected-officials/ElectedOfficials';
import MunicipalCommitteesPage from './pages/government/elected-officials/MunicipalCommittees';
import MunicipalOffices from './pages/government/municipal-offices';
import Barangays from './pages/government/barangays';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <NuqsAdapter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:category" element={<Services />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/:category/:documentSlug"
                element={<Document categoryType="service" />}
              />
              <Route path="/government" element={<Government />}>
                {/* 1. Elected Officials Branch */}
                <Route
                  path="elected-officials"
                  element={<ElectedOfficials />}
                />
                <Route
                  path="elected-officials/committees"
                  element={<MunicipalCommitteesPage />}
                />

                {/* 2. Municipal Offices Branch (Sidebar Layout + Content) */}
                <Route path="municipal-offices" element={<MunicipalOffices />}>
                  <Route element={<MunicipalOffices />} />
                </Route>

                {/* 3. Barangays Branch */}
                <Route path="barangays" element={<Barangays />} />
              </Route>
              <Route path="/government/:category" element={<Government />} />
              <Route path="/government" element={<Government />} />
              <Route
                path="/government/:category/:documentSlug"
                element={<Document categoryType="government" />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />}>
                <Route path="olongapo" element={<AboutOlongapo />} />
                <Route path="bettergov" element={<AboutBetterGov />} />
              </Route>

              <Route path="/tourism/:category" element={<Tourism />} />
              <Route path="/tourism" element={<Tourism />} />

              <Route path="/:lang/:documentSlug" element={<Document />} />
              <Route path="/:documentSlug" element={<Document />} />
            </Routes>
            <Footer />
          </div>
        </NuqsAdapter>
      </Router>
    </HelmetProvider>
  );
}

export default App;
