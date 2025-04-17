"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { PiCodeFill, PiNetwork, PiChartLine } from "react-icons/pi";
import { VscTerminalLinux, VscCloud } from "react-icons/vsc";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { MdSecurity } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";

import { Caveat } from "next/font/google";
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = "k";
    const domain = "abs.gd";
    setEmail(`${user}@${domain}`);
  }, []);

  const BlogPost = ({ url, title, description, image }) => {
    const handleClick = () => {
      router.push(url);
    };

    return (
      <div
        className="md:mt-2 mt-4 p-4 cursor-pointer hover:text-gray-500"
        onClick={() => handleClick()}
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-auto rounded-xl hover:rounded-full"
        />
        <div className="w-full content-center mt-4">
          <h3 className="text-3xl">{title}</h3>
          <p className="text-xl mt-1">{description}</p>
          <p className="mt-4 hover:underline text-gray-500 hover:text-gray-700 text-2xl font-light italic">
            <Link href={url}>Read more &rarr;</Link>
          </p>
        </div>
      </div>
    );
  };

  const Testimonial = ({ content, name, position }) => {
    return (
      <div className="mt-10 md:p-4 p-2 py-10 md:bg-gray-100 bg-gray-200 rounded-xl h-full hover:text-gray-500 items-center flex">
        <div className="w-full content-center">
          <p className="text-xl mb-6">{content}</p>
          <p className="text-lg italic">{name}</p>
          <p className="text-lg italic">{position}</p>
        </div>
      </div>
    );
  };

  const Skill = ({ icon, title, content }) => {
    return (
      <div className="md:mt-0 mt-4 md:p-0 p-2 hover:text-gray-500 md:text-justify">
        <h3 className="text-3xl flex gap-4 mb-1">
          <span className="text-4xl text-pink-500">{icon}</span>
          {title}
        </h3>
        <p className="text-xl">{content}</p>
      </div>
    );
  };

  
  return (
    <main>
      <div className="md:grid md:grid-cols-2 text-gray-700 md:pt-15 md:px-25 md:gap-25">
        <div className="">
          <Image
            src="/kayleigh-page-1.jpg"
            alt="Kayleigh Page"
            width={750}
            height={750}
            className="w-full h-auto md:rounded-xl hover:rounded-full"
            priority={true}
          />
        </div>
        <div className="flex flex-col items-center self-center text-center p-2 md:mt-0 mt-4">
          <h1
            className={`${caveat.className} md:text-9xl text-7xl md:mb-14 mb-6`}
          >
            <span className="text-pink-500">Hey, I&apos;m</span>
            <br />
            Kayleigh Page
          </h1>
          <h2 className="md:text-4xl text-xl md:mb-14 mb-6">
            Full-Stack Developer <span className="text-pink-500">★</span>{" "}
            Server Architect <span className="text-pink-500">★</span> DevOps
            Consultant <span className="text-pink-500">★</span> Security
            Expert <span className="text-pink-500">★</span> Brand Builder{" "}
            <span className="text-pink-500">★</span> Coach
          </h2>
          <h3 className="rounded-md md:text-4xl text-xl bg-pink-500 text-white hover:bg-white hover:text-gray-700 md:pt-2 md:pb-4 py-2 w-full md:mb-8 mb-6">
            Helping your brand succeed since 2008.
          </h3>
          {/*<p className="md:text-2xl text-xl hover:bg-gray-700 hover:text-white md:py-2 md:w-full">
            This is my corner of the web to share my projects and thoughts.
          </p>*/}
        </div>
      </div>
      <div className="md:gap-2 md:p-15 md:pt-38 md:mb-0 mb-20 md:mt-18 md:pb-18 pt-20 pb-20 mt-20 text-center mx-auto md:flex text-gray-700 md:bg-white bg-gray-100">
        <div className="md:w-2/5 md:content-center md:p-0 p-2">
          <h2 className="text-5xl md:mb-6 mb-5">Who am I?</h2>
          <p className="md:text-2xl text-xl md:mx-auto mb-3">
            I&apos;m a Full-Stack{" "}
            <strong>Developer, Server Architect, DevOps</strong> Consultant,{" "}
            <strong>Security</strong> Expert and <strong>Marketing</strong>{" "}
            Specialist from Belgium.
          </p>
          <p className="md:text-2xl text-xl md:mx-auto mb-3">
            When I&apos;m not coding or working on my servers; I read, study,
            work out or spend some time hiking.
          </p>
          <p className="md:text-2xl text-xl md:mx-auto mb-3">
            When I was <strong>7</strong>, I had an old MS-DOS PC and learned
            how to write games in <strong>QBasic</strong>. Check my portfolio
            and blog to see how that evolved.
          </p>
          <p className="md:text-2xl text-xl md:mx-auto md:mb-6 mb-5">
            Welcome to my corner of the web and thank you for visiting!
          </p>
          {/*<p className={`${caveat.className} text-5xl`}>Kayleigh Page</p>*/}
        </div>
        <div className="md:w-1/5 md:content-center md:my-0 my-10">
          <Image
            src="/kayleigh-page-2.jpg"
            alt="Kayleigh Page"
            width={325}
            height={325}
            loading="lazy"
            className="w-full h-auto md:rounded-full hover:rounded-xl"
          />
        </div>
        <div className="md:w-2/5 md:content-center md:p-0 p-2">
          <h2 className="md:text-5xl text-4xl md:mt-10 md:mb-6 mb-5">
            How can I help you?
          </h2>
          {/*<p className="md:text-2xl text-xl md:mb-6 mb-5">
              I currently work as <strong>freelancer</strong> and{" "}
              <strong>consultant</strong>, remote jobs could interest me as
              well (full or part time).
            </p>*/}
          <p className="md:text-2xl text-xl mb-2">
            <strong>Development:</strong> web-sites/apps/shops,
            iOS/Android-apps
          </p>
          <p className="md:text-2xl text-xl mb-2">
            <strong>Administration:</strong> Linux, datacenters, VoIP,
            automation, monitoring
          </p>
          <p className="md:text-2xl text-xl mb-2">
            <strong>Security:</strong> prevention, detection, testing,
            backups, recovery
          </p>
          <p className="md:text-2xl text-xl mb-2">
            <strong>Marketing:</strong> brand building, SEO, social media,
            video/photo editing
          </p>
          <p className="md:text-2xl text-xl mb-2">
            <strong>Other:</strong> agile, scrum, devOps, AI, cloud, ...
          </p>
          <p className="cursor-pointer text-4xl md:mt-6 mt-5">
            {email ? (
              <a
                className="text-blue-500 underline hover:text-fuchsia-500 hover:no-underline font-light italic"
                href={`mailto:${email}`}
              >
                Send me an email
              </a>
            ) : (
              <span>Loading...</span>
            )}
          </p>
        </div>
      </div>
      {/*<div className="md:p-15 md:pt-18 md:mb-0 mb-20 md:mt-18 md:pb-18 pt-20 pb-20 mt-20 px-2 text-center mx-auto text-gray-700 md:bg-white bg-gray-100">
          <h2 className="text-6xl md:mb-6 mb-5">Blog posts</h2>
          <p className="max-w-6xl mx-auto md:text-2xl text-xl mb-2">
            Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo.{" "}
            Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo.{" "}
            Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo.{" "}
          </p>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <BlogPost
              url="/blog/1"
              title="Test post 1"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/2"
              title="Test post 2"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/3"
              title="Test post 3"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/4"
              title="Test post 4"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
          </div>
          <p className="mt-10 hover:underline text-blue-500 hover:text-blue-700 text-4xl font-light italic">
            <Link href="/blog" title="Read all Kayleigh Page's blog posts">
              Read all my posts &rarr;
            </Link>
          </p>
        </div>*/}
      {/*<div className="md:p-15 md:pt-18 md:mb-0 mb-20 md:mt-18 md:pb-18 pt-20 pb-20 mt-20 px-2 text-center mx-auto text-gray-700 md:bg-white bg-gray-100">
          <h2 className="text-6xl md:mb-6 mb-5">My work</h2>
          <p className="max-w-6xl mx-auto md:text-2xl text-xl mb-2">
            Check out some of my projects. I&apos;ve worked for startups,
            corporations, governments and also build my own apps and websites.
            Most projects have a link to their GitHub repository.
          </p>
          <div className="md:grid md:grid-cols-4 md:gap-4">
            <BlogPost
              url="/blog/1"
              title="Test post 1"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/2"
              title="Test post 2"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/3"
              title="Test post 3"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
            <BlogPost
              url="/blog/4"
              title="Test post 4"
              description="This is a test post. This is a test post. This is a test post."
              image="/kayleigh-page-1.jpg"
            />
          </div>
          <p className="mt-10 hover:underline text-blue-500 hover:text-blue-700 text-4xl font-light italic">
            <Link
              href="/portfolio"
              title="Go to Kayleigh Page's full portfolio"
            >
              My full portfolio &rarr;
            </Link>
          </p>
        </div>*/}
      {/*<div className="md:p-15 md:pt-18 md:mb-0 mb-20 md:mt-18 md:pb-18 pt-20 pb-20 mt-20 px-2 text-center mx-auto text-gray-700 md:bg-white bg-gray-100">
          <h2 className="text-6xl md:mb-6 mb-5">Testimonials</h2>
          <p className="max-w-6xl mx-auto md:text-2xl text-xl mb-2">
            Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo.{" "}
            Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo.{" "}
            Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo. Todo.{" "}
          </p>
          <div className="md:grid md:grid-cols-4 md:gap-6 items-center">
            <Testimonial
              content="Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. 
            Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. "
              name="Test Tester"
              position="CEO of Test Inc."
            />
            <Testimonial
              content="Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. "
              name="Test Tester"
              position="CEO of Test Inc."
            />
            <Testimonial
              content="Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. "
              name="Test Tester"
              position="CEO of Test Inc."
            />
            <Testimonial
              content="Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. 
            Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. Test testimonial. "
              name="Test Tester"
              position="CEO of Test Inc."
            />
          </div>
        </div>*/}
      <div className="md:p-15 md:pt-18 md:mb-0 mb-20 md:mt-18 md:pb-18 pt-20 pb-20 mt-20 px-2 text-center mx-auto text-gray-700 md:bg-white bg-gray-100">
        <h2 className="text-6xl md:mb-6 mb-5">My skills</h2>
        <p className="max-w-6xl mx-auto md:text-2xl text-xl mb-2">
          <strong>Expert in:</strong> PHP, JavaScript, Next.js, React, React
          Native, Node.js, GraphQL, Laravel, Linux, DevOps & Security
        </p>
        <div className="md:grid md:grid-cols-3 md:gap-15 text-start md:mt-10">
          <Skill
            icon={<PiCodeFill />}
            title="Development"
            content="JavaScript, Node.js, React, Next.js, PHP, Laravel, HTML5, CSS, Bash, Powershell, C#, C, Perl, Python, Ruby, Typescript, React Native, Tailwind CSS, Bootstrap, GraphQL, Deno.js, Drupal, Wordpress, Joomla, Prestashop, Magento, MediaWiki, Git, Web Design, UI, UX, OOP, Data Analytics, Database Design, MongoDB, MySQL, PostgreSQL, MS SQL"
          />
          <Skill
            icon={<VscTerminalLinux />}
            title="Linux"
            content="Red Hat, Debian, Arch, Fedora, Gentoo. Apache, Nginx, MySQL, PostgreSQL, Asterisk, Exim, Postfix, Bind, PowerDNS, OpenSSH, Puppet, Foreman, Ansible, Salt, CFEngine, Icinga2, Nagios, Zabbix, Graylog, LibreNMS, OpenNMS, Docker, Vagrant, Genkins, Git, Automation, Firewalls, Hardening, Intrusion Detection, Application Firewalls, Custom Kernel, CPanel, DirectAdmin, Plesk, FreePBX, PfSense, NextCloud"
          />
          <Skill
            icon={<TfiMicrosoftAlt />}
            title="Microsoft"
            content="Server, Client, Exchange, IIS, Active Directory, SQL Server, HyperV, Network Load Balancing, Remote Desktop Services, DNS, Sharepoint, Office 365, Azure"
          />
          <Skill
            icon={<MdSecurity />}
            title="Security"
            content="Firewalls, Application Firewalls, Backup Solutions, Data Recovery, Antivirus, Intrusion Detection, Intrustion Prevention, Penetration Testing"
          />
          <Skill
            icon={<PiNetwork />}
            title="Network"
            content="TCP/IP, IPv6, Routing, Datacenters, BGP, WiFi, Bluetooth, Fiber, Ethernet, Hypervisors, VPN, High Availability, VoIP, Cisco, Juniper, Arista, Huawei, Dell, NetGear, MikroTik, Ubiquiti"
          />
          <Skill
            icon={<PiChartLine />}
            title="Projects, SEO, Brands, ..."
            content="Scrum, Agile, DevOps, AI, ChatGPT, GitHub Copilot, VS Code, Project Management, Brand Building, Marketing, Social Media, SEO, Photo Editing, Video Editing"
          />
          <Skill
            icon={<VscCloud />}
            title="Cloud"
            content="AWS, Google Cloud Platform, Azure, IBM Cloud, Office 365, Sharepoint, G Suite"
          />
          <Skill
            icon={<IoPeopleSharp />}
            title="Soft Skills"
            content="Diploma in Applied Psychology, Coaching, Studious, Creative, Solution-Oriented, Flexible, Responsible, Helpful, Empathic"
          />
        </div>
        {/*<p className="mt-20 hover:underline text-blue-500 hover:text-blue-700 text-4xl font-light italic">
            <Link
              href="/cv"
              title="Go to Kayleigh Page's full curriculum vitae"
            >
              My curriculum vitae &rarr;
            </Link>
          </p>*/}
      </div>
    </main>
  );
}
