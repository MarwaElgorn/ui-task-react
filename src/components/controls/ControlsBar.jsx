import SearchInput from "./SearchInput";
import SortSelect from "./SortSelect";

export default function ControlsBar({
  searchValue,
  onSearch,
  sortValue,
  onSort,
}) {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row-reverse
        md:items-end
        lg:justify-between
        gap-4
        lg:gap-6
        mb-8
      "
    >
      <SearchInput
        value={searchValue}
        onChange={onSearch}
        className="w-full lg:max-w-[360px]"
      />

      <SortSelect
        value={sortValue}
        onChange={onSort}
        className="w-full lg:max-w-[200px]"
      />
    </div>
  );
}
