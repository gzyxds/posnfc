import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * 面包屑导航组件
 * 用于显示当前页面在网站层级中的位置
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className={`flex ${className}`} aria-label="面包屑导航">
      <ol className="inline-flex items-center space-x-0.5 sm:space-x-1 md:space-x-2 lg:space-x-3 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {/* 分隔符 */}
            {index > 0 && (
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 mx-0.5 sm:mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            {/* 面包屑项 */}
            {item.current || !item.href ? (
              <span
                className={`text-xs sm:text-sm md:text-base font-medium truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-none ${
                  item.current
                    ? 'text-blue-600 font-bold cursor-default'
                    : 'text-gray-700'
                }`}
                aria-current={item.current ? 'page' : undefined}
                title={item.label} // 添加title属性，显示完整文本
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-xs sm:text-sm md:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-none py-0.5"
                title={item.label} // 添加title属性，显示完整文本
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

/**
 * 生成新闻相关的面包屑导航
 */
export const generateNewsBreadcrumb = (
  newsTitle?: string,
  category?: string
): BreadcrumbItem[] => {
  const items: BreadcrumbItem[] = [
    {
      label: '首页',
      href: '/'
    },
    {
      label: '新闻资讯',
      href: '/news'
    }
  ];

  // 如果有分类，添加分类面包屑
  if (category) {
    items.push({
      label: category,
      href: `/news?category=${encodeURIComponent(category)}`
    });
  }

  // 如果有新闻标题，添加当前新闻面包屑
  if (newsTitle) {
    items.push({
      label: newsTitle.length > 30 ? `${newsTitle.substring(0, 30)}...` : newsTitle,
      current: true
    });
  }

  return items;
};

/**
 * 新闻面包屑组件的便捷封装
 */
export const NewsBreadcrumb: React.FC<{
  newsTitle?: string;
  category?: string;
  className?: string;
}> = ({ newsTitle, category, className }) => {
  const items = generateNewsBreadcrumb(newsTitle, category);
  return <Breadcrumb items={items} className={className} />;
};

export default Breadcrumb;