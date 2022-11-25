import SimpleBlogPostCard from "../components/Card/SimpleBlogPostCard";
import BasicButtons from "../components/Molecules/BasicButtons";
import ActionMediaCard from "../components/Surfaces/Card/ActionMediaCard";
import BasicCard from "../components/Surfaces/Card/BasicCard";
import RecipeReviewCard from "../components/Surfaces/Card/ComplexInteractionCard";
import MediaCard from "../components/Surfaces/Card/MediaCard";
import OutlinedCard from "../components/Surfaces/Card/OutlineCard";

export default {
  title: "MUI / SURFACES / Card",
};

export const Basic = () => (
  <>
    <BasicCard />
  </>
);

export const Outline = () => (
  <>
    <OutlinedCard />
  </>
);

export const ComplexInteraction = () => (
  <>
    <RecipeReviewCard />
  </>
);

export const Media = () => (
  <>
    <MediaCard />
  </>
);

export const ActionMedia = () => (
  <>
    <ActionMediaCard />
  </>
);


