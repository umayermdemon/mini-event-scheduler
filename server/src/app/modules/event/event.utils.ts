export const categorizeEvent = (
  title: string,
  notes?: string
): "Work" | "Personal" | "Other" => {
  const workKeywords = ["meeting", "project", "client"];
  const personalKeywords = ["birthday", "family", "friend"];

  const titleLower = title.toLowerCase();
  const notesLower = notes ? notes.toLowerCase() : "";

  if (
    workKeywords.some(
      (keyword) => titleLower.includes(keyword) || notesLower.includes(keyword)
    )
  ) {
    return "Work";
  }

  if (
    personalKeywords.some(
      (keyword) => titleLower.includes(keyword) || notesLower.includes(keyword)
    )
  ) {
    return "Personal";
  }

  return "Other";
};
