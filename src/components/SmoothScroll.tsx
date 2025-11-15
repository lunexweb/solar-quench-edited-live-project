interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Temporarily disable Locomotive Scroll while we debug
 * conflicting layout styles that prevented any scrolling.
 * This component now simply renders children to restore
 * native browser scroll behavior.
 */
const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return <>{children}</>;
};

export default SmoothScroll;
