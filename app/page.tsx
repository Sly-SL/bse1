import Link from 'next/link';

export default function Home() {
    const links: {name:string,link:string}[] = [
        {name:"Life Vision students",link:"https://www.scribd.com/document/720007097/life-vision-pre-intermediate-students-book"},
        {name:"Life Vision workbook",link:"https://www.scribd.com/document/717808712/Workbook-Life-vision-pre-intermediate?_gl=1*1hp876*_up*MQ..*_ga*OTkwNjczODcwLjE3OTA5NDg0MDg.*_ga_Z4ZC50DED6*czE3OTA5NDg0MDckbzEkZzAkdDE3OTA5NDg0MDckajYwJGwwJGgw*_ga_8KZ8BV0P5W*czE3OTA5NDg0MDckbzEkZzAkdDE3OTA5NDg0MDckajYwJGwwJGgw"}
    ];
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          {links.map(link => (
              <Link href={link.link}>{link.name}</Link>
          ))}
      </main>
    </div>
  );
}
