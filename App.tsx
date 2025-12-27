import React from 'react';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Palette, 
  Code2, 
  Image as ImageIcon, 
  PenTool,
  Menu,
  X,
  Gamepad2,
  Users,
  CreditCard,
  Gem,
  Github
} from 'lucide-react';
import AIChat from './components/AIChat';
import { PERSONAL_INFO, SERVICES, PROJECTS, FREE_ASSETS, REVIEWS, PRICING_PLANS } from './constants';

// Custom Discord Icon Component since Lucide doesn't have the brand icon
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout': return <Palette className="w-6 h-6" />;
      case 'code': return <Code2 className="w-6 h-6" />;
      case 'image': return <ImageIcon className="w-6 h-6" />;
      case 'pen-tool': return <PenTool className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-dark-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-purple-500 bg-clip-text text-transparent">
                MA
              </span>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-medium text-green-400">{PERSONAL_INFO.availability}</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#services" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#pricing" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#projects" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Work</a>
                <a href="#assets" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Assets</a>
                <a href="#reviews" className="hover:text-brand-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Reviews</a>
              </div>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-900 border-b border-white/5">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Services', 'Pricing', 'Projects', 'Assets', 'Reviews'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium tracking-wide">
                HELLO, I'M {PERSONAL_INFO.nickname.toUpperCase()}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">Artist</span> &<br />
                Roblox UI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">Designer</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href={PERSONAL_INFO.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/25 flex items-center justify-center gap-2"
                >
                  <DiscordIcon className="w-5 h-5" />
                  Contact on Discord
                </a>
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
                />
                
                {/* Floating Skill Badge */}
                <div className="absolute -bottom-6 -right-6 bg-dark-800 p-4 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-3 animate-bounce delay-700">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Software Engineer</div>
                    <div className="text-xs text-slate-400">CS Graduate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discord / Community Section */}
        <section className="py-12 bg-dark-900/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-slate-400 mb-6">Join my community & Get Support</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href={PERSONAL_INFO.discord} target="_blank" rel="noopener noreferrer" className="bg-[#5865F2]/10 p-6 rounded-xl border border-[#5865F2]/20 hover:border-[#5865F2] transition-colors group cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-slate-300 group-hover:text-white">
                                <DiscordIcon className="w-5 h-5 text-[#5865F2]" />
                                <span className="font-semibold text-[#5865F2]">Join Server</span>
                            </div>
                            <span className="text-xs bg-[#5865F2]/20 px-2 py-1 rounded-full text-[#5865F2]">Active</span>
                        </div>
                        <p className="text-sm text-slate-400 text-left mb-4">Connect directly for commissions, support, and free assets.</p>
                    </a>
                    <div className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-brand-500/50 transition-colors">
                         <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-slate-300">
                                <Users size={20} />
                                <span className="font-semibold">Happy Clients</span>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 text-left mb-4">Over 50+ satisfied clients on Discord and Roblox.</p>
                    </div>
                    <div className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-brand-500/50 transition-colors flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-bold text-white mb-2">CS Graduate</h3>
                        <p className="text-slate-400 text-sm">Specialized in Software Engineering</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-dark-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">High-quality design and development solutions tailored to your needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-dark-900 rounded-2xl p-6 border border-white/5 hover:border-brand-500/30 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-400 mb-6">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 h-10">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={PERSONAL_INFO.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 rounded-lg border border-brand-500/30 text-brand-400 hover:bg-brand-500 hover:text-white transition-all text-sm font-medium"
                  >
                    View Pricing
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - NEW */}
        <section id="pricing" className="py-24 bg-dark-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Transparent pricing for UI frames and assets. Robux and USD accepted.</p>
            </div>

            {PRICING_PLANS.map((planCategory, catIdx) => (
              <div key={catIdx} className="mb-20 last:mb-0">
                <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-brand-500 pl-4">{planCategory.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {planCategory.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col bg-dark-800 rounded-2xl p-8 border border-white/5 hover:border-brand-500/50 transition-all hover:-translate-y-1 relative overflow-hidden group">
                      {item.title === 'Premium' && (
                         <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                      )}
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.unit}</p>
                      </div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-3xl font-bold text-white">{item.price}</span>
                        <span className="text-slate-500 text-sm">USD</span>
                      </div>
                      <div className="flex items-center gap-1 mb-6 text-brand-400 text-sm font-medium">
                        <Gem size={14} />
                        {item.robux}
                      </div>
                      <ul className="space-y-4 mb-8 flex-1">
                        {item.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={PERSONAL_INFO.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl bg-slate-700 text-white font-medium hover:bg-brand-600 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-brand-500/20"
                      >
                        Order Now <CreditCard size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-dark-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent Projects</h2>
                <p className="text-slate-400">A selection of my latest design and development work.</p>
              </div>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 flex items-center gap-1">
                View All <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-dark-800 border border-white/5">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-brand-500/20 text-brand-300 text-xs font-medium rounded-full mb-2 backdrop-blur-sm">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-300 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Assets Section */}
        <section id="assets" className="py-24 bg-dark-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Free Assets</h2>
              <p className="text-slate-400">Resources I've created for the community.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FREE_ASSETS.map((asset) => (
                <div key={asset.id} className="bg-dark-900 rounded-xl overflow-hidden border border-white/5 hover:border-brand-500/30 transition-all">
                  <div className="h-48 bg-slate-800 overflow-hidden relative">
                    <img src={asset.thumbnail} alt={asset.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white">
                      {asset.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-1">{asset.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Download size={14} /> {asset.downloadCount} downloads
                      </span>
                      <a 
                        href={PERSONAL_INFO.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-400 hover:text-white font-medium transition-colors"
                      >
                        Download on Discord
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-dark-950">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-white mb-12 text-center">Client Reviews</h2>
             <div className="grid grid-cols-1 gap-8">
               {REVIEWS.map((review) => (
                 <div key={review.id} className="bg-dark-900 p-8 rounded-2xl border border-white/5 relative hover:border-brand-500/20 transition-colors">
                   <div className="flex flex-col sm:flex-row gap-6">
                     <div className="shrink-0">
                        <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-slate-700" />
                     </div>
                     <div className="flex-1">
                       <div className="flex items-center justify-between mb-2">
                         <div>
                            <h4 className="font-bold text-white text-lg">{review.name}</h4>
                            <p className="text-sm text-brand-400">{review.role}</p>
                         </div>
                         <div className="flex gap-1 text-yellow-500">
                           {[...Array(review.rating)].map((_, i) => (
                             <span key={i} className="text-sm">★</span>
                           ))}
                         </div>
                       </div>
                       <div className="relative">
                          <span className="absolute -top-2 -left-2 text-4xl text-slate-700 font-serif leading-none">"</span>
                          <p className="text-slate-300 italic leading-relaxed pl-4">{review.content}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="bg-black py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-2xl font-bold text-white mb-8">Ready to start a project?</h2>
             <div className="flex justify-center gap-6 mb-12">
               <a href={PERSONAL_INFO.discord} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800 rounded-full text-slate-400 hover:text-white hover:bg-[#5865F2] transition-all" aria-label="Discord">
                 <DiscordIcon className="w-5 h-5" />
               </a>
               <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all" aria-label="GitHub">
                 <Github size={20} />
               </a>
               <a href="#" className="p-3 bg-dark-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all" aria-label="LinkedIn">
                 <Linkedin size={20} />
               </a>
               <a href="#" className="p-3 bg-dark-800 rounded-full text-slate-400 hover:text-white hover:bg-sky-500 transition-all" aria-label="Twitter">
                 <Twitter size={20} />
               </a>
             </div>
             <p className="text-slate-500 text-sm">
               © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
             </p>
          </div>
        </footer>

        <AIChat />
      </main>
    </div>
  );
}

export default App;