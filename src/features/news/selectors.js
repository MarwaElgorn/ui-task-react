import { createSelector } from "@reduxjs/toolkit";

export const selectVisibleNews = createSelector(
  [
    (state) => state.news.items,
    (state) => state.news.query,
    (state) => state.news.sort,
  ],
  (items, query, sort) => {
    let result = items;

    if (query) {
      result = result.filter(
        (item) =>
          item.title.includes(query) ||
          item.description.includes(query)
      );
    }

    if (sort === "oldest") {
      result = [...result].reverse();
    }

    return result;
  }
);
