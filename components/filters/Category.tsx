import Link from 'next/link';

const Category = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link href={'/category/Brands and stores'}>
        <button className="bg-white px-5 py-2 text-gray-400 rounded-3xl">
          Brands and stores
        </button>
      </Link>
      <Link href={'/category/Artists and concerts'}>
        <button className="bg-white px-5 py-2 text-gray-400 rounded-3xl">
          Artists and concerts
        </button>
      </Link>
      <Link href={'/category/tournaments'}>
        <button className="bg-white px-5 py-2 text-gray-400 rounded-3xl">
          tournaments
        </button>
      </Link>
    </div>
  );
};

export default Category;
