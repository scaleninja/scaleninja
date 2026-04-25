export const SITE = {
  website: "https://yadv.in",
  author: "Rohit Yadav",
  profile: "https://rohit.yadav.cloud/",
  desc: "Writing, explorations and learnings on software craftsmanship and leadership, by a lifelong open-source builder and breaker of large-scale cloud platforms.",
  title: "Patch Notes",
  ogImage: "avatar.png",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/yadavcloud/yadv.in/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata",
} as const;
