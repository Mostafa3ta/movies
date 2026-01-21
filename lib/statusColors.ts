/**
 * Get appropriate color class based on status value
 * @param status - The status string from TMDB API
 * @param type - Whether it's a 'movie' or 'show'
 * @returns Tailwind color class string
 */
export function getStatusColor(status: string, type: 'movie' | 'show'): string {
    const statusLower = status.toLowerCase();
    
    if (type === 'movie') {
        if (statusLower === 'released') return 'text-green-400';
        if (statusLower === 'post production') return 'text-blue-400';
        if (statusLower === 'in production') return 'text-yellow-400';
        if (statusLower === 'planned') return 'text-purple-400';
        if (statusLower === 'rumored') return 'text-gray-400';
        if (statusLower === 'canceled') return 'text-red-400';
    } else {
        if (statusLower === 'returning series') return 'text-green-400';
        if (statusLower === 'ended') return 'text-blue-400';
        if (statusLower === 'canceled' || statusLower === 'cancelled') return 'text-red-400';
        if (statusLower === 'in production') return 'text-yellow-400';
        if (statusLower === 'planned') return 'text-purple-400';
        if (statusLower === 'pilot') return 'text-orange-400';
    }
    
    // Default fallback
    return 'text-gray-300';
}
