import React from 'react';
import Pagination from './Pagination';

const SearchResults = ({ results }) => {
  return (
    <div className='w-full mx-auto flex flex-col  space-y-5 text-sm md:text-lg text-[#2a2a2a] px-5 lg:px-36 mt-4 '>
      <p className='text-[1rem] text-[#5b5b5b] mt-[-0.8rem]'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((item) => (
        <div className='max-w-2xl  mb-8' key={item.link}>
          <div className='group'>
            <a className='line-clamp-1' href={item.link}>
              {item.formattedUrl}
            </a>
            <a href={item.link}>
              <h2 className='text-lg text-blue-600 group-hover:underline line-clamp-1'>
                {item.title}
              </h2>
            </a>
          </div>
          <p className='line-clamp-2'>{item.snippet}</p>
        </div>
      ))}

      <Pagination />
    </div>
  );
};

export default SearchResults;
