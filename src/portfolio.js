/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Collinsjared73",
  title: "Hi all, I'm Jared",
  subTitle: emoji(
    "A passionate computational biology researcher and coding hobbyist. This site is a work in progress, so bear with me as it fills out!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Collinsjared73",
  linkedin: "https://www.linkedin.com/in/jared-collins/",
  gmail: "collinsjared73@gmail.com",
  orcid: "https://orcid.org/0009-0006-7184-3875",
  researchgate: "https://www.researchgate.net/profile/Jared-Collins-5?ev=hdr_xprf",
  scholar: "https://scholar.google.com/citations?user=TxC9P4AAAAAJ&hl=en&oi=ao",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // researchgate: "https://www.researchgate.net/profile/Jared-Collins-5?ev=hdr_xprf",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji("🔬 Analyze large, multimodal biological datasets to address complex questions"),
    emoji(
      "🛠️ Build new methods to address problems with multi-omics data"
    ),
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
   {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"  
    },
    {
      skillName: "c-sharp",
      fontAwesomeClassname: "csharp"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt-seal.png"),
      subHeader: "Master of Science in Biology",
      duration: "May 2022 - May 2023",
      desc: "Completed Master's Thesis research in Dr. Greg Gibson's Lab",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt-seal.png"),
      subHeader: "Bachelor of Science in Biology",
      duration: "May 2018 - May 2022",
      desc: "Graduation with Highest Honors",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    } 
  ]  
};
      
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Bioinformatics Engineer",
      company: "Dana Farber Cancer Institute",
      companylogo: require("./assets/images/DFCI_logo.jpg"),
      date: "June 2023 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Conducted novel analysis of drug resistant using combined single-cell transcriptomics and single-cell evolutionary clone-tracking barcode technology",
	"Developed and applied statistical methods to analyze and compare high-dimensional single cell and spatial multi-omic dataset",
        "Analyzed single cell and spatial RNA-seq data from longitudinal serial biopsies as part of paradigm shifting clinical trials in GBM alongside collaborators worldwide",
      ]
    },
    {
      role: "Undergraduate/Graduate Teaching Assistant",
      company: "Georgia Institute of Technology",
      companylogo: require("./assets/images/gt-seal.png"),
      date: "Aug 2021 – May 2023",
      descBullets: ["Created and held weekly lectures and review sessions for 80+ students",
	"Taught weekly recitation and guided flipped-classroom style sessions 3x weekly",
	"Led two wet laboratory classes of 24 students in lecture and experiments across a range of biological sciences",
	"Wrote and conducted test reviews to bolster student understanding and engagement"
      ]
    },
    {
      role: "Biologist Researcher Intern",
      company: "Lucid Scientific",
      companylogo: require("./assets/images/lucid_logo.jpeg"),
      date: "May 2022 – Aug 2022",
      descBullets: ["Analyzed oxygen consumption rate of iPSCs during induced differentiation to cardiomyocytes",
	"Conducted metabolic assays to verify multiple adherent and suspension cell lines for research use with RESIPHER",
	"Characterized metabolic activity during induced T cell activation and differentiation"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A few projects/publications which I've been a part of",
  projects: [
    {
      image: require("./assets/images/gt_library.png"),
      projectName: "Georgia Tech Master's Thesis",
      projectDesc: "Mechanisms of Coherence and Incoherence Between GWAS and Single-Cell eQTL Effects in Crohn's Disease",
      footerLink: [
        {
          name: "View Thesis",
          url: "https://hdl.handle.net/1853/72087"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/WIP.png"),
      projectName: "Mini Code for a Cause Game Jam",
      projectDesc: "A game developed in GameMakerStudio2 for the 2025 Mini Code for a Cause charity game jam!",
      footerLink: [
        {
          name: "Play the Game",
          url: "https://gx.games/games/81a6n1/you-only-get-one-appendage/"
        },
        {
	  name: "Game Jam",
	  url: "https://itch.io/jam/mini-code-for-a-cause"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Awards, etc!",

  achievementsCards: [
    {
      title: "Terrill Graduate Fellowship",
      subtitle:
        "Graduate fellowship awarded based on scholastic record to rising graduate students",
      image: require("./assets/images/PSK.webp"),
      imageAlt: "Phi Sigma Kappa Scholarship Fund",
      footerLink: [
        {
          name: "Link",
          url: "https://phisigmakappa.org/undergrads/programs/scholarships/"
        }
      ]
    },
    {
      title: "Randy Rhoads Memorial Scholarship",
      subtitle:
        "",
      image: require("./assets/images/WIP.png"),
      imageAlt: "WIP",
      footerLink: [
        {
          name: "Link",
          url: "http://www.gtpsk.org/assets/files/AlumniScholarships.pdf"
        }
      ]
    },

    {
      title: "Achievement 3",
      subtitle: "Subtitle",
      image: require("./assets/images/WIP.png"),
      imageAlt: "WIP Image",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Link",
          url: "https://google.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Talk Title",
      subtitle: "Talk location",
      slides_url: "https://www.google.com",
      event_url: "https://www.google.com"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6789640619",
  email_address: "collinsjared73+githubpage@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
