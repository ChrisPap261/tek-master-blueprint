import { createFileRoute } from '@tanstack/react-router';
import { ContactPage, pageHead } from '@/components/tek-site';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Contact', "Contact Us — Let's Start a Conversation"), component: ContactPage });