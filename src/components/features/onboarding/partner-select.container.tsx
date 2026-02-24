"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useReadingStore, useUIStore } from "@/stores";
import type { Contact } from "@/types/contact";
import { PartnerSelectView } from "./partner-select";

export function PartnerSelectContainer() {
  const contacts = useReadingStore((s) => s.contacts);
  const selectedPartnerId = useReadingStore((s) => s.selectedPartnerId);
  const selectPartner = useReadingStore((s) => s.selectPartner);
  const updateContact = useReadingStore((s) => s.updateContact);
  const setOnboardingStep = useUIStore((s) => s.setOnboardingStep);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  const handleSelect = (id: string) => {
    selectPartner(id);
  };

  const handleEditStart = (contact: Contact) => {
    setEditingId(contact.id);
    setEditingName(contact.name);
  };

  const handleEditSave = () => {
    if (editingId && editingName.trim()) {
      updateContact(editingId, editingName.trim());
    }
    setEditingId(null);
    setEditingName("");
  };

  const handleConfirm = () => {
    if (!selectedPartnerId) {
      toast.error("파트너를 선택해주세요.");
      return;
    }
    setOnboardingStep("failure-preview");
  };

  return (
    <PartnerSelectView
      contacts={contacts}
      selectedId={selectedPartnerId}
      editingId={editingId}
      editingName={editingName}
      onSelect={handleSelect}
      onEditStart={handleEditStart}
      onEditChange={setEditingName}
      onEditSave={handleEditSave}
      onConfirm={handleConfirm}
    />
  );
}
