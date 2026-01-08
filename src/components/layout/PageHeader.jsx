import Breadcrumb from "./Breadcrumb";

export default function PageHeader({ title, breadcrumbs }) {
  return (
    <section className="bg-[#F7FDF9] py-10">
      <div className="max-w-[1440px] mx-auto px-6 text-right">

        <Breadcrumb items={breadcrumbs} />

        <h1 className="mt-6 text-3xl md:text-4xl leading-[48px] font-bold text-gray-900">
          {title}
        </h1>

      </div>
    </section>
  );
}
