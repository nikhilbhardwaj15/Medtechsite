import { Activity, Stethoscope, Shield, Users, Phone, Mail, MapPin, ChevronRight, Zap, Cpu, Gauge } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B1A1A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ff0000]/5 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed w-full bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/NOVUSS.png" alt="NOVUSS" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-[#8B1A1A] to-[#B82020] hover:from-[#6B1515] hover:to-[#8B1A1A] text-white px-6 py-2 transition-all shadow-lg shadow-[#8B1A1A]/30">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#ff4444] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#ff4444] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#ff4444] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#ff4444] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              style={{
                transform: `translateX(${-scrollY * 0.1}px)`,
              }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#8B1A1A]/30 to-[#8B1A1A]/10 text-[#ff4444] text-sm font-medium mb-8 border border-[#8B1A1A]/30 backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                <span>NEXT-GENERATION HEALTHCARE TECHNOLOGY</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                  Medical Innovation
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#ff4444] to-[#8B1A1A] bg-clip-text text-transparent">
                  Redefined
                </span>
              </h1>
              <p className="text-white/70 text-xl mb-10 leading-relaxed">
                Pioneering advanced hospital machinery and precision-engineered medical systems. Where cutting-edge technology meets life-saving innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-[#8B1A1A] to-[#B82020] hover:from-[#6B1515] hover:to-[#8B1A1A] text-white px-10 py-5 font-medium transition-all flex items-center space-x-3 group shadow-2xl shadow-[#8B1A1A]/40">
                  <span>Explore Technology</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/20 hover:border-[#8B1A1A]/60 hover:bg-[#8B1A1A]/10 text-white px-10 py-5 font-medium transition-all backdrop-blur-sm">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div
              className="relative"
              style={{
                transform: `translateY(${scrollY * 0.15}px)`,
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/40 via-[#ff0000]/20 to-transparent rounded-2xl blur-3xl"></div>
                <div className="relative aspect-square border border-white/10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-sm">
                  <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8">
                    <div className="bg-gradient-to-br from-[#8B1A1A]/20 to-transparent border border-[#ff4444]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform">
                      <Activity className="w-12 h-12 text-[#ff4444]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#8B1A1A]/20 to-transparent border border-[#ff4444]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.1s' }}>
                      <Cpu className="w-12 h-12 text-[#ff4444]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#8B1A1A]/20 to-transparent border border-[#ff4444]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.2s' }}>
                      <Gauge className="w-12 h-12 text-[#ff4444]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#8B1A1A]/20 to-transparent border border-[#ff4444]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.3s' }}>
                      <Shield className="w-12 h-12 text-[#ff4444]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#8B1A1A]/30 to-transparent border-2 border-[#ff4444]/40 rounded-lg flex items-center justify-center backdrop-blur-sm col-span-1 row-span-2 hover:scale-105 transition-transform shadow-2xl shadow-[#8B1A1A]/40" style={{ transitionDelay: '0.4s' }}>
                      <Stethoscope className="w-20 h-20 text-[#ff4444]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#8B1A1A]/20 to-transparent border border-[#ff4444]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.5s' }}>
                      <Zap className="w-12 h-12 text-[#ff4444]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#8B1A1A]/20 to-transparent border border-[#ff4444]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.6s' }}>
                      <Activity className="w-12 h-12 text-[#ff4444]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#8B1A1A]/20 to-transparent border border-[#ff4444]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.7s' }}>
                      <Gauge className="w-12 h-12 text-[#ff4444]" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#8B1A1A]/30 p-8 rounded-xl backdrop-blur-xl shadow-2xl shadow-[#8B1A1A]/20">
                <div className="flex items-baseline space-x-2 mb-2">
                  <div className="text-[#ff4444] text-5xl font-bold">500</div>
                  <div className="text-[#ff4444] text-2xl font-bold">+</div>
                </div>
                <div className="text-white/60 text-sm font-medium">Hospitals Equipped</div>
                <div className="mt-3 flex space-x-1">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#8B1A1A] to-[#ff4444] rounded-full"></div>
                  <div className="w-2 h-1 bg-[#8B1A1A]/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
      </section>

      <section id="services" className="relative py-32 px-6 bg-[#0f0f0f]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B1A1A]/20 rounded-full blur-3xl"></div>
        </div>
        <div
          className="max-w-7xl mx-auto relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#8B1A1A]/20 to-transparent text-[#ff4444] text-sm font-medium mb-6 border border-[#8B1A1A]/30">
              COMPREHENSIVE SOLUTIONS
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Advanced Medical Systems
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Engineering excellence for modern healthcare facilities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-10 rounded-2xl hover:border-[#8B1A1A]/50 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/0 to-[#8B1A1A]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8B1A1A]/30 to-[#8B1A1A]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#8B1A1A]/40 transition-all">
                  <Stethoscope className="w-10 h-10 text-[#ff4444]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#ff4444] transition-colors">Medical Equipment</h3>
                <p className="text-white/60 leading-relaxed mb-6 text-lg">
                  Precision-engineered diagnostic and treatment systems from industry-leading manufacturers worldwide.
                </p>
                <a href="#" className="text-[#ff4444] font-semibold flex items-center space-x-2 group-hover:gap-4 transition-all">
                  <span>Discover More</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-10 rounded-2xl hover:border-[#8B1A1A]/50 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/0 to-[#8B1A1A]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8B1A1A]/30 to-[#8B1A1A]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#8B1A1A]/40 transition-all">
                  <Shield className="w-10 h-10 text-[#ff4444]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#ff4444] transition-colors">Maintenance Services</h3>
                <p className="text-white/60 leading-relaxed mb-6 text-lg">
                  Round-the-clock technical support with preventive maintenance and rapid-response protocols.
                </p>
                <a href="#" className="text-[#ff4444] font-semibold flex items-center space-x-2 group-hover:gap-4 transition-all">
                  <span>Discover More</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-10 rounded-2xl hover:border-[#8B1A1A]/50 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/0 to-[#8B1A1A]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8B1A1A]/30 to-[#8B1A1A]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#8B1A1A]/40 transition-all">
                  <Users className="w-10 h-10 text-[#ff4444]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#ff4444] transition-colors">Training & Support</h3>
                <p className="text-white/60 leading-relaxed mb-6 text-lg">
                  Advanced certification programs for medical professionals on equipment operation and safety protocols.
                </p>
                <a href="#" className="text-[#ff4444] font-semibold flex items-center space-x-2 group-hover:gap-4 transition-all">
                  <span>Discover More</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8B1A1A]/20 rounded-full blur-3xl"></div>
        </div>
        <div
          className="max-w-7xl mx-auto relative z-10"
          style={{
            transform: `translateY(${-scrollY * 0.03}px)`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#8B1A1A]/20 to-transparent text-[#ff4444] text-sm font-medium mb-8 border border-[#8B1A1A]/30">
                INDUSTRY LEADERSHIP
              </div>
              <h2 className="text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Pioneering Medical Technology
                </span>
              </h2>
              <p className="text-white/70 text-xl leading-relaxed mb-6">
                NOVUSS stands at the forefront of medical technology innovation, delivering reliable, state-of-the-art equipment and unmatched service excellence to healthcare facilities.
              </p>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Our dedication to precision, safety protocols, and customer satisfaction has established us as the premier partner for healthcare providers nationwide.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#8B1A1A] to-[#B82020] flex items-center justify-center text-white text-sm font-bold rounded shadow-lg shadow-[#8B1A1A]/30 group-hover:scale-110 transition-transform">✓</div>
                  <div>
                    <div className="text-white font-bold text-lg mb-1">ISO Certified Excellence</div>
                    <div className="text-white/60 text-lg">International quality standards and compliance certification</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#8B1A1A] to-[#B82020] flex items-center justify-center text-white text-sm font-bold rounded shadow-lg shadow-[#8B1A1A]/30 group-hover:scale-110 transition-transform">✓</div>
                  <div>
                    <div className="text-white font-bold text-lg mb-1">Elite Engineering Team</div>
                    <div className="text-white/60 text-lg">Certified biomedical engineers and specialist technicians</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#8B1A1A] to-[#B82020] flex items-center justify-center text-white text-sm font-bold rounded shadow-lg shadow-[#8B1A1A]/30 group-hover:scale-110 transition-transform">✓</div>
                  <div>
                    <div className="text-white font-bold text-lg mb-1">24/7 Critical Support</div>
                    <div className="text-white/60 text-lg">Always-available assistance for mission-critical systems</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-[#8B1A1A]/50 transition-all group hover:shadow-2xl hover:shadow-[#8B1A1A]/20">
                <div className="text-[#ff4444] text-5xl font-bold mb-3 group-hover:scale-110 transition-transform inline-block">15+</div>
                <div className="text-white/60 text-lg">Years Experience</div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#8B1A1A] to-transparent rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-[#8B1A1A]/50 transition-all group hover:shadow-2xl hover:shadow-[#8B1A1A]/20">
                <div className="text-[#ff4444] text-5xl font-bold mb-3 group-hover:scale-110 transition-transform inline-block">500+</div>
                <div className="text-white/60 text-lg">Healthcare Partners</div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#8B1A1A] to-transparent rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-[#8B1A1A]/50 transition-all group hover:shadow-2xl hover:shadow-[#8B1A1A]/20">
                <div className="text-[#ff4444] text-5xl font-bold mb-3 group-hover:scale-110 transition-transform inline-block">2K+</div>
                <div className="text-white/60 text-lg">Systems Deployed</div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#8B1A1A] to-transparent rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-[#8B1A1A]/50 transition-all group hover:shadow-2xl hover:shadow-[#8B1A1A]/20">
                <div className="text-[#ff4444] text-5xl font-bold mb-3 group-hover:scale-110 transition-transform inline-block">99%</div>
                <div className="text-white/60 text-lg">Client Satisfaction</div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#8B1A1A] to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6 bg-[#0f0f0f] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B1A1A]/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#8B1A1A]/20 to-transparent text-[#ff4444] text-sm font-medium mb-6 border border-[#8B1A1A]/30">
              CONNECT WITH US
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Transform Your Healthcare Facility
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Ready to implement cutting-edge medical technology? Let's discuss your requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B1A1A]/30 to-[#8B1A1A]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#8B1A1A]/40 transition-all border border-[#8B1A1A]/20">
                    <Phone className="w-8 h-8 text-[#ff4444]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl mb-2">Phone</div>
                    <div className="text-white/60 text-lg">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B1A1A]/30 to-[#8B1A1A]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#8B1A1A]/40 transition-all border border-[#8B1A1A]/20">
                    <Mail className="w-8 h-8 text-[#ff4444]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl mb-2">Email</div>
                    <div className="text-white/60 text-lg">contact@novussmedtech.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B1A1A]/30 to-[#8B1A1A]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#8B1A1A]/40 transition-all border border-[#8B1A1A]/20">
                    <MapPin className="w-8 h-8 text-[#ff4444]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl mb-2">Location</div>
                    <div className="text-white/60 text-lg">Hyderabad, India</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-10 rounded-2xl backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#0f0f0f] border border-white/10 text-white px-5 py-4 rounded-lg focus:outline-none focus:border-[#8B1A1A] focus:ring-2 focus:ring-[#8B1A1A]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#0f0f0f] border border-white/10 text-white px-5 py-4 rounded-lg focus:outline-none focus:border-[#8B1A1A] focus:ring-2 focus:ring-[#8B1A1A]/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-[#0f0f0f] border border-white/10 text-white px-5 py-4 rounded-lg focus:outline-none focus:border-[#8B1A1A] focus:ring-2 focus:ring-[#8B1A1A]/20 transition-all resize-none"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-[#8B1A1A] to-[#B82020] hover:from-[#6B1515] hover:to-[#8B1A1A] text-white px-8 py-5 font-semibold transition-all rounded-lg shadow-2xl shadow-[#8B1A1A]/40 hover:shadow-[#8B1A1A]/60">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center">
              <img src="/NOVUSS.png" alt="NOVUSS" className="h-16 w-auto opacity-90" />
            </div>
            <div className="text-white/60 text-sm">
              © 2025 NOVUSS Medtech Industries. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
