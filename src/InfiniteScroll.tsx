import React, { forwardRef, useEffect, useRef } from "react";
import { InfiniteScrollProps } from "./types";

const InfiniteScroll = (
  {
    isLoading,
    loadMore,
    hasMore,
    children,
    loadingComponent,
    style,
    threshold = 0.1,
    searchKeyword,
    debouncedLoadMore,
  }: InfiniteScrollProps,
  ref: React.RefObject<any>,
) => {
  const firstRender = useRef(true);
  const loaderRef = useRef(null);
  useEffect(() => {
    const loader = loaderRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isLoading && hasMore) {
            loadMore();
          }
        });
      },
      { threshold },
    );

    if (loader) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loader) {
        observer.disconnect();
      }
    };
  }, [isLoading, hasMore, loadMore]);

  useEffect(() => {
    // To prevent debouncedLoadMore from being called on the initial load (to avoid duplicate AJAX requests), implement logic to skip the call on the first trigger.
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    debouncedLoadMore(); // When the search query changes, call the debounced function to trigger loadMore.
  }, [searchKeyword]);

  return (
    <div ref={ref} style={style ?? { height: "100%", overflow: "scroll" }}>
      {children}
      <div ref={loaderRef}>
        {isLoading ? (
          loadingComponent || (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                margin: "4px 0",
              }}
            >
              <div>Loading...</div>
            </div>
          )
        ) : (
          <div
            style={{
              fontSize: "1px",
              color: "transparent",
              width: "1px",
              height: "1px",
            }}
          >
            end
          </div>
        )}
      </div>
    </div>
  );
};

export default forwardRef(InfiniteScroll);
