// One entry per skill card. The order here is the order of the cards,
// and the dice maps rolls 1 to 6 onto this order.
//
// Each skill can show 1 to 3 key projects. To add another project,
// copy the project() line inside that skill's projects list.

const project = () => ({
  title: "[Project title]",
  role: "[Your role]",
  year: "[Year]",
  summary:
    "[Two or three sentences: what the project was, who it was for, and what you did.]",
  points: ["[A result, number, or detail worth bragging about]", "[Another one]"],
  link: "", // leave empty to hide the button
  linkLabel: "View the work",
  image: "", // for example "/projects/my-project.jpg" (file goes in public/projects)
  imageAlt: "", // describe the image if you add one
});

const writing = () => ({
  title: "The Read Out, a newsletter for Siebel Center for Design",
  role: "Primary contributor and editor",
  year: "2025-Present",
  summary:
    "The twice-monthly newsletter from Siebel Center for Design, sent to more than 2,500 readers. I write and edit every issue, turning what’s happening in our building into stories people want to open.",
  points: ["Interviews people for features, then writes the articles", "Tracks news through the marketing request form and weekly meetings, and works with the Associate Director of Strategic Marketing and Engagement to cover student events", "Covers events, presentations, awards, affiliate collaborations, workshops, and course offerings", "32.31% average open rate over the past year"],
  link: "https://designcenter.illinois.edu/stories/newslettersandsocial", // leave empty to hide the button
  linkLabel: "View the full archive",
  image: "/projects/writing/Readout_Header.jpg", // for example "/projects/my-project.jpg" (file goes in public/projects)
  imageAlt: "The Read Out newsletter header", // describe the image if you add one
});

export const skills = [
  {
    slug: "writing",
    n: "Writing",
    img: "writing",
    t: "Feature articles, web stories, and newsletters that explain complex work in plain language.",
    tagline: "Storytelling at work",
    projects: [writing()],
  },
  {
    slug: "graphic-design",
    n: "Graphic design",
    img: "graphic_design",
    t: "Layouts, social graphics, and print pieces that stay on brand.",
    tagline: "Layouts and graphics that stay on brand and still have personality.",
    projects: [project()],
  },
  {
    slug: "photography",
    n: "Photography",
    img: "photography",
    t: "Event, portrait, and documentary photography that supports the story.",
    tagline: "Photos that show people and moments as they really are.",
    projects: [project()],
  },
  {
    slug: "video-production",
    n: "Video production",
    img: "video",
    t: "Short-form and event video, from shooting to final edit.",
    tagline: "Short video, from the first shot to the final cut.",
    projects: [project()],
  },
  {
    slug: "social-media",
    n: "Social media",
    img: "social",
    t: "Captions, graphics, and short video across platforms, plus the campaigns that tie them together.",
    tagline: "One voice across every platform, and campaigns that tie it together.",
    projects: [project()],
  },
  {
    slug: "web-development",
    n: "Web development",
    img: "web",
    t: "Writing, structuring, and building web pages, with a frontend developer’s eye for how they’re made.",
    tagline: "Web content that reads well and is built with care.",
    projects: [project()],
  },
];
