'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaQuoteLeft,
  FaGoogle,
  FaLeaf,
  FaRocket,
  FaFire,
  FaLinkedin,
  FaStar,
} from 'react-icons/fa';

type TeamMember = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
};

const team: TeamMember[] = [
  {
    name: 'Jay Parmani',
    role: 'Software Engineer @Apple',
    img: '/jay.jpg',
    linkedin: 'https://linkedin.com/in/jayparmani',
  },
  {
    name: 'Ujjwal Singh',
    role: 'Private Equity Analyst @Bain & Company',
    img: '/ujjwal.jpg',
    linkedin: 'https://linkedin.com/in/ujjwalsingh',
  },
  {
    name: 'Aarushi Abrol',
    role: 'YTL @Airtel Digital',
    img: '/aarushi.jpg',
    linkedin: 'https://linkedin.com/in/aarushiabrol',
  },
  {
    name: 'Harsh Jain',
    role: 'Ex- Digital Technical Specialist Intern @IBM',
    img: '/harsh.jpg',
    linkedin: 'https://linkedin.com/in/harshjain',
  },
  {
    name: 'Shreeya Chatterji',
    role: 'Role Placeholder',
    img: '/shreeya.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Jayati Mishra',
    role: 'Role Placeholder',
    img: '/P1.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Nikhil Bakshi',
    role: 'Role Placeholder',
    img: '/nikhil.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Deepanshi Sharma',
    role: 'Role Placeholder',
    img: '/deepanshi.jpg',
    linkedin: 'https://linkedin.com',
  },
];

export default function HeroWithTeam() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 w-full text-black font-sans">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 py-16 sm:py-20 flex flex-col items-center">
        <div className="text-center max-w-5xl">
          <div className="flex justify-center mb-6">
            <img
              src="/gdg-algiers-logo.svg"
              alt="GDG Algiers Logo"
              className="w-24 sm:w-32 md:w-40 animate-bounce"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-gray-900">
            WE DO COOL THINGS THAT <span className="text-blue-600">MATTER</span>
          </h1>

          <div className="flex flex-col items-center text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto px-2 text-center">
            <FaQuoteLeft className="text-2xl sm:text-3xl text-gray-500 mb-3" />
            <p className="mb-2 italic">
              Our community consists of passionate developers and motivated young students..
            </p>
            <span className="text-yellow-500 italic text-xl sm:text-2xl underline decoration-wavy">
              Community
            </span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
            TechMasters For Once <br /> TechMasters For Everrrr!
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {['/mountain1.jpg', '/mountain2.jpg', '/mountain3.jpg', '/mountain4.jpg', '/mountain5.jpg'].map(
            (src, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className={`object-cover ${
                    index === 2
                      ? 'w-[220px] h-[120px] sm:w-[260px] sm:h-[150px] md:w-[300px] md:h-[170px] border-4 border-blue-500 shadow-2xl'
                      : 'w-[130px] h-[170px] sm:w-[150px] sm:h-[190px] md:w-[170px] md:h-[210px]'
                  }`}
                />
              </div>
            )
          )}
        </div>

        {/* Animated Icons */}
        <div className="mt-12 flex gap-6 text-xl sm:text-2xl md:text-3xl">
          <FaStar className="text-red-500 animate-bounce" title="Passion" />
          <FaLeaf className="text-green-500 animate-bounce" title="Growth" />
          <FaRocket className="text-blue-600 animate-bounce" title="Innovation" />
          <FaFire className="text-orange-500 animate-bounce" title="Energy" />
        </div>
      </div>

      {/* Team Section */}
      <div className="py-10 px-4 sm:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="w-64 h-80 bg-white shadow-lg rounded-xl p-5 flex flex-col items-center justify-between relative"
            >
              <div className="w-full aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-white/20 backdrop-blur-md border border-white/30"
                >
                  <FaLinkedin className="text-4xl text-white drop-shadow-lg" />
                </Link>
              </div>
              <div className="text-center mt-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 5s linear infinite;
        }
        .animate-zoom {
          animation: zoom 2s ease-in-out infinite;
        }
        .animate-flicker {
          animation: flicker 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
