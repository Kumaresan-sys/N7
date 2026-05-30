import { Check } from "lucide-react";

type CheckListProps = {
  items: string[];
  checkClass?: string;
  checkSize?: number;
  checkStroke?: number;
};

export default function CheckList({
  items,
  checkClass = "feature-check",
  checkSize = 13,
  checkStroke = 3,
}: CheckListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <span className={checkClass} aria-hidden="true">
            <Check size={checkSize} strokeWidth={checkStroke} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
