import { createFileRoute } from '@tanstack/react-router';
import { InstitutionsPage, pageHead } from '@/components/tek-site';
export const Route = createFileRoute('/for-partner-institutions')({ head: () => pageHead('For Partner Institutions', "Your Gateway to Asia's Best Talent"), component: InstitutionsPage });