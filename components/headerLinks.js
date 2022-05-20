import {
  SearchIcon,
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
} from '@heroicons/react/solid';

export const headerLinks = [
  {
    id: 1,
    icon: <SearchIcon />,
    text: 'All',
    selected: true,
  },
  {
    id: 2,
    icon: <PhotographIcon />,
    text: 'Images',
    selected: false,
  },
  {
    id: 3,
    icon: <PlayIcon />,
    text: 'Videos',
    selected: false,
  },
  {
    id: 4,
    icon: <NewspaperIcon />,
    text: 'News',
    selected: false,
  },
  {
    id: 5,
    icon: <MapIcon />,
    text: 'Maps',
    selected: false,
  },
  {
    id: 6,
    icon: <DotsVerticalIcon />,
    text: 'More',
    selected: false,
  },
];
