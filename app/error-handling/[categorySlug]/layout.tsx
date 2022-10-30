import { fetchCategoryBySlug, type PageProps } from '@/lib/getCategories';
import ClickCounter from '@/ui/ClickCounter';
import SubCategoryNav from './SubCategoryNav';

export default async function Layout({ children, params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;
  return (
    <div className="space-y-9">
      <div>
        <div className="flex items-center justify-between">
          <SubCategoryNav category={category} />
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
