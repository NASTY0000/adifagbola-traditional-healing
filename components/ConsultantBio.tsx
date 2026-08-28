import Image from "next/image";
import React from "react";

interface ConsultantBioProps {
  portraitSrc?: string;
  portraitAlt?: string;
  className?: string;
}

/**
 Component: ConsultantBio
 Purpose: Editorial, magazine-style biography block for the About page.
 Notes:
 - Uses Playfair Display for headings via next/font import applied at app-level.
 - Default portrait path is /images/portrait.jpeg. Pass portraitSrc prop to override.
*/
const ConsultantBio: React.FC<ConsultantBioProps> = ({
  portraitSrc = "/images/portrait.jpeg",
  portraitAlt = "Portrait of Oluwo Dr. Faniyi Adebanjo Adifagbola",
  className = "",
}) => {
  return (
    <section
      className={`bg-[#faf8f5] py-12 px-6 md:px-16 ${className}`}
      aria-label="Consultant biography"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left: Portrait */}
        <figure className="md:col-span-5 flex justify-center md:justify-start">
          <div className="w-full max-w-md md:max-w-none">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#f4d068] shadow-lg">
              <Image
                src={portraitSrc}
                alt={portraitAlt}
                width={900}
                height={1200}
                className="w-full h-auto object-cover block"
                priority={false}
              />
            </div>
          </div>
        </figure>

        {/* Right: Text */}
        <div className="md:col-span-7">
          <header className="mb-6">
            <h1
              className="text-[#f4d068] text-3xl md:text-4xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Oluwo Dr. Faniyi Adebanjo Adifagbola
            </h1>
          </header>

          <div className="max-w-none text-[#1a3c28] font-sans leading-relaxed">
            <section className="mb-6">
              <h3 className="text-[#1a3c28] text-sm font-semibold uppercase tracking-wider mb-2">
                Lineage & Heritage
              </h3>
              <p className="mb-0 leading-relaxed">
                Oluwo Dr. Faniyi Adebanjo Adifagbola is a distinguished practitioner of the ancient Yoruba tradition of Ifá, representing the sixth generation of his family lineage dedicated to the preservation and transmission of this sacred knowledge. From a young age, he was immersed in the teachings, values, and practices of Ifá, receiving guidance directly from his family. His father, Chief Dr. Ifáyemi Adifagbola, who is the Oluwo Ifá of Isawo, Ikorodu, and his uncle and mentor, Chief Dr. Ifáyiga Adifagbola, the Asoju Awo of Ogun State, played a significant role in his spiritual upbringing and education.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-[#1a3c28] text-sm font-semibold uppercase tracking-wider mb-2">
                Training & Expertise
              </h3>
              <p className="mb-0 leading-relaxed">
                He received formal certification in Ifá on August 20, 2012, under the supervision of his family elders, including Chief Dr. Ifáyiga Adifagbola, Chief Dr. Ifáyemi Adifagbola, and the Late Chief Dr. Olubade Ifagboye, the Araba of Irolu, Remo, Ogun State. With over 13 years of professional practice and a lifetime of immersion in the tradition, his work is deeply rooted in his family heritage and the authentic Yoruba transmission of Ifá knowledge.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-[#1a3c28] text-sm font-semibold uppercase tracking-wider mb-2">
                Mission & Ethics
              </h3>
              <p className="mb-0 leading-relaxed">
                His mission is to preserve, honor, and share authentic Yoruba spiritual practices with communities in the United Kingdom and across the diaspora. He aims to create a respectful environment where individuals can learn about Ifá divination and Yoruba traditions from an authentic cultural perspective, while maintaining the integrity and values entrusted to him through generations. He emphasizes confidentiality, honesty, and respect in his practice. All information shared during consultations is treated with absolute discretion. Oluwo Dr. Faniyi approaches each person with dignity, compassion, and professionalism, upholding the sacred principles of the Ifá tradition.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantBio;
