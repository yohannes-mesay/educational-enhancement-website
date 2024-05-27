import { lineSpinner } from "ldrs";

lineSpinner.register();
export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <l-line-spinner
        size="110"
        stroke="6"
        speed="1"
        color="black"
      ></l-line-spinner>
    </div>
  );
}
