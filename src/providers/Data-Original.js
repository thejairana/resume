const personalDetails = {
    name: 'JAY KUMAR',
    designation: 'Full Stack Web Developer',
    aboutMe: `I'm an innovative Full Stack Web Developer with 3 years of work experience (2 years, 7 months in hand) in web development.
            Mostly i worked on Javascript frameworks such as Angular, NodeJS, Ionic etc.
            Recently I trained a team on Angular & Ionic within 3 weeks and getting 80% success.
            I have developed products for more than 3 startups with upto 90% work satisfaction.`,
    details: [
        { icon: 'fa fa-envelope', html: `<a href="mailto:therana.jai@gmail.com" alt="therana.jai@gmail.com" target="_blank" rel="noopener noreferrer">therana.jai@gmail.com</a>` },
        { icon: 'fa fa-github', html: `<a href="https://github.com/thejairana" alt="github" target="_blank" rel="noopener noreferrer">github.com/thejairana</a>` },
        // { icon: 'fa fa-github', html: `<a href="https://thejairana.github.io/portfolio" alt="github" target="_blank" rel="noopener noreferrer">thejairana.github.io/portfolio</a>` },
        { icon: 'fa fa-linkedin', html: `<a href="https://www.linkedin.com/in/jai-rana/" alt="linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/jai-rana/</a>` },
        { icon: 'fa fa-mobile', html: `<a href="tel:+918385803337" alt="+918385803337" target="_blank" rel="noopener noreferrer">+918385803337</a>, <a href="tel:+916378922131" alt="+916378922131" target="_blank" rel="noopener noreferrer">+916378922131</a>` },
        { icon: 'fa fa-calendar', html: `15 Aug 1993` },
    ],
    experience: [
        {
            designation: 'Full Stack Developer',
            company: 'Elogist Private Ltd.',
            duration: '02/2018 - Present',
            location: 'Jaipur',
            desc: `I am joined this startup as a full stack developer. I had developed main product of elogist known as walle8.
            Currently we are developing a digitalized system for logistic service providers know as 'DOST'. My Role in the current product 
            is to manage front end development.`,
        },
        {
            designation: 'Full Stack Developer',
            company: 'Appwallaz',
            duration: '05/2017 - 01/2018',
            location: 'Jaipur',
            desc: `In this company we was developed many mobile & web applications for the client with upto 90% of satisfaction. We worked with more than 3 startups and developed their products. And your best achievement was 
            Javascript plugin development Just in 2 hours. In this company we had work with SeADoc, Volkswagen Jaipur, QK Feedback, The Peak Dispensary, The ShortCut and others.`,
        },
        {
            designation: 'Full Stack Developer',
            company: 'Youstart',
            duration: '01/2017 - 05/2017',
            location: 'Jaipur',
            desc: `This was my first company. I joined this company as a full stack developer. And my first project was "Sparup". 
            I worked hard on this project and handle complete front end development alone. We delivered this project before the deadline and get appreciation from the client. 
            I also worked here on many applications such as MyLib, Car Rental, Quiz App, Chat Application etc.`,
        }
    ],
    educations: [
        {
            name: 'B. Tech.',
            college: 'Jagannath Gupta Institute of Engineering & Technology (JNIT)',
            duration: '2013 - 2017',
            location: 'Jaipur',
            stream: 'Computer Science',
            desc: ''
        },
        {
            name: 'O & A Level',
            college: 'National Institute of Electronics & Information Technology (NIELIT)',
            duration: '2010 - 2012',
            location: 'Mathura',
            stream: 'Computer Science',
            desc: ''
        }
    ],
    skills: ['Javascript', 'Angular', 'NodeJS', 'Ionic', 'Git', 'MongoDB'],
    projects: [
        {
            name: 'DOST (Digital Operations for Smart Transportation)',
            tech: 'Angular, Ionic, Cake Php, PostgreSQL',
            desc: `DOST is a complete ERP for logistic owners to manage their records. 
            It has more than 7 modules such as accounting, trips, tyres, documents etc.`,
            link: 'http://elogist.in/dost/'
        },
        {
            name: 'Walle8',
            tech: 'Ionic, Cake Php, PostgreSQL',
            desc: `Wallet for fliet owners to fill fuel & pay toll tax and getting discount on every fuel filling or toll tax payment.`,
            link: 'https://play.google.com/store/apps/details?id=www.walle8.com'
        },
        {
            name: 'Automation',
            tech: 'Python, Selenium',
            desc: `A automation system to login in bank accounts (more than 5 banks) using internet banking and download latest statement of bank transactions in every 5 minutes.`
        },
        {
            name: 'The Peak Dispensary',
            tech: 'Ionic, NodeJS, Angular, MongoDB',
            desc: `A mobile application & website to sale marijuana medicine online in USA.`,
            link: 'https://play.google.com/store/apps/details?id=com.sanghi.motrs'
        },
        {
            name: 'Volkswagen Jaipur',
            tech: 'Ionic, NodeJS, Angular, MongoDB',
            desc: `A mobile application for Volkswagen Jaipur for service booking, test drive booking, sales enquiries etc.`,
            link: "https://play.google.com/store/apps/details?id=com.sanghi.motrs",

        },
        {
            name: 'Qk Feedback',
            tech: 'JavaScript',
            desc: `It is a javascript plugin to get the quick feedback from the clint. No need of extra installation just insert script tag and it's work.`,
            link: 'https://qkfeedback.com/'
        },
        {
            name: 'SeeADoc',
            tech: 'Ionic, NodeJS, MongoDB',
            desc: `A appointment booking system for patients. Patients can book appointment on a particular time slot with live tracking.`,
            link: 'https://play.google.com/store/apps/details?id=io.ionic.starterseeadoc2018'
        },
        {
            name: 'GetShortCut',
            tech: 'Angular 2',
            desc: `Shortcut is the easiest way to get a haircut on-demand, right in the comfort of your home or office.`,
            link: 'https://www.getshortcut.co/'
        },
        {
            name: 'MyLib',
            tech: 'Ionic 2, Loopback, MongoDB',
            desc: `A digital library for students, contain information in the form of audio, video & text.`,
            link: 'https://play.google.com/store/apps/details?id=com.softbox.mylib&hl=en'
        },
        {
            name: 'SparUp',
            tech: 'Ionic, AngularJS, NodeJS, MongoDB',
            desc: `A training management system used by coaches, athelets, parents & managers to view, follow & manage athelet activities.`,
            link: 'https://play.google.com/store/apps/details?id=com.youstart.sparup'
        }
    ],
}




module.exports = personalDetails;