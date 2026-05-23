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
    <article className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <p className="font-mono text-sm uppercase tracking-wide text-axis-goldSoft">{post.category}</p>
      <h1 className="mt-5 text-4xl font-black uppercase leading-tight text-white md:text-6xl">{post.title}</h1>
      <p className="mt-6 text-xl leading-8 text-axis-silver">{post.excerpt}</p>
      <div className="gold-rule mt-12 metal-panel p-8">
        {post.body.map((section) => (
          <section key={section.heading} className="mb-9 last:mb-0">
            <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
            <p className="mt-4 leading-8 text-axis-muted">{section.copy}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
