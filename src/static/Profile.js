const profile = {
  "aboutMe": {
    "heading": "Hello, My name is Daniel!",
    "text": "I'm a college student from Orange County currently interning at " +
      "Facebook as a Software Engineer working on the Facebook Events " +
      "product.\n\n" +
      "My primary interests are in Computer Networks and Security and I hope " +
      "to be able to work in the field some day. In my free time, I develop " +
      "mobile apps and websites such as my portfolio since I find it very " +
      "enjoyable to create something that you could directly experience.\n\n" +
      "What I look for in a job is the ability to make an impact. I'm " +
      "motivated by the fact that I could create something that can bring " +
      "benefits to the society. I will be graduating in June 2020 and " +
      "looking toward a full time opportunities in Software Engineering.",
  },
  "workExperience":  {
    objs: {
      0: {
        name: "Facebook",
        title: "Software Engineering Intern",
        date: "June 2019 - September 2019",
        description: "I worked on the Facebook Events product on the " +
          "notifications backend team.\n\nDuring my time, I created a new " +
          "notification, working on both the backend and the frontend. The " +
          "process involves generating a candidates table in Presto, along " +
          "with setting up a scheduler that makes sure we are sending out " +
          "the notifications everyday.\n\nI also created the landing page of " +
          "the notification along with implementing metrics loggings in " +
          "order to monitor how my notification performs in production.",
        techUsed: "Python Hack Presto/Hive",
        logo: "assets/facebook_logo_text.png"
      },
      1: {
        name: "Teradata",
        title: "Software Engineering Intern",
        date: "June 2018 - September 2018",
        description: "Created a dashboard that displays metrics such as " +
          "Memory Usage, Paging Activity, Jenkins Jobs’ statuses, and active " +
          "docker containers.\n\n" +
          "Wrote API integration tests for Cloud features (Teradata's " +
          "Customer Database Console) to ensure quality of Production " +
          "application. These features include but not limited to changing " +
          "instance types, scaling the number of EC2 instances, and " +
          "expanding storage.\n\n" +
          "Wrote Bash script for sanity check and automatic Jenkins build " +
          "deployment and running when a PR is merged.\n\n" +
          "Used Terraform to deploy an AutoTag system (open source project) " +
          "to tag AWS resources created with the owner’s names.\n\n" +
          "Wrote an add-on to the open source project for listening to AWS " +
          "Cloud Trail’s logs for Lambda Create event in order to tag the " +
          "Lambda function upon creation.\n",
        techUsed: "Ruby Docker Jenkins AWS",
        logo: "assets/teradata_logo_text.png"
      },
    },
    heading: "Work Experience",
    text: "I've been fortunate to have interned at two companies during my " +
      "time in college. These internships have helped me tremendously in " +
      "progressing my industry experience.\n" +
      "Click on the logos to find more about my experience."
  },
  "projects": {
    objs: {
      0: {
        title: "Code Style Linter",
        shortDesc: "A style linter for C and ARM Assembly files.",
        longDesc: "The style linter is capable of checking many things " +
          "ranging from indentations, \"Magic\" numbers, lines over 80 " +
          "characters, and some more. \n\n I developed this to make my " +
          "life easier grading students' programming assignments, where I " +
          "had to check if their code followed the style guidelines.",
        techUsed: "Python",
        repo: "https://github.com/hnguyen0428/style_checker",
      },
      1: {
        title: "CodeSnippler",
        shortDesc: "A website for quickly looking up common code snippets in " +
          "order to assist with the developing process.",
        longDesc: "I developed the back end using Spring, which hosts a " +
          "REST service that acts as a proxy between the front end and the " +
          "database. The Spring server handles everything from CRUD " +
          "operations to complex queries such as those used to query the " +
          "popular snippets.\n\n" +
          "The front end is a web application, which is made using React. " +
          "It allows users to do things such as creating code snippets, " +
          "saving code snippets for future lookups, and filtering the " +
          "languages that they see in their feed.",
        techUsed: "React Spring MongoDB",
        repo: "https://github.com/hnguyen0428/code-snippler",
      },
      2: {
        title: "GroupPlanner",
        shortDesc: "An iOS application that helps you find the appropriate " +
          "time to hang out with your friends.",
        longDesc: "GroupPlanner is an iOS application created as part of the " +
          "CodePath bootcamp project. The app uses Google Calendar API in " +
          "order to pull users' events and overlay them on top of a calendar " +
          "view.\n\n" +
          "I also implemented an algorithm that would calculate available " +
          "times of all users' in a group and display them to make it easier " +
          "for users to know when their friends are free.\n\n" +
          "Won CodePath Best in Show and Best App Idea award.",
        techUsed: "Swift OAuth Parse",
        repo: "https://github.com/hecs-software/group-planner",
      },
      3: {
        title: "GuitarTuner",
        shortDesc: "An iOS application that can be used to tune the guitar.",
        longDesc: "GuitarTuner was developed as a tool to help users tune " +
          "their guitar with more than just the standard tuning.\n\n" +
          "I used Apple's Accelerate framework to perform Fast Fourier " +
          "Transform along with applying a second-order filter on the audio " +
          "signal captured by the phone in order to determine the frequency " +
          "of the note being played.\n",
        techUsed: "Swift",
        repo: "https://github.com/hnguyen0428/GuitarTuner",
      },
    },
    heading: "Some Projects I've Worked On",
    text: "These are the projects I've created in my free time while in " +
      "college. I had a lot of fun developing these projects and it is " +
      "mainly through these projects that I've initially gained the " +
      "knowledge required for industry work.",
  },
  "education": {
    text: "I started college at UC San Diego in 2016 and I will be " +
      "graduating in the June of 2020. At UC San Diego, I majored in " +
      "Computer Science and had a minor in Math. During my time here, I " +
      "served as a tutor for the Computer Science Department, teaching an " +
      "Intro to OOP and a Systems Programming class. My responsibility " +
      "includes grading programming assignments and holding lab hours to " +
      "help students debug their assignments.",
    heading: "Where I Went to School",
    logo: "assets/ucsd_logo.png",
    objs: [
      {
        "name": "Computer Networks",
        "description": "Course covers topics on computer networks " +
          "architecture, current internet standards, routing and congestion " +
          "controls, and transport protocols. Projects include creating a " +
          "Sliding-Window-Protocol in order to send and receive packets with " +
          "error detection, and creating a router, which handles receiving " +
          "packets and forwarding packets to their destinations."
      },
      {
        "name": "Computer Security",
        "description": "Course covers topics on computer security such as " +
          "low-level software security, cryptography, web security, " +
          "networks security, hardware security, side channels, and computer " +
          "virus/malware.\nTwo major projects include replicating a buffer " +
          "overflow exploit and a man-in-the-middle attack \nthat injects " +
          "iframes into http packets."
      },
      {
        "name": "Computer Vision",
        "description": "Course covers topics in computer vision such as " +
          "photometric stereo, binary image processing, image filtering, " +
          "edge detection, and object tracking."
      },
      {
        "name": "Deep Learning",
        "description": "Course covers neural networks topics such as " +
          "perceptron learning, vanilla neural networks, convolutional " +
          "neural networks, recurrent neural networks, reinforcement " +
          "learning and generative adversarial networks. It also covers " +
          "machine learning techniques such as gradient descent, " +
          "regressions, and maximum likelihood.\nOne of the projects I did " +
          "was creating a CNN that trains on a set of Xray data in order " +
          "to classify what diseases the patient has. Another project is " +
          "where I created a recurrent neural network (LSTM to be specific) " +
          "and trains it on a beer reviews dataset in order to then " +
          "generate similar beer reviews based on a given rating and beer " +
          "category. These two projects were done using PyTorch."
      },
      {
        "name": "Natural Language Processing",
        "description": "Course covers NLP topics such as language semantics, " +
          "text prediction, smoothing techniques (Katz Backoff, " +
          "Kneser-Ney), sentiment classification with logistic regression, " +
          "machine translation using IBM model. Projects include designing " +
          "an n-gram probabilistic text generation model, a sentiment " +
          "classification model of Yelp reviews, Gene sequence tagging " +
          "using Hidden Markov Model, and alignment model between English " +
          "and Spanish text."
      },
      {
        "name": "Programming Languages Paradigm",
        "description": "Course covers functional programming using Haskell. " +
          "Projects include developing a fully functional language, which " +
          "involves creating a Lexer, Parser, and an interpreter."
      },
      {
        "name": "Recommenders System",
        "description": "Course covers basic machine learning methods such " +
          "as Linear Regression, Logistic Regression, SVM, and also " +
          "various techniques on how to design recommender systems.\n" +
          "Projects include designing rating model, category prediction " +
          "model, and purchase prediction model using sklearn library."
      },
    ]
  },
  "resumeLink": "https://drive.google.com/open?id=1jxLAQ1ZC5Ie_IHezqILVmoj9YjOW2YuJ",
  "fbLink": "https://www.facebook.com/hnguyen0428",
  "githubLink": "https://github.com/hnguyen0428?tab=repositories",
  "linkedinLink": "https://www.linkedin.com/in/hnguyen0428",
  "profileImage": "assets/profile_picture.jpg",
  "email": "hnguyen0428@gmail.com",
};

export default profile;