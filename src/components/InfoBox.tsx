import { type ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  serverity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;

  if (mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );

  const { serverity } = props;

  if (mode === "warning")
    return (
      <aside className={`infobox infobox-warning warning--${serverity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
}
