import React from 'react';
import {
    Terminal, PenTool, Gamepad2, Cpu, Mic2, Camera, Code2, Bug, Layers, Image,
    MessageSquare, Lightbulb, Users, FileText, Zap, Bot, Skull, Music, Shirt,
    Smartphone, Smile, HelpCircle, Palette, Dumbbell, Trophy, Video, MousePointer2,
    MonitorPlay, Gavel, Radio, Swords, BrainCircuit, Activity, Book
} from 'lucide-react';

export interface Event {
    id: string;
    title: string;
    category: string;
    day: 'Day 1' | 'Day 2' | 'Online';
    description: string[]; // Short description for card
    details: string; // Venue/Team size summary for card
    icon: React.ReactNode;
    image: string;
    color: string;
    // New fields for detailed view
    rules?: string[];
    prizes?: string[];
    teamSize?: string;
    duration?: string;
    contact?: string;
    note?: string;
}

export const events: Event[] = [
    // DAY 1 - TECHNICAL
    {
        id: 'd1-battalion', // Was Debate
        title: 'Battalion (Tech Debate)',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Battalion is a technical debate competition open to participants from all domains.',
            'Teams will debate on a given topic focusing on technical knowledge, logical reasoning, and communication skills.'
        ],
        details: 'Venue: Seminar Hall',
        icon: <MessageSquare size={24} />,
        color: 'from-orange-500 to-amber-500',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
        rules: [
            'Number of teams per college: Maximum 2 teams',
            'Number of participants per team: 2 participants per team',
            'Topics will be announced before the event.',
            'Preparation time of 5 minutes will be provided after topic allotment.',
            'Each participant will get 2-3 minutes to speak. Exceeding time may lead to negative marking.',
            'Interruptions, offensive language, or misconduct are strictly prohibited.',
            'Prohibited: Use of mobile phones or internet during the event is not allowed.'
        ],
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-brainhack', // Was Technical Quiz
        title: 'Brain Hack',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Brain Hack is an individual logic competition consisting of multiple rounds.',
            'Round 1: MCQ logical reasoning questions (20-30 min). Top scorers advance to Round 2.',
            'Round 2: Complex riddles, number puzzles, pattern-based challenges.'
        ],
        details: 'Venue: Seminar Hall',
        icon: <BrainCircuit size={24} />,
        color: 'from-orange-500 to-red-500',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070',
        rules: [
            'Number of participants: 1 participant (Individual)',
            'Per College: Maximum 4 members',
            'The event is strictly time-bound.',
            'In case of a tie, a tie-breaker round or question will be conducted.',
            'Strictly Prohibited: Use of mobile phones, internet, calculators, or any external help is not allowed.',
            'Warning: Any malpractice will lead to immediate disqualification.'
        ],
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-debugging',
        title: 'Debugging Contest',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'The Debugging Contest requires participants to identify and fix errors in given code to produce the correct output. The event consists of two rounds.',
            'Round 1: Based on C programming with code snippets (MCQ/Short Answer format)',
            'Round 2: Based on Java programming where participants must debug complete programs'
        ],
        details: 'Venue: Room 1',
        icon: <Bug size={24} />,
        color: 'from-red-500 to-pink-600',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070',
        rules: [
            'Number of participants: 1 participant (Individual)',
            'Per College: Maximum 4 participants',
            'Strictly Prohibited: No internet access is allowed.',
            'Strictly Prohibited: Use of mobile phones, external storage devices, or any external help is strictly prohibited.',
            'Warning: Any malpractice will lead to immediate disqualification.'
        ]
    },
    {
        id: 'd1-hackathon',
        title: 'Hackathon',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Hackathon is a team-based innovation event where participants build solutions for problem statements provided at the start of the competition.'
        ],
        details: 'Venue: IT Lab',
        icon: <Terminal size={24} />,
        color: 'from-cyan-500 to-blue-500',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070',
        rules: [
            'Number of participants per team: Maximum 3 per team',
            'Number of teams per college: Maximum 2 teams',
            'Domains: AIML, IoT, Healthcare, Smart Agriculture & AgriTech, Disaster Response, EnviroTech',
            'Teams must build and develop the solution only during the hackathon hours.',
            'Participants must bring their own laptops.',
            'Strictly Prohibited: Pre-built projects are strictly prohibited.',
            'Allowed: Use of open-source libraries, APIs, and frameworks is allowed.',
            'External help from mentors, faculty, or online communities is not permitted unless officially allowed.',
            'Internet: Internet usage is allowed unless specified otherwise by coordinators.'
        ],
        duration: '3 hours',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-pixelcraft', // Was Poster Making
        title: 'Pixel Craft (Poster Design)',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Pixel Craft is a digital poster design competition where participants create posters using Canva based on a theme given on the spot.',
            'Platform: Canva (mobile usage is allowed)'
        ],
        details: 'Venue: Design Lab',
        icon: <Image size={24} />,
        color: 'from-purple-500 to-cyan-500',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070',
        rules: [
            'Number of participants: 1 participant (Individual)',
            'Per College: Maximum 4 members',
            'Theme will be given on the spot.',
            'Time limit: 60 minutes (strictly time-bound)',
            'The poster must be designed during the event time only.',
            'Strictly Prohibited: No pre-designed templates are allowed.',
            'Strictly Prohibited: Plagiarism or copying from internet sources is strictly prohibited.',
            'Posters must be original and creative.',
            'Warning: Any violation of rules may lead to immediate disqualification.'
        ]
    },
    {
        id: 'd1-prompting',
        title: 'Prompting War',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Prompting War is a technical event where participants design and develop a website based on the given topic within the allotted time using HTML, CSS, and JavaScript.'
        ],
        details: 'Venue: Lab',
        icon: <Bot size={24} />,
        color: 'from-emerald-500 to-green-500',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070',
        rules: [
            'Number of participants: Individual or Team (Max 3)',
            'Per College: Maximum 2 teams',
            'Time limit: 2-3 hours (strictly time-bound)',
            'The competition will be conducted in a single round.',
            'Topic/theme will be announced on the spot.',
            'Participants must bring their own laptop.',
            'Website must be designed and developed only during the event hours.',
            'Strictly Prohibited: Pre-built templates are not allowed.',
            'Strictly Prohibited: Plagiarism is strictly prohibited.',
            'Warning: Any copied code/design will lead to immediate disqualification.',
            'Participants must maintain discipline and follow coordinators\' instructions.'
        ]
    },
    {
        id: 'd1-bioconnect',
        title: 'Bio-Connect',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Bio-Connect is a bio-medical themed event where teams will be shown images related to the bio-medical domain. Participants must analyze the images, identify the concept, and provide the correct answer or solution. The competition will be conducted in multiple rounds depending on the number of participating teams.'
        ],
        details: 'Venue: Hall 1',
        icon: <Activity size={24} />,
        color: 'from-green-500 to-teal-500',
        image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070',
        rules: [
            'Number of participants: 2-3 participants per team',
            'Per College: Maximum 2 teams',
            'Each team will be given 30-60 seconds per question (as decided by the organizers).',
            'Strictly Prohibited: Use of mobile phones or any external help is strictly prohibited.',
            'Team discussion is allowed only within the allotted time.'
        ]
    },
    {
        id: 'd1-coding',
        title: 'Coding Contest',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'The coding contest consists of two rounds. Participants must solve coding problems within the allotted time.',
            'Round 1: Based on Python programming',
            'Round 2: Based on Java programming',
            'Selection for Round 2 will depend on Round 1 performance.'
        ],
        details: 'Venue: CSE Lab',
        icon: <Code2 size={24} />,
        color: 'from-blue-600 to-indigo-600',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070',
        rules: [
            'Number of participants: 1 participant (Individual)',
            'Per College: Maximum 4 members',
            'Strictly Prohibited: Use of internet, mobile phones, or any external help is strictly prohibited.',
            'Warning: Any form of malpractice will lead to immediate disqualification.'
        ]
    },
    {
        id: 'd1-electro',
        title: 'Electro Hunt',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Electro Hunt is a clue-based technical hunt where teams solve a series of technical clues related to electronics and engineering concepts. Participants must solve each clue to progress to the next level, and the team completing all tasks in the shortest time will win.'
        ],
        details: 'Venue: Electronics Lab',
        icon: <Cpu size={24} />,
        color: 'from-yellow-500 to-amber-500',
        image: 'https://images.unsplash.com/photo-1555664424-778a69032334?q=80&w=2070',
        rules: [
            'Number of participants: 2-4 participants per team',
            'Per College: 1-3 teams',
            'Teams must follow the clue sequence strictly.',
            'Strictly Prohibited: Any form of cheating or external help will lead to disqualification.',
            'Strictly Prohibited: Use of mobile phones or internet is strictly prohibited (if applicable).',
            'Teams must maintain discipline and avoid damaging college property.',
            'Judging Criteria: Based on accuracy of answers, speed of completion, and team coordination.'
        ]
    },
    {
        id: 'd1-instolutions',
        title: 'Instolutions',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Instolutions is a problem-solving event where teams analyze given problem statements and propose practical and innovative solutions. Participants will present their solution before judges.'
        ],
        details: 'Venue: Hall 2',
        icon: <Lightbulb size={24} />,
        color: 'from-cyan-400 to-blue-400',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
        rules: [
            'Number of participants: 2 participants per team',
            'Number of teams per college: Maximum 2 teams',
            'Teams must present their solution clearly within the given time limit on a chart.',
            'Strictly Prohibited: Use of mobile phones or external help is strictly prohibited.'
        ]
    },
    {
        id: 'd1-protofest', // Was Project Expo
        title: 'ProtoFest (Project Expo)',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'ProtoFest is a project exhibition where participants present innovative projects through display, demonstration, and technical evaluation. The event includes a viva session and interaction with judges.'
        ],
        details: 'Venue: SLC',
        icon: <Cpu size={24} />,
        color: 'from-blue-400 to-teal-400',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070',
        rules: [
            'Number of participants: Individual or Team (Max 3)',
            'Number of teams per college: Maximum 3 teams',
            'Participation is open to all domains.',
            'Projects must be original, innovative, and domain-relevant.',
            'A one-page abstract must be submitted before the deadline.',
            'Teams must bring all required hardware and software components.',
            'Working model or prototype is preferred.',
            'Each participant/team will get 5-10 minutes for presentation.'
        ],
        prizes: ['First Prize', 'Second Prize']
    },

    // DAY 1 - NON-TECHNICAL
    {
        id: 'd1-adaptune',
        title: 'Adaptune',
        category: 'Cultural',
        day: 'Day 1',
        description: [
            'Participants must perform a dance to randomly played music selected by the organizers',
            'The performance duration is 2-3 minutes, testing adaptability and creativity'
        ],
        details: 'Venue: Auditorium',
        icon: <Music size={24} />,
        color: 'from-orange-500 to-pink-600',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070',
        rules: [
            'Number of participants per college: Maximum 4 participants',
            'Number of participants: 1 participant per performance',
            'Music will be played continuously and randomly by the organizers.',
            'Music cannot be changed under any circumstance.',
            'Participants must perform according to the random music played.',
            'Props are not allowed unless approved by the organizers.',
            'Dangerous or inappropriate props are prohibited.',
            'Participants must wear decent and appropriate costumes.',
            'Important: Vulgar gestures, offensive moves, or misconduct will lead to disqualification.'
        ]
    },
    {
        id: 'd1-drawing',
        title: 'Drawing',
        category: 'Arts',
        day: 'Day 1',
        description: [
            'Drawing is an individual art competition where participants create artwork based on a topic given on the spot within the allotted time. Participants must produce original artwork using their own materials during the event.'
        ],
        details: 'Venue: Art Block',
        icon: <PenTool size={24} />,
        color: 'from-yellow-500 to-orange-500',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2070',
        rules: [
            'Number of participants: 1 participant (Individual)',
            'Per College: 3-4 participants',
            'Topic will be given on the spot.',
            'Participants must bring their own drawing and stationery materials.',
            'A3/chart paper will be provided by the organizers.',
            'Artwork must be original and created only during the event time.',
            'Strictly Prohibited: No tracing is allowed.',
            'Strictly Prohibited: No printed materials or reference copies are permitted.',
            'Strictly Prohibited: Mobile phones are strictly prohibited.',
            'Sharing of materials between participants is not allowed.',
            'Only one artwork must be submitted per participant.',
            'Warning: Any offensive or inappropriate content will lead to disqualification.'
        ],
        duration: '60 minutes (strictly time-bound)'
    },
    {
        id: 'd1-nailart',
        title: 'Nail Art',
        category: 'Arts',
        day: 'Day 1',
        description: [
            'Nail Art is a creative competition conducted in a single round where participants design nail art on the spot based on given requirements.'
        ],
        details: 'Venue: Hall 3',
        icon: <Palette size={24} />,
        color: 'from-pink-400 to-purple-400',
        image: 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=2070',
        rules: [
            'Number of participants: 2 participants per team',
            'Number of teams per college: Maximum 2 teams',
            'Participants must create nail art on one hand (minimum 3-5 nails) or both hands as specified by organizers.',
            'Designs should include basic nail art techniques, theme-based elements, and creative detailing.',
            'Strictly Prohibited: Pre-painted nails, pre-designed tips, reference images, and mobile phones.',
            'Only nail art materials are allowed.'
        ],
        duration: '45-60 minutes (strictly time-bound)'
    },
    {
        id: 'd1-singing',
        title: 'Singing',
        category: 'Cultural',
        day: 'Day 1',
        description: [
            'Singing is a performance event where participants present solo or group songs within the allotted time. Participants may use instruments or karaoke tracks to enhance their performance.'
        ],
        details: 'Venue: Auditorium',
        icon: <Mic2 size={24} />,
        color: 'from-blue-400 to-purple-500',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070',
        rules: [
            'Number of participants: Solo or Group (max 5)',
            'Per College: Maximum 2 teams',
            'Participants must bring their own instruments or karaoke track if required.',
            'Content Restriction: Songs must not contain vulgar lyrics or content that may offend any religion or community.',
            'Performances must maintain dignity and decorum.',
            'Exceeding the time limit may lead to negative marking or disqualification.',
            'Warning: Any violation of rules will result in immediate disqualification.'
        ],
        duration: 'Maximum 3 minutes',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-corporate',
        title: 'Corporate Walk',
        category: 'Cultural',
        day: 'Day 1',
        description: [
            'Corporate Walk is a themed ramp walk event where teams present corporate formal attire with confidence, poise, and unique style. The performance should reflect the elegance and professionalism of corporate culture.'
        ],
        details: 'Theme: Corporate Formal Attire (Western Wear & Formal)',
        icon: <Shirt size={24} />,
        color: 'from-slate-500 to-gray-600',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070',
        rules: [
            'Number of participants: 7-8 participants per team',
            'Per College: Maximum 1 team',
            'Time limit is 4-6 minutes per team.',
            'Teams are allowed to use only theme-based props.',
            'Props must be safe and should not damage the stage.',
            'Music must be submitted in MP3 format.',
            'Attire must reflect professionalism and strictly follow the theme.',
            'Strictly Prohibited: Vulgarity or inappropriate gestures are strictly prohibited.',
            'No stage rehearsals will be allowed before the event.',
            'Only registered participants are allowed on stage.',
            'Warning: Any misconduct or violation of rules may lead to immediate disqualification.'
        ]
    },
    {
        id: 'd1-facepainting',
        title: 'Face Painting',
        category: 'Arts',
        day: 'Day 1',
        description: [
            'Face Painting is a creative competition conducted in a single round where participants paint live on one model.'
        ],
        details: 'Venue: Hall 4',
        icon: <Palette size={24} />,
        color: 'from-red-500 to-yellow-500',
        image: 'https://images.unsplash.com/photo-1558244243-7f83e079737e?q=80&w=2070',
        rules: [
            'Number of participants: 2 per team (1 artist + 1 model)',
            'Per College: 2 teams',
            'The competition will be conducted in one single round.',
            'Theme will be announced on the spot.',
            'Face painting must be done live on one model during the event.',
            'Strictly Prohibited: Pre-drawn designs, stencils, reference images, and mobile phones.',
            'Warning: Any inappropriate design or violation of rules may lead to disqualification.'
        ],
        duration: '45-60 minutes (strictly time-bound)'
    },
    {
        id: 'd1-rangoli',
        title: 'Rangoli',
        category: 'Arts',
        day: 'Day 1',
        description: [
            'Rangoli is a creative team event where participants design rangoli based on a theme announced on the spot within the allotted time.'
        ],
        details: 'Venue: Corridor',
        icon: <Palette size={24} />,
        color: 'from-orange-500 to-red-500',
        image: 'https://images.unsplash.com/photo-1601306385499-a8647c20c9db?q=80&w=2070',
        rules: [
            'Number of participants: Maximum 4 per team',
            'Number of teams per college: Maximum 2 teams',
            'The competition will be conducted in one single round.',
            'Theme will be announced on the spot.',
            'Participants must bring their own required materials.',
            'Rangoli must be created only during the event time.',
            'Strictly Prohibited: Use of mobile phones, printed materials, or reference images is strictly prohibited.',
            'Materials allowed: rangoli powder, flower petals, colored sand, rice/pulses, eco-friendly decorative items.',
            'Designs must be decent and suitable for a college environment.',
            'Warning: Any violation of rules may lead to disqualification.'
        ],
        duration: '2 hours (strictly time-bound)'
    },
    {
        id: 'd1-standup',
        title: 'Stand-Up Comedy',
        category: 'Fun',
        day: 'Day 1',
        description: [
            'Stand-Up Comedy is an individual performance event where participants present original comedy content live on stage.'
        ],
        details: 'Venue: Stage',
        icon: <Mic2 size={24} />,
        color: 'from-yellow-400 to-amber-500',
        image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=2070',
        rules: [
            'Number of participants: 1 participant (Individual)',
            'Number of participants per college: Maximum 2 members',
            'Content must be original and performed live on stage.',
            'Language must be decent, respectful, and college-appropriate.',
            'Strictly Prohibited: Offensive, abusive, political, or religious content is strictly prohibited.',
            'Strictly Prohibited: Participants are not allowed to use scripts or mobile phones on stage.',
            'Warning: Any vulgarity or inappropriate gestures may lead to immediate disqualification.'
        ],
        duration: '3-5 minutes (strictly time-bound)'
    },

    // DAY 2 EVENTS
    {
        id: 'd2-auction',
        title: 'APL Auction',
        category: 'Fun',
        day: 'Day 2',
        description: [
            'Round 1 - APL Quiz\nDuration: 30 minutes. Quiz based on IPL and cricket knowledge. Top 10 teams qualify for Round 2.',
            'Round 2 - APL Auction\nDuration: Minimum 2 hours. Teams bid for players to build their squad.'
        ],
        details: 'Venue: Seminar Hall',
        icon: <Gavel size={24} />,
        color: 'from-yellow-500 to-amber-600',
        image: 'https://images.unsplash.com/photo-1577416412292-807187673842?q=80&w=2070',
        rules: [
            'Number of participants: 2-4 members per team',
            'Teams per College: 3 teams',
            'Each team gets fixed virtual points (set by organizers).',
            'Players will have base points.',
            'Teams must bid according to auctioneer\'s instructions.',
            'Once sold, the bid is final (no changes allowed).',
            'Teams must properly record all purchased players.'
        ],
        note: 'Note: Only 2 members per team can participate in quiz & auction'
    },
    {
        id: 'd2-boxcricket',
        title: 'Box Cricket',
        category: 'Sports',
        day: 'Day 2',
        description: [
            'Matches will be conducted on knockout basis. Duration: 3 to 4 overs per team. Fixtures will be decided based on the number of entries.'
        ],
        details: 'Venue: Sports Complex',
        icon: <Activity size={24} />,
        color: 'from-orange-500 to-red-600',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2070',
        rules: [
            'Number of participants: 4 members per team',
            'Teams per College: 2 teams',
            'Hitting the ball directly out of the boundary line will be considered as out.',
            'Ball must be released/rolled under the hip level by the bowler.',
            'One pitch, one hand is allowed.'
        ]
    },
    {
        id: 'd2-dance',
        title: 'Dance',
        category: 'Cultural',
        day: 'Day 2',
        description: [
            'Teams can perform any dance style (Classical, Folk, Western, Fusion, etc.) while maintaining coordination, creativity, and stage presence.'
        ],
        details: 'Venue: Main Stage',
        icon: <Music size={24} />,
        color: 'from-indigo-500 to-purple-600',
        image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070',
        rules: [
            'Number of participants: Maximum 8 per team',
            'Teams per College: 2 teams',
            'Performances must be college-appropriate.',
            'Dress Code: Participants must wear decent, modest, and appropriate costumes. Revealing costumes are strictly prohibited.',
            'Strictly Prohibited: Vulgar activities, explicit gestures, comments, or movements are strictly prohibited.',
            'Warning: Teams will be disqualified if any vulgarity is found in the performance or music.',
            'Strictly Prohibited: Songs must not contain obscene, defamatory, vulgar, or objectionable content.',
            'Warning: Only decent songs are allowed. Any vulgar music will lead to immediate disqualification.',
            'Audio files must be in MP3 format (max 50 MB) via pen drive.',
            'Backup copy must be kept on a mobile phone or another pen drive.'
        ],
        note: '(Solo and Group allowed)',
        duration: '4-5 minutes (strictly time-bound)'
    },
    {
        id: 'd2-fashionshow',
        title: 'Fashion Show',
        category: 'Cultural',
        day: 'Day 2',
        description: [
            'Theme: All costumes and performances must strictly follow the "Fairy Tale" theme.',
            'Performance Time: Each team gets 5-8 minutes, including setup and exit. A warning bell will ring 1 minute before time ends.'
        ],
        details: 'Venue: Main Stage',
        icon: <Shirt size={24} />,
        color: 'from-pink-500 to-violet-600',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2070',
        rules: [
            'Number of participants: 5-10 members per team',
            'Teams per College: 2 teams',
            'Time limit must be strictly followed; exceeding time may lead to point deduction.',
            'Music: Background music must be submitted in MP3 format prior to the event.',
            'Conduct: Vulgarity or inappropriate gestures are strictly prohibited.',
            'Costumes and Accessories: Teams must bring their own costumes and accessories.',
            'Warning: Any inappropriate content will lead to disqualification.'
        ]
    },
    {
        id: 'd2-freefire',
        title: 'Free Fire',
        category: 'Gaming',
        day: 'Day 2',
        description: [
            'Specific team rules will be announced before the match.',
            'Game Modes: Matches will be played in Battle Royale (BR) mode and Clash Squad mode.',
            'Rounds: There will be 2 rounds of Battle Royale.',
            'Fair Play: Fair play is mandatory. Unsportsmanlike behaviour may lead to disqualification.'
        ],
        details: 'Venue: E-Sports Arena',
        icon: <Gamepad2 size={24} />,
        color: 'from-orange-500 to-red-500',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070',
        rules: [
            'Number of participants: 4 members per team',
            'Teams per College: 2-3 teams (depending on slots)',
            'Participants must follow all game rules and organizer instructions.',
            'Strictly Prohibited: Cheating or exploiting glitches is strictly prohibited.',
            'Final Decision: Decisions by the game organizers/judges are final.',
            'Teams must report any technical issues immediately to organizers.'
        ]
    },
    {
        id: 'd2-instrumentals',
        title: 'Instrumentals',
        category: 'Cultural',
        day: 'Day 2',
        description: [
            'Instrumentals is a platform for musicians to perform a melody using any musical instrument without vocals. Participants are expected to mix tunes and showcase musical skills.'
        ],
        details: 'Venue: Auditorium',
        icon: <Music size={24} />,
        color: 'from-teal-500 to-emerald-500',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070',
        rules: [
            'Number of participants: Solo or group (Max 6)',
            'Teams per College: 2 teams',
            'Restriction: Use of pre-recorded tracks or backing music is not allowed unless approved by organizers.',
            'Instruments: Participants must bring their own instruments.'
        ],
        duration: 'Time Limit: 3-5 minutes on stage'
    },
    {
        id: 'd2-mime',
        title: 'Mime',
        category: 'Arts',
        day: 'Day 2',
        description: [
            'MIME is a silent performance event where participants convey a story, message, or social theme through facial expressions, body language, and gestures without using any spoken words or sounds.'
        ],
        details: 'Venue: Auditorium',
        icon: <Smile size={24} />,
        color: 'from-gray-500 to-slate-600',
        image: 'https://images.unsplash.com/photo-1460661631160-a562523081ad?q=80&w=2070',
        rules: [
            'Number of participants: 5-7 members per team',
            'Teams per College: 2 teams',
            'Time limit must be strictly followed; exceeding time may lead to point deduction.',
            'Performances must be safe and suitable for all audiences.',
            'Warning: Any inappropriate content may lead to disqualification.',
            'Music: Submitted in CD or Pen Drive at least 1 hour before performance.',
            'Materials: Participants must bring their own materials and accessories.',
            'Dress Code: Proper dress code suitable for performance.'
        ],
        duration: '5 minutes per performance'
    },
    {
        id: 'd2-roborace',
        title: 'Robo Race',
        category: 'Technical',
        day: 'Day 2',
        description: [
            'Robo Race is a technical competition where teams design and operate a manually controlled robot to navigate through a predefined track consisting of obstacles, turns, and challenges within the minimum time. The team completing the track in the shortest time without violations will be declared the winner.'
        ],
        details: 'Venue: Open Ground',
        icon: <Bot size={24} />,
        color: 'from-blue-500 to-cyan-500',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070',
        rules: [
            'Number of participants: Individual participants',
            'Teams per College: 2 teams per college',
            'The event will be conducted in multiple rounds (Prelims/Finals, if required).',
            'Robots must be manually controlled (wired/wireless).',
            'The robot must fit within the specified dimensions (as announced by organizers).',
            'Only one operator is allowed to control the robot during the race.',
            'Warning: Touching the robot during the run will result in penalty or disqualification.',
            'Strictly Prohibited: Damaging the track or other robots will lead to immediate disqualification.',
            'Teams must bring their own robot and required accessories (battery, controller, tools, etc.).'
        ]
    },
    {
        id: 'd2-squidgame',
        title: 'Squid Game',
        category: 'Fun',
        day: 'Day 2',
        description: [
            'Squid Game is a fun team-based challenge event. Teams compete in multiple mini-rounds that test agility, teamwork, strategy, and presence of mind. Each round eliminates teams based on performance until a winner is declared.'
        ],
        details: 'Venue: Open Ground',
        icon: <Skull size={24} />,
        color: 'from-teal-600 to-pink-600',
        image: 'https://images.unsplash.com/photo-1635334200424-696232236d39?q=80&w=2070',
        rules: [
            'Number of participants: 10 members per team',
            'Teams per College: Max of 2 teams',
            'Each round will have different tasks/challenges.',
            'Teams must follow the instructions given before each round.',
            'Warning: Any unfair practice or misconduct will lead to disqualification.',
            'Safety: Basic safety rules must be strictly followed during physical activities.',
            'Note: The organizing committee holds the right to modify rounds if necessary.'
        ]
    },
    {
        id: 'd2-animequiz',
        title: 'Anime Quiz',
        category: 'Quiz',
        day: 'Day 2',
        description: [
            'The quiz will be conducted in multiple rounds. Questions will cover a wide range of anime genres. The team scoring the highest points will qualify for Round 2.'
        ],
        details: 'Venue: Room 2',
        icon: <HelpCircle size={24} />,
        color: 'from-pink-500 to-rose-500',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070',
        rules: [
            'Number of participants: 2-3 members per team',
            'Teams per College: Maximum 5 teams',
            'Teams must answer within the given time limit.',
            'Warning: Cheating or use of unfair means will lead to immediate disqualification.',
            'Strictly Prohibited: Use of mobile phones or external help is strictly prohibited.'
        ]
    },
    {
        id: 'd2-channelsurfing',
        title: 'Channel Surfing',
        category: 'Fun',
        day: 'Day 2',
        description: [
            'Participants must act as if the audience is changing TV channels. Every few seconds the judge says a channel -> the team must instantly switch and perform that genre. Teams perform multiple short skits representing different TV channels (news, serial, sports, ads, cartoon etc.)'
        ],
        details: 'Venue: Stage',
        icon: <Radio size={24} />,
        color: 'from-blue-400 to-teal-400',
        image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070',
        rules: [
            'Number of participants: 4-6 members per team',
            'Teams per College: 3 Teams',
            'Acts must be clean and college-appropriate.',
            'Strictly Prohibited: Use of vulgar or inappropriate content is strictly prohibited.',
            'Allowed: Use of props from surroundings is allowed.',
            'Teams may bring their own materials such as charts and stationery items.'
        ],
        duration: 'Act time 5 minutes (Same for Finals)'
    },
    {
        id: 'd2-englishdebate',
        title: 'English Debate',
        category: 'Arts',
        day: 'Day 2',
        description: [
            'This is a debate event where each team comprises two members. One member will speak in favor of the given topic, while the other member will speak against it. The topic will be announced on the spot.'
        ],
        details: 'Venue: Hall 2',
        icon: <Book size={24} />,
        color: 'from-indigo-400 to-blue-400',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070',
        rules: [
            'Number of participants: 2 participants per team',
            'Per College: Maximum 6 teams',
            'Each speaker will be given 5 minutes to present their arguments.',
            'The motion mover will get 1 minute of extra time for winding up.',
            'The topic will be announced on the spot.',
            'Participants must adhere strictly to the allotted time.'
        ],
        duration: '15 minutes per team'
    },
    {
        id: 'd2-essaywriting',
        title: 'Essay Writing',
        category: 'Arts',
        day: 'Day 2',
        description: [
            'This is an individual writing competition where participants compose a piece based on the topic announced on the spot. The event evaluates creativity, clarity of thought, language proficiency, and originality within the prescribed word limit.'
        ],
        details: 'Venue: Hall 2',
        icon: <PenTool size={24} />,
        color: 'from-indigo-400 to-blue-400',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070',
        rules: [
            'Number of participants: 1 participant (Individual)',
            'Per College: Maximum 5 participants',
            'The topic will be given on the spot.',
            'Word Limit: 200-400 words',
            'Strictly Prohibited: Use of electronic devices during the competition is strictly prohibited.',
            'Participants must bring their own stationery items.',
            'Note: Entries exceeding the word limit may be penalized.'
        ],
        duration: '45 minutes'
    },
    {
        id: 'd2-englishpoetry',
        title: 'English Poetry',
        category: 'Arts',
        day: 'Day 2',
        description: [
            'This is an individual competition where participants create content based on the theme announced on the spot within the given time limit. The event evaluates creativity, originality, and clarity of expression.'
        ],
        details: 'Venue: Hall 2',
        icon: <Book size={24} />,
        color: 'from-indigo-400 to-blue-400',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070',
        rules: [
            'Number of participants: 1 participant (Individual)',
            'Per College: Maximum 5 participants',
            'The theme will be announced on the spot.',
            'Participants must bring their own stationery items.',
            'Strictly Prohibited: Use of electronic devices during the competition is strictly prohibited.',
            'Warning: Any form of plagiarism will lead to immediate disqualification.'
        ],
        duration: '30 minutes'
    },
    {
        id: 'd2-familyfeud',
        title: 'Family Feud',
        category: 'Fun',
        day: 'Day 2',
        description: [
            'The Family Feud event starts with two teams introducing themselves and a quick buzzer test. For each survey question, one member from both teams competes to gain control; the winning team chooses to play or pass and guesses popular answers to score points. After three wrong attempts the other team gets a steal chance, and after several rounds the team with the highest total score wins.'
        ],
        details: 'Venue: Auditorium',
        icon: <Users size={24} />,
        color: 'from-green-500 to-teal-500',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070',
        rules: [
            'Number of participants: 4 members per team',
            'Teams per College: 2 teams',
            'Only the player at the front can give answers during face-off.',
            'Three strikes ends the turn and gives the other team a chance to steal points.',
            'Answers not on the board count as Try Again (no points).',
            'Teams must keep track of points accurately using the Score button.'
        ]
    },
    {
        id: 'd2-guesslyrics',
        title: 'Guess the Lyrics',
        category: 'Fun',
        day: 'Day 2',
        description: [
            'Number of Rounds: 3 rounds',
            'Objective: Participants must guess the missing lyrics in all rounds.',
            'Slides/Songs: Each round will have 10 slides, i.e., 10 songs displayed.'
        ],
        details: 'Venue: Room 3',
        icon: <Music size={24} />,
        color: 'from-cyan-400 to-blue-500',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070',
        rules: [
            'Number of participants: 2 members per team',
            'Teams per College: 3 teams',
            'Teams must answer only when prompted.',
            'Scoring: Correct answer - 2 points, Pass question - 1 point.',
            'Winning: Based on total points scored across all rounds.',
            'Final: Points are final as per organizer\'s scoring.',
            'Participants must follow event decorum; no external help allowed.'
        ]
    },
    {
        id: 'd2-mehandi',
        title: 'Mehndi',
        category: 'Arts',
        day: 'Day 2',
        description: [
            'Design Requirements: Freehand mehndi design on one full hand or half hand. Theme announced on the spot.',
            'Designs include basic patterns, theme-based elements, creative detailing.'
        ],
        details: 'Venue: Corridor',
        icon: <Palette size={24} />,
        color: 'from-orange-400 to-red-400',
        image: 'https://images.unsplash.com/photo-1626084880227-8051608677c7?q=80&w=2070',
        rules: [
            'Number of participants: Individual participants',
            'Per College: 3 participants',
            'Strictly Prohibited: Use of reference images, mobile phones, stencils, stamps, or pre-drawn designs is prohibited.',
            'Designs must be original and completed within the time limit.',
            'Materials: Only mehndi cones are allowed.',
            'Participants must maintain event decorum.'
        ],
        duration: '45-60 minutes'
    },
    {
        id: 'd2-pitchpaper',
        title: 'Pitch Ur Paper (Paper Presentation)',
        category: 'Technical',
        day: 'Day 2',
        description: [
            'Paper Presentation is a technical event where participants present their research ideas, innovative concepts, or technical topics using visual aids (PPT). The presentation should demonstrate clarity, originality, technical knowledge, and effective communication skills.'
        ],
        details: 'Venue: CSE Lab',
        icon: <FileText size={24} />,
        color: 'from-indigo-400 to-cyan-400',
        image: 'https://images.unsplash.com/photo-1544531835-3a99008aaaae?q=80&w=2070',
        rules: [
            'Number of participants: Maximum 4 per team',
            'Teams per College: Max of 3 teams',
            'The topic of the papers can be chosen on your own. The presentation should focus on one topic.',
            'The abstract should not exceed more than 250 words, and the Paper should not exceed 15 pages.',
            'Kindly bring your PowerPoint presentation on a CD or in a pen-drive.',
            'Soft copies should be submitted in PDF format.',
            'Email: Kindly mail your abstract, paper and ppt to enthral@alphagroup.edu',
            'The teams will get 10 minutes for presentation followed by a Q&A session.',
            'Participants from different institutions can be part of the same team. However, one participant may not be a part of multiple teams for the same event.'
        ]
    },
    {
        id: 'd2-sharktank', // Was Business Thoughts
        title: 'Shark Tank (Idea Pitching)',
        category: 'Technical',
        day: 'Day 2',
        description: [
            'Idea Pitching is a competitive event where participants present innovative ideas or creative solutions to real-world problems within a limited time. Teams must clearly explain the problem statement, proposed solution, uniqueness, feasibility, and potential impact of their idea.'
        ],
        details: 'Venue: Auditorium',
        icon: <Trophy size={24} />,
        color: 'from-blue-600 to-cyan-600',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070',
        rules: [
            'Number of participants: Min 1, Max 3 per team',
            'Per College: Maximum 2 teams',
            'The competition will be conducted in a single round.',
            'Ideas are presented on Lecture based.',
            'Strictly Prohibited: Internet usage is strictly prohibited.',
            'Participants must be prepared to answer judges\' questions.',
            'Strictly Prohibited: Plagiarism is strictly prohibited.'
        ],
        duration: 'Time Limit: 3-5 min pitch + 2-3 min Q&A'
    },

    // ONLINE EVENTS
    {
        id: 'online-chathuranga',
        title: 'Chathuranga (Chess)',
        category: 'Gaming',
        day: 'Online',
        description: [
            'The event will be conducted online on the specified platform. Participants must join on time and ensure a stable internet connection.'
        ],
        details: 'Online',
        icon: <Swords size={24} />,
        color: 'from-slate-400 to-gray-500',
        image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2070',
        rules: [
            'Number of participants: Min 1, Max 3 per team',
            'Per College: Maximum 2 teams',
            'Standard chess rules will be followed.',
            'Matches may be timed as per the platform or organizer\'s instructions.',
            'Strictly Prohibited: Use of chess engines, bots, or any external help is strictly prohibited.',
            'Fair Play: Participants must play honestly and fairly.'
        ]
    },
    {
        id: 'online-reels',
        title: 'Reels Contest',
        category: 'Fun',
        day: 'Online',
        description: [
            'Unleash your creativity and capture the vibe of ENTHRAL',
            'Create engaging and entertaining reels that showcase the spirit, fun, and energy of the event.',
            'Participants get time to record and edit their reels.'
        ],
        details: 'Online Submission',
        icon: <Video size={24} />,
        color: 'from-purple-500 to-pink-500',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2070',
        rules: [
            'Number of participants: Min 1, Max 2 per team',
            'Per College: Maximum 2 teams',
            'Each team shall comprise 1-2 members.',
            'Reels must strictly follow the given theme.',
            'Format: Videos should be submitted in .mp4 or .mov format.',
            'The reel must have clear audio and good video quality with proper lighting.',
            'Warning: Any inappropriate or irrelevant content will lead to disqualification.'
        ],
        duration: 'Editing Time : 60 mins.',
        prizes: ['First Prize', 'Second Prize']
    }
];
