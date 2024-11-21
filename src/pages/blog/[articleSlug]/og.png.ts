import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';

interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<'blog'> };
}

export async function GET({ props }: Props) {
  const { post } = props;

  const TrispaceSemiCondensedBold = fs.readFileSync(path.resolve('./public/fonts/TrispaceSemiCondensed-Bold.ttf'));

  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            tw: 'flex h-full w-full flex-col items-start justify-end p-16',
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '48px',
                    fontFamily: 'Trispace SemiCondensed Bold',
                    width: '85%',
                    textWrap: 'balance',
                  },
                  children: post.data.title,
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'flex items-center mt-4',
                  children: post.data.tags.map((tag, i) => ({
                    type: 'div',
                    props: {
                      tw: `text-md uppercase font-bold tracking-wide ${i > 0 ? 'px-2' : 'pr-2'}`,
                      children: tag,
                    },
                  })),
                },
              }
            ],
          },
        },
      ],
      tw: 'w-full h-full flex',
      style: {
        backgroundColor: '#111111',
        color: '#E4E6E7',
      },
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'Trispace SemiCondensed Bold',
        data: TrispaceSemiCondensedBold.buffer,
        style: 'normal',
      },
    ],
  });
}

export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  return blogPosts.map((post) => ({
    params: { articleSlug: post.slug },
    props: { post },
  }));
}
