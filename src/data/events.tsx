
import React from 'react';
import {
    Terminal, PenTool, Gamepad2, Cpu, Mic2, Camera, Code2, Bug, Layers, Image,
    MessageSquare, Lightbulb, Users, FileText, Zap, Bot, Skull, Music, Shirt,
    Smartphone, Smile, HelpCircle, Palette, Dumbbell, Trophy, Video, MousePointer2,
    MonitorPlay, Gavel, Radio, Swords, BrainCircuit, Activity
} from 'lucide-react';

export interface Event {
    id: string;
    title: string;
    category: string;
    day: 'Day 1' | 'Day 2';
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
        id: 'd1-2', // Mapped from User's "DEBATE" -> Existing "Battle Yarn"? I'll rename to DEBATE to match user request? Or keep creative name?
        // User request uses "DEBATE". I'll use "Debate (Battle Yarn)" or just "Debate" to be safe.
        // Let's stick to the title "Debate" to match the user's explicit list.
        title: 'Debate (Tamil/English)',
        category: 'Technical',
        day: 'Day 1',
        description: ['Tamil & English', 'For & Against', 'Hot Topics'],
        details: 'Venue: Seminar Hall',
        icon: <MessageSquare size={24} />,
        color: 'from-orange-500 to-amber-500',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
        rules: [
            'Number of teams per college: 6',
            'Number of participants per team: 2',
            'Each team shall comprise two members; one member will speak in favour of the topic and the other member will speak against it.',
            'The motion mover will get one minute of extra time for winding up.',
            'The medium of expression may be Tamil or English.',
            'The topic will be announced on the spot.',
            'Each speaker shall get 5 minutes to speak.'
        ],
        duration: '15 mins',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-jam',
        title: 'JAM (Just A Minute)',
        category: 'Technical',
        day: 'Day 1', // Assuming Day 1
        description: ['1 Minute Talk', 'On Spot Topic', 'Individual'],
        details: 'Venue: Classrooms',
        icon: <Mic2 size={24} />,
        color: 'from-blue-500 to-cyan-500',
        image: 'https://images.unsplash.com/photo-1475721027767-420994827aa5?q=80&w=2070', // Placeholder
        rules: [
            'Number of participants per college: 7- 8',
            'Number of participants: 1',
            'Competition is open to anyone',
            'Topic will be given on the spot',
            'Participants will be provided with 1 minute for preparation and 1 minute to speak.',
            'No extra time will be given.'
        ],
        duration: '1 min per individual',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-poetry',
        title: 'Poetry Writing',
        category: 'Technical', // User put it under Technical? No, usually Arts, but user header says "TECHNICAL EVENTS". I'll follow user.
        day: 'Day 1',
        description: ['Tamil/English', 'Creative Writing', '30 Mins'],
        details: 'Venue: Hall 3',
        icon: <PenTool size={24} />,
        color: 'from-pink-500 to-rose-500',
        image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070',
        rules: [
            'Number of participants per college : 5',
            'Number of participants: 1',
            'The theme will be announced on the spot.',
            'Participants should bring their stationery items',
            'Use of electronic device during the competition is prohibited.',
            'Any practice of plagiarism will lead to disqualification.'
        ],
        duration: '30 mins',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-story',
        title: 'Story Writing',
        category: 'Technical',
        day: 'Day 1',
        description: ['Tamil/English', 'Creative Writing', '1 Hour'],
        details: 'Venue: Hall 4',
        icon: <FileText size={24} />,
        color: 'from-indigo-500 to-purple-500',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070',
        rules: [
            'Number of participants per college: 3',
            'Number of participants : 1',
            'The topic will be announced on the spot',
            'The title must be given by participants based on the given situation.',
            'The word limit is 1000 words',
            'Participants should bring their stationery items.',
            'Use of electronic device during the competition is prohibited.'
        ],
        duration: '1 hour',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-essay',
        title: 'Essay Writing',
        category: 'Technical',
        day: 'Day 1',
        description: ['Tamil/English', '200-400 Words', '45 Mins'],
        details: 'Venue: Hall 5',
        icon: <FileText size={24} />,
        color: 'from-teal-500 to-green-500',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070', // Reusing similar image
        rules: [
            'Number of participants per college: 5.',
            'Number of participants : 1',
            'The word limit is 200-400 words.',
            'The topic will be given on the spot.',
            'Use of electronic device during the competition is prohibited.',
            'Participants should bring their stationery items'
        ],
        duration: '45 minutes',
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-17', // ProtoFest -> Project Expo
        title: 'Project Expo (ProtoFest)',
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
    {
        id: 'd2-paper', // Pitch Ur Paper -> Paper Presentation
        title: 'Paper Presentation',
        category: 'Technical',
        day: 'Day 2', // User didn't specify, but existing event was D2. Keeping D2.
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
        id: 'd1-quiz',
        title: 'Technical Quiz',
        category: 'Technical',
        day: 'Day 1',
        description: ['Prelims & Finals', 'Team of 4', 'No Calculators'],
        details: 'Venue: Seminar Hall',
        icon: <BrainCircuit size={24} />,
        color: 'from-orange-500 to-red-500',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070',
        rules: [
            'Number of teams per college: 3',
            'Number of participants per team: Maximum 4',
            'The Preliminary round will be in the form of a written test for half an hour.',
            'Shortlisted from the preliminary round will move to the final round.',
            'Evaluation of the answer scripts will be done by the quiz master.',
            'The use of calculator is prohibited.'
        ],
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-12', // Hackathon
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
        id: 'd2-business',
        title: 'Business Thoughts (Shark Tank)',
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
    {
        id: 'd1-8', // Debugging
        title: 'Program Debugging',
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
        id: 'd1-poster', // Pixel Craft
        title: 'Poster Making',
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
        id: 'd1-logo',
        title: 'Logo Builders',
        category: 'Technical',
        day: 'Day 1',
        description: ['Logo Design', 'JPEG/JPG/PNG', 'Innovative'],
        details: 'Venue: Design Lab',
        icon: <Palette size={24} />,
        color: 'from-yellow-500 to-pink-500',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070',
        rules: [
            'Number of participants per college: 4',
            'Number of participants: 1',
            'The theme will be given on the spot',
            'The logo should be in JPEG/JPG/PNG format only',
            'The size of the logo may vary from 5 cm * 5 cm to 10 cm * 10 cm, either in portrait or landscape.',
            'Based upon innovative development, LOGO will be selected'
        ],
        duration: '30 minutes'
    },
    {
        id: 'd1-adzap',
        title: 'Adzap',
        category: 'Fun',
        day: 'Day 1',
        description: ['Ads', 'Humor', 'Creativity'],
        details: 'Venue: Stage',
        icon: <Zap size={24} />,
        color: 'from-pink-500 to-purple-600',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070',
        rules: [
            'Number of teams per college: 3',
            'Number of participants per team: 2-6',
            'The topic will be given on the spot',
            'Preparation time: 3 mins (For finals also)',
            'Act time: 3 mins (For finals, 5 mins)',
            'Use of properties from surroundings is allowed',
            'Participants can bring their materials like charts and stationary items.',
            'Judgement is based on creativity, speaking skill, humor and idea of the concept.'
        ]
    },

    // NON TECHNICAL (CULTURAL / FUN)
    {
        id: 'd1-20', // Singing
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
        id: 'd2-2', // Anime Quiz
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
        id: 'd2-kpop', // K-Pop Quiz
        title: 'K-PoP Quiz',
        category: 'Quiz',
        day: 'Day 2',
        description: ['K-Pop & K-Drama', 'Team of 3', 'Trivia'],
        details: 'Venue: Seminar Hall',
        icon: <HelpCircle size={24} />,
        color: 'from-violet-500 to-fuchsia-500',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070',
        rules: [
            'Number of teams per college: 3',
            'Number of participants per team: 3',
            'Participants will be asked to answer questions based on K-pop and K-drama.',
            'The winners will be decided based on correct answers provided by them.',
            'The top performers of each group will compete for round 2.',
            'In case of the same number of correct answers, the time taken by the participants will be taken into consideration'
        ],
        duration: '1 hour'
    },
    {
        id: 'd2-18', // Squid Game
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
        id: 'd2-3', // Box Cricket
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
        id: 'd1-1', // Adaptune
        title: 'Adaptune',
        category: 'Cultural',
        day: 'Day 1',
        description: ['Dance', 'Random Music', 'Sync'],
        details: 'Venue: Auditorium',
        icon: <Music size={24} />,
        color: 'from-pink-500 to-rose-500',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070',
        rules: [
            'Number of participants per college: 3',
            'Number of participants:1',
            'Music will be continuously played in random',
            'Performance will be judged based on the synchronization, creativity and spontaneity',
            'Participants are strictly requested to maintain dignity and decorum in their performances.',
            'Judges decision will be final'
        ],
        duration: 'maximum 2-3 minutes'
    },
    {
        id: 'd2-4', // Channel Surfing
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
        id: 'd1-meme',
        title: 'Meme Creation',
        category: 'Fun',
        day: 'Day 1',
        description: ['Humorous', 'Tech Culture', 'Image Format'],
        details: 'Venue: Online/Lab',
        icon: <Smile size={24} />,
        color: 'from-yellow-400 to-orange-400',
        image: 'https://images.unsplash.com/photo-1531297461136-82lw9z1z1z1z?q=80&w=2070', // Placeholder
        rules: [
            'Event Type: This is an individual or team event.',
            'Number of Participants per college: 2 teams (maximum).',
            'Team Composition: Each team shall comprise 1–2 members.',
            'Theme: Memes should be related to the hackathon, coding, tech culture, or funny moments experienced during the event.',
            'Content Guidelines: Memes should be original, humorous, and follow the event’s theme. Offensive or inappropriate content will not be accepted.',
            'Medium: Memes can be created in image format (e.g., PNG, JPG, or GIF).',
            'Time Limit: Submit memes by the event’s deadline .'
        ],
        prizes: ['First Prize', 'Second Prize']
    },
    {
        id: 'd1-reels',
        title: 'Reels Contest',
        category: 'Fun',
        day: 'Day 1',
        description: ['30 Sec Video', 'Hackathon Experience', 'Creative'],
        details: 'Venue: Campus',
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
    },
    {
        id: 'd1-19', // Rangoli
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
        id: 'd1-drawing', // Drawing
        title: 'Drawing and Painting',
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
        id: 'd2-8', // Free Fire
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
        id: 'd2-5', // Dance
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
        id: 'd2-1', // APL Auction
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
        id: 'd1-block',
        title: 'Block and Tackle',
        category: 'Fun',
        day: 'Day 1',
        description: ['Debate Flip', 'For & Against', 'Fluency'],
        details: 'Venue: Seminar Hall',
        icon: <Mic2 size={24} />,
        color: 'from-cyan-500 to-blue-500',
        image: 'https://images.unsplash.com/photo-1475721027767-420994827aa5?q=80&w=2070', // Placeholder
        rules: [
            'Number of participants per college: 3',
            'The first round will be block and tackle.',
            'Block and tackle is a standout event from the conventional form of debate where the contestants must block (talk in against of the topics given) and tackle (talk in favor of the topic given)',
            'Judging is based on the fluency of the participants'
        ],
        duration: '2-3 minutes'
    },
    {
        id: 'd2-lyrics',
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
        id: 'd2-6', // Family Feud
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
        id: 'd1-teaser',
        title: 'Teaser Making',
        category: 'Fun',
        day: 'Day 1',
        description: ['Mobile Phone Mode', 'Original', '1-2 Mins'],
        details: 'Venue: College',
        icon: <Video size={24} />,
        color: 'from-red-500 to-orange-500',
        image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070', // Placeholder
        rules: [
            'No of teams per college: 2',
            'No of participants per team: 5',
            'Mode: Mobile phone',
            'The teaser must be original, and it should not violate any provision of the Indian property act, copyright act etc...',
            'The teaser should be submitted in pen drive /respective E mail id',
            'Use of foul words and vulgar actions is prohibited.'
        ],
        duration: '1-2 minutes'
    },
    {
        id: 'd1-photo',
        title: 'Photography',
        category: 'Fun',
        day: 'Day 1',
        description: ['Mobile/Camera', 'Original', 'High Res'],
        details: 'Venue: Campus',
        icon: <Camera size={24} />,
        color: 'from-blue-500 to-indigo-600',
        image: 'https://images.unsplash.com/photo-1542038784424-fa00ed4998dc?q=80&w=2070',
        rules: [
            'No of participants per college: 5',
            'Mode: Mobile phone, Camera',
            'The photograph must be original, and no watermark of any kind should be on the photograph.',
            'The photograph must be of the highest resolution possible.',
            'Photographs that have been digitally altered beyond standard optimization will be disqualified.',
            'Adult content of any kind will not be entertained and would lead to direct disqualification.',
            'A caption must be given for the photograph.'
        ],
        duration: '1 hour'
    },
    {
        id: 'd2-mime', // Mime
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
        id: 'd1-beatbox',
        title: 'Beat Boxing',
        category: 'Cultural',
        day: 'Day 1',
        description: ['No Instruments', 'Human Sounds Only', 'Solo'],
        details: 'Venue: Stage',
        icon: <Mic2 size={24} />,
        color: 'from-purple-600 to-indigo-600',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070',
        rules: [
            'Number of participants per college: 2',
            'The tournament is open to beatboxers only. No instruments are permitted; only sounds made using human anatomy.',
            'Decision of the judge will be final',
            'No vulgar body language is allowed'
        ],
        duration: '5 Minutes'
    },
    {
        id: 'd1-treasure', // Treasure Hunt
        title: 'Treasure Hunt',
        category: 'Fun',
        day: 'Day 1',
        description: ['3 Hints', 'Team 2-3', 'Online Reg'],
        details: 'Venue: Campus',
        icon: <Zap size={24} />,
        color: 'from-yellow-400 to-red-400',
        image: 'https://images.unsplash.com/photo-1555664424-778a69032334?q=80&w=2070',
        rules: [
            'Number of participants per team: 2-3',
            'Online registration is compulsory',
            'Each team will get 3 set of hints in which the 1st two will be different for each team but the final hint will be the same for all the team.',
            'Teams exchanging hints will be disqualified.'
        ]
    }
];
