
export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4 gap-16">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-4xl text-center font-bold px-4">Marissa V. Fitzgerald, M.Ed.</h1>
          <h2 className="px-2 text-center">Learning Specialist | Educational Coach | College Admissions Counselor | Student Wrangler</h2>
        </header>
        <div className="w-full space-y-6 px-8 flex items-center justify-center md:gap-16 max-sm:flex-col max-md:flex-row">
          <img className="md:w-1/4" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="Marissa V. Fitzgerald, M.Ed." />
          <div className="text-center gap-4">
            <h1 className="text-3xl font-bold py-4">About Marissa</h1>
            <p>
              Marissa V. Fitzgerald is an educational coach, learning specialist, college admissions advisor, and self-professed "student wrangler" with nearly 20 years of experience. A graduate of Brown University with honors in English and American Literatures with an M.A. in Education from NYU, Marissa brings a rare blend of intellectual rigor, strategic insight, profound passion, and deep empathy to her work with both students and families. Marissa lives with her family in New York City and loves to travel, eat, cook, hike, and spend time with her kids.
            </p>
            <br />
            <p>
              After receiving a B.A. in English and American Literature with honors from Brown University, she returned to NYC where she had danced as a professional ballerina with the New York City Ballet. Upon completion of the Columbia University Publishing curriculum, she began her career as a literary agent, book doctor, and ghostwriter. After two years of evening studies at NYU, she garnered her M.A. in Education.
            </p>
            <br />
            <p>
              Having never abandoned her love for cultivating the written word, Marissa has penned over 8 books under the aegis of various individuals. She continues to edit both fiction and nonfiction works as well. Her time is pretty evenly split between working with students and her professional writing and editing work.
            </p>
            <br />
          </div>
        </div>
        <h2 className="font-bold text-2xl px-10 text-center">
          Honestly, the longer she does both, the more similar they seem; she masters complex topics and distills them into easily communicable concepts.
        </h2>
        <hr className="w-3/4" />
      </div>
      <div className="flex flex-col gap-4 px-8">
        <h1 className="text-3xl font-bold py-4">Experience & Approach</h1>
        <p>
          Since then, Marissa has worked as an educator for the past 17 years in NYC, California, and Utah. However, she has and continues to work remotely with clients throughout both the country and the world. Having lived and worked in New York City, California, and Utah, Marissa's student roster spans beyond the 50 states, including multiple international clients as well.
        </p>
        <p>
          Her approach is highly individualized, relationship-driven, and rooted in helping students not just "get in" but truly thrive—academically, socially, and emotionally. Her lesson planning is bespoke to each student, none of that teaching by the script that the big standardized test prep franchises hire their tutors to do.
        </p>
        <p>
          Experienced with a wide range of learners—from gifted and neurodiverse students to those managing ADHD, anxiety, or complex learning differences, her approach is highly individualized, relationship-driven, and oriented towards tangible results.
        </p>
      </div>
    </main>
  );
}