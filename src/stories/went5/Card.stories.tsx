import BlogPostCardIconMain from "../../components/Card/BlogPostCardIconMain";
import BoxBlogPostCard from "../../components/Card/BoxBlogPostCard";
import SimpleBlogPostCard from "../../components/Card/SimpleBlogPostCard";

export default {
  title: "Orizinal  / Card",
};

export const SimpleBlogPost = () => (
  <>
    <SimpleBlogPostCard />
  </>
);

export const BoxBlogPost = () => (
  <>
    <BoxBlogPostCard />
  </>
);

export const BlogPostCardIcon = () => <BlogPostCardIconMain />;
