import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Garvit](/images/giphy-1659830312.gif)

It all started when I wrote my first line of code. I remember sitting in front of the computer, wide-eyed, as the cursor blinked on the screen, waiting for me to create something. That small moment sparked what has become a deep passion for technology and problem-solving. I'm Garvit, a penultimate year Computer Science student at VIT Bhopal University, and this blog is a space where I share my adventures in the world of coding and beyond.

![Garvit](/images/PHOTO-2024-09-10-23-44-40.jpg)

As a kid, I always had a fascination with how things work. I'd break apart gadgets just to figure out how they fit together again. This curiosity naturally led me to the world of programming. From building small games like Flappy Bird in Python or a Tetris game in JavaScript to creating a working AI voice assistant that automates ~80% of everyday tasks, each project has taught me something new, something exciting. The thrill of solving a problem and watching my code come to life is what keeps me going.

Along the way, I've taken on various challenges—like using the Wake-on-LAN protocol to remotely power on a PC or diving deep into AI and machine learning. I'm driven by a desire to push boundaries and explore how technology can impact the world.

This blog is where I document my journey. It's where I break down complex algorithms, share insights from my coding projects, and explore new technologies. My hope is that through these stories, I can make technology a little more accessible and inspire others to embark on their own tech journeys.`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
