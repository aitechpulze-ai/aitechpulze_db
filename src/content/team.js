export const leadership = [
  {
    name: "Niranjan P",
    role: "Founder & CEO",
    photo: "/team/niranjan.webp",
    bio: "TODO",
  },
  {
    name: "Vijaykumar",
    role: "CTO",
    photo: "/team/vijaykumar.webp",
    bio: "TODO",
  },
  {
    name: "Ranjeet",
    role: "AI/ML Engineer",
    photo: "/team/ranjeet.webp",
    bio: "TODO",
  },
];

// Smaller grid. Roles unknown, so leave as "Intern" (do not invent roles).
export const interns = [
  "Nehashree",
  "Nishalini",
  "Ramani",
  "Rajesh",
  "Sanjay Ram",
  "Susmiha bavyaa",
  // TODO: add the remaining names (13 team members in total)
].map((name) => ({ name, role: "Intern", photo: "" }));
