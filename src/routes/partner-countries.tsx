import { createFileRoute } from '@tanstack/react-router';
import { CountriesPage, pageHead } from '@/components/tek-site';
export const Route = createFileRoute('/partner-countries')({ head: () => pageHead('Partner Countries', 'Our Partner Countries — Where We Place Students'), component: CountriesPage });