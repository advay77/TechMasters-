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
