import { createFileRoute } from '@tanstack/react-router';
import { AgentsPage, pageHead } from '@/components/tek-site';
export const Route = createFileRoute('/for-sub-agents')({ head: () => pageHead('For Sub-Agents', 'Join Our Growing Network of Trusted Local Representatives'), component: AgentsPage });