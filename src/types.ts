interface InfiniteScrollProps {
  isLoading: boolean;
  loadMore: () => void;
  hasMore: boolean;
  children: React.ReactNode;
  loadingComponent: React.ReactNode;
  style?: React.CSSProperties;
  threshold?: number;
  searchKeyword?: string;
  debouncedLoadMore?: () => void;
}

export { InfiniteScrollProps };
