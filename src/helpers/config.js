export const config = {
  project: {
    name: "Lion Academy",
    slogan: "Your IT Career Starts Here",
    description:
      "At Lion Academy, we empower individuals with the skills and knowledge they need to thrive in the dynamic world of cloud technologies. Our comprehensive bootcamps equip you with the expertise to master essential cloud platforms like AWS, Azure, and Google Cloud Platform, enabling you to confidently navigate the ever-evolving landscape of cloud computing.",
    version: "1.0.0",
  },
  contact: {
    phone1: "+1 (212) 489-4335",
    phone2: "+1 (212) 489-4336",
    email: "info@lionacademy.com",
    address: "1035 Park Ave, New York, NY 10128, USA",
    website: "https://lionacademy.com",
    mapURL: "https://maps.app.goo.gl/dA4yeBbXNFQAxWNf7",
    mapEmbedURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.568839357695!2d-73.9558067481836!3d40.78129042006106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a33aaaf9ad%3A0x7d9ad6db4bb66055!2s1085%20Park%20Ave%20%231e%2C%20New%20York%2C%20NY%2010128%2C%20USA!5e1!3m2!1sen!2sbe!4v1705925703985!5m2!1sen!2sbe",
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
  educationTerms: [
    { label: "Fall", value: "FALL_SEMESTER" },
    { label: "Spring", value: "SPRING_SEMESTER" },
  ],
  genders: [
    { label: "Female", value: "FEMALE" },
    { label: "Male", value: "MALE" },
  ],
  days: [
    { value: "MONDAY", label: "Monday" },
    { value: "TUESDAY", label: "Tuesday" },
    { value: "WEDNESDAY", label: "Wednesday" },
    { value: "THURSDAY", label: "Thursday" },
    { value: "FRIDAY", label: "Friday" },
    { value: "SATURDAY", label: "Saturday" },
    { value: "SUNDAY", label: "Sunday" },
  ],
  userRightsOnRoutes: [
    {
      urlRegex: /\/dashboard$/,
      rights: ["ADMIN", "MANAGER", "ASSISTANTMANAGER", "TEACHER", "STUDENT"],
    },
    { urlRegex: /\/dashboard\/admin$/, rights: ["ADMIN"] },
    { urlRegex: /\/dashboard\/admin\/new$/, rights: ["ADMIN"] },
    { urlRegex: /\/dashboard\/manager$/, rights: ["ADMIN"] },
    { urlRegex: /\/dashboard\/manager\/new$/, rights: ["ADMIN"] },
    { urlRegex: /\/dashboard\/manager\/[0-9]+$/, rights: ["ADMIN"] },
    {
      urlRegex: /\/dashboard\/assistant-manager$/,
      rights: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/assistant-manager\/new$/,
      rights: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/assistant-manager\/[0-9]+$/,
      rights: ["ADMIN", "MANAGER"],
    },
    {
      urlRegex: /\/dashboard\/teacher$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/teacher\/new$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/teacher\/[0-9]+$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    { urlRegex: /\/dashboard\/lesson$/, rights: ["ADMIN", "ASSISTANTMANAGER"] },
    {
      urlRegex: /\/dashboard\/lesson\/new$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/education-term$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/education-term\/new$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/program$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/program\/new$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/student$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/student\/new$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    {
      urlRegex: /\/dashboard\/student\/[0-9]+$/,
      rights: ["ADMIN", "ASSISTANTMANAGER"],
    },
    { urlRegex: /\/dashboard\/student-info$/, rights: ["TEACHER"] },
    { urlRegex: /\/dashboard\/student-info\/new$/, rights: ["TEACHER"] },
    { urlRegex: /\/dashboard\/student-info\/[0-9]+$/, rights: ["TEACHER"] },
    { urlRegex: /\/dashboard\/meet$/, rights: ["TEACHER"] },
    { urlRegex: /\/dashboard\/meet\/new$/, rights: ["TEACHER"] },
    { urlRegex: /\/dashboard\/meet\/[0-9]+$/, rights: ["TEACHER"] },
    {
      urlRegex: /\/dashboard\/contact-message$/,
      rights: ["ADMIN", "MANAGER", "ASSISTANTMANAGER"],
    },
    { urlRegex: /\/dashboard\/choose-lesson$/, rights: ["STUDENT"] },
    { urlRegex: /\/dashboard\/grades-meets$/, rights: ["STUDENT"] },
  ],
};