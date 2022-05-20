import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Button from './Button';

const Pagination = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className='flex items-center w-full max-w-lg'>
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className='flex flex-col flex-grow items-center text-blue-700'>
            <Button
              className='hover:border-0 text-blue-700 '
              btnText={<ChevronLeftIcon className='h-8' />}
            />
            <p className='text-[1.1rem]'>Prev</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className='flex flex-col flex-grow items-center text-blue-700'>
          <Button
            className='hover:border-0 text-blue-700'
            btnText={<ChevronRightIcon className='h-8' />}
          />
          <p className='text-[1.1rem]'>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default Pagination;
