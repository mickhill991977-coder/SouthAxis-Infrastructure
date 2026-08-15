import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, services } from "@/lib/content";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
} from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const related = services.find((s) => s.slug === post.relatedServiceSlug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <article>
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            image: post.image,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <section className="relative min-h-[28rem] overflow-hidden border-b border-axis-gold/25 bg-axis-black cinematic-overlay noise sm:min-h-[34rem] md:min-h-[68vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
          role="img"
          aria-label={post.imageAlt}
        />
        <div className="relative z-10 mx-auto flex min-h-[28rem] max-w-5xl items-end px-4 py-14 sm:min-h-[34rem] sm:px-6 sm:py-16 md:min-h-[68vh] md:py-20 lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft sm:text-sm sm:tracking-[0.24em]">
              {post.category}
            </p>
            <h1 className="font-display mt-5 text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-7xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-axis-silver sm:mt-6 sm:text-xl sm:leading-8">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="gold-frame bg-axis-black p-5 sm:p-8 md:p-12">
          {post.body.map((section) => (
            <section
              key={section.heading}
              className="mb-8 border-b border-white/10 pb-8 last:mb-0 last:border-b-0 last:pb-0 sm:mb-10 sm:pb-10"
            >
              <h2 className="font-display text-3xl font-black uppercase text-white sm:text-4xl">
                {section.heading}
              </h2>
              <p className="mt-5 text-base leading-8 text-axis-muted sm:text-lg sm:leading-9">
                {section.copy}
              </p>
            </section>
          ))}
        </div>

        <nav
          aria-label="Related resources"
          className="mt-10 grid gap-6 border border-white/10 bg-axis-black/60 p-5 sm:p-8 md:grid-cols-2"
        >
          {related ? (
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft">
                Related service
              </p>
              <Link
                href={`/services#${related.slug}`}
                className="mt-3 inline-flex min-h-11 items-center gap-2 font-display text-2xl font-black uppercase text-white hover:text-axis-goldSoft"
              >
                {related.title} <ArrowRight size={18} />
              </Link>
              <p className="mt-3 text-sm leading-7 text-axis-muted">{related.description}</p>
            </div>
          ) : null}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft">
              Continue reading
            </p>
            <ul className="mt-3 grid gap-3">
              {relatedPosts.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="inline-flex min-h-10 items-center text-sm font-semibold text-axis-silver hover:text-axis-goldSoft"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-axis-goldSoft"
                >
                  Discuss your groundworks package <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </article>
  );
}
