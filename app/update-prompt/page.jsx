import dynamic from "next/dynamic";

const UpdatePrompt = dynamic(() => import("./UpdatePrompt"), {
  ssr: false, // This disables server-side rendering for this page
});

const UpdatePromptPage = () => (
  <div>
    <UpdatePrompt />
  </div>
);

export default UpdatePromptPage;
