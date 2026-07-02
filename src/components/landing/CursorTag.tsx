import { MousePointer2 } from "lucide-react";

const CursorTag = ({ label }: { label: string }) => (
  <>
    <MousePointer2 className="w-4 h-4 text-ink" />
    <span className="ml-3 mt-0.5 rounded-full bg-ink text-white text-[11px] font-semibold px-2.5 py-1 shadow-lg whitespace-nowrap">{label}</span>
  </>
);

export default CursorTag;
