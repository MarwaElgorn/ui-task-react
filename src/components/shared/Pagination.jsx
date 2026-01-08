import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const [showMore, setShowMore] = useState(false)

  // middle pages (3 pages only)
  const middlePages = []
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 1 && i < totalPages) {
      middlePages.push(i)
    }
  }

  // pages after current (for ellipsis dropdown)
  const nextPages = []
  for (
    let i = currentPage + 1;
    i <= Math.min(currentPage + 3, totalPages - 1);
    i++
  ) {
    nextPages.push(i)
  }

  return (
    <div className="relative flex items-center justify-center gap-4 text-sm text-gray-800 mt-6">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="p-1 disabled:opacity-40"
      >
        <FiChevronLeft size={18} />
      </button>

      {/* First page */}
      <button
        onClick={() => onPageChange(1)}
        className="relative px-2"
      >
        1
        {currentPage === 1 && (
          <span className="absolute left-0 right-0 -bottom-2 h-[4px] bg-green-700 rounded-full" />
        )}
      </button>

      {/* Left ellipsis */}
      {currentPage > 3 && (
        <div className="px-3 py-2 border border-gray-300 rounded-md">
          ...
        </div>
      )}

      {/* Middle pages */}
      {middlePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className="relative px-2"
        >
          {page}
          {page === currentPage && (
            <span className="absolute left-0 right-0 -bottom-2 h-[4px] bg-green-700 rounded-full" />
          )}
        </button>
      ))}

      {/* Right ellipsis with dropdown */}
      {currentPage < totalPages - 2 && (
        <div className="relative">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            ...
          </button>

          {showMore && (
            <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white border rounded-md shadow-md p-2 flex gap-2 z-10">
              {nextPages.map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    onPageChange(page)
                    setShowMore(false)
                  }}
                  className="relative px-2"
                >
                  {page}
                  {page === currentPage && (
                    <span className="absolute left-0 right-0 -bottom-2 h-[4px] bg-green-700 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Last page */}
      <button
        onClick={() => onPageChange(totalPages)}
        className="relative px-2"
      >
        {totalPages}
        {currentPage === totalPages && (
          <span className="absolute left-0 right-0 -bottom-2 h-[4px] bg-green-700 rounded-full" />
        )}
      </button>

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="p-1 disabled:opacity-40"
      >
        <FiChevronRight size={18} />
      </button>
    </div>
  )
}
