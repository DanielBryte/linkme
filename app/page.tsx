import Image from "next/image";
import data from "../data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center m-4 p-1 w-full rounded-md mb-3 hover:scale-[1.01] transition-all border border-gray-300 bg-gray-100 max-w-7xl"
    >
      <div className="flex justify-between  text-center w-full">
        {image && (
          <Image
            className="rounded-sm"
            src={image}
            alt={title}
            width={40}
            height={40}
          />
        )}
        <h2 className="flex justify-center items-center font-semibold">
          {title}
        </h2>
        <h2 className="flex justify-center items-center font-semibold pr-1">
          <Image src={data.icon} alt={data.name} width={20} height={20} />
        </h2>
      </div>
    </a>
  );
}

function SocialCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center m-4 p-1 w-full rounded-md mb-3 hover:scale-[1.01] transition-all border border-gray-300 bg-gray-100 max-w-7xl"
    >
      <div className="flex justify-between  text-center w-full">
        {image && (
          <Image
            className="rounded-sm"
            src={image}
            alt={title}
            width={40}
            height={40}
          />
        )}
        <h2 className="flex justify-center items-center font-semibold">
          {title}
        </h2>

        <h2 className="flex justify-center items-center font-semibold pr-1">
          <Image src={data.icon} alt={data.name} width={20} height={20} />
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto w-full mt-12 px-8">
        <Image
          className="rounded-full"
          src={data.avatar}
          alt={data.name}
          width={96}
          height={96}
        />

        <h1 className="font-bold mt-4 text-xl text-white mb-1">{data.name}</h1>

        <h2 className="font-light mt-2 text-1xl text-center text-white mb-12">
          {data.bio}
        </h2>

        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}

        {data.social.map((link) => (
          <SocialCard key={link.href} {...link} />
        ))}
      </div>

      <div className="flex justify-center">
        <h2 className="absolute bottom-0 text-center font-extrabold text-4xl text-white">
          LinkMe
        </h2>
      </div>
    </>
  );
}
