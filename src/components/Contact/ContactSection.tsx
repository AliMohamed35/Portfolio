import SayHelloButton from "../buttons/SayHello";

function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold text-gray-400 tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Let's work together<span className="text-gray-500">.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-8 sm:mb-12">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            I can help bring your ideas to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 text-gray-200 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-1">Email</h3>
              <p className="text-gray-400 text-sm">alimohameddev@hotmail.com</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 text-gray-200 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-1">Location</h3>
              <p className="text-gray-400 text-sm">Cairo, Egypt</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 text-gray-200 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-1">Availability</h3>
              <p className="text-gray-400 text-sm">Open for freelance</p>
            </div>
          </div>

          <div className="flex justify-center">
            <SayHelloButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
