"use client";

import { useState } from "react";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import toast from "react-hot-toast";

export default function WorkspaceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createWorkspace = useMutation(api.workspaces.createWorkspace);

  const handleCreateWorkspace = async () => {
  if (!title.trim() || !description.trim()) {
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    await createWorkspace({
      title,
      description,
    });

    toast.success("Workspace created successfully!");

    setTitle("");
    setDescription("");
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong.");
  }
};

  return (
    <div className="max-w-xl mx-auto space-y-6">

      <div className="space-y-2">
        <Label>Workspace Name</Label>

        <Input
          placeholder="AI Research Project"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>

        <Textarea
          placeholder="Describe your research workspace..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Button
  className="w-full"
  onClick={handleCreateWorkspace}
>
        Create Workspace
      </Button>

    </div>
  );
}

