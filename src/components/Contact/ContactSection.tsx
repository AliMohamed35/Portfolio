import SayHelloButton from "../buttons/SayHello";

function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container m-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#7241FF] tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's work together<span className="text-[#7079f0]">.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            I can help bring your ideas to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#7241FF]/20 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#7079f0]/10 text-[#7079f0] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-bold text-[#010314] mb-1">Email</h3>
              <p className="text-gray-500 text-sm">ali@example.com</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#7241FF]/20 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#7079f0]/10 text-[#7079f0] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#010314] mb-1">Location</h3>
              <p className="text-gray-500 text-sm">Cairo, Egypt</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#7241FF]/20 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#7079f0]/10 text-[#7079f0] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#010314] mb-1">Availability</h3>
              <p className="text-gray-500 text-sm">Open for freelance</p>
            </div>
          </div>

          <SayHelloButton />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
