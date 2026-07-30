export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  featured: boolean
  author: {
    name: string
    role: string
    avatar: string
  }
  content: BlogSection[]
}

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "tip"; label: string; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "numbered"; items: string[] }

export const categoryColor: Record<string, string> = {
  "Learning Tips": "bg-blue-100 text-blue-700",
  "Industry Insights": "bg-purple-100 text-purple-700",
  Guides: "bg-green-100 text-green-700",
  Business: "bg-orange-100 text-orange-700",
  "Language Guides": "bg-yellow-100 text-yellow-700",
  Stories: "bg-pink-100 text-pink-700",
}

export const posts: BlogPost[] = [
  {
    slug: "10-proven-techniques-to-learn-a-new-language-faster",
    title: "10 Proven Techniques to Learn a New Language Faster",
    excerpt:
      "Discover the science-backed methods that polyglots use to pick up new languages in record time. From spaced repetition to immersion strategies, these tips will supercharge your learning.",
    category: "Learning Tips",
    readTime: "8 min",
    date: "April 10, 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    featured: true,
    author: {
      name: "Sarah Mitchell",
      role: "Senior Language Coach",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    },
    content: [
      {
        type: "paragraph",
        text: "Learning a new language doesn't have to take years. While fluency is a journey, there are science-backed techniques that can dramatically speed up your progress. Whether you're a complete beginner or an intermediate learner hitting a plateau, these ten methods are used by the world's fastest language learners.",
      },
      {
        type: "heading",
        text: "1. Spaced Repetition Systems (SRS)",
      },
      {
        type: "paragraph",
        text: "Spaced repetition is one of the most powerful tools in a language learner's arsenal. Instead of cramming vocabulary in a single session, SRS algorithms show you words just before you're about to forget them — dramatically improving long-term retention. Apps like Anki are built around this principle.",
      },
      {
        type: "tip",
        label: "Pro Tip",
        text: "Dedicate just 15 minutes a day to SRS flashcard review. Consistency beats intensity every time.",
      },
      {
        type: "heading",
        text: "2. Comprehensible Input",
      },
      {
        type: "paragraph",
        text: "Linguist Stephen Krashen's Input Hypothesis suggests we acquire language best when we encounter material that is just above our current level — what he calls 'i+1'. Seek out content you mostly understand, with a small challenge. This keeps you engaged while continuously pushing your abilities forward.",
      },
      {
        type: "heading",
        text: "3. Active Recall Over Passive Review",
      },
      {
        type: "paragraph",
        text: "Re-reading your notes feels productive but produces minimal results. Active recall — forcing yourself to retrieve information from memory — is far more effective. Practise by closing your book and writing down everything you remember, or by using flashcards that make you produce answers rather than recognise them.",
      },
      {
        type: "heading",
        text: "4. Daily Immersion Habits",
      },
      {
        type: "paragraph",
        text: "You don't need to move abroad to immerse yourself. Change your phone language, watch TV shows with subtitles in your target language, listen to podcasts during your commute, and think in your target language whenever possible. The goal is to make the language a part of your daily environment.",
      },
      {
        type: "list",
        items: [
          "Change your phone and device language settings",
          "Follow social media accounts in your target language",
          "Label objects around your home with their foreign names",
          "Listen to music in the language and read the lyrics",
        ],
      },
      {
        type: "heading",
        text: "5. Speak from Day One",
      },
      {
        type: "paragraph",
        text: "Many learners delay speaking until they feel 'ready'. This is one of the most common and costly mistakes. Speaking early — even poorly — activates different parts of the brain and builds the muscle memory for pronunciation. Embrace imperfection and find a conversation partner or tutor as soon as possible.",
      },
      {
        type: "quote",
        text: "The biggest barrier to language learning isn't grammar or vocabulary — it's the fear of making mistakes.",
        attribution: "Tim Ferriss, polyglot and author",
      },
      {
        type: "heading",
        text: "6. Focus on High-Frequency Vocabulary",
      },
      {
        type: "paragraph",
        text: "The most common 1,000 words in any language cover roughly 85% of everyday speech. Instead of learning obscure vocabulary, concentrate on high-frequency words first. Tools like frequency dictionaries can help you identify which words to prioritise.",
      },
      {
        type: "heading",
        text: "7. Use the Language to Learn About Things You Love",
      },
      {
        type: "paragraph",
        text: "Motivation plummets when material feels irrelevant. Find content in your target language about your genuine interests — cooking, football, fashion, finance. When you're naturally curious, your brain is primed to absorb new vocabulary and structure.",
      },
      {
        type: "heading",
        text: "8. Work with a Native-Speaking Tutor",
      },
      {
        type: "paragraph",
        text: "There is no substitute for real conversation with a native speaker. A qualified tutor can correct pronunciation errors before they become habits, explain nuances that textbooks miss, and tailor lessons to your specific goals and gaps. Even one session per week can produce remarkable results when combined with independent study.",
      },
      {
        type: "heading",
        text: "9. Keep a Language Journal",
      },
      {
        type: "paragraph",
        text: "Writing in your target language — even just a few sentences per day — solidifies grammar and vocabulary in a way that reading alone cannot. Document new words you encounter, write about your day, or summarise something you read. Reviewing your older entries also provides tangible evidence of your progress.",
      },
      {
        type: "heading",
        text: "10. Track Progress and Celebrate Milestones",
      },
      {
        type: "paragraph",
        text: "Language learning is a marathon, and motivation naturally ebbs and flows. Set measurable milestones — holding a five-minute conversation, reading a news article unaided, completing a language exam. Celebrating small wins keeps momentum high and reminds you how far you've already come.",
      },
      {
        type: "paragraph",
        text: "The best method is the one you'll stick with. Experiment with these techniques, find the combination that fits your lifestyle, and pair your independent study with personalised guidance from an MLP tutor to accelerate every stage of your journey.",
      },
    ],
  },
  {
    slug: "why-1-on-1-tutoring-beats-language-apps-for-fluency",
    title: "Why 1-on-1 Tutoring Beats Language Apps for Fluency",
    excerpt:
      "Language apps are great for vocabulary, but when it comes to actual fluency, nothing beats a real human tutor. Here's why personalised instruction makes all the difference.",
    category: "Industry Insights",
    readTime: "6 min",
    date: "March 28, 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop",
    featured: false,
    author: {
      name: "James Okafor",
      role: "Language Education Researcher",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    content: [
      {
        type: "paragraph",
        text: "Language apps have transformed how millions of people begin learning a new language. They're convenient, affordable, and surprisingly addictive. But there's a ceiling to what they can achieve — and that ceiling becomes very apparent the moment you try to hold a real conversation.",
      },
      {
        type: "heading",
        text: "What Apps Do Well",
      },
      {
        type: "paragraph",
        text: "To be fair, language apps excel at certain tasks. They build foundational vocabulary, introduce basic grammar patterns, and make it easy to practice consistently through gamification. For a complete beginner, an app can be a wonderful entry point that removes the intimidation factor of sitting in front of a native speaker.",
      },
      {
        type: "heading",
        text: "Where Apps Fall Short",
      },
      {
        type: "paragraph",
        text: "The problem is that most apps treat language as a collection of isolated sentences and multiple-choice questions. Real language is messy, contextual, and deeply social. Here's where the gaps appear:",
      },
      {
        type: "list",
        items: [
          "Apps cannot correct your pronunciation in real time",
          "They offer no feedback on your speaking rhythm, intonation, or flow",
          "They can't respond to your confusion with a different explanation",
          "They don't adapt lessons to your specific professional or personal goals",
          "They provide no accountability — missing a day costs you only a streak, not a lesson fee",
        ],
      },
      {
        type: "heading",
        text: "The Human Difference",
      },
      {
        type: "paragraph",
        text: "A skilled tutor does far more than present vocabulary and grammar. They listen to how you speak, diagnose the specific errors that are holding you back, and craft explanations tailored to your native language background. If you're a Spanish speaker learning French, your tutor knows which pitfalls to watch for that are irrelevant to, say, a Japanese speaker learning the same language.",
      },
      {
        type: "quote",
        text: "After six months on apps, I could read a menu but couldn't order from one. After four weeks with my MLP tutor, I was having real conversations.",
        attribution: "MLP Student, Sydney",
      },
      {
        type: "heading",
        text: "Conversation Is a Skill, Not a Subject",
      },
      {
        type: "paragraph",
        text: "Fluency means being able to think and respond in real time — under social pressure, with a limited vocabulary, and with someone who won't wait for you to check your notes. This is a skill that can only be practised by doing it. One hour of conversation practice with a tutor is worth more for fluency than ten hours of app-based exercises.",
      },
      {
        type: "heading",
        text: "The Best of Both Worlds",
      },
      {
        type: "paragraph",
        text: "The most effective learners use apps for daily vocabulary maintenance and combine this with regular sessions with a human tutor for speaking practice and structured feedback. Think of apps as the gym equipment and the tutor as the personal trainer who makes sure you're using it correctly and pushing in the right direction.",
      },
      {
        type: "tip",
        label: "Recommendation",
        text: "Use a language app for 10–15 minutes daily to reinforce vocabulary, and schedule at least one tutoring session per week to build genuine speaking ability.",
      },
    ],
  },
  {
    slug: "how-to-choose-the-right-language-tutor-for-your-goals",
    title: "How to Choose the Right Language Tutor for Your Goals",
    excerpt:
      "Not all tutors are the same. Learn how to evaluate teaching styles, qualifications, and experience to find the perfect match for your learning journey.",
    category: "Guides",
    readTime: "7 min",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
    featured: false,
    author: {
      name: "Priya Sharma",
      role: "Head of Tutor Quality",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
    content: [
      {
        type: "paragraph",
        text: "Finding the right language tutor can be the difference between a transformative learning experience and months of frustration. With so many tutors available online, it can be hard to know where to start. This guide breaks down exactly what to look for — so you can make a confident choice.",
      },
      {
        type: "heading",
        text: "Step 1: Define Your Goals First",
      },
      {
        type: "paragraph",
        text: "Before you evaluate any tutor, get clear on what you want to achieve. Are you learning for travel, business, family, or academic purposes? Do you want to pass an exam like IELTS, DELF, or JLPT? Or are you simply aiming for conversational comfort? Your goals will determine what kind of tutor you need.",
      },
      {
        type: "numbered",
        items: [
          "Conversational fluency — look for tutors who focus on speaking and listening",
          "Business language — seek tutors with corporate or professional experience",
          "Exam preparation — find tutors who specialise in your specific exam",
          "Academic language — choose tutors with an academic background in the language",
        ],
      },
      {
        type: "heading",
        text: "Step 2: Check Qualifications and Experience",
      },
      {
        type: "paragraph",
        text: "Qualifications matter, but context matters more. A TEFL-certified tutor with five years of business English experience may be perfect for a corporate professional, while a native speaker with a background in drama could be ideal for someone working on accent and naturalness. Look for relevant experience, not just credentials.",
      },
      {
        type: "tip",
        label: "What to look for",
        text: "Teaching certifications (TEFL, CELTA, etc.), native or near-native proficiency, relevant domain experience (business, academic, travel), and a track record of student progression.",
      },
      {
        type: "heading",
        text: "Step 3: Read Reviews Carefully",
      },
      {
        type: "paragraph",
        text: "Student reviews reveal what a tutor's profile cannot. Pay attention to comments about patience, flexibility, lesson structure, and how the tutor handles mistakes. Look for patterns across multiple reviews rather than focusing on any single comment.",
      },
      {
        type: "heading",
        text: "Step 4: Book a Trial Lesson",
      },
      {
        type: "paragraph",
        text: "No amount of research replaces a real session. Most tutors on MLP offer trial lessons at a reduced rate. Use this opportunity to assess the tutor's teaching style, how they explain concepts, whether they make you feel comfortable, and whether the lesson pace suits you.",
      },
      {
        type: "list",
        items: [
          "Did the tutor ask about your goals and current level?",
          "Were explanations clear and adapted to your needs?",
          "Did you feel engaged and challenged but not overwhelmed?",
          "Did the tutor give you useful feedback on your speaking?",
        ],
      },
      {
        type: "heading",
        text: "Step 5: Assess Communication Style",
      },
      {
        type: "paragraph",
        text: "The best tutor for someone else might not be the best tutor for you. Some learners thrive with a structured, grammar-focused approach; others do better with free conversation and minimal correction. Be honest about your learning style and ask prospective tutors how they approach teaching.",
      },
      {
        type: "quote",
        text: "The right tutor doesn't just teach the language — they build your confidence to use it.",
        attribution: "MLP Tutor, Melbourne",
      },
      {
        type: "heading",
        text: "A Note on Consistency",
      },
      {
        type: "paragraph",
        text: "Once you find a good match, commit to consistency. Changing tutors frequently resets the relationship-building process and slows progress. Give yourself at least four to six sessions before deciding whether a tutor is the right fit.",
      },
    ],
  },
  {
    slug: "best-languages-to-learn-for-business-2024",
    title: "The Best Languages to Learn for Business in 2024",
    excerpt:
      "Which languages offer the greatest career advantage? We analysed job market data and business trends to reveal the top languages for professional growth this year.",
    category: "Business",
    readTime: "9 min",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=600&fit=crop",
    featured: false,
    author: {
      name: "David Chen",
      role: "Global Business Consultant",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    },
    content: [
      {
        type: "paragraph",
        text: "In an increasingly connected global economy, bilingualism is no longer a nice-to-have — it's a competitive advantage. But with thousands of languages to choose from, which ones actually move the needle for your career? We've analysed hiring data, trade volumes, and economic forecasts to bring you the top business languages for 2024.",
      },
      {
        type: "heading",
        text: "1. Mandarin Chinese",
      },
      {
        type: "paragraph",
        text: "China remains the world's second-largest economy and a dominant force in global manufacturing, technology, and trade. Mandarin-speaking professionals command significant salary premiums across sectors including finance, logistics, engineering, and diplomacy. While the language is notoriously challenging for English speakers, even basic proficiency demonstrates extraordinary commitment and cultural awareness to Chinese partners.",
      },
      {
        type: "tip",
        label: "Career sectors",
        text: "Finance, technology, manufacturing, international trade, diplomacy, and luxury retail.",
      },
      {
        type: "heading",
        text: "2. Spanish",
      },
      {
        type: "paragraph",
        text: "Spanish is the official language of 21 countries and spoken by over 500 million people worldwide. Latin America represents a fast-growing consumer market and a hub for renewable energy, agriculture, and technology investment. In the United States alone, the Hispanic market accounts for over $2 trillion in purchasing power. Spanish fluency opens doors across the Americas and beyond.",
      },
      {
        type: "heading",
        text: "3. Arabic",
      },
      {
        type: "paragraph",
        text: "The Gulf region continues to attract enormous global investment, and Arabic-speaking professionals are in high demand across energy, construction, finance, and government sectors. The UAE, Saudi Arabia, and Qatar are rapidly diversifying their economies, creating significant opportunities for multilingual professionals who can navigate the cultural nuances of the Arab world.",
      },
      {
        type: "heading",
        text: "4. German",
      },
      {
        type: "paragraph",
        text: "Germany is Europe's largest economy and a global leader in engineering, automotive manufacturing, pharmaceuticals, and industrial technology. German proficiency is particularly valuable for professionals in these sectors, as well as for anyone looking to do business across the DACH region (Germany, Austria, Switzerland). Germany also has one of the most robust job markets in Europe for skilled migrants.",
      },
      {
        type: "heading",
        text: "5. French",
      },
      {
        type: "paragraph",
        text: "French is an official language of 29 countries and one of the six official languages of the United Nations. It is the dominant business language across much of Africa — a continent experiencing rapid economic growth — and remains essential in luxury goods, fashion, gastronomy, and international law. French fluency is a significant asset for anyone working in international organisations or African markets.",
      },
      {
        type: "heading",
        text: "6. Portuguese",
      },
      {
        type: "paragraph",
        text: "Brazilian Portuguese, in particular, has become increasingly valuable as Brazil asserts itself as a leading emerging market in agriculture, energy, and fintech. Portugal's growing tech sector and membership in the EU also make European Portuguese worth considering for professionals with European ambitions.",
      },
      {
        type: "quote",
        text: "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
        attribution: "Nelson Mandela",
      },
      {
        type: "heading",
        text: "How to Choose",
      },
      {
        type: "paragraph",
        text: "The best business language for you depends on your industry, your existing network, and the markets you want to enter. Consider where your company is expanding, which clients you're targeting, and which languages are underrepresented in your field. An MLP tutor can help you build professional-grade language skills tailored to your specific business context.",
      },
    ],
  },
  {
    slug: "beginners-guide-to-learning-spanish",
    title: "A Beginner's Guide to Learning Spanish: Where to Start",
    excerpt:
      "Spanish is one of the most accessible languages for English speakers. This comprehensive guide walks you through the essentials of getting started, from alphabet to basic conversations.",
    category: "Language Guides",
    readTime: "10 min",
    date: "February 22, 2024",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=600&fit=crop",
    featured: false,
    author: {
      name: "Elena Vásquez",
      role: "Spanish Language Specialist",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
    },
    content: [
      {
        type: "paragraph",
        text: "Spanish is widely regarded as one of the most learnable languages for English speakers. It uses the same alphabet, shares thousands of vocabulary words (cognates) with English, and has a relatively consistent pronunciation system. If you've ever thought about learning a second language, Spanish is one of the best places to start.",
      },
      {
        type: "heading",
        text: "Why Spanish Is a Great First Language",
      },
      {
        type: "list",
        items: [
          "Over 500 million native speakers across 21 countries",
          "Thousands of cognates with English (e.g., information → información)",
          "Phonetic spelling — words are pronounced as written",
          "Enormous amount of learning resources available",
          "Highly practical for travel, business, and everyday life",
        ],
      },
      {
        type: "heading",
        text: "Phase 1: The Essentials (Weeks 1–4)",
      },
      {
        type: "paragraph",
        text: "Start with the basics: the alphabet and pronunciation rules, the numbers 1–100, colours, days of the week, and common greetings. Spanish pronunciation is largely phonetic — once you learn the sounds each letter makes, you can read almost anything aloud correctly. Focus on getting comfortable with the rolled 'r' and the difference between ser and estar (both mean 'to be' but are used in different contexts).",
      },
      {
        type: "tip",
        label: "Week 1 Goal",
        text: "Learn to introduce yourself, ask someone's name, say where you're from, and count to 100. Practice speaking aloud from day one.",
      },
      {
        type: "heading",
        text: "Phase 2: Core Grammar (Weeks 5–12)",
      },
      {
        type: "paragraph",
        text: "Once you have the basics, it's time to build grammatical structure. The key areas to focus on are: present tense verb conjugations, gender and noun agreement (every noun is masculine or feminine), and the difference between ser and estar. At this stage, you should be able to talk about your daily routine, family, likes and dislikes, and simple plans.",
      },
      {
        type: "numbered",
        items: [
          "Master present tense regular verbs (-ar, -er, -ir)",
          "Learn the most common irregular verbs (ser, estar, tener, ir, hacer)",
          "Understand noun gender and adjective agreement",
          "Build sentences using common question words (qué, dónde, cuándo, cómo, por qué)",
        ],
      },
      {
        type: "heading",
        text: "Phase 3: Conversation and Expansion (Month 3+)",
      },
      {
        type: "paragraph",
        text: "This is where things get exciting. With a foundation in place, start consuming authentic Spanish content — Spanish TV shows with Spanish subtitles (not English), Spanish podcasts, and music. Look for a language exchange partner or book sessions with a native-speaking tutor who can push your speaking ability and introduce you to colloquial expressions that textbooks don't cover.",
      },
      {
        type: "quote",
        text: "The secret to learning Spanish quickly is simple: speak more than you study.",
        attribution: "Elena Vásquez, MLP Spanish Tutor",
      },
      {
        type: "heading",
        text: "Common Mistakes to Avoid",
      },
      {
        type: "list",
        items: [
          "Translating word-for-word from English — think in Spanish instead",
          "Avoiding the subjunctive mood — embrace it early",
          "Relying too heavily on one resource or app",
          "Waiting until you feel 'ready' before speaking",
          "Confusing ser and estar — practise both in context from day one",
        ],
      },
      {
        type: "heading",
        text: "Recommended Resources",
      },
      {
        type: "paragraph",
        text: "Combine a daily vocabulary app (Anki or Duolingo) with a grammar workbook (Practice Makes Perfect series), authentic TV content (La Casa de Papel, Club de Cuervos), and regular sessions with an MLP tutor. This four-pronged approach covers all four language skills — reading, writing, listening, and speaking — and will get you to conversational level faster than any single resource alone.",
      },
    ],
  },
  {
    slug: "how-our-tutors-are-changing-lives-across-the-globe",
    title: "How Our Tutors Are Changing Lives Across the Globe",
    excerpt:
      "From refugees learning English to executives mastering Mandarin, the stories of transformation on My Language Plug will inspire you. Meet five tutors making a real difference.",
    category: "Stories",
    readTime: "11 min",
    date: "February 10, 2024",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=600&fit=crop",
    featured: false,
    author: {
      name: "Amara Diallo",
      role: "Community Manager, MLP",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
    },
    content: [
      {
        type: "paragraph",
        text: "Behind every language learned is a story. A career unlocked, a relationship deepened, a new home made navigable. At My Language Plug, we've had the privilege of watching thousands of these stories unfold. Here, we share five of them — stories of tutors who went far beyond teaching vocabulary and grammar to genuinely change the lives of those they worked with.",
      },
      {
        type: "heading",
        text: "Maria: Teaching English to Refugee Families in Melbourne",
      },
      {
        type: "paragraph",
        text: "When Maria joined MLP as an English tutor three years ago, she had no idea her students would include recently arrived refugee families struggling to navigate an entirely new world. 'My first student couldn't communicate with her children's school,' Maria recalls. 'After six months, she was attending parent-teacher nights and advocating for her kids. That's not just language — that's power.'",
      },
      {
        type: "quote",
        text: "Language is the difference between surviving in a new country and actually living in it.",
        attribution: "Maria, MLP English Tutor",
      },
      {
        type: "heading",
        text: "Kenji: Helping Executives Crack the Japanese Market",
      },
      {
        type: "paragraph",
        text: "Kenji, a native Japanese speaker based in Tokyo, specialises in business Japanese for senior executives. His approach goes beyond language to encompass the cultural intelligence that makes or breaks international partnerships. 'Many of my students arrive speaking textbook Japanese,' he explains. 'They can conjugate verbs perfectly but don't understand the importance of silence, indirect communication, or the hierarchy embedded in every meeting.' After Kenji's mentorship, several students have gone on to seal partnerships worth millions.",
      },
      {
        type: "heading",
        text: "Sophie: Reconnecting a Family Across Generations",
      },
      {
        type: "paragraph",
        text: "Sophie is a French tutor based in Lyon who received an unusual request last year: a 35-year-old Australian man who wanted to learn French so he could communicate with his elderly grandmother before she passed away. 'He had never learned French as a child. His grandmother barely spoke English. Time was running out,' says Sophie. Over four intensive months, working around the man's full-time job, Sophie helped him reach a level where he could have meaningful conversations — and eventually, a final, memorable visit with his grandmother.",
      },
      {
        type: "heading",
        text: "Carlos: Giving Voice to a Mute Ambition",
      },
      {
        type: "paragraph",
        text: "Carlos teaches Spanish to students with no formal education background — people who left school early, who never expected to succeed academically, and who often carry deep-seated beliefs that learning a language isn't for someone like them. 'My proudest moment was when a student who'd failed school in his thirties passed his Spanish A1 exam,' Carlos says. 'He told me it was the first certificate he'd ever earned. He cried. I cried. That's why I do this.'",
      },
      {
        type: "heading",
        text: "Aisha: Building Bridges in Remote Communities",
      },
      {
        type: "paragraph",
        text: "Aisha teaches Arabic to healthcare workers in regional Australia who treat patients from Arabic-speaking communities. Her work has a direct impact on health outcomes — patients who can communicate meaningfully with their doctors receive better care. 'Even ten words of Arabic from a doctor can change how a patient feels about their treatment,' Aisha explains. 'It says: I see you. I respect where you come from.'",
      },
      {
        type: "heading",
        text: "What These Stories Tell Us",
      },
      {
        type: "paragraph",
        text: "Language learning is never just about language. It's about connection, opportunity, dignity, and belonging. The tutors on My Language Plug aren't just educators — they're enablers of possibility. If you're sitting on a language goal, wondering whether now is the right time, these stories might be your answer.",
      },
      {
        type: "tip",
        label: "Join the Community",
        text: "Whether you want to learn or teach, My Language Plug connects passionate people across the globe. Find your tutor or apply to teach today.",
      },
    ],
  },
]
