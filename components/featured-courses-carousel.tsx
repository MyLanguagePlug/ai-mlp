"use client";

import { useRouter } from "next/navigation";
import { OffersCarousel, type CarouselItem } from "@/components/ui/offers-carousel";

interface FeaturedCoursesCarouselProps {
  items: CarouselItem[];
}

export function FeaturedCoursesCarousel({ items }: FeaturedCoursesCarouselProps) {
  const router = useRouter();
  return (
    <OffersCarousel
      offerTitle="Up to 33% off courses"
      offerSubtitle="Special rates for new learners — code pre-applied!"
      ctaText="Browse all courses"
      onCtaClick={() => router.push("/tutors")}
      items={items}
    />
  );
}
