import { ElectricCard } from "@/components/ui/electric-card";

export default function DemoElectricCard() {
    return <main
        style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            gap: "1rem",
            padding: "2rem",
            backgroundColor: "oklch(0.145 0 0)",
        }}
    >
        {/* Swirl variant (matches your "Original") */}
        <ElectricCard
            variant="swirl"
            color="#dd8448"
            badge="Dramatic"
            title="Original"
            description="In case you'd like to emphasize something very dramatically."
        />

        {/* Hue variant (matches your "Hue") */}
        <ElectricCard
            variant="hue"
            color="DodgerBlue"
            badge="Dramatic"
            title="Hue"
            description="In case you'd like to emphasize something very dramatically."
        />
    </main>
}
