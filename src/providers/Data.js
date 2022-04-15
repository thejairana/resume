const personalDetails = {
    name: 'JAY KUMAR',
    designation: '(Full Stack Developer)',
    aboutMe: `I'm an innovative Full Stack Web Developer with 5 years of work experience (4 years in hand) in web development.
            Mostly I worked on Javascript frameworks such as Angular, React, NodeJS, Ionic, NestJS etc. 
            I have also worked on Banking, Fastage, Challan Automation using Python. I have developed products for more than 4 startups.
            I’m looking for a new challenge that can help me broaden my experience`,
    details: [
        { icon: 'fa fa-envelope', html: `<a href="mailto:jkrana008@gmail.com" alt="jkrana008@gmail.com" target="_blank" rel="noopener noreferrer">jkrana008@gmail.com</a>` },
        { icon: 'fa fa-linkedin', html: `<a href="https://www.linkedin.com/in/jai-rana/" alt="linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/jai-rana/</a>` },
        { icon: 'fa fa-mobile', html: `<a href="tel:+918385803337" alt="+918385803337" target="_blank" rel="noopener noreferrer">+918385803337</a>, <a href="tel:+916378922131" alt="+916378922131" target="_blank" rel="noopener noreferrer">+916378922131</a>` },
        { icon: 'fa fa-calendar', html: `15 Aug 1993` },
    ],
    experience: [
        {
            designation: 'Sr. Software Engineer',
            company: 'NeoDove Technologies',
            duration: '05/2021 - Present',
            location: 'Jaipur',
            desc: `NeoDove is a Telecalling CRM and Sales Engagement Platform that helps small and medium businesses improve their telesales team’s
            productivity and performance to drive higher growth in revenue.`,
        },
        {
            designation: 'Full Stack Developer',
            company: 'Axestrack Software Solutions',
            duration: '10/2020 - 05/2021',
            location: 'Jaipur',
            desc: `Provide the GPS based tracking solutions for consignment, personal, mobile and vehicle based tracking with Geofence, Over Speed, stoppage, Route-deviation, 
            Break-down, fuel consumption and different-2 Sensor based analysis solution.`,
        },
        {
            designation: 'Full Stack Developer',
            company: 'Elogist Private Ltd.',
            duration: '02/2018 - 09/2020',
            location: 'Jaipur',
            desc: `Provide AI based solution for Fastag Toll, Fuel Consumption, Trip Management, Location Tracking, Challan Payments, 
            Driver Performance Monitoring & Other Logistic Services.`,
        },
        {
            designation: 'Full Stack Developer',
            company: 'Appwallaz',
            duration: '05/2017 - 01/2018',
            location: 'Jaipur',
            desc: `Its a service based company provide complete solution for web, app & software development.`,
        },
        {
            designation: 'Full Stack Developer',
            company: 'Youstart',
            duration: '01/2017 - 05/2017',
            location: 'Jaipur',
            desc: `Its a service based company consulting & providing solution for web, app, software, AI, & ML development. 
            Mostly it worked with startups`,
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
    skills: ['Angular', 'React', 'NodeJS', 'NestJS', 'Javascript', 'Python', 'MongoDB', 'Postgres', 'Redis', 'RabbitMQ', 'AWS', 'Automation'],
    projects: [
        {
            name: 'NeoDove, NeoBiz',
            tech: 'Angular, React, NodeJs, PostgreSQL',
            desc: `Telecalling CRM and Sales Engagement Platform`,
            link: 'https://neodove.com/'
        },
        {
            name: 'Automation (Bank, Challan, RC, Driver, Tally, Fastag)',
            tech: 'Python, Selenium, UI Path',
            desc: `Implemented Banking, Fastag, Challan, RC, Driver & Tally automation using Python & UI Path`,
            link: ''
        },
        {
            name: 'PDF Version Controller',
            tech: 'Javascript, Pdfjs, FabricJS',
            desc: `A version controller for PDF using Javascript. You can view every level of changes & modify them.`,
            link: ''
        },
        {
            name: 'Trackurate',
            tech: 'Angular, Ionic, NodeJS, MongoDB',
            desc: `DOST is a complete ERP for logistic owners to manage their records. 
            It has more than 7 modules such as accounting, trips, tyres, documents etc.`,
            link: 'https://play.google.com/store/apps/details?id=gold.fvts.in'
        },
        {
            name: 'DOST (Digital Operations for Smart Transportation)',
            tech: 'Angular, Ionic',
            desc: `DOST is a complete ERP for logistic owners to manage their records. 
            It has more than 7 modules such as accounting, trips, tyres, documents etc.`,
            link: 'http://elogist.in/dost/'
        },
        {
            name: 'Walle8',
            tech: 'Ionic, Javascript',
            desc: `Wallet for fliet owners to fill fuel & pay toll tax and getting discount on every fuel filling or toll tax payment.`,
            link: 'https://play.google.com/store/apps/details?id=www.walle8.com'
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
            name: 'SparUp',
            tech: 'Ionic, AngularJS, NodeJS, MongoDB',
            desc: `A training management system used by coaches, athelets, parents & managers to view, follow & manage athelet activities.`,
            link: 'https://play.google.com/store/apps/details?id=com.youstart.sparup'
        }
    ],
}




module.exports = personalDetails;