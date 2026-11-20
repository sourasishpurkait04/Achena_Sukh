import React, { useEffect, useState } from 'react'; //Manaranjan Sukh Niketan
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  MapPin,
  Calendar,
  Download,
  MessageCircle,
  ChevronLeft,
  Users,
  Phone,
  Mail,
  PlayCircle,
  TrendingUp as TrendingUpIcon,
} from 'lucide-react';
// import ProgressBar from '../components/ProgressBar';

const PROJECT_POSTER =
  'https://res.cloudinary.com/dtbgkad9m/image/upload/v1782055858/WhatsApp_Image_2026-06-21_at_20.58.52_2_qxgqfz.jpg';
const PROJECT_VIDEO =
  'https://res.cloudinary.com/dtbgkad9m/video/upload/v1786904311/WhatsApp_Video_2026-08-16_at_23.39.25_p88iql.mp4';


interface ProjectDetailsProps {
  onNavigateToDonate?: () => void;
}

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    title: 'Monoranjan Sukh Niketan',
    aboutHeading: 'About the project',
    aboutPara1: 'Our trust is building a safe home for older people who have nowhere to turn. The home will offer shelter, care and dignity to people who are vulnerable or have been abandoned.',
    aboutPara2: 'Everyone deserves to live with dignity and care. Your support can help make this home a reality.',
    locationLabel: 'Location', locationValue: 'Korbarhi Stoppage, Ashokpur, Purba Moyna Para',
    finishLabel: 'Estimated completion', finishValue: 'March 2027',
    planHeading: 'Project plan', downloadBtn: 'Download the plan (PDF)', whatsappBtn: 'Join the WhatsApp group',
    progressHeading: 'Project progress', needHelpHeading: 'Your support is needed',
    needHelpPara: 'Your contribution helps us build a safe, welcoming home for older people who need support.',
    donateNow: 'Donate now', learnMore: 'Learn more', galleryHeading: 'Project photos', mapHeading: 'Map', videoHeading: 'June 2026 video',
    ctaHeading: 'Stand with us', ctaPara: 'Every contribution can help improve someone’s life. Please donate what you can.',
    joinGroup: 'Join the WhatsApp group', footerCopy: 'All rights reserved.', phoneLabel: 'Phone', emailLabel: 'Email',
    orgName: 'Achena Sukh', clickMap: '— open the map for details', backLabel: 'Go back',
    gallery1: 'Project begins', gallery2: 'Construction', gallery3: 'Progress', gallery4: 'Current state',
    gallery5: 'Wall construction', gallery6: 'Roof work', gallery7: 'Interior work', gallery8: 'Finishing work',
  },
  bn: {

    videoHeading: 'জুন ২০২৬-এর ভিডিও',

    title: 'মনোরঞ্জন সুখ নিকেতন', subtitle: 'অসহায় প্রবীণদের পাশে, নিরাপদ ভবিষ্যতের পথে',
    aboutHeading: 'প্রকল্প সম্পর্কে',
    aboutPara1: 'আমাদের ট্রাস্ট আশ্রয়হীন প্রবীণদের জন্য একটি নিরাপদ আবাস গড়ে তুলছে। এই আশ্রয়কেন্দ্রে অসহায় ও পরিত্যক্ত প্রবীণরা আশ্রয়, যত্ন ও মর্যাদা নিয়ে থাকতে পারবেন।',
    aboutPara2: 'প্রত্যেক মানুষের সম্মান ও যত্ন পাওয়ার অধিকার আছে। আপনার সহায়তায় এই আবাস গড়ে তোলা সম্ভব হবে।',
    locationLabel: 'ঠিকানা', locationValue: 'করবাড়ি স্টপেজ, অশোকপুর, পূর্ব ময়না পাড়া',
    finishLabel: 'সম্ভাব্য সমাপ্তি', finishValue: 'মার্চ ২০২৭',
    planHeading: 'প্রকল্পের নকশা', downloadBtn: 'নকশা ডাউনলোড করুন (PDF)', whatsappBtn: 'হোয়াটসঅ্যাপ গ্রুপে যোগ দিন',
    progressHeading: 'প্রকল্পের অগ্রগতি', needHelpHeading: 'আপনার সহায়তা প্রয়োজন',
    needHelpPara: 'যাঁদের সহায়তা প্রয়োজন, তাঁদের জন্য নিরাপদ ও স্নেহপূর্ণ আবাস গড়তে আপনার অনুদান সাহায্য করবে।',
    donateNow: 'অনুদান দিন', learnMore: 'আরও জানুন', galleryHeading: 'প্রকল্পের ছবি', mapHeading: 'মানচিত্র',
    ctaHeading: 'আমাদের পাশে থাকুন',
    ctaPara: 'আপনার প্রতিটি অনুদান কারও জীবনকে আরও ভালো করতে সাহায্য করতে পারে। সামর্থ্য অনুযায়ী অনুদান দিন।',
    joinGroup: 'হোয়াটসঅ্যাপ গ্রুপে যোগ দিন', footerCopy: 'সর্বস্বত্ব সংরক্ষিত।', phoneLabel: 'ফোন',
    emailLabel: 'ইমেল', orgName: 'অচেনা সুখ', clickMap: '— বিস্তারিত জানতে মানচিত্র খুলুন',
    backLabel: 'ফিরে যান', gallery1: 'প্রকল্পের শুরু', gallery2: 'নির্মাণকাজ', gallery3: 'অগ্রগতি',
    gallery4: 'বর্তমান অবস্থা', gallery5: 'দেয়াল নির্মাণ', gallery6: 'ছাদের কাজ', gallery7: 'ভেতরের কাজ',
    gallery8: 'শেষ পর্যায়ের কাজ',
  },
};
function ProjectDetails({ onNavigateToDonate }: ProjectDetailsProps) {
  const navigate = useNavigate();

  const PDF_URL = 'https://drive.google.com/file/d/1f4Dlx9m7KmKt_PDySxuy0xhC01nPrFvr/view?usp=sharing';
  // const WHATSAPP_GROUP_URL = 'https://wa.me/917029992422?text=Hello%20I%20want%20to%20know%20more%20about%20Monoranjan-Sukh%20Niketan%20and%20I%20want%20to%20join%20the%20WhatsApp%20group%20of%20Achena%20Sukh';
  const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FbsCTa7wgruG4ujKz3ZwID';

  // const totalAmount = 395000;
  // const collected = 35000;

  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  useEffect(() => {
    const stored = localStorage.getItem('siteLang') as 'bn' | 'en' | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('siteLang', lang);
  }, [lang]);

  const t = (key: string) => TRANSLATIONS[lang][key] ?? key;

  const [galleryImages] = useState([
    { id: 1, title: 'Project photo', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005539/WhatsApp_Image_2025-10-12_at_13.53.06_d159e69b_gsja5e.jpg' },
    { id: 2, title: 'Project photo', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005553/WhatsApp_Image_2025-12-16_at_12.01.15_e2d957ce_fmcfvn.jpg' },
    { id: 3, title: 'Project photo', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766008053/WhatsApp_Image_2025-12-15_at_10.32.37_9a38078e_wxmosk.jpg' },
    { id: 4, title: 'Project photo', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005547/WhatsApp_Image_2025-12-16_at_12.01.15_2d37953b_r5iqzh.jpg' },
    { id: 5, title: 'Project photo', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005553/WhatsApp_Image_2025-12-16_at_12.01.15_e2d957ce_fmcfvn.jpg' },
    { id: 6, title: 'Project photo', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766008324/WhatsApp_Image_2025-12-16_at_12.01.11_94653d33_xx7oso.jpg' },

  ]);

  const handleDonateClick = () => {
    if (onNavigateToDonate) return onNavigateToDonate();
    navigate('/donate');
  };

  const handleDownloadPDF = () => {
    const a = document.createElement('a');
    a.href = PDF_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.download = PDF_URL.split('/').pop() || 'project-plan.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleWhatsAppClick = () => {
    window.location.href = WHATSAPP_GROUP_URL;
  };

  const galleryTitle = (id: number) => {
    const key = `gallery${id}`;
    return t(key);
  };

  return (
    <div lang={lang} className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-r from-[#246b55] to-[#237d85] text-white py-16 px-4 shadow-xl relative" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.62)), url(https://res.cloudinary.com/dtbgkad9m/image/upload/v1795191711/WhatsApp_Image_2026-11-20_at_21.51.19_vl6s43.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className="absolute top-6 left-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-black/10 backdrop-blur text-black px-3 py-1.5 rounded-full hover:bg-black/20 transition"
            aria-label={t('backLabel')}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* language selector */}
        {/* <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
          <button
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
            className={`px-3 py-1 rounded-full font-semibold ${lang === 'en' ? 'bg-black/20' : 'bg-black/10'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('bn')}
            aria-pressed={lang === 'bn'}
            className={`px-3 py-1 rounded-full font-semibold ${lang === 'bn' ? 'bg-black/20' : 'bg-black/10'}`}
          >
            EN / BN
          </button>
        </div> */}

        <div className="max-w-7xl mx-auto text-center pt-8">
          <div className="flex justify-center mb-6">
            <img src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218997/Logo2_kuyzqh.png" alt="Achena Sukh logo" className="w-18 h-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide text-white">{t('title')}</h1>
          <p className="text-xl md:text-2xl font-medium text-white">{t('subtitle')}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">







        <section className="bg-[#121212] rounded-2xl shadow p-8 md:p-12 mb-8 border border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-10 h-10 text-[#b0db9c]" />
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">{t('aboutHeading')}</h2>
              <p className="text-gray-300 leading-relaxed mb-2">{t('aboutPara1')}</p>
              <p className="text-gray-300 leading-relaxed">{t('aboutPara2')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <MapPin className="w-6 h-6 text-[#b0db9c]" />
              <div>
                <p className="text-sm text-gray-400">{t('locationLabel')}</p>
                <p className="text-lg font-medium text-white">{t('locationValue')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <Calendar className="w-6 h-6 text-[#b0db9c]" />
              <div>
                <p className="text-sm text-gray-400">{t('finishLabel')}</p>
                <p className="text-lg font-medium text-white">{t('finishValue')}</p>
              </div>
            </div>
          </div>
        </section>

<section className="mb-10 px-2 py-4 text-center">
          <img
            src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1795189971/WhatsApp_Image_2026-11-20_at_21.22.10_mapcnw.jpg"
            alt="স্বর্গীয় মনোরঞ্জন ভান্ডারী"
            className="mx-auto mb-8 max-h-[480px] w-full max-w-md rounded-xl object-contain"
            loading="lazy"
          />
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-5 text-2xl font-bold leading-relaxed text-white md:text-3xl">
              স্বর্গীয় মনোরঞ্জন ভান্ডারী
            </h2>
            <p className="text-left text-base leading-8 text-gray-200 md:text-lg">
              “অচেনা সুখ”-এর স্বপ্ন ছিল একদিন আকাশে ভাসমান রঙিন রেখা—দূরের, অধরা, কেবল কল্পনার আলো। আপনারা সেই স্বপ্নকে মাটির গন্ধ দিলেন; দানশীল, উর্বর হৃদয় খুলে স্বপ্নের হাতে তুলে দিলেন ভূমির স্পন্দন। এই আড়াই বিঘে শুধু মাপের হিসাব নয়—এ এক আশ্রয়ের অঙ্গীকার, এ এক আগামী প্রজন্মের হাসির বীজ। এখানেই “সুখনিকেতন” ধীরে ধীরে শ্বাস নিচ্ছে; গড়ে উঠছে ইঁটের গাঁথুনিতে মমতা, দেওয়ালের ভেতর মানবিকতার আলো। “অচেনা সুখ” আজ নত কণ্ঠে উচ্চারণ করে—এই দান পরিমাণে নয়, প্রার্থনায় বিশাল। এ শুধু জমি নয়, এ এক অনন্ত আশীর্বাদ। আপনাদের মহত্ব সময়ের বুক জুড়ে লেখা থাকবে শ্রদ্ধায়, ভালোবাসায়, কৃতজ্ঞতার দীপশিখায়।
            </p>
          </div>
        </section>

        <section className="bg-[#121212] rounded-2xl shadow p-8 md:p-12 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
            <TrendingUpIcon className="w-7 h-7 text-[#b0db9c]" /> {t('planHeading')}
          </h3>

          <div className="rounded-xl overflow-hidden shadow-lg h-96 mb-6">
            <img
              src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1766004868/WhatsApp_Image_2025-12-11_at_12.28.01_77d0db92_mjdg65.jpg"
              alt={t('planHeading')}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-6 mb-6">
             <video
              src="https://res.cloudinary.com/dtbgkad9m/video/upload/WhatsApp_Video_2026-01-07_at_20.32.27_myly5w.mp4"
              poster={PROJECT_POSTER}
              controls
              preload="metadata"
              playsInline
              className="w-full rounded-xl"
            ></video>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <Download className="w-5 h-5" /> {t('downloadBtn')}
            </button>

            {/* <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <MessageCircle className="w-5 h-5" /> {t('whatsappBtn')}
            </button> */}
          </div>
        </section>

        <section className="bg-[#121212] rounded-2xl shadow p-4 md:p-6 mb-8 border border-white/10">
          <div className="mb-4 flex items-center gap-3">
            <PlayCircle className="w-6 h-6 text-[#b0db9c]" />
            <h3 className="text-2xl font-bold text-white">{t('videoHeading')}</h3>
          </div>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-black sm:aspect-video">
            <video
              src={PROJECT_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* <div className="lg:col-span-2 bg-[#121212] rounded-2xl shadow p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">{t('progressHeading')}</h3>
            <ProgressBar current={collected} total={totalAmount} lang={lang} />

            <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
              <p className="text-lg text-gray-300 mb-4">

              </p>
              <p className="text-gray-300 mb-6">{t('needHelpPara')}</p>

              <div className="flex gap-4">
                <button
                  onClick={handleDonateClick}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b0db9c] to-[#78e0dc] text-black px-6 py-3 rounded-full font-semibold"
                >
                 {t('donateNow')}
                </button>
                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 border border-[#b0db9c] text-[#b0db9c] px-6 py-3 rounded-full font-semibold hover:bg-[#b0db9c]/10 transition"
                >
                  {t('learnMore')}
                </button>
              </div>
            </div>
          </div> */}

          <aside className="bg-[#121212] rounded-2xl shadow p-6 sticky top-6 h-fit border border-white/10">
            <h4 className="text-xl font-bold mb-4 text-white">{t('locationLabel')} & contact</h4>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b0db9c] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">{t('locationLabel')}</p>
                  <p className="text-sm font-medium text-white">{t('locationValue')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#b0db9c] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">{t('phoneLabel')}</p>
                  <p className="text-sm font-medium text-white">+91 7029992422</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#b0db9c] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">{t('emailLabel')}</p>
                  <p className="text-sm font-medium text-white">achenasukh@gmail.com</p>
                </div>
              </div>
            </div>

            <button onClick={handleWhatsAppClick} className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold">
              <MessageCircle className="w-5 h-5" /> {t('joinGroup')}
            </button>
          </aside>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <section className="lg:col-span-3 bg-[#121212] rounded-2xl shadow p-4 md:p-6 border border-white/10 overflow-hidden">
            <h4 className="text-xl font-bold mb-4 text-white">{t('galleryHeading')}</h4>
            <div className="relative -mx-4 md:-mx-6 overflow-hidden">
              <div className="project-gallery-scroll-ltr flex w-max gap-4 px-4 md:px-6">
                {[...galleryImages, ...galleryImages].map((img, index) => (
                  <div
                    key={`${img.id}-${index}`}
                    className="relative h-44 w-[68vw] max-w-[240px] shrink-0 overflow-hidden rounded-lg border border-white/10 shadow-sm sm:h-48 sm:w-56 md:h-56 md:w-64"
                    aria-hidden={index >= galleryImages.length}
                  >
                    <img
                      src={img.image}
                      alt={index < galleryImages.length ? galleryTitle(img.id) : ''}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#121212] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#121212] to-transparent" />
            </div>
          </section>

          {/* <section className="bg-[#121212] rounded-2xl shadow p-6 border border-white/10">
            <h4 className="text-xl font-bold mb-4 text-white">{t('mapHeading')}</h4>
            <div className="rounded-lg overflow-hidden h-72 shadow">
              <iframe
                title="Project Location"
                src="https://www.google.com/maps/place/Kakdwip+karbari+akshaynagar/@21.86384,88.2063201,14z/data=!4m10!1m2!2m1!1sKakdwip+karbari+akshaynagar+Achena+Sukh!3m6!1s0x3a0255bc86f31ab3:0x236764573579291f!8m2!3d21.8516858!4d88.2108952!15sCidLYWtkd2lwIGthcmJhcmkgYWtzaGF5bmFnYXIgQWNoZW5hIFN1a2iSAQRwYXJr4AEA!16s%2Fg%2F11shxv5kt2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-gray-400 mt-3">{t('locationValue')} {t('clickMap')}</p>
          </section> */}
        </div>

        <section className="bg-gradient-to-r from-[#b0db9c] to-[#78e0dc] rounded-2xl shadow p-8 text-black text-center">
          <h4 className="text-2xl font-bold mb-3">{t('ctaHeading')}</h4>
          <p className="mb-6">{t('ctaPara')}</p>
          <div className="flex gap-4 justify-center">
            <button onClick={handleDonateClick} className="bg-black text-[#b0db9c] px-6 py-3 rounded-full font-semibold">{t('donateNow')}</button>
            <button onClick={handleWhatsAppClick} className="border border-black text-black px-6 py-3 rounded-full">{t('joinGroup')}</button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} {t('orgName')} - {t('footerCopy')}
        </div>
      </footer>
    </div>
  );
}

export default ProjectDetails;
