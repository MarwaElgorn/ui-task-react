import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setQuery, setSort } from "@/features/news/newsSlice";
import { selectVisibleNews } from "@/features/news/selectors";

import PageHeader from "@/components/layout/PageHeader";
import ControlsBar from "@/components/controls/ControlsBar";
import CardsGrid from "@/components/cards/CardsGrid";
import NewsCard from "@/components/cards/NewsCard";
import Pagination from "@/components/shared/Pagination";
import Drawer from "@/components/drawer/Drawer";
import NewsDetails from "@/components/drawer/NewsDetails";

const ITEMS_PER_PAGE = 6;
const TOTAL_PAGES = 999;

export default function NewsPage() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const news = useSelector(selectVisibleNews);
  const query = useSelector((state) => state.news.query);
  const sort = useSelector((state) => state.news.sort);

  // رجّعي الصفحة الأولى عند البحث أو الترتيب
  useEffect(() => {
    setCurrentPage(1);
  }, [query, sort]);

  // اقفل scroll الصفحة عند فتح الـ drawer
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  // Pagination دائري (mock)
  const paginatedNews =
    news.length === 0
      ? []
      : Array.from({ length: ITEMS_PER_PAGE }, (_, i) => {
          const index =
            ((currentPage - 1) * ITEMS_PER_PAGE + i) % news.length;
          return news[index];
        });

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="الأخبار والبيانات الصحفية"
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "المركز الإعلامي", href: "/media-center" },
          { label: "الأخبار والبيانات الصحفية" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <ControlsBar
          searchValue={query}
          sortValue={sort}
          onSearch={(e) => dispatch(setQuery(e.target.value))}
          onSort={(e) => dispatch(setSort(e.target.value))}
        />

        <CardsGrid>
          {paginatedNews.map((item, idx) => (
            <NewsCard
              key={`${item.id}-${currentPage}-${idx}`}
              image={item.image}
              description={item.description}
              date={item.hijriDate}
              onReadMore={() => setSelectedItem(item)}
            />
          ))}
        </CardsGrid>

        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={setCurrentPage}
        />
      </div>

      <Drawer
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
      >
        <NewsDetails item={selectedItem} />
      </Drawer>
    </div>
  );
}
