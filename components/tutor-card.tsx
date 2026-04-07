import Image from "next/image"
import Link from "next/link"
import { Star, Globe, Clock, CheckCircle2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TutorAvailability } from "@/components/tutor-availability"

export interface TutorCardProps {
  id: string
  name: string
  image: string
  country: string
  languages: string[]
  specialties: string[]
  rating: number
  reviews: number
  hourlyRate: number
  lessonsCompleted: number
  isVerified?: boolean
  isNativeSpeaker?: boolean
  bio: string
  offersTrialLesson?: boolean
  isSaved?: boolean
  onToggleSave?: (id: string) => void
  onBookTrial?: (id: string) => void
  onViewProfile?: (id: string) => void
}

export function TutorCard({
  id,
  name,
  image,
  country,
  languages,
  specialties,
  rating,
  reviews,
  hourlyRate,
  lessonsCompleted,
  isVerified = false,
  isNativeSpeaker = false,
  bio,
  offersTrialLesson,
  isSaved = false,
  onToggleSave,
  onBookTrial,
  onViewProfile,
}: TutorCardProps) {
  return (
    <div className="group flex flex-col md:flex-row gap-2">
      {/* Tutor Card */}
      <Card className="flex-1 min-w-0 overflow-hidden transition-all group-hover:shadow-lg">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row">
            {/* Tutor Image */}
            <div className="relative aspect-square w-full sm:w-48 shrink-0">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
              {isVerified && (
                <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-xs font-medium text-primary">
                  <CheckCircle2 className="h-3 w-3" />
                  Verified
                </div>
              )}
              {/* Favourite button */}
              {onToggleSave && (
                <button
                  type="button"
                  onClick={() => onToggleSave(id)}
                  aria-label={isSaved ? "Remove from saved tutors" : "Save tutor"}
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 shadow transition-colors hover:bg-white/50"
                >
                  <Heart
                    className={`h-4 w-4 transition-colors ${
                      isSaved ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Tutor Info */}
            <div className="flex min-w-0 flex-1 flex-col p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-(--navy)">{name}</h3>
                    {isNativeSpeaker && (
                      <Badge variant="secondary" className="text-xs">
                        Native Speaker
                      </Badge>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-3.5 w-3.5" />
                    <span>{country}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{rating.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground">({reviews})</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{lessonsCompleted} lessons</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {languages.map((lang) => (
                  <Badge key={lang} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>

              {/* Bio */}
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {bio}
              </p>

              {/* Specialties */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {specialties.slice(0, 3).map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full bg-(--light-blue) px-2.5 py-0.5 text-xs font-medium text-(--navy)"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <span className="text-xl font-bold text-(--navy)">${hourlyRate}</span>
                  <span className="text-sm text-muted-foreground"> / hour</span>
                </div>
                <div className="flex gap-2">
                  {onViewProfile ? (
                    <Button variant="outline" size="sm" onClick={() => onViewProfile(id)}>
                      View Profile
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/tutors/${id}`}>View Profile</Link>
                    </Button>
                  )}
                  {onBookTrial ? (
                    <Button size="sm" onClick={() => onBookTrial(id)}>
                      Book Trial
                    </Button>
                  ) : (
                    <Button size="sm" asChild>
                      <Link href={`/tutors/${id}/book`}>Book Trial</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Availability Calendar — separate box on the right, revealed on card hover */}
      <Card className="w-64 shrink-0 pointer-events-none opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <CardContent className="h-full p-0">
          <TutorAvailability tutorId={id} />
        </CardContent>
      </Card>
    </div>
  )
}

// Compact version for grid layouts
export function TutorCardCompact({
  id,
  name,
  image,
  country,
  languages,
  rating,
  reviews,
  hourlyRate,
  isVerified = false,
}: Pick<TutorCardProps, 'id' | 'name' | 'image' | 'country' | 'languages' | 'rating' | 'reviews' | 'hourlyRate' | 'isVerified'>) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        {/* Tutor Image */}
        <div className="relative aspect-[4/3]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {isVerified && (
            <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-xs font-medium text-primary">
              <CheckCircle2 className="h-3 w-3" />
              Verified
            </div>
          )}
        </div>

        {/* Tutor Info */}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-(--navy)">{name}</h3>
              <p className="text-sm text-muted-foreground">{country}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-2 flex flex-wrap gap-1">
            {languages.slice(0, 2).map((lang) => (
              <Badge key={lang} variant="secondary" className="text-xs">
                {lang}
              </Badge>
            ))}
            {languages.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{languages.length - 2}
              </Badge>
            )}
          </div>

          {/* Price & CTA */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-(--navy)">${hourlyRate}</span>
              <span className="text-xs text-muted-foreground">/hr</span>
            </div>
            <Button size="sm" asChild>
              <Link href={`/tutors/${id}`}>View</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
