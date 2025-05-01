import { Marquee } from "../magicui/marquee";

const items = [
  {
    imageUrl: "https://picsum.photos/seed/alpha/400/300",
    name: "Alpha",
  },
  {
    imageUrl: "https://picsum.photos/seed/bravo/400/300",
    name: "Bravo",
  },
  {
    imageUrl: "https://picsum.photos/seed/charlie/400/300",
    name: "Charlie",
  },
  {
    imageUrl: "https://picsum.photos/seed/delta/400/300",
    name: "Delta",
  },
  {
    imageUrl: "https://picsum.photos/seed/echo/400/300",
    name: "Echo",
  },
  {
    imageUrl: "https://picsum.photos/seed/foxtrot/400/300",
    name: "Foxtrot",
  },
  {
    imageUrl: "https://picsum.photos/seed/golf/400/300",
    name: "Golf",
  },
];

export const GallerySection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
        <div className="hidden z-10 md:flex flex-col justify-center items-center text-6xl font-semibold bg-white h-52 mt-1 w-100 rounded-[1px] ">
            Gallery
        </div>
      <div className="absolute h-full w-full flex flex-col justify-center items-center ">
        <Marquee className="[--duration:15s]">
          {items.map((payload) => {
            return (
              <div>
                <img
                  className={`md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px] `}
                  src={payload.imageUrl}
                  alt={payload.name}
                />
              </div>
            );
          })}
        </Marquee>
        <Marquee reverse className="[--duration:15s]">
          {items.map((payload) => {
            return (
              <div>
                <img
                  className={`md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px] `}
                  src={payload.imageUrl}
                  alt={payload.name}
                />
              </div>
            );
          })}
        </Marquee>
        <Marquee  className="[--duration:15s]">
          {items.map((payload) => {
            return (
              <div>
                <img
                  className={`md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px] `}
                  src={payload.imageUrl}
                  alt={payload.name}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};


'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    linkedin: '#',
  },
  {
    name: 'Ujjwal Singh',
    role: 'Private Equity Analyst @Bain & Company',
    img: '/ujjwal.jpg',
    linkedin: '#',
  },
  {
    name: 'Aarushi Abrol',
    role: 'YTL @Airtel Digital',
    img: '/aarushi.jpg',
    linkedin: '#',
  },
  {
    name: 'Harsh Jain',
    role: 'Ex- Digital Technical Specialist Intern @IBM',
    img: '/harsh.jpg',
    linkedin: '#',
  },
  {
    name: 'Shreeya Chatterji',
    role: 'Role Placeholder',
    img: '/shreeya.jpg',
    linkedin: '#',
  },
  {
    name: 'Jayati Mishra',
    role: 'Role Placeholder',
    img: '/jayati.jpg',
    linkedin: '#',
  },
  {
    name: 'Nikhil Bakshi',
    role: 'Role Placeholder',
    img: '/nikhil.jpg',
    linkedin: '#',
  },
  {
    name: 'Deepanshi Sharma',
    role: 'Role Placeholder',
    img: '/deepanshi.jpg',
    linkedin: '#',
  },
];

export default function TeamGrid() {
  return (
    <div className="py-10 px-4 sm:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="w-64 h-80 bg-white shadow-lg rounded-xl p-5 flex flex-col items-center justify-between"
          >
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
            </div>
            <Link
              href={member.linkedin}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 mt-2"
            >
              LinkedIn
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
