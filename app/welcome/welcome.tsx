
export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4 gap-16 sm:gap-8">
      <div className="flex-1 flex flex-col items-center md:gap-16 sm:gap-8 min-h-0">
        <header className="flex flex-col items-center gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold px-4 leading-tight">Marissa V. Fitzgerald, M.Ed.</h1>
          <div className="text-center">
            <p className="text-base text-gray-700 font-medium md:px-8 sm:px-4">
              Brown University B.A. (Honors) | NYU M.Ed. | Columbia University Publishing Program | 20+ Years Experience
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Remote sessions available worldwide
            </p>
          </div>
        </header>
        <div className="w-full space-y-6 px-8 lg:px-12 flex items-center justify-center md:gap-16 sm:gap-8 max-sm:flex-col max-md:flex-row">
          <img className="w-56 md:w-56 lg:w-80 my-0" src="/logo.png" alt="Marissa V. Fitzgerald, M.Ed." />
          <div className="text-center gap-6">
            <h1 className="text-3xl font-bold py-4 text-green-800">About Marissa</h1>
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">Background & Credentials</h3>
                <p className="text-base leading-relaxed">
                  Marissa V. Fitzgerald is an educational coach, learning specialist, and college admissions advisor with nearly 20 years of experience. A graduate of Brown University with honors in English and American Literatures and an M.Ed. from NYU, she brings intellectual rigor, strategic insight, and deep empathy to her work with students and families.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">Unique Experience</h3>
                <p className="text-base leading-relaxed">
                  After dancing professionally with the New York City Ballet, Marissa completed Columbia University's Publishing Program and worked as a literary agent and ghostwriter. This unique background in both performing arts and publishing gives her exceptional skills in communication and helping students express their ideas clearly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">Current Practice</h3>
                <p className="text-base leading-relaxed">
                  Marissa works remotely with clients throughout the United States and internationally, providing personalized educational support that adapts to each student's unique learning style and needs. Her practice combines academic coaching with executive functioning support to help students thrive both academically and personally.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50 py-12 px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Services Overview</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Academic Coaching</h3>
              <p className="text-gray-700">Comprehensive support across all subjects for students in grades K-12 and beyond, with personalized lesson plans tailored to each student's learning style.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Standardized Test Prep</h3>
              <p className="text-gray-700">Expert preparation for SAT, ACT, SSAT, ISEE, and other standardized tests with proven strategies and individualized study plans.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">College Admissions Counseling</h3>
              <p className="text-gray-700">Complete guidance through the college application process, including essay writing, school selection, and application strategy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Executive Functioning Support</h3>
              <p className="text-gray-700">Essential skills development including organization, time management, study strategies, and self-advocacy for academic success.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="mailto:hellomarissa@gmail.com?subject=Free Consultation Request&body=Hi Marissa, I'm interested in scheduling a free consultation for my child's educational needs."
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
      <div className="w-full py-12 px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Specializations</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  <span>Gifted and neurodiverse learners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  <span>Students with ADHD, anxiety, and learning differences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  <span>IEP support and advocacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">•</span>
                  <span>ESL students seeking academic advancement</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Remote Sessions Available Worldwide</h3>
              <p className="text-gray-700 leading-relaxed">
                Marissa works with students across the United States and internationally, providing flexible scheduling and personalized support that adapts to different time zones and learning environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Approach & Philosophy</h2>
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Marissa's approach is highly individualized, relationship-driven, and rooted in helping students not just "get in" but truly thrive—academically, socially, and emotionally. Her lesson planning is bespoke to each student, avoiding the one-size-fits-all approach of standardized test prep franchises.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              She masters complex topics and distills them into easily communicable concepts, helping students build confidence and achieve tangible results in their academic journey.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}