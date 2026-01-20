import { NextRequest, NextResponse } from 'next/server';
import { options } from '@/app/constants';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';

  if (!query) {
    return NextResponse.json({ results: [], total_pages: 0, total_results: 0 });
  }

  try {
    const encodedQuery = query.split(' ').join('%20');
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${encodedQuery}&page=${page}`,
      {
        ...options,
        next: {
          revalidate: 3600 // Cache for 1 hour
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch search results' },
      { status: 500 }
    );
  }
}
