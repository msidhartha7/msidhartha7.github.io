import { Travel } from '@/types';

export const travels: Travel[] = [
  {
    id: 'bengaluru',
    location: 'Bengaluru',
    country: 'India',
    date: '2022-08',
    description: 'Moved to Bengaluru to join GoTo Group. The city of gardens and tech hubs has been my home for the past few years. Exploring the vibrant tech scene, amazing food culture, and beautiful weather.',
    images: [],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    tags: ['work', 'tech', 'food'],
  },
  {
    id: 'mumbai',
    location: 'Mumbai',
    country: 'India',
    date: '2022-01',
    description: 'Internship at BrowserStack in the financial capital of India. Experienced the fast-paced life, amazing street food, and the beautiful Marine Drive.',
    images: [],
    coordinates: { lat: 19.0760, lng: 72.8777 },
    tags: ['internship', 'coastal'],
  },
  {
    id: 'bhubaneswar',
    location: 'Bhubaneswar',
    country: 'India',
    date: '2018-2022',
    description: 'Studied Computer Science at IIIT Bhubaneswar. The temple city where I spent my college years, learning, building, and growing as a developer.',
    images: [],
    coordinates: { lat: 20.2961, lng: 85.8245 },
    tags: ['education', 'college'],
  },
  // Add more travel experiences as they come
];
