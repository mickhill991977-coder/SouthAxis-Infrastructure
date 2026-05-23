import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { blogPosts, imageSet } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "SouthAxis Infrastructure insights on groundworks, drainage, foundations and site preparation."
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Field intelligence from the ground up"
        body="Practical thinking for developers, contractors and clients planning groundwork packages with commercial pressure attached."
        image={imageSet.team}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group metal-panel flex min-h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-axis-gold/60">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-axis-black to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-sm uppercase tracking-wide text-axis-goldSoft">{post.category}</p>
                <h2 className="font-display mt-4 text-3xl font-black uppercase leading-none text-white">{post.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-axis-muted">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-axis-goldSoft">
                  Read article <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
