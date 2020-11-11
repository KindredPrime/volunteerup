const dummyUsers = [
  {
    id: 1,
    email: 'email1@email.com',
    username: 'user1',
    password: 'password1',
    orgsAdded: ['YMCA DC'],
    eventsAdded: ['Member Appreciation Day', 'Triathlon Assistance']
  },
  {
    id: 2,
    email: 'email2@email.com',
    username: 'user2',
    password: 'password2',
    orgsAdded: ['Humane Society of Fairfax County, Inc'],
    eventsAdded: ['Adoption Day']
  },
  {
    id: 3,
    email: 'email3@email.com',
    username: 'user3',
    password: 'password3',
    orgsAdded: ['National VOAD'],
    eventsAdded: []
  },
  {
    id: 4,
    email: 'email4@email.com',
    username: 'user4',
    password: 'password4',
    orgsAdded: [],
    eventsAdded: []
  },
  {
    id: 5,
    email: 'email5@email.com',
    username: 'user5',
    password: 'password5',
    orgsAdded: ['National Air and Space Museum'],
    eventsAdded: ['Docent Training Class']
  },
  {
    id: 6,
    email: 'email6@email.com',
    username: 'user6',
    password: 'password6',
    orgsAdded: [],
    eventsAdded: ['Front Desk Volunteers', 'Help Children with Homework and Reading']
  },
  {
    id: 7,
    email: 'email7@email.com',
    username: 'user7',
    password: 'password7',
    orgsAdded: ['Sully Historic Site', 'Optimist Club of Herndon, VA'],
    eventsAdded: []
  },
  {
    id: 8,
    email: 'email8@email.com',
    username: 'user8',
    password: 'password8',
    orgsAdded: ['Fairfax County Health Department'],
    eventsAdded: ['Volunteer Drivers needed to assist older adults in the community']
  },
  {
    id: 9,
    email: 'email9@email.com',
    username: 'user9',
    password: 'password9',
    orgsAdded: ['Girls on the Run of Northern Virginia'],
    eventsAdded: [
      'Coach with Girls on the Run in Loudoun County - Role Models Needed!',
      'Coach a Youth Sports Team'
    ]
  },
  {
    id: 10,
    email: 'email10@email.com',
    username: 'user10',
    password: 'password10',
    orgsAdded: ['Vecinos Unidos', 'FACETS', 'American Cancer Society in District of Columbia'],
    eventsAdded: [
      'Touring Docent Sully Historic Site',
      'Drive Cancer Patients to Lifesaving Treatment'
    ]
  }
];

