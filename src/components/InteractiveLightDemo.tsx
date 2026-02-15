import { InteractiveLight } from "@/components/ui/interactive-light";

export default function DemoOne() { // Renamed to default export or function DemoOne
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
            <InteractiveLight
                shineColor="#fff200"
                lampHeight="10vh"
                lampWidth="10vh"
                transitionDuration={500}
            />
            <span className="pointer-events-none text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap z-20 text-white">
                Interactive Light
            </span>
        </div>
    )
}
