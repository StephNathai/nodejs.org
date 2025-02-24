import BaseLayout from './BaseLayout';
import LocalizedLink from '../components/LocalizedLink';
import { useNextraContext } from '../hooks/useNextraContext';
import { getTimeComponent } from '../util/getTimeComponent';
import type { FC, PropsWithChildren } from 'react';

const CategoryIndexLayout: FC<PropsWithChildren> = ({ children }) => {
  const { blogData, frontMatter } = useNextraContext();

  return (
    <BaseLayout>
      <div className="container" dir="auto">
        <h2>{frontMatter.title}</h2>

        <ul className="blog-index">
          {blogData?.posts.map(post => (
            <li key={post.slug}>
              {getTimeComponent(post.date, '%d %b %y')}
              <LocalizedLink href={post.slug}>{post.title}</LocalizedLink>
            </li>
          ))}
        </ul>

        {children}
      </div>
    </BaseLayout>
  );
};

export default CategoryIndexLayout;