const dummyOrgs = [
  {
    id: 1,
    name: 'YMCA DC',
    website: 'https://www.ymcadc.org/locations/ymca-fairfax-county-reston/',
    phone: '703-742-8800',
    email: 'Carson.Henry@ymcadc.org',
    address: '12196 Sunset Hills Road, Reston, VA 20190',
    description: `Today, the Y engages more than 10,000 neighborhoods across the U.S. As the nation’s leading nonprofit committed to helping people and communities to learn, grow and thrive, our contributions are both far-reaching and intimate—from influencing our nation’s culture during times of profound social change to the individual support we provide an adult learning to read.

    By empowering young people to reach their full potential, improving individual and community well-being and giving back and inspiring action in our communities, the Y ensures that everyone has the opportunity to become healthier, more confident, connected and secure.`,
    causes: ['Youth', 'Health', 'Elderly'],
    tags: ['in-person', 'weekends', 'weekdays', 'group']
  },
  {
    id: 2,
    name: 'Humane Society of Fairfax County, Inc',
    website: 'https://hsfc.org/',
    phone: '703-385-7387',
    email: 'volunteer_coordinator@HSFC.org',
    address: '4057 Chain Bridge Road, Fairfax, VA 22030',
    description: `The mission of the Humane Society of Fairfax County, Inc. is to promote humane education, to prevent all forms of cruelty to animals, both domestic and wild, by every legitimate means, and to assist the community with all matters pertaining to the welfare of animals.`,
    causes: ['Animals'],
    tags: ['in-person', 'weekends', 'weekdays', 'cleaning', 'driving']
  },
  {
    id: 3,
    name: 'National VOAD',
    website: 'https://www.nvoad.org',
    phone: '703-778-5088',
    email: 'info@nvoad.org',
    address: 'P.O. Box 26125 Alexandria, VA 22314',
    description: `National VOAD is a coalition of 70+ of the nation’s most reputable national organizations (faith-based, community-based and other non-profit organizations) and 56 State/Territory VOADs, which represent Local/Regional VOADs and hundreds of other member organizations throughout the country.

    Recognizing that all sectors of society must work together to foster more resilient, self-reliant communities nationwide, we facilitate partnerships with federal, state and local emergency management and other governmental agencies, as well as for-profit corporations, foundations, and educational and research institutions. National VOAD Members represent a powerful force of goodwill in America. They are the leaders who do the work to make our communities stronger and more resilient. In times of need they deliver hope for a more positive future.`,
    causes: ['Disaster Response'],
    tags: ['in-person', 'weekends', 'weekdays', 'nights', 'delivery', 'heavy lifting']
  },
  {
    id: 4,
    name: 'National Air and Space Museum',
    website: 'https://airandspace.si.edu/',
    phone: '202-633-2214',
    email: 'NASMVisitorServices@si.edu',
    address: '655 Jefferson Drive, SW Washington, DC 20560',
    description: `The Smithsonian's National Air and Space Museum maintains the world's largest and most significant collection of aviation and space artifacts, encompassing all aspects of human flight, as well as related works of art and archival materials. It operates two landmark facilities that, together, welcome more than eight million visitors a year, making it the most visited museum in the country. It also is home to the Center for Earth and Planetary Studies.`,
    causes: ['History', 'Education'],
    tags: ['virtual', 'in-person', 'weekends', 'weekdays', 'group', 'greeting']
  },
  {
    id: 5,
    name: 'Fairfax County Health Department',
    website: 'https://www.fairfaxcounty.gov/health/fairfax-county-health-department',
    phone: '703-246-2411',
    email: 'health@fairfaxcounty.gov',
    address: '10777 Main Street Fairfax, VA 22030',
    description: `As an agency of the Fairfax County Health and Human Services System, we work to protect, promote and improve health and quality of life for all who live, work and play in our community. We do this by preventing epidemics and the spread of disease, protecting the public against environmental hazards, promoting and encouraging healthy behaviors, assuring the quality and accessibility of health services, responding to natural and man-made disasters, and assisting communities in recovery. Our vision is for all Fairfax County residents to live in thriving communities where every person has the opportunity to be healthy, safe and realize his or her potential.`,
    causes: ['Youth', 'Health', 'Disaster Response'],
    tags: ['virtual', 'in-person', 'weekends', 'weekdays', 'group', 'driving']
  },
  {
    id: 6,
    name: 'Sully Historic Site',
    website: 'https://www.fairfaxcounty.gov/parks/sully-historic-site/',
    phone: '703-437-1794',
    email: 'FCPASully@fairfaxcounty.gov',
    address: '3650 Historic Sully Way Chantilly, VA',
    description: `Sully was completed in 1799 by Richard Bland Lee, Northern Virginia's first Representative to Congress. It is on the National Register for Historic Places and is accredited by the American Alliance of Museums.`,
    causes: ['History'],
    tags: ['virtual', 'in-person', 'weekends', 'weekdays', 'group', 'outdoors']
  },
  {
    id: 7,
    name: 'Vecinos Unidos',
    website: 'http://vecinosunidos.org/',
    phone: '703-201-2809',
    email: 'info@vecinosunidos.org',
    address: '1086 Elden Street Herndon, Virginia 20170',
    description: `Vecinos Unidos makes a difference in the lives of students in grades 1-6 through homework assistance and summer enrichment programs—and has been doing so since 1997. With caring volunteers to guide them, students experience improved academic success and greater confidence in their ability to learn and achieve.`,
    causes: ['Youth', 'Education'],
    tags: ['virtual', 'in-person', 'weekdays']
  },
  {
    id: 8,
    name: 'Girls on the Run of Northern Virginia',
    website: 'https://gotrnova.org/',
    phone: '703-273-3153',
    email: 'info@gotrnova.org',
    address: '10301 Democracy Lane, Suite 100 Fairfax, Virginia 22030',
    description: `At Girls on the Run of NOVA, we are creating a community of girls empowered to be their best, by teaching them the skills they need to be strong, confident, and healthy women. As a 501(c)(3) non-profit organization serving more than 70,000 girls since 2000, GOTR NOVA works to engage the entire community to positively impact the health and well being of the girls of Northern Virginia, their families and communities, and the volunteer coaches who serve them. GOTR NOVA is an Independent Council of Girls on the Run International, a network of more than 200 councils across 50 states and the District of Columbia. By connecting our councils’ deep local roots with our strong national unity, Girls on the Run has become a powerful movement that is making a difference in the holistic health of girls, families and communities across North America. Together, we are inspiring girls to know their limitless potential and boldly pursue their dreams.`,
    causes: ['Youth'],
    tags: ['in-person', 'weekends', 'weekdays', 'outdoors']
  },
  {
    id: 9,
    name: 'Optimist Club of Herndon, VA',
    website: 'http://www.herndonoptimist.org/',
    phone: 'Not Available',
    email: 'Not Available',
    address: 'Not Available',
    description: `Since 1961, the not-for-profit Optimist Club of Herndon, VA has been dedicated to providing a helping hand to the youth in our greater-Herndon-Reston community. Our youth sports programs offer over two thousand children each year the opportunity to learn sports-related skills and that responsibility, teamwork, sportsmanship, and integrity are just as important as winning. Our education-partnership programs and law enforcement-partnership programs engage the children in our community in positive ways with our school personnel and law enforcement officers.

    The Herndon Optimist Club (HOC) Board is focused on and committed to delivering on our mission of service to the youth of our community. If you have any suggestions for improvement or need assistance, please use the Feedback option and a member of the HOC Board will get back to you as soon as possible.`,
    causes: ['Youth'],
    tags: ['in-person', 'weekends', 'weekdays', 'group']
  },
  {
    id: 10,
    name: 'FACETS',
    website: 'http://facetscares.org/',
    phone: '703-352-5090',
    email: 'facets@facetscares.org',
    address: '10700 Page Avenue, Building B, Fairfax VA 22030',
    description: `FACETS opens doors by helping parents, their children and individuals who suffer the effects of poverty – so often unnoticed – in Fairfax County. We meet their emergency shelter, food, and medical needs, help them gain safe, sustainable and permanent housing and work with them to end the cycle of poverty through educational, life skills and career counseling programs. FACETS was founded in 1988 to respond to the diverse needs of people impacted by poverty in Fairfax, Virginia.
    
    We began as an outreach project by our founder, Linda D. Wimpey, who, in partnership with several area churches, prepared and delivered hot meals to families who were homeless three nights a week. This program continues to this day, and we have since expanded from operating as an emergency food program to a full-time staff of professionals, an engaged board of directors and a range of programs that work to break the cycle of poverty and prevent and end homelessness in our community.
    
    Countywide – FACETS operates across the entirety of Fairfax County.
    
    Effective – The organization’s many individual success stories and group statistics demonstrate how FACETS’ work continues to reduce the effects of poverty and prevent and end homelessness in the lives of Fairfax County residents. An important reason that FACETS is so effective is that its programs are tailored to meet individual needs.
    
    Full-Service – FACETS provides personalized and successful services that prevent and end homelessness and address poverty and its effects in Fairfax County.
    
    Professional – FACETS’ is a professionally managed organization whose experienced, multi-disciplinary staff is specialized in housing, medical services, shelter, education and community development. Those who know FACETS firsthand recognize the staff for its creativity, resourcefulness and commitment to service.
    
    Dedicated – Care and compassion are FACETS’ well-established values and characterize the way in which its staff and volunteers carry out its mission.
    
    Respectful – FACETS respects the dignity of each person it assists, and serves people without regard to their beliefs, backgrounds or conditions.
    
    Community Involving – FACETS attracts, motivates and manages more than 3,000 volunteers who are vital in carrying out its programs.
    
    Collaborative – FACETS works closely with more than one hundred faith communities, businesses, fellow nonprofits, county government bodies and foundations to end the cycle of poverty in Fairfax County. In 2008, FACETS was an organizing partner in an alliance of groups committed to ending homelessness in Fairfax County by 2018.
    `,
    causes: ['Education', 'Poverty'],
    tags: ['virtual', 'in-person', 'weekends', 'weekdays', 'nights', 'delivery', 'cooking', 'driving']
  },
  {
    id: 11,
    name: 'American Cancer Society in District of Columbia',
    website: 'https://www.cancer.org/about-us/local/district-of-columbia.html',
    phone: '202-661-5700',
    email: 'Not Available',
    address: ' 555 11th Street NW , Suite 300 Washington, DC 20004',
    description: `If you’re looking for cancer information and resources in District of Columbia you’ve come to the right place. From our local fundraising events to our cancer support programs, you’ll find everything you need to fuel the fight against cancer and get patient support – right here in our community.`,
    causes: ['Health'],
    tags: ['virtual', 'in-person', 'weekends', 'weekdays', 'delivery', 'administration', 'driving']
  },
];

