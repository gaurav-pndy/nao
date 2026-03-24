"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const committeeMembers = [
  {
    name: "Prof. Gopal M. Kamath",
    designation: "Head, Department of Aerospace Engineering",
    organization: "IIT Kanpur",
    city: "Kanpur",
    image: "/experts/KAMATH_Gopal_M.jpg",
  },
  {
    name: "Wg. Cdr. Prem Kumar Garg (Retd.)",
    designation: "Chief Executive Officer & Accountable Manager",
    organization: "IndiaOne Air",
    city: "Gandhinagar",
    image: "/experts/Prem_Kumar_GARG.jpg",
  },
  {
    name: "Sameep Shastri",
    designation: "Chairman",
    organization:
      "Indian Institute of Governance and Leadership & BRICS Chamber of Commerce & Industry",
    city: "Delhi",
    image: "/experts/Sameep.webp",
  },
  {
    name: "Padma Shri Dr. H. C. Verma",
    designation: "Former Professor",
    organization: "Department of Physics, IIT Kanpur",
    city: "Kanpur",
    image: "/experts/hc-verma-bw.jpg",
  },
  {
    name: "Padma Shri Anand Kumar",
    designation: "Founder",
    organization: "Super30",
    city: "Delhi",
    image: "/experts/akumae1727936742828.jpg",
  },
  {
    name: "Dr. Sudhir Mishra",
    designation: "Ex-Director",
    organization: "Brahmos",
    city: "Delhi",
    image: "/experts/Sudhir.webp",
  },
  {
    name: "Shri. Apj Saleem Sheikh",
    designation: "Co-Founder",
    organization: "Dr. APJ Abdul Kalam International Foundation",
    city: "Chennai",
    image: "/experts/APJM.webp",
  },
  {
    name: "Prof. R. K. Pant",
    designation: "HoD",
    organization: "IIT Bombay",
    city: "Mumbai",
    image: "/experts/pant.jpg",
  },
  {
    name: "Dr. Rakesh Singh",
    designation: "Scientist",
    organization: "Defence Research and Development Organization (DRDO)",
    city: "Delhi",
    image: "/experts/Rakesh Kumar.jpg",
  },
  {
    name: "Shri. Vivek Kulkarni",
    designation: "Secretary",
    organization: "AeSI Mumbai",
    city: "Mumbai",
    image: "/experts/Vivek Kulkarni.jpg",
  },
  {
    name: "Lt. Gen. Ajay Kumar Suri",
    designation: "AVSM, Former Director General & Colonel Commandant",
    organization: "Army Aviation",
    city: "Delhi",
    image: "/experts/Ajay kumar.webp",
  },
  {
    name: "Dr. Arvind Dixit",
    designation: "Former Scientist",
    organization: "Defence Research and Development Organization (DRDO)",
    city: "Gurgaon",
    image: "/experts/Dixit.jpg",
  },
  {
    name: "Dr. Murzban Karai",
    designation: "Nuclear Scientist, CEO",
    organization: "Jenrashid Consultants",
    city: "Mumbai",
    image: "/experts/Picture2.jpg",
  },
  {
    name: "Capt. Ravinder Sehrawat",
    designation: "Director",
    organization: "Institute for Aviators",
    city: "Delhi",
    image: "/experts/Ravinder.webp",
  },
  {
    name: "Shri. R. Rajaram",
    designation: "Director",
    organization: "Sri Eshwar College of Engineering",
    city: "Coimbatore",
    image: "/experts/rajaram.webp",
  },
  {
    name: "Shri. Rajendra Mane",
    designation: "Director",
    organization: "Aircraft Maintenance Engineering, Interglobe Education",
    city: "Delhi",
    image: "/experts/R.Mane.jpg",
  },
  {
    name: "Shri. Aman Johri",
    designation: "CEO",
    organization: "Jatayu Unmanned Systems",
    city: "Mumbai",
    image: "/experts/Aman.jpg",
  },
  {
    name: "Shri. B. C. Behera",
    designation: "Former Deputy Director General",
    organization: "Directorate General of Civil Aviation (DGCA)",
    city: "Bengaluru",
    image: "/experts/bcbehera.webp",
  },
  {
    name: "Shri. S. Sathiyamani",
    designation: "Former Senior Technical Director, Scientist",
    organization: "National Informatics Centre (NIC)",
    city: "Delhi",
    image: "/experts/ssrini.jpg",
  },
  {
    name: "Shri. Sandeep Bahl",
    designation: "Director",
    organization: "US India Aviation Cooperation Program",
    city: "Delhi",
    image: "/experts/bahl.jpg",
  },
  {
    name: "Shri. Anirrban Bhattacharya",
    designation: "Director",
    organization: "Vector Technorum",
    city: "New Delhi",
    image: "/experts/Anirrban.jpg",
  },
  {
    name: "Col. K. V. Kuber (Retd.)",
    designation: "Director",
    organization: "Aerospace, Ernst & Young LLP (EY)",
    city: "New Delhi",
    image: "/experts/kv.jpg",
  },
  {
    name: "Prof. (Dr.) G. S. Bajpai",
    designation: "Vice Chancellor",
    organization: "National Law University Delhi",
    city: "Delhi",
    image: "/experts/gsb.webp",
  },
  {
    name: "Shri. Gabe Gabriel",
    designation: "Former Engineer",
    organization: "NASA",
    city: "Florida",
    image: "/experts/Gabe.webp",
  },
  {
    name: "Shri. Armel Jezequel",
    designation: "Chief Executive Officer",
    organization: "Aircraft Academy, France",
    city: "Mauguio",
    image: "/experts/Armel.jpg",
  },
  {
    name: "Shri. Rajender Singh Lahauria",
    designation: "Former Director & Consultant",
    organization: "Indian Aviation Academy, DGCA",
    city: "New Delhi",
    image: "/experts/RSL.webp",
  },
  {
    name: "Shri. Ashwani Sharma",
    designation: "Chairperson",
    organization: "Aeronautical Society of India (Mumbai Chapter)",
    city: "Mumbai",
    image: "/experts/ashwani.jpg",
  },
  {
    name: "Shri. Kandiah K Padmanthan",
    designation: "Managing Director",
    organization: "Subang MRO, Malaysia",
    city: "Subang",
    image: "/experts/K.K. Padmanathan.png",
  },
  {
    name: "Dr. P. V. Venkitakrishnan",
    designation: "Distinguished Scientist",
    organization: "Indian Space Research Organization (ISRO)",
    city: "Bengaluru",
    image: "/experts/v.krishnan.jpg",
  },
  {
    name: "Air Marshal Sukchain Singh (Retd.)",
    designation: "Former Air Officer-in-Charge Maintenance",
    organization: "Indian Air Force",
    city: "Delhi",
    image: "/experts/sukhchain.jpg",
  },
  {
    name: "Prof. M. S. Prasad",
    designation: "Director",
    organization:
      "Amity Institute of Space Science & Technology, Amity University",
    city: "Noida",
    image: "/experts/1790_MSPrasad.jpg",
  },
  {
    name: "Capt. Sudarshan Pandey",
    designation: "Managing Partner",
    organization: "International Flight Operations Academy, India",
    city: "Greater Delhi",
    image: "/experts/s.pandey.jpg",
  },
  {
    name: "Wg. Cdr. M Jeyakumar (Retd.)",
    designation: "Founder",
    organization:
      "nRoot Group & BRIDGE Bharat Council for Promotion of Innovation Research & Entrepreneurship",
    city: "Thanjavur",
    image: "/experts/jeyakumar.webp",
  },
  {
    name: "Dr. Vijayaraja K",
    designation:
      "Professor & Head, Department of Aeronautical and Aerospace Engineering",
    organization: "KCG College of Technology",
    city: "Chennai",
    image: "/experts/vijayaraja.jpg",
  },
  {
    name: "Capt. Poonam Devrakhyani",
    designation: "Flight Operations Inspector",
    organization: "DGCA India",
    city: "Chennai",
    image: "/experts/poonam.jpg",
  },
  {
    name: "Wg. Cdr. Rachit Bhatnagar (Retd.)",
    designation: "Aerospace & MRO Specialist, Head Business Operations",
    organization: "Farata Technologies Pvt. Ltd",
    city: "Chandigarh",
    image: "/experts/Rachit.jpg",
  },
  {
    name: "Capt. Vaibhav Goutham Suresh",
    designation: "Director",
    organization: "Galgotias University - SALTM",
    city: "Noida",
    image: "/experts/Goutham Suresh.jpg",
  },
  {
    name: "Shri. Linus Benjamin Bauer",
    designation: "Founder & Global Managing Partner",
    organization: "BAA & Partners",
    city: "Dubai",
    image: "/experts/Linus Benjamin.jpg",
  },
  {
    name: "Shri. Vippan Raj Dutt",
    designation: "Professor of Practice - Aviation Management",
    organization: "UPES",
    city: "Gurugram",
    image: "/experts/Raj Dutt.jpg",
  },
];

