// page.jsx
import { Suspense } from "react";
import UpdatePrompt from "./UpdatePrompt"; // Import the refactored component

const UpdatePromptPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <UpdatePrompt />
  </Suspense>
);

export default UpdatePromptPage;
