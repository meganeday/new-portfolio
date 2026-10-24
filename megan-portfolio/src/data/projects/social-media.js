// Social media case studies, shown on /skills/social-media.
// Same shape as web-development.js: media items can be
// { type: "image" | "video" | "embed", src, alt, caption },
// plus width and height (the real pixel size) for images,
// and ratio (like "9 / 16") for tall embeds.
// Files go in public/projects/social.
// Instagram embeds use the post's own address plus /embed.

export const socialMedia = [
  {
    title: "Fall Part of Term B Enrollment Campaign",
    role: "Team Manager & Creative Direction",
    year: "2026",
    summary: "A seven-week Instagram and TikTok push that took two late-added courses from 3 and 0 students to 30 and 20.",
    details: [
      {
        heading: "The challenge",
        text: "Two Fall Part of Term B courses (classes that run the second half of the semester) were created in mid-summer, after the year’s tabling and marketing had already wrapped. When the semester started, one had 3 students enrolled and the other had none.",
      },
      {
        heading: "The approach",
        text: "Content across Instagram and TikTok followed three steps:",
        points: [
          { label: "Stop the scroll", text: "team members walking around campus inside a giant QR code cube" },
          { label: "Entertain", text: "a three-part interview series with professor Brandon Dohman, ending in a silly edit" },
          { label: "Inform", text: "an educational carousel breaking down the Designing with Data course" },
        ],
      },
      {
        heading: "The results",
        text: "Alongside flyering, email bulletins, and tabling at resource fairs, seven weeks of concentrated effort grew enrollment to 30 and 20 students and contributed to $63,326.29 in profit for the semester.",
      },
      {
        heading: "Role",
        text: "Managed the social media team and set the creative direction. Every post was reviewed and approved before going live.",
      },
    ],
    toolsLabel: "Made with",
    tools: ["Instagram", "TikTok", "CapCut", "Canva", "Buffer", "Airtable"],
    kpis: [
      { value: "3 → 30", label: "Students enrolled in the first course" },
      { value: "0 → 20", label: "Students enrolled in the second course" },
      { value: "5,304", label: "Views on our top-performing video" },
      { value: "106", label: "Likes on our top-performing video" },
      { value: "$63,326.29", label: "Overall semester profit the campaign contributed to" },
    ],
    mediaLayout: "grid", // show the posts side by side instead of in the gallery viewer
    media: [
      {
        type: "embed",
        src: "https://www.instagram.com/reel/DeP9BKYEXlc/embed",
        ratio: "9 / 16",
        alt: "Instagram Reel of team members walking around campus inside a giant QR code cube",
      },
      {
        type: "embed",
        src: "https://www.instagram.com/reel/DdH9Nzygfla/embed",
        ratio: "9 / 16",
        alt: "Instagram Reel, part 1 of an interview series with professor Brandon Dohman",
      },
      {
        type: "embed",
        src: "https://www.instagram.com/reel/DdT0xIbDe22/embed",
        ratio: "9 / 16",
        alt: "Instagram Reel, part 2 of an interview series with professor Brandon Dohman",
      },
      {
        type: "embed",
        src: "https://www.instagram.com/reel/Ddck8HUiahh/embed",
        ratio: "9 / 16",
        alt: "Instagram Reel, part 3 of an interview series with professor Brandon Dohman, cut as a silly edit",
      },
      {
        type: "embed",
        src: "https://www.instagram.com/p/DdpM_NNDFgn/embed",
        ratio: "4 / 5.5",
        alt: "Instagram carousel explaining the Designing with Data course",
      },
    ],
  },
];
