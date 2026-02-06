import { Home, User, Zap, Calendar, Star, Send } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
    const navItems = [
        { name: 'Home', url: '#home', icon: Home },
        { name: 'About', url: '#about', icon: User },
        { name: 'Events', url: '#events', icon: Zap },
        { name: 'Schedule', url: '#timeline', icon: Calendar },
        { name: 'Highlights', url: '#highlights', icon: Star },
        { name: 'Contact', url: '#contact', icon: Send }
    ]

    return <NavBar items={navItems} />
}
