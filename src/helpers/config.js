export const config = {
  project: {
    name: "Joyful Campus",
    slogan: "Empowering Minds, Building Futures",
    description:
      "Unlock your potential with our IT school - where innovation meets education. Discover cutting-edge courses, expert instructors, and a dynamic learning environment. Join us on a journey to IT excellence!",
    version: "1.0.0",
  },
  contact: {
    phone1: "+1 (212) 489-1895",
    phone2: "+1 (212) 489-1899",
    email: "info@joyfulcampus.com",
    address: "16 Chester St, New York, NY 10012, USA",
    website: "https://joyfulcampus.com",
    mapURL: "https://maps.app.goo.gl/dA4yeBbXNFQAxWNf7",
    mapEmbedURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8873456547058!2d-73.84174691242767!3d40.918215897525826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d4c22c2d3af%3A0xa29b5502dad390b3!2s16%20Chester%20St%20Apartment%201%2C%20Mt%20Vernon%2C%20NY%2010552%2C%20USA!5e0!3m2!1sen!2sbe!4v1699045877412!5m2!1sen!2sbe",
    socialMedia: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com",
    },
  },
  api: {
    baseUrl: "https://mycampusmates.com/app",
  },
  pageRoles: {
    dashboard: ["ADMIN", "MANAGER", "ASSISTANTMANAGER", "TEACHER", "STUDENT"],
    adminManagement: ["ADMIN"],
    managerManagement: ["ADMIN"],
    assistantManagerManagement: ["ADMIN", "MANAGER"],
    teacherManagement: ["ADMIN", "ASSISTANTMANAGER"],
    lessonManagement: ["ADMIN", "ASSISTANTMANAGER"],
    studentManagement: ["ADMIN", "ASSISTANTMANAGER"],
    studentInfoManagement: ["TEACHER"],
    meetManagement: ["TEACHER"],
    contactMessages: ["ADMIN", "MANAGER", "ASSISTANTMANAGER"],
    chooseLesson: ["STUDENT"],
    gradesAndMeets: ["STUDENT"],
  },
  educationTerms: [
    { label: "Fall", key: "FALL_SEMESTER" },
    { label: "Spring", key: "SPRING_SEMESTER" },
  ],
  days: [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ],
};
