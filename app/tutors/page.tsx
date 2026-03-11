import { Suspense } from "react"
import { Search, SlidersHorizontal, Globe, Star, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { TutorCard } from "@/components/tutor-card"
import { Skeleton } from "@/components/ui/skeleton"

const tutors = [
  {
    id: "1",
    name: "Maria Santos",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    country: "Spain",
    languages: ["Spanish", "English"],
    specialties: ["Business Spanish", "Conversational", "DELE Prep"],
    rating: 4.9,
    reviews: 234,
    hourlyRate: 25,
    lessonsCompleted: 1250,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "Professional Spanish teacher with 10+ years of experience. I specialize in conversational Spanish and business communication. My lessons are interactive and tailored to your goals.",
  },
  {
    id: "2",
    name: "Jean-Pierre Dubois",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    country: "France",
    languages: ["French", "English", "Spanish"],
    specialties: ["Conversational", "Grammar", "Pronunciation"],
    rating: 4.8,
    reviews: 189,
    hourlyRate: 30,
    lessonsCompleted: 980,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "Native French tutor from Paris. I focus on helping students achieve natural pronunciation and confident speaking skills. Learn French the way locals speak it!",
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    country: "Japan",
    languages: ["Japanese", "English"],
    specialties: ["JLPT Prep", "Business Japanese", "Beginner Friendly"],
    rating: 5.0,
    reviews: 156,
    hourlyRate: 35,
    lessonsCompleted: 720,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "Certified Japanese teacher specializing in JLPT preparation and business Japanese. I make learning kanji and grammar fun and accessible for all levels.",
  },
  {
    id: "4",
    name: "Hans Mueller",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    country: "Germany",
    languages: ["German", "English"],
    specialties: ["TestDaF Prep", "Academic German", "Conversational"],
    rating: 4.9,
    reviews: 203,
    hourlyRate: 28,
    lessonsCompleted: 890,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "German language expert with a background in linguistics. I help students prepare for German language exams and achieve fluency through structured lessons.",
  },
  {
    id: "5",
    name: "Sofia Rossi",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    country: "Italy",
    languages: ["Italian", "English", "French"],
    specialties: ["Conversational", "Travel Italian", "Culture"],
    rating: 4.7,
    reviews: 142,
    hourlyRate: 22,
    lessonsCompleted: 560,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "Passionate Italian teacher who loves sharing Italian culture and language. My lessons combine grammar with real-life conversations and cultural insights.",
  },
  {
    id: "6",
    name: "Wei Chen",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    country: "China",
    languages: ["Mandarin", "English", "Cantonese"],
    specialties: ["HSK Prep", "Business Chinese", "Pronunciation"],
    rating: 4.8,
    reviews: 178,
    hourlyRate: 32,
    lessonsCompleted: 830,
    isVerified: true,
    isNativeSpeaker: true,
    bio: "Experienced Mandarin teacher with expertise in HSK exam preparation and business Chinese. I use modern teaching methods to make Chinese accessible.",
  },
]

const languages = [
  "All Languages",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Chinese",
  "Italian",
  "Portuguese",
  "Korean",
  "Arabic",
  "Russian",
]

const specialties = [
  "Conversational",
  "Business",
  "Exam Prep",
  "Grammar",
  "Pronunciation",
  "Beginner Friendly",
  "Kids",
]

function TutorListSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-4 rounded-lg border p-4">
          <Skeleton className="h-48 w-48 rounded-lg" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function TutorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-(--light-blue)">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-(--navy) md:text-4xl">
            Find Your Perfect Tutor
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Browse our network of verified language tutors
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, language, or specialty..."
                className="h-12 bg-background pl-10 pr-4"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="h-12 w-full bg-background sm:w-[200px]">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang.toLowerCase().replace(" ", "-")}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button size="lg" className="h-12">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="sticky top-24 space-y-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-semibold text-(--navy)">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  Clear All
                </Button>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">
                  <DollarSign className="mr-1 inline h-4 w-4" />
                  Price Range
                </h3>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Min" className="h-9" />
                  <span className="text-muted-foreground">-</span>
                  <Input type="number" placeholder="Max" className="h-9" />
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">
                  <Star className="mr-1 inline h-4 w-4" />
                  Rating
                </h3>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5].map((rating) => (
                    <label key={rating} className="flex cursor-pointer items-center gap-2">
                      <Checkbox />
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-sm">{rating}+ stars</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">
                  <Clock className="mr-1 inline h-4 w-4" />
                  Availability
                </h3>
                <div className="space-y-2">
                  {["Morning", "Afternoon", "Evening", "Weekends"].map((time) => (
                    <label key={time} className="flex cursor-pointer items-center gap-2">
                      <Checkbox />
                      <span className="text-sm">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tutor Type */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-(--navy)">Tutor Type</h3>
                <div className="space-y-2">
                  <label className="flex cursor-pointer items-center gap-2">
                    <Checkbox />
                    <span className="text-sm">Native Speakers Only</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <Checkbox />
                    <span className="text-sm">Verified Tutors Only</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <Checkbox />
                    <span className="text-sm">Offers Trial Lessons</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Tutor List */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-muted-foreground">
                Showing <span className="font-medium text-foreground">{tutors.length}</span> tutors
              </p>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tutor Cards */}
            <Suspense fallback={<TutorListSkeleton />}>
              <div className="space-y-4">
                {tutors.map((tutor) => (
                  <TutorCard key={tutor.id} {...tutor} />
                ))}
              </div>
            </Suspense>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                    className="h-9 w-9"
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
