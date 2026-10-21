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

const writing = () => ([
  {
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
},
{
  title: "SCD Spotlight Series",
  role: "Writer and editor",
  year: "2026-Present",
  summary: "A series of articles hosted on the Siebel Center for Design website that profiles SCD Affiliates and the work they’re doing across campus. I interview each Affiliate and write the feature, then collaborate with the Senior Associate Director of Research and Strategic Initiatives and the Director of Faculty and Academic Engagement to finalize each article.",
  points: ["Interviews Affiliates and turns the conversations into feature articles with their own voices at the center", "Featured Affiliates include Matt Goodman, Elle Wroblewski, and Gloriana González", "Stories have covered topics like integrating human-centered design into capstone courses and an NSF-funded project bringing it into geometry teaching"],
  link: "https://designcenter.illinois.edu/stories/GlorianaGonz%C3%A1lezAffiliateSpotlight",
  linkLabel: "Read the latest installment",
  image: "/projects/writing/SCD_Spotlight.png",
  imageAlt: "SCD Spotlight Series: Gloriana González Affiliate Spotlight",
}]);

const graphicDesign = () => ([
  {
    title: "Human-Centered Schools Network Flyer",
    role: "Designer",
    year: "2026",
    summary: "A one-page handout introducing the Human-Centered Schools Network, a community of K-12 educators and school leaders using human-centered design to tackle real challenges in their schools. It was made for people who aren’t ready to commit to the full HCSN Playbook, and it points them to the Siebel Center for Design website to learn more and get involved.",
    points: [
      "Took the project from an open-ended brief to a finished handout in under a week, designing the full layout in Canva",
      "Incorporated existing illustrations so the handout matches the larger HCSN Playbook",
      "Created a lighter first step for busy educators: a short intro, three clear member benefits, and a QR code",
      "Refined the design through review by SCD’s Director"
    ],
    image: "/projects/design/HCSN_Flyer.png",
    imageAlt: "Human-Centered Schools Network recruitment flyer with a hand-drawn border, three member benefits, and a QR code to join.",
  }
]);
const photos = () => ([
      {
        src: "/photos/photo-1.jpg",
        alt: "Carrie James teaching SHIFT Max at Siebel Center for Design",
        caption: "SHIFT Max workshop, shot on Sony A7",
      },
      {
        src: "/photos/photo-2.jpg",
        alt: "Faculty and staff attend GenAI Dialogues at Siebel Center for Design",
        caption: "Gen AI Dialogues, shot on Sony A7",
      },
      {
        src: "/photos/photo-3.jpg",
        alt: "Two presenters laugh together at UX Days",
        caption: "UX Days 2026, shot on Sony A7",
      },
      {
        src: "/photos/photo-4.jpg",
        alt: "Building exterior of Siebel Center for Design",
        caption: "Building Exterior, shot on Canon R10",
      },
      {
        src: "/photos/photo-5.jpg",
        alt: "Professors laugh while taking notes on post-its at a workshop",
        caption: "Affiliate Kickoff 2026, shot on Canon R10",
      },
      {
        src: "/photos/photo-6.jpg",
        alt: "Back of a person's head as she takes notes on post-its at a workshop",
        caption: "Affiliate Kickoff 2026, shot on Canon R10",
      },
      {
        src: "/photos/photo-7.jpg",
        alt: "Faculty and staff sit around a table and catch up at a workshop",
        caption: "Affiliate Kickoff 2026, shot on Canon R10",
      },
      {
        src: "/photos/photo-9.jpg",
        alt: "UX Days attendees and presenters smile and hold up peace signs for a group photo",
        caption: "UX Days 2026, shot on Sony A7",
      },
      {
        src: "/photos/photo-10.jpg",
        alt: "Two UX Days presenters smile for a photo",
        caption: "UX Days 2026, shot on Sony A7",
      },
      {
        src: "/photos/photo-14.jpg",
        alt: "Two students gather around a phone and smile",
        caption: "UX Days 2026, shot on Sony A7",
      },
      {
        src: "/photos/photo-16.jpg",
        alt: "Neil Pearse leads a tour of The Shop at Siebel Center for Design",
        caption: "EXP Lab Tour, shot on Canon R10",
      },
      {
        src: "/photos/photo-17.jpg",
        alt: "A student smiles while working on a laptop covered in stickers",
        caption: "UX Days 2026, shot on Sony A7",
      },
      {
        src: "/photos/photo-18.jpg",
        alt: "Presenter holds up her hand while speaking to a group of students at UX Days",
        caption: "UX Days 2026, shot on Sony A7",
      },
      {
        src: "/photos/photo-19.jpg",
        alt: "Attendees take notes at a UX Days workshop",
        caption: "UX Days 2026, shot on Sony A7",
      },
      {
        src: "/photos/photo-20.jpg",
        alt: "Students gather in a circle for a game of Uno during Welcome Week at Siebel Center for Design",
        caption: "Welcome Week 2026, shot on Canon R10",
      },
]);

export const skills = [
  {
    slug: "writing",
    n: "Writing",
    img: "writing",
    t: "Feature articles, web stories, and newsletters that explain complex work in plain language.",
    tagline: "Storytelling at work",
    projects: writing(),
  },
  {
    slug: "graphic-design",
    n: "Graphic design",
    img: "graphic_design",
    t: "Flyers & social graphics that follow brand guidelines while effectively communicating.",
    tagline: "Design with purpose",
    projects: graphicDesign(),
  },
  {
    slug: "photography",
    n: "Photography",
    img: "photography",
    layout: "gallery",
    t: "Event and portrait photography, edited in Adobe Lightroom and Photoshop.",
    tagline: "Capturing the highlights",
    photos: photos()
  },
  {
    slug: "video-production",
    n: "Video production",
    img: "video",
    t: "Short-form and event video, from shooting to final edit.",
    tagline: "Coming soon.",
    projects: [],
  },
  {
    slug: "social-media",
    n: "Social media",
    img: "social",
    t: "Captions, graphics, and short video across platforms, plus the campaigns that tie them together.",
    tagline: "Coming soon.",
    projects: [],
  },
  {
    slug: "web-development",
    n: "Web development",
    img: "web",
    t: "Writing, structuring, and building web pages, with a frontend developer’s eye for how they’re made.",
    tagline: "Coming soon.",
    projects: [],
  },
];
