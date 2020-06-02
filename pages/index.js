import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./_app"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
