import Image from 'next/image'

/**
 * 产品数据类型定义
 */
interface Product {
  id: number
  name: string
  href: string
  price: string
  availability: string
  imageSrc: string
  imageAlt: string
}

/**
 * 产品列表数据
 */
const products: Product[] = [
  {
    id: 1,
    name: '费用管理系统',
    href: '#',
    price: '¥299/月',
    availability: '现货供应',
    imageSrc: '/images/screenshots/product-work.svg',
    imageAlt: '费用管理系统界面截图，展示费用跟踪和报销功能',
  },
  {
    id: 2,
    name: '薪资管理平台',
    href: '#',
    price: '¥399/月',
    availability: '现货供应',
    imageSrc: '/images/screenshots/product-work.svg',
    imageAlt: '薪资管理平台界面截图，展示工资计算和发放功能',
  },
  {
    id: 3,
    name: '智能报表工具',
    href: '#',
    price: '¥199/月',
    availability: '现货供应',
    imageSrc: '/images/screenshots/product-work.svg',
    imageAlt: '智能报表工具界面截图，展示数据分析和可视化功能',
  },
  {
    id: 4,
    name: '税务处理系统',
    href: '#',
    price: '¥499/月',
    availability: '现货供应',
    imageSrc: '/images/screenshots/product-work.svg',
    imageAlt: '税务处理系统界面截图，展示增值税申报和处理功能',
  },
  {
    id: 5,
    name: '客户关系管理',
    href: '#',
    price: '¥359/月',
    availability: '现货供应',
    imageSrc: '/images/screenshots/product-work.svg',
    imageAlt: '客户关系管理系统界面截图，展示联系人和客户信息管理',
  },
  {
    id: 6,
    name: '库存管理系统',
    href: '#',
    price: '¥279/月',
    availability: '现货供应',
    imageSrc: '/images/screenshots/product-work.svg',
    imageAlt: '库存管理系统界面截图，展示库存跟踪和管理功能',
  },
]

/**
 * 产品网格展示组件
 *
 * 功能特点：
 * - 响应式网格布局（移动端1列，平板2列，桌面3列）
 * - 产品图片悬停效果
 * - 使用 Next.js Image 组件进行图片优化
 * - 支持产品名称、价格、可用性展示
 *
 * @returns {JSX.Element} 产品网格组件
 */
export default function ProductGrid() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1800px] overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-500 italic">{product.availability}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
