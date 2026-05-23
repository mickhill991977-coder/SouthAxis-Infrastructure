import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <section className="relative min-h-[28rem] overflow-hidden border-b border-axis-gold/25 bg-axis-black cinematic-overlay noise sm:min-h-[34rem] md:min-h-[68vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
        <div className="relative z-10 mx-auto flex min-h-[28rem] max-w-5xl items-end px-4 py-14 sm:min-h-[34rem] sm:px-6 sm:py-16 md:min-h-[68vh] md:py-20 lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft sm:text-sm sm:tracking-[0.24em]">{post.category}</p>
            <h1 className="font-display mt-5 text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-7xl">{post.title}</h1>
            <p className="mt-5 text-base leading-7 text-axis-silver sm:mt-6 sm:text-xl sm:leading-8">{post.excerpt}</p>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="gold-frame bg-axis-black p-5 sm:p-8 md:p-12">
          {post.body.map((section) => (
            <section key={section.heading} className="mb-8 border-b border-white/10 pb-8 last:mb-0 last:border-b-0 last:pb-0 sm:mb-10 sm:pb-10">
              <h2 className="font-display text-3xl font-black uppercase text-white sm:text-4xl">{section.heading}</h2>
              <p className="mt-5 text-base leading-8 text-axis-muted sm:text-lg sm:leading-9">{section.copy}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
