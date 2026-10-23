import { graphicDesign } from "./projects/graphic-design";
import { photos } from "./projects/photography";
import { videoProduction } from "./projects/video-production";
import { webDevelopment } from "./projects/web-development";
import { writing } from "./projects/writing";

// One entry per skill card, in the order the cards appear.
// Each skill's projects live in their own file in ./projects.

export const skills = [
  {
    slug: "writing",
    n: "writing",
    img: "writing",
    t: "Writing was my first love, and it continues to be my favorite way of expressing myself! Over the years, I've written in a variety of formats: plays, novels, short stories, newsletters, articles, and more. I love how with words I'm able to evoke emotion, tap into readers' thoughts, and form connections.",
    tagline: "Storytelling at work",
    projects: writing,
  },
  {
    slug: "graphic-design",
    n: "graphic design",
    img: "graphic_design",
    t: `I love stretching the limits of the tools I use each day. One of my favorite responses to work I've created is a surprised, "You made this in Canva?!"`,
    tagline: "Designed with purpose",
    tools: ["Canva", "Adobe Photoshop", "Adobe Express"],
    zoomImages: true, // click a project image to open it larger
    projects: graphicDesign,
  },
  {
    slug: "photography",
    n: "photography",
    img: "photography",
    layout: "gallery",
    t: "Event and portrait photography, edited in Adobe Lightroom and Photoshop.",
    tagline: "Capturing the highlights",
    tools: ["Adobe Lightroom", "Adobe Photoshop"],
    photos: photos
  },
  {
    slug: "video-production",
    n: "video production",
    img: "video",
    t: "Short-form and event video, from shooting to final edit.",
    tagline: "Stories in motion",
    tools: ["Descript", "Capcut"],
    projects: videoProduction,
  },
  {
    slug: "social-media",
    n: "social media",
    img: "social",
    t: "Captions, graphics, and short video across platforms, plus the campaigns that tie them together.",
    tagline: "Coming soon.",
    tools: ["Buffer (scheduling)", "Airtable (project management)"],
    projects: [],
  },
  {
    slug: "web-development",
    n: "web development",
    img: "web",
    layout: "case-study",
    t: "Before working in marketing, I spent four years as a frontend web developer. I love working with code, but I yearned for more variety in my day to day work. While I work primarily in Digital Communications now, I still write code, and I love putting these skills to work whenever I can!",
    tagline: "Built with intention",
    tools: ["React.js", "Next.js", "Tailwind", "HTML + CSS", "Github", "Vercel", "Claude Code + Github Copilot"],
    projects: webDevelopment,
  },
];
