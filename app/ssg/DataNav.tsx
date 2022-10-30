'use client';

import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegments } from 'next/navigation';

const DataNav = ({ ids }: { ids: { id: string }[] }) => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/ssg" isActive={!selectedLayoutSegments}>
        Home
      </TabNavItem>

      {ids.map(({ id }) => (
        <TabNavItem
          key={id}
          href={`/ssg/${id}`}
          isActive={id === selectedLayoutSegments}
        >
          Post #{id}
        </TabNavItem>
      ))}
    </div>
  );
};

export default DataNav;
