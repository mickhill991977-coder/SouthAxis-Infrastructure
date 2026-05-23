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
      <section className="relative min-h-[68vh] overflow-hidden border-b border-axis-gold/25 bg-axis-black cinematic-overlay noise">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
        <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-5xl items-end px-6 py-20 lg:px-8">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-axis-goldSoft">{post.category}</p>
            <h1 className="font-display mt-5 text-5xl font-black uppercase leading-none text-white md:text-7xl">{post.title}</h1>
            <p className="mt-6 text-xl leading-8 text-axis-silver">{post.excerpt}</p>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="gold-frame bg-axis-black p-8 md:p-12">
          {post.body.map((section) => (
            <section key={section.heading} className="mb-10 border-b border-white/10 pb-10 last:mb-0 last:border-b-0 last:pb-0">
              <h2 className="font-display text-4xl font-black uppercase text-white">{section.heading}</h2>
              <p className="mt-5 text-lg leading-9 text-axis-muted">{section.copy}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
