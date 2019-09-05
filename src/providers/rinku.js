const personalDetails = {
    name: 'SATENDRA SINGH',
    designation: 'Service Executive',
    aboutMe: `Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company. 
    I am a hard working person. I am always ready to learn new things & applying them into my life. I like traveling & explore the new things.`,
    details: [
        { icon: 'fa fa-envelope', html: `<a href="mailto:satendrasingh0516@gmail.com" alt="satendrasingh0516@gmail.com" target="_blank" rel="noopener noreferrer">satendrasingh0516@gmail.com</a>` },
        { icon: 'fa fa-skype', html: `<a href="#" alt="github" target="_blank" rel="noopener noreferrer">satendrasingh0516@gmail.com</a>` },
        { icon: 'fa fa-linkedin', html: `<a href="https://www.linkedin.com/in/satendra-singh-a61128129/" alt="linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/satendra-singh-a61128129/</a>` },
        { icon: 'fa fa-mobile', html: `<a href="tel:+919311047042" alt="+919311047042" target="_blank" rel="noopener noreferrer">+919311047042</a>, <a href="tel:+919319159042" alt="+919319159042" target="_blank" rel="noopener noreferrer">+919319159042</a>` },
        { icon: 'fa fa-calendar', html: `20 Nov 1993` },
    ],
    experience: [
        {
            designation: 'Service Executive',
            company: 'Victory India Holidays',
            duration: '02/2018 - Present',
            location: 'Gurugram',
            desc: `Victory India Holidays Offering car rental services. The company provides car rental services for large organizations. The company is currently working Indigo, Maruti Suzuki, Hero Motocorp etc.`,
            myRole: `I joined this company as an executive trainee. Currently I am working on the position of Service Executive. My work in this position is to manage the bookings & trips.`,
            points: []
        }
    ],
    educations: [
        {
            name: 'B. Tech.',
            college: 'RKGIT Gaziabad',
            duration: '2010 - 2014',
            location: 'Gaziabad',
            stream: 'Electronics & Communication (ECE)',
            desc: ''
        },
        {
            name: '12th',
            college: 'CPI Inter College',
            duration: '2008 - 2009',
            location: 'Agra',
            stream: 'Science',
            desc: ''
        },
        {
            name: '10th',
            college: 'CPI Inter College',
            duration: '2006 - 2007',
            location: 'Agra',
            stream: 'Science',
            desc: ''
        }
    ],
    skills: ['Creative Thinking', 'Critical Thinking', 'Decision Making', 'Management', 'Teamwork', 'Computer',
        'Communication', 'Client Handling'],
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
    ],
}




module.exports = personalDetails;