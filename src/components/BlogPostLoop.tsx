import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface ApiResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

interface BlogPostLoopProps {
  postsToShow?: number;
  showTags?: boolean;
  showReactions?: boolean;
  showViews?: boolean;
  gridColumns?: number;
  readMoreText?: string;
  loadingText?: string;
}

const BlogPostLoop: React.FC<BlogPostLoopProps> = ({
  postsToShow = 6,
  showTags = true,
  showReactions = true,
  showViews = true,
  gridColumns = 3,
  readMoreText = "Read More",
  loadingText = "Loading posts..."
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/posts?limit=${postsToShow}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: ApiResponse = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [postsToShow]);

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const getGridClasses = () => {
    switch (gridColumns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-gray-600 text-lg">{loadingText}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-600 font-medium">Error loading posts</div>
        <div className="text-red-500 text-sm mt-1">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className={`grid ${getGridClasses()} gap-6`}>
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            {/* Post Header */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h2>

              {/* Post Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {truncateText(post.body)}
              </p>

              {/* Tags */}
              {showTags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Post Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  {showReactions && (
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center">
                        👍 {post.reactions.likes}
                      </span>
                      <span className="flex items-center">
                        👎 {post.reactions.dislikes}
                      </span>
                    </div>
                  )}
                  {showViews && (
                    <span className="flex items-center">
                      👁️ {post.views} views
                    </span>
                  )}
                </div>
              </div>

              {/* Read More Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                {readMoreText}
              </button>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">No posts found</div>
        </div>
      )}
    </div>
  );
};

export default BlogPostLoop;