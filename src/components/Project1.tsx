import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const PROJECT_POSTER =
  'https://res.cloudinary.com/dtbgkad9m/image/upload/v1782055858/WhatsApp_Image_2026-06-21_at_20.58.52_2_qxgqfz.jpg';

const Project1 = () => {
  const navigate = useNavigate();

  const project = {
    id: 1,
    name: 'মনোরঞ্জন-সুখ নিকেতন',
    date: 'Ongoing',
    image: PROJECT_POSTER,
    description:
      'সম্প্রতি আমাদের ট্রাস্টের একটি নতুন মানবিক প্রকল্প হিসেবে একটি বৃদ্ধাশ্রম (আশ্রয়হীনদের জন্য আশ্রয়স্থল) নির্মাণের পরিকল্পনা গ্রহণ করা হয়েছে।',
    location: 'করবাড়ি স্টপেজ অশোকপুর, পূর্ব ময়না পাড়া',
    ongoing: true,
  };

  const openProjectDetails = () => {
    navigate('/project-details');
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b0b] py-10 sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#b0db9c]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] px-0 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b0db9c]">
            Ongoing Project
          </p>
          <h2 className="bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl lg:text-6xl">
            {project.name}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
            {project.description}
          </p>
        </div>

        <article className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808] shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:rounded-[2rem]">
          <button
            type="button"
            onClick={openProjectDetails}
            className="group relative block min-h-[76vh] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-inset sm:min-h-[88vh] lg:min-h-[110vh]"
            aria-label="Open Monoranjan-Sukh Niketan project details"
          >
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />

            {project.ongoing && (
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/75 px-3 py-1.5 shadow sm:left-6 sm:top-6">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Live Project</span>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
              <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="inline-flex items-center rounded-full bg-[#b0db9c] px-3 py-1 text-xs font-semibold text-black shadow">
                    {project.date}
                  </div>
                  <div className="mt-3 flex max-w-xl items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-2 text-xs text-white backdrop-blur sm:text-sm">
                    <MapPin className="h-4 w-4 text-[#b0db9c]" aria-hidden="true" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur sm:self-auto sm:text-sm">
                  <span>Click photo to open project details</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Project1;