export default function NAOCommittee() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange">
            Guided by 100+ Aviation Experts
          </h2>

          <p className="mt-4 font-medium md:text-lg">
            NAO’s curriculum, examinations, and evaluation are overseen by a
            structured Expert Committee ensuring academic rigor, industry
            relevance, and policy alignment consistent with ICAO’s NGAP
            initiative.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative px-6 md:px-10"
        >
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="nao-committee-swiper"
          >
            {committeeMembers.map((member) => (
              <SwiperSlide key={member.name} className="h-full">
                {/* Card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="w-full h-56 sm:h-60 md:h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center flex flex-col flex-1">
                    {/* Name */}
                    <h3 className="text-lg md:text-xl font-semibold leading-tight min-h-[48px]">
                      {member.name}
                    </h3>

                    {/* Designation */}
                    <p className="font-medium text-[#2d333a] mt-1 text-sm md:text-base min-h-[48px]">
                      {member.designation}
                    </p>

                    {/* Organization */}
                    <p className="text-gray-700 font-semibold text-sm mt-1 min-h-[40px]">
                      {member.organization}
                    </p>

                    {/* City (always bottom aligned) */}
                    <p className="text-gray-500 text-sm mt-auto">
                      {member.city}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-4 md:mt-6 flex justify-center flex-wrap gap-2 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/people"
            className="bg-yellow cursor-pointer w-full md:w-fit hover:bg-[#e6c400] text-black font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Meet Our Experts
          </Link>

          <Link
            href="/people#eligibility"
            className="bg-red cursor-pointer w-full md:w-fit hover:bg-[#b92520] text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            Nominate Expert
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