const dummyEvents = [
  {
    id: 1,
    name: 'Member Appreciation Day',
    organization: 'YMCA DC',
    location: 'Reston YMCA Center',
    date: 'February 20, 2020 00:00:00',
    duration: '4 hours',
    description: 'Greet YMCA members as they enter the facility and offer them snacks.  See https://www.website.com for more details.',
    causes: ['Health', 'Elderly'],
    tags: ['in-person', 'weekdays', 'greeting']
  },
  {
    id: 2,
    name: 'Triathlon Assistance',
    organization: 'YMCA DC',
    location: 'Reston YMCA Center',
    date: 'January 27, 2020 00:00:00',
    duration: '4 hours',
    description: 'Help YMCA staff host their annual indoor triathlon: sign in triathlon participants, direct the participants to the different stages of the triathlon, and record times. See https://www.triathlon.com for more details.',
    causes: ['Health'],
    tags: ['in-person', 'weekends', 'administration']
  },
  {
    id: 3,
    name: 'Adoption Day',
    organization: 'Humane Society of Fairfax County, Inc',
    location: 'Times Square, New York City, New York',
    date: 'December 13, 2020 00:00:00',
    duration: '8 hours',
    description: 'Help the Humane Society of Fairfax County run their annual adoption day for their pet shelter.',
    causes: ['Animals'],
    tags: ['in-person', 'weekends', 'administration', 'greeting']
  },
  {
    id: 4,
    name: 'Docent Training Class',
    organization: 'National Air and Space Museum',
    location: '14390 Air and Space Museum Pkwy Chantilly, VA 20151',
    date: 'January 30, 2021 00:00:00',
    duration: '2 hours',
    description: 'This is a required class for anyone who wants to be a docent (tour guide) at the National Air and Space Museum.',
    causes: ['History', 'Education'],
    tags: ['in-person', 'weekends', 'training']
  },
  {
    id: 5,
    name: 'Touring Docent Sully Historic Site',
    organization: 'Sully Historic Site',
    location: '3650 Historic Sully Way Chantilly, VA 20151',
    date: 'January 27, 2020 00:00:00',
    duration: '5 hours',
    description: `Do you like history? Do you like conversation? Volunteer at Sully Historic Site conducting tours that showcase 1794 home of Richard Bland Lee. The site containing the original house and outbuildings, along with a representative slave quarter depict life in early Virginia. If you like history and have a desire to share your knowledge with others than Sully might be right for you! Guides small groups and individuals on tours of the historic site. Facilitates discussion and answers questions relevant to the site's history, buildings, grounds, and collections. Supports scheduled site programs and special events. Every day except Tuesdays. Minimum age: 16`,
    causes: ['History', 'Education'],
    tags: ['in-person', 'weekends', 'weekdays', 'greeting']
  },
  {
    id: 6,
    name: 'Volunteer Drivers needed to assist older adults in the community',
    organization: 'Fairfax County Health Department',
    location: 'Fairfax County',
    date: 'January 27, 2020 00:00:00',
    duration: '4 hours',
    description: `There is a great need for additional volunteer drivers to meet the transportation needs of non-driving adults in the community. NV Rides coordinates a network of volunteer driving programs throughout the region, in partnership with the Fairfax County, that help non-driving older adults with rides to the doctor and the grocery store. You can contact us directly at info@nvrides.org or find the program that operates in your area on our website www.nvrides.org. During the COVID-19 pandemic, we require all drivers and riders to wear masks and observe physical distancing protocols. Watch our video here (https://www.youtube.com/watch?v=Q9kow-vofhY&t=3s). Minimum age: 21`,
    causes: ['Elderly'],
    tags: ['in-person', 'weekends', 'weekdays', 'driving']
  },
  {
    id: 7,
    name: 'Help Children with Homework and Reading',
    organization: 'Vecinos Unidos',
    location: 'Herndon Neighborhood Resource Center, 1086 Elden St., Herndon, VA 20170',
    duration: '1.5 hours',
    date: 'January 27, 2020 00:00:00',
    description: `If you want to make a difference in a child's life, we need YOU. Our volunteers help low-income students in grades 1 through 6 with homework and reading after school. Our students' parents do not have the English skills to be able to help with academics, but they recognize how important school success is. With help from our volunteers, these young people can become successful in school and on the road beyond. Volunteers are needed Monday through Thursday during the school year from 4:30-6:00 p.m. We have a waiting list of students, and need your help now. The program is located at the Herndon Neighborhood Resource Center, 1086 Elden St., Herndon, VA 20170.`,
    causes: ['Youth', 'Education'],
    tags: ['virtual', 'in-person', 'weekdays']
  },
  {
    id: 8,
    name: 'Coach with Girls on the Run in Loudoun County - Role Models Needed!',
    organization: 'Girls on the Run of Northern Virginia',
    location: 'Dulles, Virginia, 20103',
    //date: '10/05/2020 - 12/06/2020',
    date: 'December 6, 2020 00:00:00',
    duration: '2-3 hours per week for 8 weeks',
    description: `Girls on the Run of Northern Virginia is looking for coaches across our area for our Fall 2020 Season!ﾠLace up your sneakers and inspire a group of girls to be strong, confident, and healthy! Girls on the Run is a youth development program for girls in 3rd through 8th grade that creatively integrates running. Teams of volunteer coaches are trained to facilitate our easy-to-follow curriculum with small groups of girls twice a week over the course of 8 weeks.ﾠ

    You don't need to be a runner or a competitive athlete to coach! Successful coaches only need to serve as role models for girls by showing up prepared and on time, by listening attentively, and by demonstrating a positive attitude!
    
    Coaches are required to commit to 2-3 hours per week for the 8 week season, with additional time required for Coach Training and the GOTR 5K race. Practice schedules will vary based on team. GOTR's Fallﾠ2020 Season starts the week of Octoberﾠ5th and ends on December 6th.?
    
    To apply as a Fall 2020 Girls on the Run of NOVA coach, go to https://www.raceplanner.com/volunteer/index/fall-2020-newcoachWe have program sites at over 110 schools and community centers in Northern Virginia - so we can certainly find a location that works for you to volunteer!Learn more about volunteering with us at https://www.gotrnova.org/volunteer or email clambacher@gotrnova.org.ﾠ"I am so thankful that this program exists in Northern Virginia.
    
    Every year I coach it just gets better and better and we are more equipped to make an impact on the lives of these girls!" -- GOTR NOVA Coach`,
    causes: ['Youth'],
    tags: ['in-person', 'weekends', 'weekdays']
  },
  {
    id: 9,
    name: 'Coach a Youth Sports Team',
    organization: 'Optimist Club of Herndon, VA',
    location: 'Herndon, VA 20170',
    // Remove the date and duration later
    date: 'January 27, 2020 00:00:00',
    duration: '4 hours',
    description: `Donate your time and make a difference that lasts a lifetime by coaching a youth recreational sports team! We need adult coaches for baseball, basketball, cheerleading, field hockey, football, and lacrosse. The Optimist Club of Herndon VA is a not-for-profit, all volunteer organization serving the Herndon-Reston-Sterling VA communities.

    We provide low and no cost sports programs to over 2000 kids per year and need your help by volunteering your time to coach a youth sports team.`,
    causes: ['Youth'],
    tags: ['in-person', 'weekends', 'weekdays', 'outdoors']
  },
  {
    id: 10,
    name: 'Front Desk Volunteers',
    organization: 'FACETS',
    location: '10700 Page Ave, Fairfax, Virginia, 22030',
    date: 'January 27, 2020 00:00:00',
    duration: '4 hours',
    description: `FACETS works to break the cycle of poverty and homelessness in Fairfax County. We are looking for engaged volunteers for our Fairfax City location to be in charge of receptionist duties including answering phones, and creating a welcoming and friendly environment for FACETS clients and guests.

    Schedule: Mondays- Fridays with two shifts (9am-1pm or 1pm to 5pm) weekly.
    
    This is an in-person volunteer opportunity, and FACETS requires staff and guests to wear masks, practice frequent handwashing, and observe other covid-prevention measures.
    
    Candidates should be interested in helping open doors for people in need. Prior experience in a receptionist role is helpful, as is basic phone and computer knowledge.`,
    causes: ['Poverty'],
    tags: ['in-person', 'weekdays', 'administration']
  },
  {
    id: 11,
    name: 'Drive Cancer Patients to Lifesaving Treatment',
    organization: 'American Cancer Society in District of Columbia',
    location: 'District Of Columbia',
    date: 'January 27, 2020 00:00:00',
    duration: '4 hours',
    description: `Did you know that transportation is a top need of cancer patients - and you can help? For many cancer patients, getting to and from treatment is one of their toughest challenges. The American Cancer Society needs volunteer drivers to provide rides to treatment for people with cancer.

    For more than 30 years, volunteers with the American Cancer Society Road To Recovery program have donated their time and the use of their car to make sure that people with cancer get to their lifesaving treatments. Volunteers are needed Monday - Friday, and you decide how often you want to drive and what distance you are willing to drive.
    
    Volunteer drivers provide encouragement and support, and patients are very thankful for the help. It is a rewarding experience and is ideal for people who like one-on-one interaction and driving. It is a great way to give back if you are a cancer survivor or if you have had a friend or family member who has had cancer. You get to build relationships and provide a vital service to cancer patients, while keeping a flexible schedule.
    
    Volunteer drivers must have a current, valid driver's license, proof of automobile insurance, and own a safe and reliable vehicle. Drivers must be between the ages of 18-84 and be willing to have a background check and motor vehicle records check to ensure volunteer and patient safety. Training is provided. For more information or to sign up to volunteer, please visit www.cancer.org/drive.`,
    causes: ['Health'],
    tags: ['weekdays', 'driving']
  }
];

