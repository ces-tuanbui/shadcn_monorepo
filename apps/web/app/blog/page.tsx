import Link from "next/link";
import { StrapiImage } from "@workspace/ui/components/custom/strapi-image";
import { Card, CardContent } from "@workspace/ui/components/ui/card";
import { Search } from "@workspace/ui/components/custom/search";
import { PaginationComponent } from "@workspace/ui/components/custom/pagination";
import { CategorySelect } from "@workspace/ui/components/custom/category-select";
import { formatDate } from "@workspace/ui/lib/utils";
import { getBlogPosts } from "@/data/loaders";
import { getCategories } from "@/data/loaders";

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string; category?: string }>;
}

interface PostProps {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  image: {
    id: number;
    documentId: string;
    url: string;
    alternativeText: null | string;
    name: string;
  };
  category: {
    id: number;
    documentId: string;
    text: string;
  };
}

export default async function BlogRoute({ searchParams }: PageProps) {
  const resolveParams = await searchParams;
  const currentPage = Number(resolveParams?.page) || 1;
  const query = resolveParams?.query ?? "";
  const category = resolveParams?.category ?? "";
  const categories = await getCategories();

  const { data, meta } = await getBlogPosts(currentPage, query, category);

  const total = Number(meta?.pagination?.pageCount);
  const posts = data as PostProps[];
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Articles
        </span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Our Blog
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl text-center">
        Checkout some of our cool articles. We write about the latest trends in
        tech, design and much more.
      </p>
      <CategorySelect categories={categories} />
      <Search />
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {posts &&
          posts.map((item: PostProps) => {
            return (
              <div key={item.documentId}>
                <Card className="h-full shadow-lg border-none">
                  <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                    <div className="relative h-52 w-full">
                      <StrapiImage
                        alt={item.image.alternativeText}
                        src={item.image.url}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 px-5">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="mb-auto text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full outline outline-1 outline-primary text-primary px-3 py-0.5 text-sm">
                          {item.category.text}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(item.publishedAt)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
      <PaginationComponent pageCount={total} />
    </section>
  );
}
