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
            'Round 1: MCQ logical reasoning questions (20–30 min). Top scorers advance to Round 2.',
            'Round 2: Complex riddles, number puzzles, pattern-based challenges.',
        ],
        details: 'Venue: Seminar Hall',
        icon: <BrainCircuit size={24} />,
        color: 'from-orange-500 to-red-500',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070',
        rules: [
            'Number of participants per college: Maximum 4 members',
            'Number of participants: 1 participant (Individual)',
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
        description: ['Find Errors', 'Individual', 'Points Based'],
        details: 'Venue: Room 1',
        icon: <Bug size={24} />,
        color: 'from-red-500 to-pink-600',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070',
        rules: [
            'Number of participants per college:4',
            'Number of participants:1',
            'Participants will be evaluated individually.',
            'For Preliminary Round: A set of 5 Questions will be given to each participant',
            'For rectifying each error, 2 points will be awarded',
            'If the participant got output, bonus points will be awarded (4 points)',
            'Based on the points, the participants will be selected for the final round',
            'The final round, the rules will be the same as the preliminary round.'
        ],
        duration: 'Preliminary round: 15 min + final round: 15min',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-hackathon',
        title: 'Hackathon',
        category: 'Technical',
        day: 'Day 1',
        description: ['Software/App/Web', '1-2 Hours', 'Team 1-4'],
        details: 'Venue: IT Lab',
        icon: <Terminal size={24} />,
        color: 'from-cyan-500 to-blue-500',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070',
        rules: [
            'Number of Teams per college : 2 .',
            'Number of participants per team : 1-4 members.',
            'The hackathon topic will be announced on the spot. It can include areas such as software development, app building, website design, or any relevant technical challenge.',
            'Project Submission: Teams must submit their working project (code, app, website, etc.) by the specified deadline.',
            'Presentation: Teams must present their solutions in 5–10 minutes at the end of the event.',
            'Students recommended to bring their own laptops'
        ],
        duration: '1 to 2 hours',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-pixelcraft', // Was Poster Making
        title: 'Pixel Craft',
        category: 'Technical',
        day: 'Day 1',
        description: ['Adobe PS/PowerPoint', 'Team of 2', 'On Spot'],
        details: 'Venue: Design Lab',
        icon: <Image size={24} />,
        color: 'from-purple-500 to-cyan-500',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070',
        rules: [
            'Number of teams per college: 4',
            'Number of participants per team: 2',
            '15 minutes to search content on the internet.',
            '30 minutes to prepare poster.',
            '5 minutes to explain the poster.',
            'Plagiarism of any type will lead to disqualification.',
            'Poster size should not exceed A4 size.',
            'The poster can be made by using [Adobe PS] and [Power Point].'
        ],
        duration: '50 mins',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-prompting',
        title: 'Prompting War',
        category: 'Technical',
        day: 'Day 1',
        description: ['AI Prompting', 'Image/Text Gen', 'Creativity'],
        details: 'Venue: Lab',
        icon: <Bot size={24} />,
        color: 'from-emerald-500 to-green-500',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070',
        rules: [
            'Participants must use provided AI tools.',
            'Prompts must be original.',
            'Judged on accuracy and creativity of result.'
        ]
    },
    {
        id: 'd1-bioconnect',
        title: 'Bio-Connect',
        category: 'Technical',
        day: 'Day 1',
        description: [
            'Bio-Connect is a bio-medical themed event where teams will be shown images related to the bio-medical domain.',
            'Participants must analyze the images, identify the concept, and provide the correct answer or solution.',
            'The competition will be conducted in multiple rounds depending on the number of participating teams.'
        ],
        details: 'Venue: Hall 1',
        icon: <Activity size={24} />,
        color: 'from-green-500 to-teal-500',
        image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070',
        rules: [
            'Number of participants per team: 2-3 participants per team',
            'Number of teams per college: Maximum 2 teams',
            'Each team will be given 30–60 seconds per question (as decided by the organizers).',
            'Team discussion is allowed only within the allotted time.',
            'Strictly Prohibited: Use of mobile phones or any external help is strictly prohibited.'
        ]
    },
    {
        id: 'd1-coding',
        title: 'Coding Contest',
        category: 'Technical',
        day: 'Day 1',
        description: ['Competitive', 'Logic', 'Algorithms'],
        details: 'Venue: CSE Lab',
        icon: <Code2 size={24} />,
        color: 'from-blue-600 to-indigo-600',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070',
        rules: [
            'Individual or Team participation.',
            'Solve algorithmic problems.',
            'Allowed languages: C, C++, Java, Python.'
        ]
    },
    {
        id: 'd1-electro',
        title: 'Electro Hunt',
        category: 'Technical',
        day: 'Day 1',
        description: ['Circuits', 'Components', 'Hunt'],
        details: 'Venue: Electronics Lab',
        icon: <Cpu size={24} />,
        color: 'from-yellow-500 to-amber-500',
        image: 'https://images.unsplash.com/photo-1555664424-778a69032334?q=80&w=2070',
        rules: [
            'Identify electronic components.',
            'Solve circuit puzzles.',
            'Fastest team wins.'
        ]
    },
    {
        id: 'd1-instolutions',
        title: 'Instolutions',
        category: 'Technical',
        day: 'Day 1',
        description: ['Instrumentation', 'Solutions', 'Innovation'],
        details: 'Venue: Hall 2',
        icon: <Lightbulb size={24} />,
        color: 'from-cyan-400 to-blue-400',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
        rules: [
            'Propose solutions to instrumentation problems.',
            'Innovative ideas.',
            'Presentation.'
        ]
    },
    {
        id: 'd1-protofest', // Was Project Expo
        title: 'ProtoFest',
        category: 'Technical',
        day: 'Day 1',
        description: ['Working Models', 'All Domains', 'Innovation'],
        details: 'Venue: SLC',
        icon: <Cpu size={24} />,
        color: 'from-blue-400 to-teal-400',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070',
        rules: [
            'Any student from any discipline can submit their ideas.',
            'No. of participants per team: Maximum 3',
            'The competition is open to all students from various institutes.',
            'A team member can participate in only one project presentation.',
            'Multiple project ideas can be submitted, and the best ones will be filtered out.',
            'Teams will be given a space to set up their model/design at the venue.',
            'Participants should bring all their requirements to execute their project.'
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
        description: ['On Spot Topic', 'Stationery Required', 'Individual'],
        details: 'Venue: Art Block',
        icon: <PenTool size={24} />,
        color: 'from-yellow-500 to-orange-500',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2070',
        rules: [
            'Number of participants per college: 4',
            'Number of participants:1',
            'Participants should bring their stationery items.',
            'The topic will be given on the spot',
            'Drawing sheets or charts will be provided.'
        ],
        duration: '45 min'
    },
    {
        id: 'd1-nailart',
        title: 'Nail Art',
        category: 'Arts',
        day: 'Day 1',
        description: ['Creative', 'Design', 'Style'],
        details: 'Venue: Hall 3',
        icon: <Palette size={24} />,
        color: 'from-pink-400 to-purple-400',
        image: 'https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=2070',
        rules: [
            'Bring your own materials.',
            'Time limit: 30 mins.',
            'Creative designs.'
        ]
    },
    {
        id: 'd1-singing',
        title: 'Singing',
        category: 'Cultural',
        day: 'Day 1',
        description: ['Solo/Group', 'Carnatic/Light', 'No Vulgarity'],
        details: 'Venue: Auditorium',
        icon: <Mic2 size={24} />,
        color: 'from-blue-400 to-purple-500',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070',
        rules: [
            'Number of teams per college: 4',
            'Solo performance and group performance are allowed with the maximum participants per team of 5(including instrument players)',
            'Participants must bring essential instruments/Karaoke .',
            'Type of song (Carnatic or Light Music) to be mentioned at the time of registration.',
            'The song chosen must not contain any vulgarity or offend any religion or community. Violation of this results in disqualification.'
        ],
        duration: '3 minutes',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-corporate',
        title: 'Corporate Walk',
        category: 'Cultural',
        day: 'Day 1',
        description: ['Formal', 'Style', 'Walk'],
        details: 'Venue: Stage',
        icon: <Users size={24} />,
        color: 'from-slate-500 to-gray-600',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070',
        rules: [
            'Formal attire required.',
            'Judged on attitude and style.',
            'Group participation.'
        ]
    },
    {
        id: 'd1-facepainting',
        title: 'Face Painting',
        category: 'Arts',
        day: 'Day 1',
        description: ['Colors', 'Creative', 'Theme'],
        details: 'Venue: Hall 4',
        icon: <Palette size={24} />,
        color: 'from-red-500 to-yellow-500',
        image: 'https://images.unsplash.com/photo-1558244243-7f83e079737e?q=80&w=2070',
        rules: [
            'Bring your own paints - skin safe only.',
            'Theme defined on spot.',
            'Time limit 1 hour.'
        ]
    },
    {
        id: 'd1-rangoli',
        title: 'Rangoli',
        category: 'Arts',
        day: 'Day 1',
        description: ['No Theme', 'Colors Only', 'Team of 4'],
        details: 'Venue: Corridor',
        icon: <Palette size={24} />,
        color: 'from-orange-500 to-red-500',
        image: 'https://images.unsplash.com/photo-1601306385499-a8647c20c9db?q=80&w=2070',
        rules: [
            'Number of teams per college: 4',
            'Number of participants per team: 4',
            'There will be only one round of competition',
            'There is no theme for rangoli',
            'Teams will be responsible for arrangements of the material required to prepare rangoli',
            'Only rangoli colors can be used for making rangoli',
            'The participants will not be allowed to refer any printed material, mobile etc....for preparing rangoli'
        ],
        duration: '2 hours'
    },
    {
        id: 'd1-standup',
        title: 'Stand-Up Comedy',
        category: 'Fun',
        day: 'Day 1',
        description: ['Humor', 'Solo', 'Entertainment'],
        details: 'Venue: Stage',
        icon: <Mic2 size={24} />,
        color: 'from-yellow-400 to-amber-500',
        image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=2070',
        rules: [
            'No offensive content.',
            'Time limit 5 minutes.',
            'Original content only.'
        ]
    },

    // DAY 2 EVENTS
    {
        id: 'd2-auction',
        title: 'APL Auction',
        category: 'Fun',
        day: 'Day 2',
        description: ['IPL Quiz', 'Auction', 'Player Ratings'],
        details: 'Venue: Seminar Hall',
        icon: <Gavel size={24} />,
        color: 'from-yellow-500 to-amber-600',
        image: 'https://images.unsplash.com/photo-1577416412292-807187673842?q=80&w=2070',
        rules: [
            'Number of participants per team: 2-4',
            'Number of teams per college: 3',
            'Two rounds: Round 1- IPL Quiz, round 2- Auction (Top 10 Teams from Quiz)',
            'Judgment based on players ratings',
            'Phones/Laptops are not allowed during quiz and auction (Only 2 members per team can participate)',
            'Participants are requested to bring their own individual pens to note down the players they buy.'
        ],
        duration: 'For quiz 30 mins, auction (Min 2 hrs.)'
    },
    {
        id: 'd2-boxcricket',
        title: 'Box Cricket',
        category: 'Sports',
        day: 'Day 2',
        description: ['Knockout', '3 Overs', 'Team of 4'],
        details: 'Venue: Sports Complex',
        icon: <Activity size={24} />,
        color: 'from-orange-500 to-red-600',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2070',
        rules: [
            'Number of teams per college: 2',
            'Number of participants per team: 4',
            'Spot registration is mandatory.',
            'Match will be conducted on knockout basis',
            'Fixture will be done based on the number of entries',
            'Hitting the ball directly out of boundary line will be considered as out',
            'Ball must be released /rolled under the hip level of the bowler',
            'One pitch one hand is allowed'
        ],
        duration: '3 overs per team'
    },
    {
        id: 'd2-dance',
        title: 'Dance',
        category: 'Cultural',
        day: 'Day 2',
        description: ['Solo/Group', 'Decent Songs', 'Choreography'],
        details: 'Venue: Main Stage',
        icon: <Music size={24} />,
        color: 'from-indigo-500 to-purple-600',
        image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070',
        rules: [
            'Number of teams per college: 5',
            'Number of participants per team: 1-8 members',
            'Dress code: Decent dressing & modest',
            'The team will be disqualified if the performance contains vulgar activities or vulgar music',
            'The music/song should not contain any obscene, defamatory or other objectionable content, and no revealing costumes will be permitted.',
            'The participants are requested to bring audio files in MP3 format (max 50 MB) in the form of a pendrive or CD.'
        ],
        duration: '4 - 5 mins per team'
    },
    {
        id: 'd2-fashionshow',
        title: 'Fashion Show',
        category: 'Cultural',
        day: 'Day 2',
        description: ['Ramp Walk', 'Theme', 'Style'],
        details: 'Venue: Main Stage',
        icon: <Shirt size={24} />,
        color: 'from-pink-500 to-violet-600',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2070',
        rules: [
            'Team participation.',
            'Theme should be followed.',
            'Modest attire required.'
        ]
    },
    {
        id: 'd2-freefire',
        title: 'Free Fire',
        category: 'Gaming',
        day: 'Day 2',
        description: ['BR-Mode', 'Clash Squad', 'Squad'],
        details: 'Venue: E-Sports Arena',
        icon: <Gamepad2 size={24} />,
        color: 'from-orange-500 to-red-500',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070',
        rules: [
            'Number of teams per college: 4',
            'Number of participants per team: 4',
            'The match will be BR-Mode and Clash Squad.',
            'There will be 2 rounds of Battle Royale.',
            'Round-1 includes BR-Mode and Round-2 will be Clash Squad.',
            'Participants and their teams will be disqualified if they use foul words and vulgar actions'
        ]
    },
    {
        id: 'd2-instrumentals',
        title: 'Instrumentals',
        category: 'Cultural',
        day: 'Day 2',
        description: ['Solo/Group', 'Music', 'Talent'],
        details: 'Venue: Auditorium',
        icon: <Music size={24} />,
        color: 'from-teal-500 to-emerald-500',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070',
        rules: [
            'Bring your own instruments.',
            'Time limit: 4 mins.',
            'No backing tracks allowed.'
        ]
    },
    {
        id: 'd2-mime',
        title: 'Mime',
        category: 'Arts',
        day: 'Day 2',
        description: ['Silent Act', 'Theme Choice', 'Group'],
        details: 'Venue: Auditorium',
        icon: <Smile size={24} />,
        color: 'from-gray-500 to-slate-600',
        image: 'https://images.unsplash.com/photo-1460661631160-a562523081ad?q=80&w=2070',
        rules: [
            'Number of teams per college: 2',
            'Number of participants per team: 7',
            'Theme: Participant’s choice',
            'Music should be submitted in a CD’s or Pen drive format at least an hour before the performance.',
            'Participants should bring their required materials and accessories.',
            'Participants should represent themselves in a proper dress code'
        ],
        duration: '5 minutes'
    },
    {
        id: 'd2-roborace',
        title: 'Robo Race',
        category: 'Technical',
        day: 'Day 2',
        description: ['Robotics', 'Speed', 'Obstacles'],
        details: 'Venue: Open Ground',
        icon: <Bot size={24} />,
        color: 'from-blue-500 to-cyan-500',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070',
        rules: [
            'Robot must cover the track in minimum time.',
            'Obstacles included.',
            'Max dimensions apply.'
        ]
    },
    {
        id: 'd2-squidgame',
        title: 'Squid Game',
        category: 'Fun',
        day: 'Day 2',
        description: ['Red Light Green Light', 'Tug of War', 'Marbles', 'Glass Bridge'],
        details: 'Venue: Open Ground',
        icon: <Skull size={24} />,
        color: 'from-teal-600 to-pink-600',
        image: 'https://images.unsplash.com/photo-1635334200424-696232236d39?q=80&w=2070',
        rules: [
            'Number of teams per college: 2',
            'Number of participants per team: 10',
            'Round 1: Red light, green light (Moving when doll faces away).',
            'Round 2: Tug of war (Team vs Team).',
            'Round 3: Marbles (Even-Odd Guessing).',
            'Round 4: Glass bridge (Survivors only).'
        ],
        duration: '25 mins'
    },
    {
        id: 'd2-animequiz',
        title: 'Anime Quiz',
        category: 'Quiz',
        day: 'Day 2',
        description: ['Anime Genres', 'Team of 3', 'Points Based'],
        details: 'Venue: Room 2',
        icon: <HelpCircle size={24} />,
        color: 'from-pink-500 to-rose-500',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070',
        rules: [
            'Number of participants per team: 3',
            'Number of teams per college: 4-5',
            'The team with more points will move forward to the next level',
            'Questions will be asked from nearly all genres of anime.'
        ]
    },
    {
        id: 'd2-channelsurfing',
        title: 'Channel Surfing',
        category: 'Fun',
        day: 'Day 2',
        description: ['Improv', 'TV Channels', 'Comedy'],
        details: 'Venue: Stage',
        icon: <Radio size={24} />,
        color: 'from-blue-400 to-teal-400',
        image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070',
        rules: [
            'Number of participants per team: 4-6',
            'Number of teams per College:3',
            'The topic will be given on the spot',
            'Preparation Time: 2 Mins (For Finals Also)',
            'Act Time: 5 Mins (For Finals 5 Mins)',
            'Use Of Properties from Surroundings Are Allowed',
            'Participants should bring their own materials Like Charts and Stationery',
            'Judgement Based on Creativity, Speaking Skill, Humor and Applications of the Channel'
        ]
    },
    {
        id: 'd2-englishlit',
        title: 'English literary',
        category: 'Arts',
        day: 'Day 2',
        description: ['Debate', 'Writing', 'Speaking'],
        details: 'Venue: Hall 2',
        icon: <Book size={24} />,
        color: 'from-indigo-400 to-blue-400',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070',
        rules: [
            'Individual participation.',
            'Topics given on spot.',
            'Judged on fluency and vocabulary.'
        ]
    },
    {
        id: 'd2-familyfeud',
        title: 'Family Feud',
        category: 'Fun',
        day: 'Day 2',
        description: ['Team Game', 'Buzzer', 'Survey Points'],
        details: 'Venue: Auditorium',
        icon: <Users size={24} />,
        color: 'from-green-500 to-teal-500',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070',
        rules: [
            'Number of team per college: 2',
            'Number of participants: 4',
            'One member of each team faces the other in a face-off as the teacher reads the question off the game board.',
            'The team that buzzed in with the correct answer receives control of the board and has the option of playing or passing control to the other team.',
            'The team that has control tries to reveal all the correct answers to the question before receiving three strikes.',
            'The team that receives three strikes without clearing the board, control is passed to the other team.'
        ],
        duration: '30 minutes'
    },
    {
        id: 'd2-guesslyrics',
        title: 'Guess the Lyrics',
        category: 'Fun',
        day: 'Day 2',
        description: ['Missing Lyrics', '3 Rounds', 'Songs'],
        details: 'Venue: Room 3',
        icon: <Music size={24} />,
        color: 'from-cyan-400 to-blue-500',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070',
        rules: [
            'Number of teams per college: 2',
            'Number of participants per team: 2',
            'Number of rounds: 3',
            'Participants must guess the missing lyrics in all the rounds',
            'Each correct answer carries 2 points',
            'Pass question correct answer carries 1 point',
            'Each round will have 10 slides i.e.......10 songs will be displayed'
        ]
    },
    {
        id: 'd2-mehandi',
        title: 'Mehandi',
        category: 'Arts',
        day: 'Day 2',
        description: ['Henna', 'Design', 'Creative'],
        details: 'Venue: Corridor',
        icon: <Palette size={24} />,
        color: 'from-orange-400 to-red-400',
        image: 'https://images.unsplash.com/photo-1626084880227-8051608677c7?q=80&w=2070',
        rules: [
            'Bring your own cones.',
            'Design within time limit.',
            'Neatness and creativity.'
        ]
    },
    {
        id: 'd2-pitchpaper',
        title: 'Pitch Ur Paper',
        category: 'Technical',
        day: 'Day 2',
        description: ['Abstract < 250 words', 'Max 4 Team', '10 Mins Present'],
        details: 'Venue: CSE Lab',
        icon: <FileText size={24} />,
        color: 'from-indigo-400 to-cyan-400',
        image: 'https://images.unsplash.com/photo-1544531835-3a99008aaaae?q=80&w=2070',
        rules: [
            'Number of participants per team: Maximum Four',
            'The topic of the papers can be chosen on your own. The presentation should focus on one topic. The report should be well comprehended and advanced, which could appeal to an undergraduate. Kindly contact the coordinator for any clarifications.',
            'The abstract should not exceed more than 250 words, and the Paper should not exceed 15 pages.',
            'Kindly bring your PowerPoint presentation on a CD or in a pen-drive.',
            'Soft copies should submitted in pdf format.',
            'Kindly mail your abstract, paper and ppt to enthral@alphagroup.edu. Difficulties will be addressed through the same email ID.',
            'The mail with submissions should contain: Title- theme of the paper, Names of the authors, Phone no of the authors, E-mail Ids.',
            'The teams will get 10 minutes for presentation followed by a Q&A session.',
            'Participants from different institutions can be a part of the same team. However, one participant may not be a part of multiple teams for the same event.'
        ],
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd2-sharktank', // Was Business Thoughts
        title: 'Shark Tank',
        category: 'Technical',
        day: 'Day 2',
        description: ['Idea Pitching', 'Problem Solving', 'Marketing'],
        details: 'Venue: Auditorium',
        icon: <Trophy size={24} />,
        color: 'from-blue-600 to-cyan-600',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070',
        rules: [
            'Number of participants per team: 6',
            'Charts and sketches will be provided',
            'Problem statement will be given on the spot, and present the solution with the given belongings',
            'The problem will be based on customer insights,marketing challenges,revenue generation etc..'
        ],
        duration: '2hrs',
        prizes: ['First Prize', 'Second Prize']
    },

    // ONLINE EVENTS
    {
        id: 'online-chathuranga',
        title: 'Chathuranga',
        category: 'Gaming',
        day: 'Online',
        description: ['Chess', 'Strategy', 'Competition'],
        details: 'Online',
        icon: <Swords size={24} />,
        color: 'from-slate-400 to-gray-500',
        image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2070',
        rules: [
            'Online Chess Tournament.',
            'Standard rules apply.',
            'Fair play monitoring.'
        ]
    },
    {
        id: 'online-reels',
        title: 'Reels Contest',
        category: 'Fun',
        day: 'Online',
        description: ['30 Sec Video', 'Hackathon Experience', 'Creative'],
        details: 'Online Submission',
        icon: <Video size={24} />,
        color: 'from-purple-500 to-pink-500',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2070',
        rules: [
            'Number of Teams per college: 2 teams (maximum).',
            'Team Composition: Each team shall comprise 1–2 members.',
            'Theme: Reels should be based on the hackathon experience—coding moments, funny incidents, challenges faced during the event, or any hackathon-related theme.',
            'Time Limit: Each reel must be a maximum of 30 seconds.',
            'Medium: Reels should be submitted in video format (.mp4, .mov).',
            'Technical Requirements: The reels should be well-lit, with clear audio and video quality.'
        ],
        prizes: ['First Prize', 'Second Prize']
    }
];