const dummyCauses = [
  {
    id: 1,
    name: 'Youth'
  },
  {
    id: 2,
    name: 'Health'
  },
  {
    id: 3,
    name: 'Disaster Response'
  },
  {
    id: 4,
    name: 'Animals'
  },
  {
    id: 5,
    name: 'History'
  },
  {
    id: 6,
    name: 'Education'
  },
  {
    id: 7,
    name: 'Human Rights'
  },
  {
    id: 8,
    name: 'Arts'
  },
  {
    id: 9,
    name: 'Wildlife and Environment'
  },
  {
    id: 10,
    name: 'Elderly'
  },
  {
    id: 11,
    name: 'Poverty'
  }
];

const dummyTags = [
  {
    id: 1,
    name: 'virtual'
  },
  {
    id: 2,
    name: 'in-person'
  },
  {
    id: 3,
    name: 'weekends'
  },
  {
    id: 4,
    name: 'weekdays'
  },
  {
    id: 5,
    name: 'nights'
  },
  {
    id: 6,
    name: 'group'
  },
  {
    id: 7,
    name: 'delivery'
  },
  {
    id: 8,
    name: 'cooking'
  },
  {
    id: 9,
    name: 'administration'
  },
  {
    id: 10,
    name: 'cleaning'
  },
  {
    id: 11,
    name: 'heavy lifting'
  },
  {
    id: 12,
    name: 'greeting'
  },
  {
    id: 13,
    name: 'training'
  },
  {
    id: 14,
    name: 'driving'
  },
  {
    id: 15,
    name: 'outdoors'
  }
];

export {
  dummyUsers,
  dummyOrgs,
  dummyEvents,
  dummyCauses,
  dummyTags
};