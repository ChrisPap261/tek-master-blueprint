import { createFileRoute } from '@tanstack/react-router';
import { HomePage, pageHead } from '@/components/tek-site';
export const Route = createFileRoute('/')({ head: () => pageHead('Home', 'Your Trusted Partner in International Student Recruitment'), component: HomePage });
