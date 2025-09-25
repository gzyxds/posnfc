'use client'

import React, { useState } from 'react';

interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  showPageSizeSelector?: boolean;
}

/**
 * 新闻分页组件
 * 提供页码导航、页面大小选择等功能
 */
const NewsPagination: React.FC<NewsPaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onPageSizeChange,
  showPageSizeSelector = true
}) => {
  const [jumpPage, setJumpPage] = useState('');

  /**
   * 生成页码数组
   * 智能显示页码，避免页码过多
   */
  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7; // 最多显示7个页码

    if (totalPages <= maxVisiblePages) {
      // 如果总页数不超过最大显示数，显示所有页码
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 复杂的页码显示逻辑
      if (currentPage <= 4) {
        // 当前页在前面
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // 当前页在后面
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // 当前页在中间
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  /**
   * 处理页码点击
   */
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  /**
   * 处理页面大小变更
   */
  const handlePageSizeChange = (newPageSize: number) => {
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
    }
  };

  /**
   * 获取当前页显示的数据范围
   */
  const getDataRange = () => {
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);
    return { start, end };
  };

  /**
   * 处理跳转页码变更
   */
  const handleJumpPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJumpPage(e.target.value);
  };

  /**
   * 处理跳转页码提交
   */
  const handleJumpPageSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const page = parseInt(jumpPage);
      if (page >= 1 && page <= totalPages) {
        handlePageClick(page);
        setJumpPage('');
      }
    }
  };

  // 如果没有数据或只有一页，不显示分页
  if (totalItems === 0 || totalPages <= 1) {
    return null;
  }

  const { start, end } = getDataRange();
  const pageNumbers = generatePageNumbers();

  return (
    <div className="bg-white shadow-sm w-full">
      <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
        {/* 数据统计信息 */}
        <div className="text-xs sm:text-sm md:text-base text-gray-600 order-2 lg:order-1 xl:order-1 text-center lg:text-left xl:text-left">
          <span className="hidden sm:inline">显示第 </span>
          <span className="sm:hidden">第</span>
          <span className="font-medium text-gray-900">{start}</span>
          <span className="hidden sm:inline"> 到 </span>
          <span className="sm:hidden">-</span>
          <span className="font-medium text-gray-900">{end}</span>
          <span className="hidden sm:inline"> 条，</span>
          <span className="sm:hidden">/</span>
          <span className="hidden sm:inline">共 </span>
          <span className="font-medium text-gray-900">{totalItems}</span>
          <span className="hidden sm:inline"> 条新闻</span>
          <span className="sm:hidden">条</span>
        </div>

        {/* 页码导航 */}
        <div className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2 order-1 lg:order-2 xl:order-2">
          {/* 上一页按钮 */}
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base transition-colors rounded-md ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'
            }`}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 页码按钮 */}
          {pageNumbers.map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="px-1 sm:px-1.5 md:px-2 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base text-gray-400">...</span>
              ) : (
                <button
                  onClick={() => handlePageClick(page as number)}
                  className={`px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg transition-colors rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white font-medium shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}

          {/* 下一页按钮 */}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base transition-colors rounded-md ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100 active:bg-gray-200'
            }`}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 页面大小选择器 */}
        {showPageSizeSelector && onPageSizeChange && (
          <div className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2 order-3">
            <span className="text-xs sm:text-sm md:text-base text-gray-600 hidden md:inline lg:hidden xl:inline">每页显示:</span>
            <span className="text-xs sm:text-sm md:text-base text-gray-600 hidden sm:inline md:hidden lg:inline xl:hidden">每页:</span>
            <span className="text-xs sm:text-sm md:text-base text-gray-600 sm:hidden">显示:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium rounded-md"
            >
              <option value={10}>10条</option>
              <option value={20}>20条</option>
              <option value={50}>50条</option>
              <option value={100}>100条</option>
            </select>
          </div>
        )}
      </div>

      {/* 快速跳转 */}
      {totalPages > 10 && (
        <div className="mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-gray-200 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3">
            <span className="text-xs sm:text-sm md:text-base text-gray-600 hidden sm:inline">跳转到第</span>
            <span className="text-xs sm:text-sm md:text-base text-gray-600 sm:hidden">跳转</span>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <input
                type="number"
                min={1}
                max={totalPages}
                value={jumpPage}
                onChange={handleJumpPageChange}
                onKeyDown={handleJumpPageSubmit}
                className="w-12 sm:w-14 md:w-16 px-1.5 sm:px-2 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base text-center border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md"
              />
              <span className="text-xs sm:text-sm md:text-base text-gray-600 hidden sm:inline">页</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPagination;