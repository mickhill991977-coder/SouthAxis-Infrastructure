import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "SouthAxis Infrastructure insights on groundworks, drainage, foundations and site preparation."
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Field notes for stronger construction starts"
        body="Practical infrastructure thinking for developers, contractors and clients planning groundwork packages."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="metal-panel flex min-h-full flex-col p-6">
              <p className="font-mono text-sm uppercase tracking-wide text-axis-goldSoft">{post.category}</p>
              <h2 className="mt-4 text-2xl font-bold text-white">{post.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-axis-muted">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-axis-goldSoft">
                Read article <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
