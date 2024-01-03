import { CardRepositorie } from "./CardRepositorie";

export function Repositories() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap w-2/4 gap-10 px-6 py-4">
        <CardRepositorie />
        <CardRepositorie />
        <CardRepositorie />
        <CardRepositorie />
        <CardRepositorie />
        <CardRepositorie />
      </div>
    </>
  );
}
