"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import WorkspaceForm from "./WorkspaceForm";

export default function NewWorkspaceDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>

<DialogTrigger
  render={
    <Button className="rounded-xl bg-blue-600 hover:bg-blue-700">
      <Plus className="mr-2 h-4 w-4" />
      New Workspace
    </Button>
  }
/>

      <DialogContent className="border-zinc-800 bg-zinc-950 text-white sm:max-w-xl">

        <DialogHeader>
          <DialogTitle className="text-2xl">
            Create Workspace
          </DialogTitle>
        </DialogHeader>

        <WorkspaceForm
  onSuccess={() => setOpen(false)}
/>
      </DialogContent>

    </Dialog>
  );
}